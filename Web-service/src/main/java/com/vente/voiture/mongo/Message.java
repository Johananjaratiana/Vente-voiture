package com.vente.voiture.mongo;

import java.util.*;

import com.mongodb.MongoException;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Updates;
import com.mongodb.client.result.UpdateResult;
import com.vente.voiture.ws.security.user.Users;

import java.util.function.Consumer;
import org.bson.Document;
import org.bson.conversions.Bson;
import org.bson.types.ObjectId;

public class Message {

    public static Document GetMessageByTokenAndUser(Users users, Integer id_other_user)throws Exception
    {
        if(users.getId().intValue() == id_other_user.intValue())return null;
        try (MongoClient client = ClientConnection.GetMongoClient()) {
                MongoDatabase database = client.getDatabase("message_vente");
                MongoCollection<Document> collection = database.getCollection("messages");
                Document result = GetOrCreateDocumentByTokenAndUser(collection, users.getId().intValue(), id_other_user, false);
                return result;
        } catch (MongoException e) {
            e.printStackTrace();
            throw new Exception(e.getMessage());
        }
    }

    public static Document GetNotSeenMessage(Users users)
    {
        Document result = new Document();
        List<Object> not_seen_message = new ArrayList<>();

        try (MongoClient client = ClientConnection.GetMongoClient()) {
            MongoDatabase database = client.getDatabase("message_vente");
            MongoCollection<Document> collection = database.getCollection("messages");
            Consumer<Document> processBlock = new Consumer<Document>() {
                @Override
                public void accept(Document document) {
                    not_seen_message.add(document.get("sms"));
                    System.out.println(document);
                }
            };
            List<? extends Bson> pipeline = Arrays.asList(
                    new Document()
                            .append("$match", new Document()
                                    .append("identifiant", new Document()
                                            .append("$elemMatch", new Document()
                                                    .append("$eq", users.getId())
                                            )
                                    )
                            ), 
                    new Document()
                            .append("$unwind", "$sms"), 
                    new Document()
                            .append("$match", new Document()
                                    .append("sms.status", 0.0)
                            )
            );
            collection.aggregate(pipeline).forEach(processBlock);

            result.append("not-seen-message", not_seen_message);
        } catch (MongoException e) {
            e.printStackTrace();
        }
        return result;
    }

    public static String SaveMessageByTokenAndUser(Users users, ReceivedMessage receivedMessage){
        try (MongoClient client = ClientConnection.GetMongoClient()) {
            MongoDatabase database = client.getDatabase("message_vente");
            MongoCollection<Document> collection = database.getCollection("messages");

            Document new_sms = receivedMessage.BuildDocument(users);

            // Assuming you have the _id of the document you want to update
            Document document = GetOrCreateDocumentByTokenAndUser(collection, users.getId().intValue(), receivedMessage.getId_other_user(), true); 

            // Use $push to add the new message to the sms array
            Bson filter = Filters.eq("_id", document.getObjectId("_id"));
            Bson update = Updates.push("sms", new_sms);

            UpdateResult result = collection.updateOne(filter, update);

            if (result.getModifiedCount() > 0) {
                return "Message added to sms array successfully";
            } else {
                return "Failed to add message to sms array";
            }
        } catch (MongoException e) {
            e.printStackTrace();
            return "Failed to send message";
        }
    } 
    
    public static Document GetOrCreateDocumentByTokenAndUser(MongoCollection<Document> collection, Integer users_id, Integer other_user_id, Boolean canCreate) {
        List<Integer> identifiant = Arrays.asList(users_id, other_user_id);
        Bson filter = Filters.all("identifiant", identifiant);
        FindIterable<Document> documents = collection.find(filter);

        Document document;

        if (!documents.iterator().hasNext()) {
            if(canCreate == true){
                document = new Document("identifiant", identifiant).append("sms", new ArrayList<>());
                collection.insertOne(document);
            }
            else{
                document = new Document();
            }
        } else {
            document = documents.first();
        }

        return document;
    }
}

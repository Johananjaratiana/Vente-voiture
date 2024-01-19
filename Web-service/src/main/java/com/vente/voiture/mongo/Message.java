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

    public static List<Document> GetMessageByTokenAndUser(Users users, Integer id_other_user)
    {
        List<Document> result = new ArrayList<Document>();

        try (MongoClient client = ClientConnection.GetMongoClient()) {
                MongoDatabase database = client.getDatabase("message_vente");
                MongoCollection<Document> collection = database.getCollection("messages");
                Document query = new Document();
                query.append("identifiant", new Document()
                        .append("$all", Arrays.asList(
                                users.getId(),
                                id_other_user
                            )
                        )
                );
                Consumer<Document> processBlock = new Consumer<Document>() {
                    @Override
                    public void accept(Document document) {
                        result.add(document);
                        System.out.println(document);
                    }
                };
                collection.find(query).forEach(processBlock);
        } catch (MongoException e) {
            e.printStackTrace();
        }
        return result;
    }

    public static List<Document> GetNotSeenMessage(Users users)
    {
        List<Document> result = new ArrayList<Document>();

        try (MongoClient client = ClientConnection.GetMongoClient()) {
            MongoDatabase database = client.getDatabase("message_vente");
            MongoCollection<Document> collection = database.getCollection("messages");
            Consumer<Document> processBlock = new Consumer<Document>() {
                @Override
                public void accept(Document document) {
                        result.add(document);
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
        } catch (MongoException e) {
            e.printStackTrace();
        }
        return result;
    }

    public static String SaveMessageByTokenAndUser(Users users, ReceivedMessage receivedMessage){
        try (MongoClient client = ClientConnection.GetMongoClient()) {
            MongoDatabase database = client.getDatabase("message_vente");
            MongoCollection<Document> collection = database.getCollection("messages");

            Document messageDoc = receivedMessage.BuildDocument(users);

            // Assuming you have the _id of the document you want to update
            ObjectId docId = GetOrCreateDocIdByTokenAndUser(collection, users.getId().intValue(), receivedMessage.getId_other_user()); 

            // Use $push to add the new message to the sms array
            Bson filter = Filters.eq("_id", docId);
            Bson update = Updates.push("sms", messageDoc);

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
    
    public static ObjectId GetOrCreateDocIdByTokenAndUser(MongoCollection<Document> collection, Integer users_id, Integer other_user_id) {
        List<Integer> identifiant = Arrays.asList(users_id, other_user_id);
        Bson filter = Filters.all("identifiant", identifiant);
        FindIterable<Document> documents = collection.find(filter);

        Document document;
        if (!documents.iterator().hasNext()) {
            // Create a new document
            document = new Document("identifiant", identifiant).append("sms", new ArrayList<>());
            collection.insertOne(document);
        } else {
            document = documents.first();
        }

        return document.getObjectId("_id");
    }
}

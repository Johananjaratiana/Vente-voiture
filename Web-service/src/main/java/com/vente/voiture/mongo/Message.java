package com.vente.voiture.mongo;

import java.util.*;

import com.mongodb.MongoException;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import java.util.function.Consumer;
import org.bson.Document;
import org.bson.conversions.Bson;

public class Message {

    public static List<Document> GetMessageByTokenAndUser()
    {
        List<Document> result = new ArrayList<Document>();

        try (MongoClient client = Client.GetMongoClient()) {
                MongoDatabase database = client.getDatabase("message_vente");
                MongoCollection<Document> collection = database.getCollection("messages");
                Document query = new Document();
                query.append("identifiant", new Document()
                        .append("$all", Arrays.asList(
                                7.0,
                                2.0
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

    public static List<Document> GetNotSeenMessage(Integer user_id)
    {
        List<Document> result = new ArrayList<Document>();


        try (MongoClient client = Client.GetMongoClient()) {
            
            MongoDatabase database = client.getDatabase("message_vente");
            MongoCollection<Document> collection = database.getCollection("messages");
            
            // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/
            
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
                                                    .append("$eq", 2.0)
                                            )
                                    )
                            ), 
                    new Document()
                            .append("$unwind", "$messages"), 
                    new Document()
                            .append("$match", new Document()
                                    .append("messages.status", 0.0)
                            )
            );
            
            collection.aggregate(pipeline).forEach(processBlock);
            
        } catch (MongoException e) {
            e.printStackTrace();
        }
        return result;
    }
}

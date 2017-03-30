package com.example.restcontrollers;

import java.io.*;

import com.example.classes.User;
import com.fasterxml.jackson.core.*;
import com.fasterxml.jackson.databind.*;
import org.springframework.boot.jackson.*;

@JsonComponent
public class UserJsonSerialize {
	
	  public static class Serializer extends JsonSerializer<User> {
		  
//			[
//			{"field1":"a1", "field":"a2"},
//			{"field1":"b1", "field":"b2"}
//			]


		@Override
		public void serialize(User user, JsonGenerator jsonGenerator, SerializerProvider arg2)
				throws IOException, JsonProcessingException {
			// TODO Auto-generated method stub
			jsonGenerator.writeStartObject();
			jsonGenerator.writeNumberField("id_user", user.getId_user());
			jsonGenerator.writeStringField("name", user.getName());
			jsonGenerator.writeStringField("country", user.getCountry());
			jsonGenerator.writeStringField("city", user.getCity());
			jsonGenerator.writeStringField("email", user.getEmail());

//			jsonGenerator.writeArrayFieldStart("followers");
//			jsonGenerator.writeStartArray();
			for(User u : user.getFollowers()){
				jsonGenerator.writeFieldName("followers");
				jsonGenerator.writeStartObject(); 
				jsonGenerator.writeNumberField("id_user", u.getId_user());
				jsonGenerator.writeStringField("name", u.getName());
				jsonGenerator.writeStringField("country", u.getCountry());
				jsonGenerator.writeStringField("city", u.getCity());
				jsonGenerator.writeStringField("email", u.getEmail());
				jsonGenerator.writeEndObject(); 
			}
//			jsonGenerator.writeEndArray();
			jsonGenerator.writeEndObject(); 
			
			

			
		}
	        
		
		
		
		
	    }
	  
	  
}

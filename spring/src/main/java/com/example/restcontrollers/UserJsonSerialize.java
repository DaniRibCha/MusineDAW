package com.example.restcontrollers;

import java.io.*;

import com.example.classes.User;
import com.fasterxml.jackson.core.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.node.ArrayNode;

import org.springframework.boot.jackson.*;

@JsonComponent
public class UserJsonSerialize {

	public static class SerializerUserFollow extends JsonSerializer<User> {

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
			jsonGenerator.writeStringField("biography", user.getBiography());
			jsonGenerator.writeStringField("email", user.getEmail());
			//jsonGenerator.writeFieldName("followers");
			//jsonGenerator.writeObject(user.getFollowers());
			//jsonGenerator.writeFieldName("following");
			//jsonGenerator.writeObject(user.getFollowing());
			jsonGenerator.writeEndObject(); 


		}







	}
}

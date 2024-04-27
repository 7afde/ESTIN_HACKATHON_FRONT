package com.ecobin.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecobin.backend.MqttGateway;
import com.google.gson.Gson;
import com.google.gson.JsonObject;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class MqttController {

    @Autowired
    MqttGateway mqttGateway;

    @PostMapping("/postTrach")
    public ResponseEntity<?> publish(@RequestBody String mqttMessage) {

        try {
            JsonObject convertOject = new Gson().fromJson(mqttMessage, JsonObject.class);
            mqttGateway.sendToMqtt(convertOject.get("message").toString(), convertOject.get("topic").toString());
            return ResponseEntity.ok("Success");
        } catch (Exception ex) {
            ex.printStackTrace();
            return ResponseEntity.ok("fail");
        }
    }
}

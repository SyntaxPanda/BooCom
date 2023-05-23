package de.boocom.backend.service;

import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class GenerateId {

    public String generateId(){
        return UUID.randomUUID().toString();
    }
}

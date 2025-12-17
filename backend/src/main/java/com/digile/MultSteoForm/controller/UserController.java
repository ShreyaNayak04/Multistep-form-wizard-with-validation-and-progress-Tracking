package com.digile.MultSteoForm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.digile.MultSteoForm.entity.User;
import com.digile.MultSteoForm.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService service;
    
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(service.getAllUsers());
    }
    

    @PostMapping
    public ResponseEntity<User> save(@Valid @RequestBody User user) {
        return ResponseEntity.ok(service.saveUser(user));
    }
}


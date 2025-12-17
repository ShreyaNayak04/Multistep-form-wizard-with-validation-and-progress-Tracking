package com.digile.MultSteoForm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.digile.MultSteoForm.entity.User;
import com.digile.MultSteoForm.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public User saveUser(User user) {
        return repo.save(user);
    }

    public List<User> getAllUsers() {
        return repo.findAll();
    }
}


package com.example.voting.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.voting.entity.LoginRequest;
import com.example.voting.entity.User;
import com.example.voting.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;


    @PostMapping("/register")
public String register(@RequestBody User user) {

    Optional<User> existing = userRepository.findByEmail(user.getEmail());

    if(existing.isPresent()) {

        return "Email already exists";

    }

    // FIX: force role uppercase before saving
    user.setRole(user.getRole().trim().toUpperCase());

    userRepository.save(user);

    return "User Registered Successfully";

}



    @PostMapping("/login")
    public User login(@RequestBody LoginRequest request) {

        Optional<User> user = userRepository.findByEmail(request.getEmail());

        if(user.isPresent() &&
           user.get().getPassword().equals(request.getPassword())) {

            return user.get();

        }

        return null;

    }

}
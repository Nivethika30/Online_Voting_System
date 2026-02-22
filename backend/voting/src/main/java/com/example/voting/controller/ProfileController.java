package com.example.voting.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.voting.entity.User;
import com.example.voting.repository.UserRepository;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin(origins = "http://localhost:3000")
public class ProfileController {

    @Autowired
    private UserRepository userRepository;


    @GetMapping("/{email}")
    public User getProfile(@PathVariable String email) {

        Optional<User> user = userRepository.findByEmail(email);

        if(user.isPresent()) {

            return user.get();

        }

        return null;

    }

}
package com.digile.MultSteoForm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.digile.MultSteoForm.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}


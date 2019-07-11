package com.wenjie.maplemovie.repository;

import com.wenjie.maplemovie.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User,Long> {
    User findByEmail(String email);
    User findByUid(long uid);
}

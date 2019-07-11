package com.wenjie.maplemovie.repository;

import com.wenjie.maplemovie.entities.UserPrefer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserPreferRepository extends JpaRepository<UserPrefer,Long> {
    UserPrefer findByUid(long uid);
}

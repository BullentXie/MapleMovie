package com.wenjie.maplemovie.repository;

import com.wenjie.maplemovie.entities.UserRecommend;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRecommendRepository extends JpaRepository<UserRecommend,Long> {
    UserRecommend findByUid(long uid);
}

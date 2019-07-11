package com.wenjie.maplemovie.repository;

import com.wenjie.maplemovie.entities.MovieInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieInfoRepository extends JpaRepository<MovieInfo,Long> {
    MovieInfo findByMid(long mid);
}

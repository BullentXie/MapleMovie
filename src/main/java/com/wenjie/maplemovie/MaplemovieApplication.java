package com.wenjie.maplemovie;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@SpringBootApplication
public class MaplemovieApplication {
    @GetMapping(path="/index")
    public String index(){
        return "index";
    }
    public static void main(String[] args) {
        SpringApplication.run(MaplemovieApplication.class, args);
    }
}

package com.wenjie.maplemovie.controller;

import com.wenjie.maplemovie.entities.ErrorCodes;
import com.wenjie.maplemovie.entities.ErrorMessage;
import com.wenjie.maplemovie.entities.Message;
import com.wenjie.maplemovie.entities.User;
import com.wenjie.maplemovie.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class RegisterController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping(path = "/register")
    @ResponseBody
    public Message Register(@RequestBody User u){
        try{
            userRepository.save(u);
            User user = userRepository.findByEmail(u.getEmail());
            Message<Long> mes = new Message();
            mes.setRes(user.getUid());
            return mes;
        }
        catch (Exception e){
            ErrorMessage<String> mes = new ErrorMessage<>();
            if(e instanceof org.springframework.dao.DataIntegrityViolationException){
                mes.setError("此账号已经存在");
                mes.setCode(ErrorCodes.Field_CONFLICT);
                return mes;
            }

            mes.setRes("未知异常，请稍后重试");
            mes.setCode(ErrorCodes.UNKOWN_ERROR);
            return mes;
        }
    }

    @PostMapping(path = "/getuserinfo")
    @ResponseBody
    public Message GetUserInfo(@RequestBody User u){
        try{
            User iu = userRepository.findByUid(u.getUid());
            iu.setPassword("******");
            Message<User> mes = new Message();
            mes.setRes(iu);
            return mes;
        }
        catch (Exception e){
            Message<String> mes = new Message();
            mes.setRes("未知异常，请稍后重试");
            return mes;
        }
    }
}

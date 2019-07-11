package com.wenjie.maplemovie.controller;

import com.wenjie.maplemovie.entities.*;
import com.wenjie.maplemovie.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class LoginController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping(path = "/login")
    @ResponseBody
    public Message Login(@RequestBody User u){

        try{
            String email = u.getEmail();
            String password = u.getPassword();

            User user = userRepository.findByEmail(email);

            if(user.getPassword().equals(password)){
                Message<Long> res = new Message();
                res.setRes(user.getUid());
                return res;
            }
            else{
                ErrorMessage<String> mes = new ErrorMessage();
                mes.setError("密码错误");
                mes.setCode(ErrorCodes.NO_PASSWORD);
                return mes;
            }

        }
        catch (Exception e){
            if(e instanceof java.lang.NullPointerException){
                ErrorMessage<String> mes = new ErrorMessage();
                mes.setError("此邮箱还未注册");
                mes.setCode(ErrorCodes.NO_RECORDS);
                return mes;
            }
            System.out.println(e.getClass());
            ErrorMessage<String> mes = new ErrorMessage();
            mes.setError("未知错误");
            mes.setCode(ErrorCodes.UNKOWN_ERROR);
            return mes;
        }

    }
}

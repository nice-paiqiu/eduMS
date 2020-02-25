package com.nice.demo.model;

import lombok.Data;

@Data
public class Teacher {
    private int id;
    private String create_time;
    private String update_time;
    private String email;
    private String name;
    private String password;
    private String phone;
    private String qq;
    private String sex;
    private int status;
    private int type;
    private String wechat;
}

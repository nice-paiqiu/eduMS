package com.nice.demo.model;

import lombok.Data;

@Data
public class Classes {
    private int id;
    private String createtime;
    private String updatetime;
    private String name;
    private String opentime;
    private String stage;
    private int status;
    private int chargeteacherid;
    private int teachteacherid;
    private int visible;
}

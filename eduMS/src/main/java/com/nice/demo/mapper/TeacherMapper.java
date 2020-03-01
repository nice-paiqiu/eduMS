package com.nice.demo.mapper;

import com.nice.demo.model.Teacher;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface TeacherMapper {

    @Select("select * from t_seehope_teacher where id=#{id}")
    Teacher getTeacherByID(@Param("id") int teacherID);

//    获取教师列表和班主任列表
    @Select("select * from t_seehope_teacher where type=#{type}")
    List<Teacher> getTeacherByType(@Param("type")int i);
}

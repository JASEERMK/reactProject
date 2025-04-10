package com.jaseer.reactdemo.service;

import com.jaseer.reactdemo.model.Student;
import com.jaseer.reactdemo.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {

    @Autowired
    StudentRepository studentRepository;

    public Student saveStudent(Student student){
        return  studentRepository.save(student);
    }
    public List<Student> getAllStudent(){
        return dummyStudents();
        //return  studentRepository.findAll();
    }

    private List<Student> dummyStudents(){
        List<Student> list=new ArrayList<>();
        Student s1=new Student();
        s1.setId(1);
        s1.setName("Jaseer");
        s1.setAddress("Thootha");
        list.add(s1);

        Student s2=new Student();
        s2.setId(2);
        s2.setName("Jabir");
        s2.setAddress("Palakkad");
        list.add(s2);

        Student s3=new Student();
        s3.setId(3);
        s3.setName("Jadeer");
        s3.setAddress("Thootha");
        list.add(s3);

        return  list;

    }
}

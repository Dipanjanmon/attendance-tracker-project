package com.example.attendancetracker;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class AttendanceController {

    @GetMapping("/attendance")
    public String getAttendance(@RequestParam String roll) {
        String name = "Dipanjan Mondal";
        int total = 80;
        int attended = 58;
        double percentage = (attended * 100.0) / total;

        return "Name: " + name + "\nRoll No: " + roll + "\nAttendance: " + String.format("%.2f", percentage) + "%";
    }
}

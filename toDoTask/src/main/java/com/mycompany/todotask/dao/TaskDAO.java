/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.todotask.dao;

import com.mycompany.todotask.database.ConnectionSQL;
import com.mycompany.todotask.model.Task;
import java.util.List;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 *
 * @author Aluno
 */
public class TaskDAO {

    public static boolean registerTask(Task task) {
        String sql = "INSERT INTO tasks (title, description, deadline, status) VALUES (?, ?, ?, ?)";


        try (Connection conn = ConnectionSQL.conect(); PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, task.getTitle());
            stmt.setString(2, task.getDescription());
            stmt.setString(3, task.getDeadline());
            stmt.setString(4, task.getStatus());
            stmt.executeUpdate();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     *
     *
     */
    public static List<Task> listTasks() {

        List<Task> tasks = new ArrayList<>();
        String sql = "SELECT * FROM tasks";

        try (Connection conn = ConnectionSQL.conect(); PreparedStatement stmt = conn.prepareStatement(sql)) {

            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                Task task = new Task(rs.getString("title"), rs.getString("description"), rs.getString("deadline"), rs.getString("status")); 
                task.setId(rs.getInt("id"));
                tasks.add(task);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return tasks;
    }
    
    public static Task searchTask(int id) {
    String sql = "SELECT * FROM tasks WHERE id = ?";

    try (Connection conn = ConnectionSQL.conect(); 
         PreparedStatement stmt = conn.prepareStatement(sql)) {
        
        stmt.setInt(1, id);
        ResultSet rs = stmt.executeQuery();

        if (rs.next()) {
            Task task = new Task(rs.getString("title"), rs.getString("description"), rs.getString("deadline"), rs.getString("status"));
            task.setId(rs.getInt("id"));
            return task;
        }
    } catch (SQLException e) {
        e.printStackTrace();
    }
    return null;
}
    
    public static boolean changeStatus(int id, String newStatus) {
    String sql = "UPDATE tasks SET status = ? WHERE id = ? ";
    

    try (Connection conn = ConnectionSQL.conect(); 
         PreparedStatement stmt = conn.prepareStatement(sql)) {
        
                stmt.setString(1, newStatus);
        stmt.setInt(2, id);
        return stmt.executeUpdate() > 0;
    } catch (SQLException e) {
        e.printStackTrace();
        return false;
    }
    }
    
    public static boolean saveTask(int id, String newTitle, String newDescription, String newDeadline, String newStatus) {
    String sql = "UPDATE tasks SET title = ?, description=?, deadline = ?, status = ? WHERE id = ? ";
    

    try (Connection conn = ConnectionSQL.conect(); 
         PreparedStatement stmt = conn.prepareStatement(sql)) {
        
        stmt.setString(1, newTitle);
        stmt.setString(2, newDescription);
        stmt.setString(3, newDeadline);
        stmt.setString(4, newStatus);
        stmt.setInt(5, id);
        return stmt.executeUpdate() > 0;
    } catch (SQLException e) {
        e.printStackTrace();
        return false;
    }
}
public static boolean deletTask(int id) {
    String sql = "DELETE FROM tasks WHERE id = ?";

    try (Connection conn = ConnectionSQL.conect(); 
         PreparedStatement stmt = conn.prepareStatement(sql)) {
        
        stmt.setInt(1, id);
        return stmt.executeUpdate() > 0;
    } catch (SQLException e) {
        e.printStackTrace();
        return false;
    }
}


    
}

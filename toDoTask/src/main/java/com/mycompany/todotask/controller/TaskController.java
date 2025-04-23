/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.todotask.controller;

import com.mycompany.todotask.dao.TaskDAO;
import com.mycompany.todotask.model.Task;
import java.util.List;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author Aluno
 */
public class TaskController {

            

public static DefaultTableModel updateTable() {
        String[] column = {"ID", "Title", "Status"};
        List<Task> tasks = TaskDAO.listTasks();

        //criando modelo da tabela 
        DefaultTableModel model = new DefaultTableModel(column, 0);
        model.setRowCount(0);
        tasks.forEach(task->model.addRow(new Object[]{task.getId(), task.getTitle(), task.getStatus()}));
        return model;
    }
}

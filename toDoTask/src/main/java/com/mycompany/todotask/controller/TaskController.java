/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.todotask.controller;

import com.mycompany.todotask.dao.TaskDAO;
import com.mycompany.todotask.model.Task;
import java.awt.Color;
import java.awt.Component;
import java.util.List;
import javax.swing.JTable;
import javax.swing.table.DefaultTableCellRenderer;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author Aluno
 */
public class TaskController {

    public static DefaultTableModel createTable() {
        String[] column = {"ID", "Title", "Status"};
        List<Task> tasks = TaskDAO.listTasks();

        //criando modelo da tabela 
        DefaultTableModel model = new DefaultTableModel(column, 0);
        model.setRowCount(0);
        tasks.forEach(task -> model.addRow(new Object[]{task.getId(), task.getTitle(), task.getStatus()}));
        return model;
    }

    public static Task selectTaskById(JTable table) {

        //cria uma variavel com a coluna selecionada
        int selectLine = table.getSelectedRow();
        //pega o índice 0(id) da coluna selecionada e coloca numa variável id
        int id = (int) table.getValueAt(selectLine, 0);

//retorna a task selecionada
        return TaskDAO.searchTask(id);
    }

    public static void saveEditTask(int id, String title, String description, String deadline, String status) {

        TaskDAO.saveTask(id, title, description, deadline, status);

    }

    public static void deleteTask(int id){
        TaskDAO.deletTask(id);
    
    }
    
    public static void changeStatus(int id){
    TaskDAO.changeStatus(id, "complete");
    }
    
    
    
    
    
    
    
//Esse método serve para colorir a linha da tabela de verde com a condição de estar completa 
    public static void colorTable(JTable tableTask) {
        tableTask.setDefaultRenderer(Object.class, new DefaultTableCellRenderer() {
            @Override
            public Component getTableCellRendererComponent(JTable table, Object value,
                    boolean isSelected, boolean hasFocus, int row, int column) {

                Component c = super.getTableCellRendererComponent(table, value, isSelected, hasFocus, row, column);

                if (!isSelected) {
                    Object statusObj = table.getValueAt(row, 2); // Coluna "Status"
                    if (statusObj != null && "complete".equalsIgnoreCase(statusObj.toString().trim())) {
                        c.setBackground(new Color(200, 255, 200)); // verde claro
                    } else {
                        c.setBackground(Color.WHITE);
                    }
                } else {
                    c.setBackground(table.getSelectionBackground());
                }

                return c;
            }
        });
    }
}

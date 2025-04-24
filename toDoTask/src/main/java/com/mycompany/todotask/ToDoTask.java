/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.todotask;

import com.mycompany.todotask.dao.TaskDAO;
import com.mycompany.todotask.database.ConnectionSQL;
import com.mycompany.todotask.model.Task;

/**
 *
 * @author Aluno
 */
public class ToDoTask {

    public static void main(String[] args) {
        ConnectionSQL.conect();
        Task tarefinha= new Task("alalo", "alele","15.02.1990");
//        
        //TaskDAO.registerTask(tarefinha);
//        TaskDAO.registerTask(tarefinha);
//        TaskDAO.registerTask(tarefinha);
        TaskDAO.saveTask(1, "Crocodilo", "tralalero", "10/05/2002", "complete");
        //TaskDAO.deletTask(3);
    }
}

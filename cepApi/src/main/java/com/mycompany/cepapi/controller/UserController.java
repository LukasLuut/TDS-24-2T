/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.cepapi.controller;

import com.mycompany.cepapi.dao.UserDAO;
import com.mycompany.cepapi.model.User;

/**
 *
 * @author Aluno
 */
public class UserController {
    
    
     public static void registrarUser(String email, String senha){
        User user= new User(email, senha); 
    UserDAO.registrarUsuario(user);
    }
    
    
     public static void deletarUser(String email){
    UserDAO.excluirUsuario(email);
    }
    
    public static void atualizarSenha(String email, String novaSenha){
    UserDAO.atualizarSenha(email, novaSenha);
    }
    
    public static boolean validarLogin(String email, String senha){
     User user=new User(email, senha);
    return UserDAO.validarLogin(user);     
    }
    
    
}

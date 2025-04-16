/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.loginhash.controller;

import com.mycompany.loginhash.DAO.UsuarioDAO;
import com.mycompany.loginhash.model.Usuario;
import java.util.ArrayList;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author Aluno
 */
public class UsuarioController {
    
    private static UsuarioDAO usuarioDAO=new UsuarioDAO();
    public static boolean registrarUsuario(String email, char[] charSenha){
        
        String senha = new String(charSenha);
        
        Usuario usuario = new Usuario(email, senha);
        return usuarioDAO.registrarUsuario(usuario);
    
    };
    
    public static Usuario verificarUsuario(String email, char[] charSenha){
        String senha = new String (charSenha);
        Usuario usuario = new Usuario (email, senha);
              
        if(usuarioDAO.validarLogin(usuario)){
            return usuario;
        }else{
        
        return null;}
        
    
    }
    
    
    public static Usuario buscarUsuarioPorEmail(String email){
        
        return usuarioDAO.buscarUsuarioPorEmail(email);
    
    }
    
    public static void listarUsuarios(DefaultTableModel model){
        
        ArrayList<Usuario> usuarios =usuarioDAO.listarUsuarios();
        usuarios.forEach(user->model.addRow(new Object[]{user.getId(),user.getEmail()}));
    }
}

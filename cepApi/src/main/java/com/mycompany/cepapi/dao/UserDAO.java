/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.cepapi.dao;

import com.mycompany.cepapi.database.ConnectionSQL;
import com.mycompany.cepapi.model.Endereco;
import com.mycompany.cepapi.model.User;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.mindrot.jbcrypt.BCrypt;

/**
 *
 * @author Aluno
 */
public class UserDAO {
    public static boolean registrarUsuario(User usuario) {
    String sql = "INSERT INTO usuarios (email, senha) VALUES (?, ?)";
    String senhaHash = BCrypt.hashpw(usuario.getSenha(), BCrypt.gensalt());

    try (Connection conn = ConnectionSQL.conect(); 
         PreparedStatement stmt = conn.prepareStatement(sql)) {
        
        stmt.setString(1, usuario.getEmail());
        stmt.setString(2, senhaHash);
        stmt.executeUpdate();
        return true;
    } catch (SQLException e) {
        e.printStackTrace();
        return false;
    }
}
    
    public boolean validarLogin(User usuario) {
    String sql = "SELECT senha FROM usuarios WHERE email = ?";

    try (Connection conn = ConnectionSQL.conect(); 
         PreparedStatement stmt = conn.prepareStatement(sql)) {
        
        stmt.setString(1, usuario.getEmail());
        ResultSet rs = stmt.executeQuery();

        if (rs.next()) {
            String senhaHash = rs.getString("senha");
            return BCrypt.checkpw(usuario.getSenha(), senhaHash);
        }
    } catch (SQLException e) {
        e.printStackTrace();
    }
    return false;
}
   
    public User buscarUsuarioPorEmail(String email) {
    String sql = "SELECT * FROM usuarios WHERE email = ?";

    try (Connection conn = ConnectionSQL.conect(); 
         PreparedStatement stmt = conn.prepareStatement(sql)) {
        
        stmt.setString(1, email);
        ResultSet rs = stmt.executeQuery();

        if (rs.next()) {
            User usuario = new User(rs.getString("email"), rs.getString("senha"));
            return usuario;
        }
    } catch (SQLException e) {
        e.printStackTrace();
    }
    return null;
}
    public static boolean registrarEndereco(Endereco endereco, String email){
         String sql = "UPDATE usuarios SET rua = ?, bairro = ?, cidade = ?, estado = ? WHERE email = ?";
    

    try (Connection conn = ConnectionSQL.conect(); 
         PreparedStatement stmt = conn.prepareStatement(sql)) {
        
        stmt.setString(1, endereco.getRua());
        stmt.setString(2, endereco.getBairro());
        stmt.setString(3, endereco.getCidade());
        stmt.setString(4, endereco.getEstado());
        stmt.setString(5, email);
        return stmt.executeUpdate() > 0;
    } catch (SQLException e) {
        e.printStackTrace();
        return false;
    }
    
    }
    
    public static boolean atualizarSenha(String email, String novaSenha) {
    String sql = "UPDATE usuarios SET senha = ? WHERE email = ?";
    String senhaHash = BCrypt.hashpw(novaSenha, BCrypt.gensalt());

    try (Connection conn = ConnectionSQL.conect(); 
         PreparedStatement stmt = conn.prepareStatement(sql)) {
        
        stmt.setString(1, senhaHash);
        stmt.setString(2, email);
        return stmt.executeUpdate() > 0;
    } catch (SQLException e) {
        e.printStackTrace();
        return false;
    }
}
    public static boolean excluirUsuario(String email) {
    String sql = "DELETE FROM usuarios WHERE email = ?";

    try (Connection conn = ConnectionSQL.conect(); 
         PreparedStatement stmt = conn.prepareStatement(sql)) {
        
        stmt.setString(1, email);
        return stmt.executeUpdate() > 0;
    } catch (SQLException e) {
        e.printStackTrace();
        return false;
    }
}
    
}

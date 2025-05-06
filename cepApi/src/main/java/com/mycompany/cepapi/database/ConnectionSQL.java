/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.cepapi.database;

import io.github.cdimascio.dotenv.Dotenv;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Connection;

/**
 *
 * @author Aluno
 */
public class ConnectionSQL {
      // Carrega as variáveis do arquivo .env
    private static final Dotenv dotenv = Dotenv.load();

    private static Connection connection;

    // Variáveis de conexão
    private static final String URL = dotenv.get("DB_URL");
    private static final String DB_USER = dotenv.get("DB_USER");
    private static final String DB_PASSWORD = dotenv.get("DB_PASSWORD");

    // Conecta ao banco de dados
    public static Connection conect() {
        try {
            // Se ainda não houver conexão, cria uma nova
            if (connection == null || connection.isClosed()) {
                connection = DriverManager.getConnection(URL, DB_USER, DB_PASSWORD);
                criarTabela();
                System.out.println("Conectado ao banco.");
            }
        } catch (SQLException error) {
            throw new RuntimeException("Erro na conexão com o banco de dados", error);
        }

        return connection;
    }

    // Cria a tabela de usuários se ela não existir
    private static void criarTabela() {
        String sql = "CREATE TABLE IF NOT EXISTS usuarios ("
                + "id INT AUTO_INCREMENT PRIMARY KEY, "
                + "email VARCHAR(255) NOT NULL UNIQUE, "
                + "senha VARCHAR(255) NOT NULL, "
                + "CEP VARCHAR(10), "
                + "rua VARCHAR(255), "
                + "bairro VARCHAR(255), "
                + "cidade VARCHAR(255), "
                + "estado VARCHAR(255))";
        try (Statement stmt = connection.createStatement()) {
            stmt.execute(sql);
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao criar a tabela", e);
        }
    }
    
}

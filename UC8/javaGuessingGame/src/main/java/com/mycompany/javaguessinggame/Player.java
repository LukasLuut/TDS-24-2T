/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.javaguessinggame;

import java.util.Scanner;

/**
 *
 * @author Aluno
 */
public class Player {
    
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    public Player(){
    Scanner scanner = new Scanner(System.in);
    System.out.print("Digite seu nome: ");
    this.name=scanner.nextLine();
    };
    
    
    
    
}

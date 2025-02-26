/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.rpsgame;
import java.util.Scanner;
/**
 *
 * @author Aluno
 */
public class Player {
    private String name;
    private int escPlayer;
    Scanner sc = new Scanner(System.in);;
     
    public Player(){
     
     System.out.println("Digite seu nome:");
     name = sc.nextLine();
        
     System.out.println(this.name+" escolha entre:\n[1]Pedra \n[2]Papel \n[3]Tesoura \n[4]Lagarto \n[5]Spock");
        escPlayer = sc.nextInt();
    
    }
    
    
    public int getEscPlayer() {
        return escPlayer;
    }

    public String getName() {
        return name;
    }
    
    
}

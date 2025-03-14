/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.rpsgame;

/**
 *
 * @author Aluno
 */
public class Validator {
  
   //ele deve pegar a escolha do NPC e a escolhado Player e comparar 
    
 private int escPlayer;
 private int escNpc;
    
 public Validator(int valor1, int valor2){ 
 escPlayer=valor1;
 escNpc=valor2; 
 };
 
 
 
 
 
 
 
 public void mensagem(){
 System.out.println("Escolha do jogador: "+escPlayer +"\nEscolha do NPC: " + escNpc);
 }
    
    
}



       
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
  
    private final int npc=(int) (Math.random()*3)+1;
     public String npcString;
        
    public String escNpc(){
 
    switch(npc){
        case 1 -> {  
            npcString="O NPC escolheu Pedra";
            return npcString;
            }
        case 2 -> {
            npcString="O NPC escolheu Papel";
            return npcString;
            }
            
        case 3 -> {
            npcString="O NPC escolheu Tesoura";
            return npcString;
            }
            
        default -> {
            npcString="ERRO DEFAULT";
            return npcString;
            }
    }
    
    }
}



       
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.rpsgame;

/**
 *
 * @author Aluno
 */
public class VitorNPC {
     private final int npc=(int) (Math.random()*5)+1;

    public int getEscNpc() {
        return npc;
    }
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
        case 4 -> {
            npcString="O NPC escolheu Lagarto";
            return npcString;
            }
        case 5 -> {
            npcString="O NPC escolheu Spock";
            return npcString;
            }
        default -> {
            npcString="ERRO DEFAULT";
            return npcString;
            }
    }
    
    
    
    }
    
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.rpsgame;

/**
 *
 * @author Aluno
 */
public class RpsGame {

    public static void main(String[] args) {
       
        
       VitorNPC npc=new VitorNPC();
       System.out.println(npc.escNpc());
       
       Player arthur = new Player();
       
       Validator comparador=new Validator(npc.getEscNpc(), arthur.getEscPlayer());
       
       comparador.mensagem();
       
    }
    
    
    
}

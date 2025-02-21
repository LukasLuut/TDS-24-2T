/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.trabalhandocominterfaces;

/**
 *
 * @author Aluno
 */
public class Violao implements InstrumentoMusical {

    @Override
    public void tocar() {
        System.out.println("Blemblemblem");
        }

    @Override
    public void afinar() {
         System.out.println("Violão afinado");
        }
    
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pokemonproject;

/**
 *
 * @author Aluno
 */
public class Pokemon {
    private String name;
    private String type;
    private int nivel;
    
    public Pokemon(String name, String type, int nivel){
    this.name=name;
    this.type=type;
    this.nivel=nivel;
    }
    
    public String getName(){
    return this.name;
    }
    
    public String getType(){
    return "Tipo: "+this.type;
    }
    
    public String getNivel(){
        return "Nível "+this.nivel;
    }
    
    public String showInf(){
     System.out.println("Nome: " + name + ", Tipo: " + type + ", Nível: " + nivel);
        return null;
    }
    
}

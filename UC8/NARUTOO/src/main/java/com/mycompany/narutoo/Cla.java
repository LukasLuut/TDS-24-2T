/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.narutoo;

/**
 *
 * @author Aluno
 */
public abstract class Cla {
    protected String nomeDoCla;
    protected String lider;
    
    public Cla(String nomeDoCla, String lider){
        this.nomeDoCla=nomeDoCla;
        this.lider=lider;
    
    }
    
    public abstract void habilidadeEspecial();
    public void exibirDetalhes(){
    System.out.println("O clã "+this.nomeDoCla+" tem como lider: "+this.lider);     
    };
    
}

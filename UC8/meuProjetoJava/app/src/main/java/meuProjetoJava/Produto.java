/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package meuProjetoJava;

/**
 *
 * @author Aluno
 */
public class Produto {
   private String nome;
    private double preco;
    
    public Produto(String nome, double preco){
        this.nome=nome;
        this.preco=preco;
    }
    
    public String getName(){
    return this.nome;
    }
    
    public double getPreco(){
    return this.preco;
    }
    
    
    
}

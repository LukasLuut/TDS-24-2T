/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package meuProjetoJava;

/**
 *
 * @author Aluno
 */
public class Pessoa {
    String nome;
    int idade;
    
    //O construtor em JAVA, é um método que não tem retorno e tem o mesmo nome da classe
    public Pessoa(String nome, int idade){
    this.idade=idade;
    this.nome=nome;
    }
    
    public void caminhar(){
    System.out.println(nome+" está caminhando");
    }
}

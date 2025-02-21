/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.exerciciopagamento;

/**
 *
 * @author Aluno
 */
public class Paypal implements Pagamento {
    
private String email="luutlukas@eu.com";
    

    
public String getEmail() {
        return email;
    }

    @Override
    public void processarPagamento(double valor) {
        System.out.println( "Pagamento de R$"+valor+" valor processado via Paypal");
        }

    @Override
    public String obterDetalhes() {
        System.out.println("Email associado: "+this.getEmail());
    return null;
        }
    
}

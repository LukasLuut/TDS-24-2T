/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.exerciciopagamento;

/**
 *
 * @author Aluno
 */
public class CartaoCredito implements Pagamento {
    
    String numeroCartao="0123214566547899";
    int codigoSeguranca;
    

    @Override
    public void processarPagamento(double valor) {
        System.out.println( "Pagamento de R$"+valor+" valor processado via Cartão de Crédito");
         }

    @Override
    public String obterDetalhes() {
        System.out.println("Final do cartão: "+numeroCartao.substring(numeroCartao.length() - 4));
        return null;
        };
    
}

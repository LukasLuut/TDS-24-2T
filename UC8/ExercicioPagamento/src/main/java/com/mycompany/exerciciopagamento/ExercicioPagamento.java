/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.exerciciopagamento;

/**
 *
 * @author Aluno
 */
public class ExercicioPagamento {

    public static void main(String[] args) {
        CartaoCredito masterCard=new CartaoCredito();
        Paypal pagOnline=new Paypal();
        
        masterCard.processarPagamento(9300);
        masterCard.obterDetalhes();
        
        pagOnline.processarPagamento(12280);
        pagOnline.obterDetalhes();
    }
}

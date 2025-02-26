/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package guessingGame;
import java.util.Scanner;
/**
 *
 * @author Aluno
 */
public class Player {
    private String nome;

    public Player(){
         Scanner sc = new Scanner(System.in);
          System.out.println("Digite seu nome: ");
          this.nome=sc.nextLine();
    }
    
    public String getName(){
    return this.nome;
    }

    
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package guessingGame;

/**
 *
 * @author Aluno
 */
public class Game {
    private int numberToGuess;//Armazena um n�mero aleatorio gerado pelo sistema
    public Game(){
    this.numberToGuess=(int)(Math.random()*100)+1;
    }
    public void start(){};
    
}

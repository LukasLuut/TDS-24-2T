/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.javaguessinggame;

import java.util.Scanner;

/**
 *
 * @author Aluno
 */
public class Game {
    private int numberToGuess;
    private Player user;
    private GuessValidator guessValidator;
    private Scanner scanner;
    
    
    public Game(){
    this.numberToGuess=(int) (Math.random()*100)+1;
    this.user =new Player();
    this.guessValidator=new GuessValidator();
    this.scanner=new Scanner(System.in);
    };
    
    public void start(){
    
        System.out.println("Bem-vindo(a) ao Guessing Game "+user.getName()+" !");
        boolean hasWon=false;
        
        while(!hasWon){
            System.out.println("Digite seu palpite: ");
            int guess = scanner.nextInt();
            hasWon=guessValidator.validateGuess(guess, numberToGuess);
        }
    System.out.println("Parabéns, "+user.getName()+" você acertou o numerinho!");
    };
    
}

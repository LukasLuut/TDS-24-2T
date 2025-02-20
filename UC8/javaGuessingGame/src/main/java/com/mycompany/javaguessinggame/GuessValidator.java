/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.javaguessinggame;

/**
 *
 * @author Aluno
 */
public class GuessValidator {
    public boolean validateGuess( int guess, int numberToGuess){
        if(guess>numberToGuess){
            System.out.println("Seu palpite é muito alto ananá");
            return false;
        }else if(guess<numberToGuess){
            System.out.println("Seu palpite é muito baixo josnel");
            return false;
        }else{
        return true;
        }
    }
    
}

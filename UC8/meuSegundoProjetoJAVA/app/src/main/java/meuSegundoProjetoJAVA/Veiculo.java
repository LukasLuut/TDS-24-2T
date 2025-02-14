/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package meuSegundoProjetoJAVA;

/**
 *
 * @author Aluno
 */
public class Veiculo {

    //ATRIBUTOS
    private int numeroDeRodas;
    private String marca;
    private double peso;
    
    
    //O construtor, em Hava, é um METODO que NÃO TEM RETORNO e TEM O MESMO NOME DA CLASSE
    public Veiculo(int rodas, String marca, double peso){
    numeroDeRodas=rodas;
    this.marca=marca;
    this.peso=peso;
    }
    
    public void andar(){
    
          System.out.println("O veículo de marca "+ marca+ " está andando");
    }

    public String getMarca(){
    return this.marca;
    }
    
    public void setMarca(String novaMarca){
    this.marca=novaMarca;
    }
    
    
    
}

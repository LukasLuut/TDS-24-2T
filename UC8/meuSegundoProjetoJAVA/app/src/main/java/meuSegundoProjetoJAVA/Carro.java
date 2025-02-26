/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package meuSegundoProjetoJAVA;

/**
 *
 * @author Aluno
 */
public class Carro extends Veiculo {
   
    int qtdPortas;
    
    public Carro(String marca, double peso, int qtdPortas){
        
        super(4, marca, peso);
        this.qtdPortas=qtdPortas;
        
    }
    
    public void cavalinhoDePau(){
          System.out.println("BREK--IIIHHHHHRRRRRRR");
    }
    
    
    @Override  //SOBREESCRITA DE CÓD. esse método foi criado na classe pai e foi modificada
    public void andar(){
      System.out.println("O carro de marca "+this.getMarca()+" está andando");
    }
}

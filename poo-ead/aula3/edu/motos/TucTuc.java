package edu.motos;
import edu.carros.Carro;

public class TucTuc extends Carro {

    public TucTuc() { 
        super();
        System.out.println("Criando um Tuc Tuc");
    }

    public void definir() { 
        this.marca = "Propria";
        this.velocidade = 0;
        this.modelo = "Modelo Proprio";
    }
}

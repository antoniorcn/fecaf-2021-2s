package com.fecaf;

public class Carro {

    private BlocoMotor bloco = new BlocoMotor(); // Composição
    public Pneu pneu = new Pneu(); // Agregacao

    public void acelerar() { 
        System.out.println("Acelerando");
    }
    
}

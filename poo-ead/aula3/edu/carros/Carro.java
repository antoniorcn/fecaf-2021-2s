package edu.carros;

public class Carro { 

    protected int velocidade;
    protected String marca;
    protected String modelo;

    public Carro() { 
        super();
        System.out.println("Criando um Carro");
    }

    // public Carro() { 
    //     super();
    // }

    private void acelerar() { 
        int a = 0;
        this.velocidade = 20;
        System.out.println("Acelerando");
    }

    public void frear() {
        this.velocidade = 0;
        System.out.println("Freando");
    }


}
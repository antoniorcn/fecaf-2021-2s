package edu.motos;

public class Triciclo {

    private int velocidade = 1;
    private String marca;
    private String modelo;

    public Triciclo() { 
        System.out.println("Criando um triciclo");
    }

    public int getVelocidade() { 
        return this.velocidade;
    }

    public void setVelocidade(int valor) { 
        if (valor >= 0) { 
            this.velocidade = valor;
        }
    }

    public void acelerar() { 

    }

    public void frear() { 

    }
   
}

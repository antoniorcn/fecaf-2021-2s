package edu.curso;

public class Pessoa {

    long id;
    String nome;
    String cpf;
    String genero;

    private Perna pernaDireita = new Perna();     // Composição
    private Perna pernaEsquerda = new Perna();    // Composição

    Celular celular = new Celular();              // Agregação


    public void dormir() { 
        System.out.println("Dormindo");
    }

    public void comer() { 
        System.out.println("Comendo");
    }
   
}

package edu.curso;

public class Principal {
    public static void main(String[] args) {
        GestaoAlunos gestao = new GestaoAlunos();

        while(true) {
            gestao.menu();
        }
    }
}

package edu.curso;

public class Teste {
    public static void main(String[] args) {
        
        Celular motog = new Celular();
        Celular lgk10 = new Celular();
        
        Pessoa joao = new Pessoa();
        Pessoa maria = new Pessoa();

        joao.celular = motog;
        maria.celular = lgk10;

        joao.celular = null;
        maria.celular = motog;
        maria.dormir();
        maria.comer();

        Aluno mario = new Aluno();
        mario.nome = "Mario Silva";
        // mario.estudar();
        // mario.dormir();
        // mario.comer();
        // mario.estudar();
        mario.id = 0;

    }
}

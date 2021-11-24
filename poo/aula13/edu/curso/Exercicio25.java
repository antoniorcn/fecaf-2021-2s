package edu.curso;

public class Exercicio25 { 

    public static void main(String[] args) {
        Arma a1 = new Arma();
        a1.tipo = "pistola";
        a1.calibre = 0.38;
        a1.recarregar();
        a1.atirar();

        Arma a2 = new Arma();
        a2.tipo = "metralhadora";
        a2.calibre = 0.9;
        a2.recarregar();
        a2.atirar();
        

        Player p1 = new Player();
        p1.nome = "Joao Silva";
        p1.colete = false;
        p1.vestimenta = "Uniforme verde";
        p1.armaDireita = a1;
        p1.comer();
        p1.levarTiro();
        p1.atirar();
        p1.correr();
        p1.agachar();
        p1.atirar();
        p1.ficarDePe();
        p1.atirar();

    }

}
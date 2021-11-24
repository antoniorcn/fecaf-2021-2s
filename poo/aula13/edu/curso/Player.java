package edu.curso;

public class Player {
    String nome;
    int vida;
    String vestimenta;
    String equipamentos;
    boolean colete;
    Arma armaDireita;
    int estamina;
    boolean podeAtirar = true;

    public void correr() { 
        System.out.println("Correndo...");
        estamina -= 1;
        podeAtirar = false;
    }
    
    public void agachar() { 
        System.out.println("Agachando ...");
        estamina += 1;
        podeAtirar = false;
    }

    public void atirar() { 
        if (podeAtirar == true) { 
            System.out.println("Atirando no inimigo");
            armaDireita.atirar();
            estamina -= 1;
        } else { 
            System.out.println("Você não pode atirar agora");
        }
    }

    public void levarTiro() { 
        System.out.println("Ooppps levei um tiro");
        if (colete == true) { 
            vida -= 10;
            podeAtirar = false;
        } else { 
            System.out.println("Ahhhhh !!!");
            System.out.println("Você morreu");
        }
    }

    public void ficarDePe() { 
        podeAtirar = true;
    }

    public void comer() { 
        vida = 100;
        estamina = 20;
    }
}

package edu.curso;

import javax.annotation.processing.SupportedOptions;

public class Arma {

    double calibre;
    int municao;
    String tipo;
    boolean scope;

    public void atirar() { 
        if ("metralhadora".equals(tipo)) { 
            System.out.println("Ra ta ta ta...");
        } else if ("bazuca".equals(tipo)) {
            System.out.println("Boooomm !!!");
        } else { 
            System.out.println("Bang !!!");
        }

        municao = municao - 1;
    }

    public void recarregar() { 
        System.out.println("Arma recarregada");
        municao = 6;
    }

    public void colocarScope() { 
        System.out.println("Scope adicionado a arma");
        scope = true;
    }

    public void retirarScope() { 
        System.out.println("Scope retirado da arma");
        scope = false;
    }
    
}

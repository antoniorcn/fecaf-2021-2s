package com.fecaf;

public class Mecanico {

    public void consertar() { 

        Carro c = new Carro();
        
        c.pneu = new Pneu();
        //c.bloco = new BlocoMotor();

        Pneu p1 = c.pneu;
        //BlocoMotor b1 = c.bloco;
        c = null;
    }
    
}

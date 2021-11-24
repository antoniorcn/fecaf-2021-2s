package edu.curso;

public class Empresa {

    public static void main(String[] args) throws Exception {
        GestorChamado gestor = new GestorChamado();
        while( gestor.menu() == true ) {
            System.out.print("\033[H\033[2J");   
            System.out.flush();        
        }
    } 
}

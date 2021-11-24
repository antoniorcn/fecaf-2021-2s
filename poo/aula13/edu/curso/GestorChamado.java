package edu.curso;

import java.util.Scanner;

public class GestorChamado {

    Scanner scan = new Scanner(System.in);
    Chamado[] chamados = new Chamado[100];
    int indice = 0;

    public void cadastrar() { 
        System.out.println("Cadastrar novo chamado no sistema\n\n");
        Chamado c = new Chamado();

        System.out.println("Informe para qual fila vai este chamado");
        c.fila = scan.nextLine();
        System.out.println("Descreva um pouco sobre o chamado");
        c.descricao = scan.nextLine();
        System.out.println("Informe a prioridade do chamado");
        c.importancia = scan.nextInt();
        scan.nextLine();
        chamados[indice] = c;

        System.out.println("Chamado cadastrado com o numero: " + indice);
        indice = indice + 1;

        System.out.println("Tecle <ENTER> para prosseguir");
        scan.nextLine();
    }

    public void pesquisarPorFila() { 
        System.out.println("Pesquisar por fila \n\n");
        System.out.println("Informe o nome da fila para ver os chamados");
        String fila = scan.nextLine();
        for (int i = 0; i < chamados.length; i++) { 
            Chamado c = chamados[i];
            if (c != null && c.fila.equals(fila)) { 
                System.out.println("Chamado: " + i);
                System.out.println("Fila: " + c.fila);
                System.out.println("Prioridade: " + c.importancia);
                System.out.println("Descricao: " + c.descricao);
                System.out.println("\n\n");

            }
        }

        System.out.println("Tecle <ENTER> para prosseguir");
        scan.nextLine();
    }

    public boolean menu() { 
        System.out.println("\n\nSistema de Gestão de Chamados\n\n");
        System.out.println("(C)adastrar");
        System.out.println("(P)esquisar chamados da fila");
        System.out.println("(S)air");
        System.out.println("Escolha a opção (C, P ou S)");
        String opcao = scan.nextLine();

        // if (opcao.charAt(0) == 'C') { 
        if ("C".equals(opcao)) {
            cadastrar();
        } else if ("P".equals(opcao)) { 
            pesquisarPorFila();
        } else if ("S".equals(opcao)) {
            return false;
        }
        return true;
    }
    
}

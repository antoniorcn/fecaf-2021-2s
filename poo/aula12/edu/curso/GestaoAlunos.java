package edu.curso;

import java.util.Scanner;

public class GestaoAlunos {

    Scanner scan = new Scanner(System.in);
    Aluno alunos[] = new Aluno[5];
    int indice = 0;

    public void cadastrar() { 
        System.out.println("Cadastrar invocado");
        Aluno a = new Aluno();
        
        System.out.println("Digite o nome do aluno: ");
        a.nome = scan.nextLine();
        System.out.println("Digite o RA do aluno: ");
        a.ra = scan.nextLine();
        System.out.println("Digite o id do aluno: ");
        a.id = scan.nextLong();

        alunos[indice] = a;
        indice = indice + 1;
    }


    public void pesquisar() { 
        System.out.println("Pesquisar invocado");
        System.out.println("Digite o nome do aluno");
        String nome = scan.nextLine();
        for (int i = 0; i < alunos.length; i++) { 
            Aluno a = alunos[i];
            if (a != null) { 
                if (a.nome.equals(nome)) { 
                    System.out.println("Aluno encontrado");
                    System.out.println("Nome ==> " + a.nome);
                    System.out.println("id ==> " + a.id);
                    System.out.println("Ra ==> " + a.ra);
                }
            }
        }
    }


    public void menu() { 
        System.out.println("Gestão de Alunos");
        System.out.println("(C)adastrar novo aluno");
        System.out.println("(P)esquisar aluno");
        System.out.println("(X)Sair do programa");

        System.out.println("Por favor indique sua opção: ");
        String opcao = scan.nextLine();

        if (opcao.equals("C")) { 
            cadastrar();
        } else if (opcao.equals("P")) { 
            pesquisar();
        } else if (opcao.equals("X")) { 
            System.exit(0);
        }
    }
    
}

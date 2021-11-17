package edu.curso;

import java.util.Scanner;

public class RegistroAlunos {

    public static void main(String[] args) {
        Aluno alunos[] = new Aluno[5];
        //     0     1      2       3      4
        //  |  a  | null | null | null | null |
        //

        Scanner scan = new Scanner(System.in);
        int indice = 0;
        boolean cadastrar = true;
        while (cadastrar == true) { 

            Aluno a = new Aluno();
        
            System.out.println("Digite o nome do aluno: ");
            a.nome = scan.nextLine();
            System.out.println("Digite o RA do aluno: ");
            a.ra = scan.nextLine();
            System.out.println("Digite o id do aluno: ");
            a.id = scan.nextLong();
            
            alunos[indice] = a;
            indice = indice + 1;
            scan.nextLine();
            System.out.println("Deseja cadastrar mais um aluno (S/N)");
            String resposta = scan.nextLine();
            if (resposta.equals("S")) { 
                cadastrar = true;
            } else {
                cadastrar = false;
            }
        }
        scan.close();
        System.out.println("Fim do programa");
    }
    
    
}

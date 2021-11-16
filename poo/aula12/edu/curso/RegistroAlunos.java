package edu.curso;

public class RegistroAlunos {

    public static void main(String[] args) {
        Aluno alunos[] = new Aluno[5];
        //     0     1      2       3      4
        //  |  a  | null | null | null | null |
        //

        Aluno a = new Aluno();
        a.id = 1;
        a.nome = "João Silva";
        a.ra = "00001";
        alunos[0] = a;

        
        
    }
    
    
}

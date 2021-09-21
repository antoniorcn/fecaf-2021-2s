public class Escola {

    // public Escola() { 

    // }

    public void verificar(Pessoa a) { 
        System.out.println("Aluno autorizado");
    }

    public static void main(String[] args) { 
        Aluno a1 = new Aluno("Joao Silva", "111.111.111-11", "111111", 18);
        // a1.nome = "Joao Silva";
        // a1.rg = "111111";
        // a1.cpf = "111.111.111-11";
        // a1.idade = 18;


        Aluno a2 = new Aluno();
        a2.nome = "Maria Silva";
        a2.rg = "222222";
        a2.cpf = "222.222.222-22";
        a2.idade = 19;


    }
}
;
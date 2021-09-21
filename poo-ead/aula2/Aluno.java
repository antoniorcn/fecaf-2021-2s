public class Aluno extends Pessoa {
    public String ra;

    public Aluno() {  
    }

    public Aluno(String nome, String cpf, String rg, int idade) { 
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.idade = idade;
    }
}

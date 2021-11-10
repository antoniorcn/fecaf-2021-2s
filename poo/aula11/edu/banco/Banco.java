package edu.banco;

public class Banco {

    public static void main(String[] args) {
        ContaBancaria c1 = new ContaBancaria();
        c1.saldo = 1000.0;
        c1.cpf = "111.111.111-11";
        c1.limite = 500.0;
        System.out.println("Dados da conta C1");
        c1.mostrarDados();

        ContaBancaria c2 = new ContaBancaria();
        c2.saldo = 1000000.0;
        c2.cpf = "856.748.529-85";
        // c2.limite = 100000.0;

        c1.sacar(100);
        c1.sacar(50);
        c1.depositar(90);

        c2.sacar(300000);

        System.out.println("Dados da conta C2");
        c2.mostrarDados();
    }
    
}

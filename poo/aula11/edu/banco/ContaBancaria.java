package edu.banco;

public class ContaBancaria {

    public String agencia;
    public String cpf;
    public String numeroConta;
    public double limite;
    public double saldo;

    public double sacar(double quantia) {
        // int a = 10;
        System.out.println("Saldo anterior ==>" + saldo);
        saldo = saldo - quantia;
        System.out.println("Saque de ==>" + quantia); 
        System.out.println("Saldo atual ==>" + saldo);
        // System.out.println(a);
        return(saldo);
    }

    public void depositar(double quantia) { 
        
        System.out.println("Saldo anterior ==>" + saldo);
        saldo = saldo + quantia;
        System.out.println("Deposito de ==>" + quantia); 
        System.out.println("Saldo atual ==>" + saldo);
    }

    public void mostrarDados() { 
        System.out.println("Agencia: " + agencia);
        System.out.println("Conta Corrente: " + numeroConta);
        System.out.println("CPF: " + cpf);
        System.out.println("Saldo: " + saldo);
        System.out.println("Limite: " + limite);
    }
    
}

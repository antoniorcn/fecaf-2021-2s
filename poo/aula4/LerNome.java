import java.util.Scanner;

public class LerNome { 
	public static void main(String[] args) { 
		// Scanner entrada;
		// entrada = new Scanner(System.in);
		Scanner entrada = new Scanner(System.in);
		
		System.out.println("Digite seu nome: ");
		String digitado = entrada.nextLine();
		
		System.out.println("Ola " + digitado + " seja bem vindo");

		entrada.close();
	}
}
import java.util.Scanner;

public class SomaNumeros { 
	public static void main(String[] args) { 
		System.out.println("### Programa que soma numeros ###");	
		
		Scanner input = new Scanner(System.in);

		System.out.println("Por favor digite um numero");
		int numero1 = input.nextInt();
		
		System.out.println("Por favor digite outro numero");
		int numero2 = input.nextInt();

		int soma = numero1 + numero2;

		System.out.println("A soma dos numeros e: " + soma);		

		input.close();
	}
}
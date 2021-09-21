import java.util.Scanner;
public class AreaCirculo { 
	final static double PI = 3.1415926;  // Constante

	public static void main(String args[]) { 
		Scanner input = new Scanner(System.in);	
		System.out.println("Calculadora de area de circulo");
		System.out.println("Digite o raio do circulo");
		double raio = input.nextDouble();
		// double PI = 3.1415926;
		double area = Math.pow(raio, 2) * PI;
		// double area = raio * raio * Math.PI;
		// Math.sqrt(raio) ==> Raiz Quadrada (Square Root)
		// Math.pow(base, expoente) ==> Potenciação 
		// Math.pow(5, 2) ==> 5² => 25
		// X² => Base X e expoente 2 
	
		System.out.println("Area do circulo ==> " + area);
			
		input.close();
	}
}
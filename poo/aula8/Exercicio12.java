
import java.util.Scanner;

public class Exercicio12 {
    
    public static double area(double raio) { 
        double PI = 3.14159;
        // double r = Math.PI * Math.pow(raio, 2);
        double r = Math.PI * raio * raio;
        return r;
    }

    public static double volume(double a, double h) { 
        double r = a * h;
        return r;
     }

	public static void main(String args[]) {
	    Scanner scan = new Scanner(System.in);
	    System.out.println("Digite o valor do Raio:");
        Double raio = scan.nextDouble();

        System.out.println("Digite o valor da Altura:");
	    Double altura = scan.nextDouble();

        // Double pi = Math.pi;

         double areaCirculo = area(raio);
         double volume = volume(areaCirculo, altura);

         System.out.println("Área do círculo ==> " + areaCirculo);
         System.out.println("Volume do cilíndro ==> " + volume);
        }
    }

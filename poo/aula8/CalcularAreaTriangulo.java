import java.util.Scanner;

public class CalcularAreaTriangulo {

    public static double calcularArea(double b, double h) { 
        double a = b * h / 2;
        return a;
    }

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("*****************************");
        System.out.println("*** Sistema para calcular ***");
        System.out.println("***  area de um triangulo ***");
        System.out.println("*****************************");

        System.out.println("Por favor informe a base:");
        double base = entrada.nextDouble();
        

        System.out.println("Agora informe a altura:");
        double altura = entrada.nextDouble();

        double area = calcularArea(base, altura);

        System.out.println("A area do triangulo e ==> " + area);

        entrada.close();
    }    
}

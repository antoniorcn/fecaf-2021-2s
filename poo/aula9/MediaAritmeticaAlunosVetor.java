import java.util.Scanner;
public class MediaAritmeticaAlunosVetor {

    public static void main(String[] args) {


        Scanner scan = new Scanner(System.in);

        double[] notas; // Declaração
        notas = new double[5];  // Inicialização

        /* 
            0       1         2         3       4
        ----------------------------------------------
        |       |         |         |        |       |
        ----------------------------------------------

        */

        System.out.println("Digite a nota 1");
        notas[0] = scan.nextDouble();

        System.out.println("Digite a nota 2");
        notas[1] = scan.nextDouble();

        System.out.println("Digite a nota 3");
        notas[2] = scan.nextDouble();

        System.out.println("Digite a nota 4");
        notas[3] = scan.nextDouble();

        System.out.println("Digite a nota 5");
        notas[4] = scan.nextDouble();

        double soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
        double media = soma / 5.0;

        System.out.println("Soma ==> " + soma);
        System.out.println("Media ==> " + media);
    }
    
}

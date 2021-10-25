import java.util.Scanner;
public class MediaAritmeticaAlunosVetorForMaiorNota {

    public static void main(String[] args) {

        final int QTD = 6;

        Scanner scan = new Scanner(System.in);

        double[] notas; // Declaração
        notas = new double[QTD];  // Inicialização

        /* 
            0       1         2         3       4
        ----------------------------------------------
        |  4.5   |   7.8   |   6.9   |   3.2  |  7.2 |
        ----------------------------------------------


        maiorNota = 0.0

        */

        for (int i = 0; i < QTD; i++) { 
            System.out.println("Digite a " + (i + 1) + "a nota");
            notas[i] = scan.nextDouble();
        }

        // Tecnica da Soma
        double soma = 0;
        for (int i = 0; i < QTD; i++) { 
            soma = soma + notas[i];
        }

        // Tecnica para extrair a maior nota do vetor
        double maiorNota = 0.0;
        for (int i = 0; i < QTD; i++) {   // Laço para iterar no vetor
            if (maiorNota < notas[i]) { 
                maiorNota = notas[i];
            }
        }

        // double soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
        double media = soma / QTD;

        System.out.println("Soma ==> " + soma);
        System.out.println("Media ==> " + media);
        System.out.println("Maior Nota ==> " + maiorNota);
    }
    
}

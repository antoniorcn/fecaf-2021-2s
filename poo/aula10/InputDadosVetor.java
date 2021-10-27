import java.util.Scanner;

public class InputDadosVetor {
    public static void main(String[] args) {
        
        Scanner entrada = new Scanner(System.in);

        int[] pontuacoes = new int[6];

        for (int i = 0; i < pontuacoes.length; i++) { 
            System.out.println("Digite o valor do recorde ==>");
            pontuacoes[i] = entrada.nextInt();
        }


        // Imprimir o vetor na tela
        // for (int i = 0; i < pontuacoes.length; i++) { 
        //     System.out.print(pontuacoes[i] + "   ");
        // }

        

    }
}

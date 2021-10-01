import java.util.Scanner;
public class ExecutarAteSair {
    public static void main(String[] args) { 
        Scanner teclado = new Scanner(System.in);
        boolean sair = false;

        do {
        // while (2 == 2) {
            System.out.println("Programa para soma de números");
            System.out.println("Por favor digite um numero");
            int n1 = teclado.nextInt();
            System.out.println("Por favor digite outro numero");
            int n2 = teclado.nextInt();

            int resultado = n1 + n2;
            System.out.println("Soma ==> " + resultado);

            System.out.println("Você deseja somar novamente (S/N)");
            String opcao = teclado.next();
            if (opcao.charAt(0) != 'S') { 
                sair = true;
            }
            // if (opcao.charAt(0) != 'S') { 
            //     break;
            // }
        } while (!sair);

        System.out.println("Fim do programa");
        teclado.close();
    }
}

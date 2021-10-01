import java.util.Scanner;

public class Exercicio12 { 

    public static void main(String args[]) { 
        Scanner scan = new Scanner(System.in);
        System.out.println("Digite um número");
        int n1 = scan.nextInt();
        System.out.println("Digite outro número");
        int n2 = scan.nextInt();
        System.out.println("Os numeros na ordem crescente são:");
        if (n1 > n2) {
            System.out.println(n2);
            System.out.println(n1);
        } else { 
            System.out.println(n1);
            System.out.println(n2);
        }
        scan.close();

        // n1, n2, n3   ==> n1 >= n2 && n2 >= n3
        // n1, n3, n2
        // n2, n1, n3
        // n2, n3, n1
        // n3, n1, n2
        // n3, n2, n1


    }
}
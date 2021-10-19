import java.util.Scanner;
public class MediaAritmetica5Alunos {

    public static void main(String[] args) {


        Scanner scan = new Scanner(System.in);

        System.out.println("Digite a nota 1");
        double n1 = scan.nextDouble();

        System.out.println("Digite a nota 2");
        double n2 = scan.nextDouble();

        System.out.println("Digite a nota 3");
        double n3 = scan.nextDouble();

        System.out.println("Digite a nota 4");
        double n4 = scan.nextDouble();

        System.out.println("Digite a nota 5");
        double n5 = scan.nextDouble();

        double soma = n1 + n2 + n3 + n4 + n5;
        double media = soma / 5.0;

        System.out.println("Soma ==> " + soma);
        System.out.println("Media ==> " + media);
    }
    
}

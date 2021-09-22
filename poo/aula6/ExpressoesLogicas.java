import java.util.Scanner;
public class ExpressoesLogicas { 

    public static void main(String args[]) { 
        Scanner scan = new Scanner(System.in);
        System.out.println("Teste de Gripe");
        
        System.out.println("Você está tosssindo ? (true/false)");
        boolean tosse = scan.nextBoolean();

        System.out.println("Você está expirrando ? (true/false)");
        boolean espirro = scan.nextBoolean();

        // Tabela verdade do operador (XOR)
        // tosse       |   espirro    |   gripe
        // entrada1    |   entrada2   |   saida
        // true        |   true       |   false
        // false       |   true       |   true
        // true        |   false      |   true
        // false       |   false      |   false

        // Tabela verdade do operador (OR)
        // entrada1    |  entrada2    |  saida
        // true        |  true        |  true
        // false       |  true        |  true
        // true        |  false       |  true
        // false       |  false       |  false

        // Tabela verdade do operador (AND)
        // entrada1    |  entrada2    |  saida
        // true        |  true        |  true
        // true        |  false       |  false
        // false       |  true        |  false
        // false       |  false       |  false

        boolean gripe = tosse ^ espirro;

        System.err.println("Possibilidade de Gripe : " + gripe);

        scan.close();
    }

}

public class Exercicio20 { 
    // *
    // **
    // ***
    // ****
    // *****
    // *****
    // ****
    // ***
    // **
    // *


    public static void main(String args[]) { 
        // int a = 1;
        for (int j = 0; j < 35; j++) {
            for (int i = 0; i <= j; i++) { 
                System.out.print("*");
            }
            System.out.println();
            // a++;
        }

        for (int j = 35; j > 0; j--) { 
            for(int i = 0; i < j; i++) { 
                System.out.print("*");
            }
            System.out.println();
        }

    }
}
public class TesteWhile {
    public static void main(String[] args) { 
        System.out.println("Programa de teste do While");

        int i = 0;
        while(i < 20) { 
            System.out.println(i); // 20 vezes ? 
            i = i + 1;

            // if (i == 14) { 
            //     i = i + 1;
            //     continue;
            // }

            if (i == 10) { 
                break;
            }
        }

        System.out.println("Fim do programa");
    }
}

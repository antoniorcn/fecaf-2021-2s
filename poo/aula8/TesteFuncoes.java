public class TesteFuncoes { 

    // public static double somar(double v1, double v2) { 
    //     double r = v1 + v2;
    //     return r;
    // }

    // // Polimorfismo de sobrecarga
    // public static double somar(double v1, double v2, double v3) { 
    //     double r = v1 + v2 + v3;
    //     return r;
    // }

    // public static double somar( double v1, double v2, double v3, double v4)  {
    //     double r = v1 + v2 + v3 + v4;
    //     return r;
    // }

    public static double somar(double ... valores) { 
        //              0   1   2
        // valores => [56, 78, 90]
        //             0   1   2   3
        // valores => [56, 78, 90, 12]
        //             0    1
        // valores => [45, 23.7f];
        double r = 0;
        //                           4
        for (int i = 0; i < valores.length; i++) { 
            r = r + valores[i];
        }
        return r;
    }

    public static String somar(String a, String b) { 
        String r = a + b;
        return r;
    }

    public static double multiplicar(double v1, double v2) { 
        double r = v1 * v2;
        return r;
    }

    public static void exibir(double ... valores) { 
        // for(int i = 0; i < valores.length; i++) { 
        //     System.out.print(valores[i] + ", ");
        // }
        // System.out.println();

        // String texto = "";
        // for(int i = 0; i < valores.length; i++) { 
        //     texto = texto + valores[i] + ", ";
        // }
        // return texto;
    }

    public static void main(String[] args) {
        double d = 34.878487; // double
        float f = 345.9484f; // float
        double resultado = somar(45, 23.7f); // 68.7
        String texto = somar("BOLA", "REDONDA");
        System.out.println("Texto ==> " + texto);
        double resultado3 = somar(56, 78, 90);
        double resultado4 = somar(56, 78, 90, 12);
        double novoResultado = multiplicar(resultado, 5.0);
        //System.out.println("Resultado da soma ==> " + resultado);
        //System.out.println("Resultado da multiplicacao ==> " + novoResultado);
        //System.out.println("Resultado3 da soma ==> " + resultado3);
        //System.out.println("Resultado4 da soma ==> " + resultado4);

        exibir(resultado, novoResultado, resultado3, resultado4);

        // String linha = exibir(resultado, novoResultado, resultado3, resultado4);
        // System.out.println(linha);
    }

}
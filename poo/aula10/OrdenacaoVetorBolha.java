public class OrdenacaoVetorBolha { 
    public static void main(String[] args) {

        // int[] v = new int[5];
        // v[0] = 100;
        // v[1] = 35;
        // v[2] = 98;
        // v[3] = 10;
        // v[4] = 42;

        //          0    1   2   3   4
        int[] v = {100, 99, 98, 97, 96, 234, 345,7, 9,2, 3,58,0,13,3,45,6,4,6, 4744,64,5};

        // Imprime o vetor
        System.out.println("Vetor");
        for (int i = 0; i < v.length; i++) { 
            System.out.println( v[i] );
        }

        // Ordena
        for (int j = 0; j < v.length; j++){ 
            for (int i = 0; i < v.length - 1; i++ ) {
                if (v[i] >= v[i + 1]) { 
                    // Trocar
                    // 35, 100, 98, 10, 42
                    // temp ==> 100;
                    int temp = v[i];
                    v[i] = v[i + 1];
                    v[i + 1] = temp;
                }
            }

            // // Imprime o vetor
            // System.out.println("Execução ==> " + j);
            // for (int i = 0; i < v.length; i++) { 
            //     System.out.println( v[i] );
            // }
        }

        // Imprime o vetor
        System.out.println("Vetor Ordenado");
        for (int i = 0; i < v.length; i++) { 
            System.out.println( v[i] );
        }



        
    }
}
public class Exercicio21 {

// Faça um programa que calcule o volume de um cilindro, para isto o programa pedirá para o usuário digitar as seguintes informações: 
// raio do cilindro
// altura
// Faça duas funções que auxiliarão no programa, uma das funções receberá o raio e calculará a área do circulo. 
// A segunda função receberá como parâmetro a área de um circulo, juntamente com a altura, e retornará o volume.
// O programa deve executar as funções com os dados informados pelo usuário e em seguida deve mostrar a área do circulo e o volume do cilindro na tela.
    
    public static double areaCirculo(double raio) { 
        // double area = raio * raio * 3.14159;
        double area = Math.PI * Math.pow(raio, 2);
        return area;
    }

    public static double volumeCilindro(double area, double altura) { 
        double volume = area * altura;
        return volume;
    }

    public static void main(String[] args) {

        double raio = 3.5;
        double a = areaCirculo(raio);
        double v = volumeCilindro(a, 7.4);

        System.out.println("Area ==> " + a);
        System.out.println("Volume ==> " + v);
    }


}

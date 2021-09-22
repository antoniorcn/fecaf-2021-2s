public class Incremento3 {
    public static void main(String[] args) {
        int a = 10;

        // int b = a + 5;
        // a = a + 1;
        // int b = a++ + 5;     // Pós fixado

        // a = a + 1;
        // int b = a + 5;
        int b = ++a + 5;       // Pré fixado

        System.out.println("A => " + a);
        System.out.println("B => " + b);
    }
}

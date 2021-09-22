public class DesvioCondicionalTemperatura {
    public static void main(String[] args) {
        int temperatura = 25;
        boolean frio = temperatura < 10;
        boolean calor = temperatura > 20;
        
        if (temperatura < 10) {
            System.out.println("Esta frio");
        }

        if (temperatura > 20) { 
            System.out.println("Esta calor");
        }

        System.out.println("Fim do programa");
    }
}

public class DesvioCondicionalUmidade2 {
    public static void main(String[] args) {
        System.out.println("Testa a umidade");

        int umidade = 80;

        // Se a umidade estiver com menos de 70
        // o tempo estará seco, caso contrário 
        // estará úmido

        if (umidade < 70) { 
            System.out.println("Tempo está seco");
        } else { 
            System.out.println("Tempo está úmido");
        }
    }
}

public class DesvioCondicionalUmidade3 {
    public static void main(String[] args) {
        System.out.println("Testa a umidade");
        int umidade = 80;

        // String tipoAr = "Seco";
        // if (umidade > 70) { 
        //     tipoAr = "Umido";
        // }

        // String tipoAr = (umidade > 70) ? "Umido" : "Seco";
        // System.out.println("O ar está " + tipoAr);

        //System.out.println("O ar está : " + 
        //        ((umidade > 70) ? "Umido" : "Seco"));

        String tipoAr = (umidade > 70) ? "Umido" : 
                ((umidade < 30) ? "Muito Seco" : "Seco");
        System.out.println("O ar está " + tipoAr);
    }
}

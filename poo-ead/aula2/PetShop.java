public class PetShop {

    public static void main(String args[]) { 
        Gato felix = new Gato();
        felix.nome = "Felix o Gato";
        felix.peso = 2.0;
        felix.altura = 50.0;

        Gato garfield = new Gato();
        garfield.nome = "Garfield";
        garfield.altura = 60.0;
        garfield.peso = 8.5;

        felix.miar();
        felix.pular();

        garfield.miar();
        garfield.pular();

    }
    
}

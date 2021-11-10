package outra.estrutura;

import edu.curso.Relogio;

public class TesteObjetos {
    
    public static void main(String[] args) {
        Relogio r1 = new Relogio();
        Relogio r2 = new Relogio();

        r1.cor = "Preto";
        r1.fabricante = "Champion";
        r1.modelo = "Digital";
        r1.pulseira = "Borracha";
        r1.cargaPilha = 50;
        r1.programarAlarme();

        r1.mostrarHora();

    }
}

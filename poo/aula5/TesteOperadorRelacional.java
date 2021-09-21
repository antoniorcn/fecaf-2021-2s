public class TesteOperadorRelacional { 
	public static void main(String [] args) { 
		int a = 3;
		boolean menorQue5 = a < 5;	 // true ou false
		System.out.println("A e menor que 5 ==> " + menorQue5);

		int temperatura = 28;

		boolean frio = temperatura < 14;
		boolean calor = temperatura > 26;

		System.out.println("Temperatura atual ==> " + temperatura);
		System.out.println("Esta frio ==> " + frio);
		System.out.println("Esta calor ==> " + calor);

		int diaSemana = 3;

		boolean folgaDomingo = diaSemana == 1;
		boolean trabalho = diaSemana != 1   &&   diaSemana != 7;
		boolean descanso = diaSemana == 1  ||  diaSemana == 7;
		boolean irParaFecaf = ! descanso;


		boolean aulaPresencial = false;
		boolean aulaRemota = false;

		boolean presenca = aulaPresencial ^ aulaRemota;
		System.out.println("Exemplo de OU Exclusivo (XOR)");
		System.out.println("Aula Presencial ==> " + aulaPresencial);
		System.out.println("Aula Remota ==> " + aulaRemota);
		System.out.println("Vai ganhar presenca ==> " + presenca);
		System.out.println("");
		System.out.println("");
	
		System.out.println("Dia da Semana ==> " + diaSemana);
		System.out.println("Dia de Folga de Domingo ==> " + folgaDomingo);
		System.out.println("Dia de Trabalho ==> " + trabalho);
		System.out.println("Dia de Descanso ==> " + descanso);

	}
}
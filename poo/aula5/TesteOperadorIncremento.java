public class TesteOperadorIncremento { 
	public static void main(String args[]) { 
		int contador = 10;
		System.out.println("Contador ==> " + contador);
		// contador = contador + 1;
		// contador += 1;
		// contador = contador * 2;
		// contador *= 2;
		contador++;
		System.out.println("Contador ==> " + contador);
		// contador += 1;
		// contador = contador * 2;
		// contador++;
		contador *= 2;
		System.out.println("Contador ==> " + contador);
	}
}
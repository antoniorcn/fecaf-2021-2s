public class TesteOperadorIncremento2 { 
	public static void main(String args[]) { 
		int a = 10;
		System.out.println("A => " + a);

		int b = a++ + 5;  // b == 15		Posfixado
		// int b = ++a + 5;  // b == 16   	Prefixado

		System.out.println("A => " + a);
		System.out.println("B => " + b);
	}
}
public class TestePizza { 
	public static void main(String args[]) { 
		System.out.println("Pizzaria");

		Pizza p1 = new Pizza();
		Pizza p2 = new Pizza();

		p1.bordaRecheada = false;
		p1.sabor = "Mussarela";
		p1.preco = 25.0;
		p1.tamanho = "Grande";
		p1.tipoMassa = "Fina";


		p2.bordaRecheada = true;
		p2.sabor = "Calabresa";
		p2.preco = 29.0;
		p2.tamanho = "Grande";
		p2.tipoMassa = "Grossa";	

		p1.prepararPizza();
		p1.assarPizza();	

	}
}
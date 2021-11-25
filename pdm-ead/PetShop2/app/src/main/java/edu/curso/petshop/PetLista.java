package edu.curso.petshop;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.widget.ArrayAdapter;

public class PetLista extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_pet_lista);

        RecyclerView listaPets = (RecyclerView) findViewById(R.id.petList);


        String[] pets = {"Toto", "Fifi", "Rex"};
        PetAdapter adapter = new PetAdapter(pets);

        listaPets.setAdapter(adapter);
        listaPets.setLayoutManager(new LinearLayoutManager(this));

    }
}
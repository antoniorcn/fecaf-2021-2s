package edu.curso.petshop;

import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;

import android.view.Menu;
import android.view.MenuItem;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    private String[] pets = {"Totó", "Fifi", "Rex", "Suri", "Koda", "Thor"};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);



        String olamundo = getResources().getString(R.string.ola_mundo);

        ListView simpleList = (ListView) findViewById(R.id.pet_list_view);
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, R.layout.pet_item, R.id.pet_item_nome, pets);
        simpleList.setAdapter(adapter);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_ola_mundo) {
            Toast.makeText(this.getBaseContext(), "Ola Mundo", Toast.LENGTH_LONG).show();
            return true;
        } else if (id == R.id.action_acionar_formulario) {
            Intent intent = new Intent(this, OlaMundoActivity.class);
            this.startActivity(intent);
        }

        return super.onOptionsItemSelected(item);
    }
}
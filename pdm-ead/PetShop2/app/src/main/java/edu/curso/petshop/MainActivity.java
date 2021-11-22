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
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import java.util.Locale;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        final EditText nome = (EditText)findViewById(R.id.txtNome);
        final EditText raca = (EditText)findViewById(R.id.txtRaca);
        Button salvar = (Button)findViewById(R.id.btnSalvar);

        salvar.setOnClickListener(
                new View.OnClickListener() {
                    @Override
                    public void onClick(View view) {
                        String strNome = nome.getText().toString();
                        String strRaca = raca.getText().toString();
                        String texto = String.format("O Pet %s da raça %s foi salvo com sucesso",
                                strNome, strRaca );
                        Toast.makeText(getBaseContext(),
                                texto, Toast.LENGTH_LONG).show();
                    }
                }
        );

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
        if (id == R.id.iniciar) {
            startService( new Intent(this, PetService.class) );
            return true;
        } else if (id == R.id.parar) {
            stopService( new Intent(this, PetService.class) );
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}
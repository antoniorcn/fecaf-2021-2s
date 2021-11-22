package edu.curso.petshop;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;
import android.widget.Toolbar;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);

        EditText nome = (EditText)findViewById(R.id.txtNome);
        EditText raca = (EditText)findViewById(R.id.txtRaca);
        Button salvar = (Button)findViewById(R.id.btnSalvar);

        salvar.setOnClickListener(
                new View.OnClickListener() {
                    @Override
                    public void onClick(View view) {
                        Toast.makeText(getBaseContext(),
                                "Pet salvo", Toast.LENGTH_LONG).show();
                    }
                }
        );
    }
}
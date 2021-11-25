package edu.curso.petshop;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

public class PetAdapter extends RecyclerView.Adapter<PetAdapter.ViewHolder> {

    private String[] mPets;
    Context context;

    public PetAdapter(String[] pets) {
        mPets = pets;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup viewGroup, int position) {
        context = viewGroup.getContext();
        LayoutInflater inflater = LayoutInflater.from(context);

        View petView = inflater.inflate(R.layout.pet_item, viewGroup, false);

        ViewHolder viewHolder = new ViewHolder(petView);

        return viewHolder;
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder viewHolder, int position) {
        final String petName = mPets[position];

        TextView petNameView = viewHolder.petName;
        petNameView.setText(petName);

        Button btnPet = viewHolder.petButton;
        btnPet.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Toast.makeText(context,
                        "Botão apertado para " + petName,
                        Toast.LENGTH_SHORT).show();
            }
        });
    }

    @Override
    public int getItemCount() {
        return mPets.length;
    }


    public class ViewHolder extends RecyclerView.ViewHolder {

        public TextView petName;
        public Button petButton;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);

            petName = (TextView) itemView.findViewById(R.id.pet_name);
            petButton = (Button) itemView.findViewById(R.id.pet_button);
        }
    }
}

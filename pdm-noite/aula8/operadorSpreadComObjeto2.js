let musica1 = {
        titulo: "Starway to Heaven",
        author: "Led Zeppelin",
        ano: 1971
};


// let musica2 = {
//     titulo: "Starway to Heaven (accustic)",
//     author: "Led Zeppelin",
//     ano: 1972
// };

let musica2 = {...musica1};

console.log("Musica 1 ==> ", musica1);
console.log("Musica 2 ==> ", musica2);

// musica2['ano'] = 1972;
musica2.ano = 1972;

console.log("Musica 1 ==> ", musica1);
console.log("Musica 2 ==> ", musica2);
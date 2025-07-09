const Pierre = {
    firstname: "Pierre",
    hasKey: true,
    city: "paris",
    delegate: false,
    langs: ["js", "html"],
}
console.log(`le language de ${Pierre.firstname} est ${Pierre.langs[1]}`)
//creer un objet restaurant qui affiche un nom et des menus 

const Resto = {
    nameOfresto: "Mcdo",
    menu: [{ Name: "bestof", price: 10 },
           { Name: "happymeal", price: 5 },
           { Name: "mcThirsty", price: 8 },
           { Name: "mcFirst", price: 10 },]
}
for (let index = 0; index < Resto.menu.length; index++) {
    console.log(Resto.menu[index]);
}
// afficher le prix de chaque article et le total 
let price= 0;
 let total=0; 
for (let index = 0; index <Resto.menu.length; index++) {
    let nameOfMenu = Resto.menu[index];
    console.log(`${nameOfMenu.Name } : ${nameOfMenu.price}`);
 total +=nameOfMenu.price;
    
}
console.log("Le total est de ", total )

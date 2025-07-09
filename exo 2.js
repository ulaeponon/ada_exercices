// sofia => fraise
//caroline => chocolat
//huguo => pistache
// victorien => bonbongum
// Meyko => cassis
const name =["sofia", "caroline","huguo","victorien","Meyko"];
const flavor= ["fraise","chocolat","pistache","bonbongum","cassis"]

function iceCreamFlavor(name, flavor ) { 
    const associate={};
   for (let index = 0; index < name.length; index++) {
    associate[name[index]]=flavor[index];
     }
     return associate;
   } 
console.log ( iceCreamFlavor("sofia"))
//Écris une fonction appelée conseilTenue() 
//qui prend en paramètre une météo (par exemple : "soleil", "pluie", "neige", "vent"),
 //et qui affiche un conseil vestimentaire en fonction du temps.
 //"soleil" → "Mets des lunettes de soleil 😎"
//"pluie" → "Prends un parapluie ☔"
//"neige" → "Mets une écharpe et des gants 🧣🧤"
//"vent" → "Porte une veste coupe-vent 🧥"
//Toute autre valeur → "Je ne connais pas cette météo 🤔"

function conseilTenue(méteo , autre) { 
    if (méteo ==="soleil") { console.log ("Mets des lunettes de soleil 😎");
         }
         else if (méteo === "pluie") {console.log("Prends un parapluie ☔");
             }
             else if (méteo ==="neige") {console.log("Mets une écharpe et des gants 🧣🧤");
                  }
                  else if (méteo === "vent") { console.log("Porte une veste coupe-vent 🧥");
                  }
                  if (autre === true) { console.log("Je ne connais pas cette météo 🤔")
                    
                  }
    
}

conseilTenue("soleil")
conseilTenue("pluie")
conseilTenue("neige")
conseilTenue("vent")
 

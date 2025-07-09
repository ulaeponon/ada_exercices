// Écrire une fonction qui prend en paramètre
// un moment de la journée (soit "matin", "midi", "après-midi", "soir")
// "matin" -> "J'ai trop hâte de continuer de coder !"
// "midi" -> "J'ai faim, j'en ai marre des bugs..."
// "après-midi" -> "Tchao les copins"
// "soir" -> "ZzzzZZZzzz"
// Appeler la fonction pour tester tous les cas possibles

function conditionDeLaJournée (temps){
   if (temps ==="matin") { console.log("J'ai trop hâte de continuer de coder !");
    } 
    else if (temps === "midi") {console.log("J'ai faim, j'en ai marre des bugs... !");
    }  
    else if (temps ==="après-midi") { console.log("Tchao les copains");
         }
         else if(temps ==="soir") { console.log("ZzzzZZZzzz"); 
      }
    }
conditionDeLaJournée("matin")
conditionDeLaJournée("midi")
conditionDeLaJournée("après-midi")
conditionDeLaJournée("soir")
// Écrire une fonction qui prend en paramètre une heure (ex: 9, 12, 18, etc.)
// et qui RETOURNE le moment correspondant
// getMomentFromHour(12) -> "midi"
// getMomentFromHour(18) -> "après-midi"
function getMomentFromHour(hour) { 
    if (hour >=6 && hour<=11 ) { console.log ("matin");
 }
else if (hour==="12") { console.log ("midi");
} 
   else if (hour >=13 && hour<=17) { console.log ("après-midi");
} 
else if (hour >=18 && hour<=22) { console.log ("soir");
    
}
}
console.log( )
getMomentFromHour(10)
getMomentFromHour(7)
getMomentFromHour(11)
getMomentFromHour("12")
getMomentFromHour(16)
getMomentFromHour(18)

  // Combiner la fonction printEmotionFromMoment(moment)
// et getMomentFromHour(hour) pour dans une fonction
// printEmotionFromHour(hour)
// Exemples :
// printEmotionFromHour(12) -> affiche "J'ai faim, j'en ai marre des bugs..."
// printEmotionFromHour(22) -> affiche "ZzzzZzzz"  
function printEmotionFromHour(hour) { if (hour <=12) { console.log ("J'ai faim, j'en ai marre des bugs...");
    }   
}
printEmotionFromHour (12)
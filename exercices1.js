function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; }

  function createPrices(articlesNumbers) {
    let total=0;
    let prices=[];
    for (let i = 0; i < articlesNumbers; i++) {
        let  randomPrices= getRandomInt(1,10);
        prices.push(randomPrices);
        total += randomPrices ;
        
    }
    console.log("Tableau des prix générés :", prices);
  console.log("Total :", total);

  return prices;
}
     console.log (createPrices(7));
    
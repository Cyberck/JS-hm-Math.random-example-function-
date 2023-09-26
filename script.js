// Funcsii - eto chast koda katoraya mojet bit vizvana pavtorno v raznih mestah vasheva koda 
// Ovyavleniye koda proishodit pri pomoshi kluchevogo slovo function
// primer sozdaniye funksii ' function imya funcsii () {} '

// Math - this is work width mathematics
// Math.random() - otdayot sluchaynoe chislo ot 0 do 1 (nikogda ne vidayot 1)
// Math.floor() - okruglyaet nashe chislo do naimenshego selogo
// Math.ceil() - okruglyaet nashe chislo do naibolshego selogo
// Math.round() - okruglyaet nashe chislo po matematicheskim pravilam

function random(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min)
}

console.log(random(50,100));

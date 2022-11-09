

let m = 'i love javascript'
console.log(m.indexOf('a' ,7))
//hier wird gesucht mit '' diese zeichnen (buchstaben)... und man kann  von bis suchen und mit der nummer (7) kann man hier sagen von wo darfst du suchen


console.log(m.lastIndexOf('o'))

console.log('---------------------------------------------')

let i ='imad';
console.log(i.charAt(3))
// charAt wir hier nur abschneiden  und suchen nach bestimmte buchstaben (zahl)...

console.log('---------------------------------------------')
let r= 'buch';
console.log(r.replace('b', 'B')) 
//buchstaben größe ändern

console.log(r.replace('u', 'c')) 

// buchstaben vwechslen

console.log('---------------------------------------------')


let names= 'i love Berlin';

console.log(names.slice(0,3))
// die nummer wird nicht anerkennt, (o,3) wird nur 0,1,2 genomwn

console.log('---------------------------------------------')

let mal ='hallo-welt-aus-Berlin';
console.log(mal.split('_', 2))

//ohn diese abstand wird alle buchstaben  'h', 'a', 'l', 'l', so gemacht  aber mit ein mal abstand wird ein komma geben z.b [ 'hallo', 'welt' ] und dörfen zwei mal schneiden 

let grados = parseInt(prompt("Dime la temperatura en ºC "));

fahren = (grados * 1.8) + 32
document.write("<br> la temperatura en ºC es " + grados +"ºC"+ "y en ºF es " + fahren +"ºF");

let fahren = parseInt(prompt("Dime la temperatura en ºF "));

grados = (fahren - 32) * 1,8;
document.write("<br> la temperatura en ºF es " + fahren +"ºF"+ "y en ºC es " + grados +"ºC");
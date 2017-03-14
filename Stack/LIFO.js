var nombres = [];

function Stack() {
  var items = [];

  this.push = function(element){
    items.push(element);
  };
  this.pop = function(){
    return items.pop();
  };
  this.peek = function() {
    return items[items.length - 1];
  };
  this.isEmpty = function(){
    return items.length == 0;
  };
  this.size = function(){
    return items.length;
  };
  this.clear = function(){
    items = [];
  };
  this.print = function(){
    console.log(items.toString());
  };
}
var nombre = new Stack ();
nombre.push ("Laura");
nombre.push ("Tania");
nombre.push ("Karla");
nombre.push ("Pedro");
nombre.push ("Alan");

var apellido = new Stack ();
apellido.push ("Leguina");
apellido.push ("Rodriguez");
apellido.push ("Garguño");
apellido.push ("Donjuan");
apellido.push ("Perez");

for(var i = 0; i < 5; i ++){
  nombres.push(nombre.pop() + " " + apellido.pop());
}
document.write(nombres);

/*var nombre = ["Laura", "Tania", "Karla", "Pedro", "Alan"];
var apellido = ["Lopez", "Ramos", "Camino", "Baez", "Perez"];
nombre.forEach(function NombreCompleto(nombre,i){
  nombres.push(nombre +" "+ apellido[i]);
});//FIFO

console.log(nombres);*/


/*for (var i = nombres.length-1; i >= 0; i--){
  nombres.push(nombre[i] +" "+ apellido[i]);
}//LIFO

console.log(nombres);*/

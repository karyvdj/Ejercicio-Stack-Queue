var nombres = [];

function Queue() {
  var items = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.empty = empty;

  this.print = print;

  function enqueue(element){
    items.push(element);
  };
  function denqueue(){
    return items.shift();
  };
  function empty() {
    return items.items.length == 0;
  };
  function print(element){
    return console.log(items.toString());
  };
}
var nombre = new Queue ();
nombre.enqueue ("Laura");
nombre.enqueue ("Tania");
nombre.enqueue ("Karla");
nombre.enqueue ("Pedro");
nombre.enqueue ("Alan");

var apellido = new Queue();
apellido.dequeue ("Leguina");
apellido.dequeue("Rodriguez");
apellido.dequeue ("Garguño");
apellido.dequeue ("Donjuan");
apellido.dequeue ("Perez");

for(var i = 0; i < 5; i ++){
  nombres.enqueue(nombre.dequeue() + " " + apellido.dequeue());
}
console.log(nombres);

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

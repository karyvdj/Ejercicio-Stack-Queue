var nombres = [];

function Queue() {
  var items = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.size = size;

  this.print = print;

  function enqueue(element){
    items.push(element);
  };
  function dequeue(){
    return items.shift();
  };
  function size() {
    return items.length;
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

nombre.print ();

var apellido = new Queue();
apellido.enqueue ("Leguina");
apellido.enqueue("Rodriguez");
apellido.enqueue ("Garguño");
apellido.enqueue ("Donjuan");
apellido.enqueue ("Perez");

while (nombre.size() > 0){ //los metodos se agregan a las instancias
  nombres.push(nombre.dequeue() + " " + apellido.dequeue());
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

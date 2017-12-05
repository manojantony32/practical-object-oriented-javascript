
function employee(name, age, location){
    var details = {};
    details.name = name;
    details.age = age;
    details.location = location;
    return details;
};


function employee1(name, age, location){
  //var this = {};
    this.name = name;
    this.age = age;
    this.location = location;
  //return this;
};

var empDt = employee('mano',30, 'chennai');
var empDt1 = new employee1('anto', 26, 'chennai');
//var empDt2 = employee('dhanush',20, 'chennai');

//console.log(empDt);
//console.log(empDt1);
//console.log(empDt2);

var foo = function(){
  console.log('Hello');
  console.log(this);
}
//foo();

var obj = {};
obj.foo = function(){
  console.log('Hello object')
  console.log(this);
}
//obj.foo();

//new foo();


function biCycle(speed, gear, tyrePressure){
  this.speed = speed;
  this.gear = gear;
  this.tyrePressure = tyrePressure;
  this.inflateTyres = function(){
    this.tyrePressure +=3;
  }
}

var biCycle1 = new biCycle(40, 4, 30);
biCycle1.inflateTyres();

function Mechanic(name){
  this.name = name;
}
var mike = new Mechanic('man');
mike.inflateTyres = biCycle1.inflateTyres;
mike.inflateTyres();

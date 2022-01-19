
function CoffeeMaker(time, type){
    this.timeMake = time;
    this.typeOfMachine = type;
}
CoffeeMaker.prototype.on = function(){
    console.log("The machine are waking up. Plese, waite 3 seconds");
}
CoffeeMaker.prototype.off = function(){
    console.log("Your coffee is ready. Have a nice day :)");
}
CoffeeMaker.prototype.making = function(){
    
    console.log(`The ${this.typeOfMachine} maker are making your coffee. Please wait ... ${this.timeMake}s`);
    setTimeout(()=>{
        this.off();
    }, this.timeMake*1000)
}

function DripMachine(){
    CoffeeMaker.call(this, 10, 'drip');
    this.drip = function(){
        console.log("You choose drip maker");
    }
}
function CarobMachine(){
    CoffeeMaker.call(this, 15, 'carob');
    this.carob = function(){
        console.log("You choose carob maker");
    }
}
function CoffeeMachine(){
    CoffeeMaker.call(this, 5, 'coffee-machine');
    this.coffeeMachine = function(){
        console.log("You choose coffee machine");
    }
}

DripMachine.prototype = Object.create(CoffeeMaker.prototype);
DripMachine.prototype.constuctor = DripMachine;

CarobMachine.prototype = Object.create(CoffeeMaker.prototype);
CarobMachine.prototype.constuctor = CarobMachine;

CoffeeMachine.prototype = Object.create(CoffeeMaker.prototype);
CoffeeMachine.prototype.constuctor = CoffeeMachine;

function processing(type){
    type.on();
    setTimeout(()=>{
        type.making();
    }, 3000)
}

let machine = new CoffeeMaker();
let drip = new DripMachine();
let carob = new CarobMachine();
let coffeeMachine = new CoffeeMachine();

let types = document.querySelector('.types');

types.addEventListener('click', (e)=>{
    if(e.target.classList.contains('type')){
        if(e.target.dataset.type == 'drip'){
            drip.drip();
            processing(drip);
        }
        else if(e.target.dataset.type == 'carob'){
            carob.carob();
            processing(carob);
        }
        else if(e.target.dataset.type == 'coffee-machine'){
            coffeeMachine.coffeeMachine();
            processing(coffeeMachine);
        }
    }
})
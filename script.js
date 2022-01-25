
let CoffeeMaker = {
    timeMake: 1,
    typeOfMachine: 'unknown',
    on: function(){
        console.log("The machine are waking up. Plese, waite 3 seconds");
    },
    off: function(){
        console.log("Your coffee is ready. Have a nice day :)");
    },
    making: function(){
        console.log(`The ${this.typeOfMachine} maker are making your coffee. Please wait ... ${this.timeMake}s`);
        setTimeout(()=>{
            this.off();
        }, this.timeMake*1000)
    }
}


let drip = {
    __proto__: CoffeeMaker,
    timeMake: 10,
    typeOfMachine: 'drip',
    choose: function(){
        console.log("You choose drip maker");
    }
}
let carob = {
    __proto__: CoffeeMaker,
    timeMake: 15,
    typeOfMachine: 'carob',
    choose: function(){
        console.log("You choose carob maker");
    }
}
let coffeeMachine = {
    __proto__: CoffeeMaker,
    timeMake: 5,
    typeOfMachine: 'coffee-machine',
    choose: function(){
        console.log("You choose coffee machine");
    }
}

function processing(type){
    type.choose();
    type.on();
    setTimeout(()=>{
        type.making();
    }, 3000)
}

let types = document.querySelector('.types');

types.addEventListener('click', (e)=>{
    if(e.target.classList.contains('type')){
        if(e.target.dataset.type == 'drip'){
            processing(drip);
        }
        else if(e.target.dataset.type == 'carob'){
            processing(carob);
        }
        else if(e.target.dataset.type == 'coffee-machine'){
            processing(coffeeMachine);
        }
    }
})

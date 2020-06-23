

/* if (sock in pair) {
        pair[sock] += 1

} else {
        pair[sock] = 1;
//{10: 2, 20: 5}

}


function subtractOne (obj) {
        for(const key in obj) {}
            if(obj[key] % 2 !=0){
                    obj[key] -+ 1;
                        console.log(obj)
            }
sum += obj[key]
        }

    subtractOne(pair)

    //console.log(pair)
sum = sum /2
return sum

sockMerchant({10, 20, 20, 10, 10, 30, 50, 10,  })


// CALLBACKS Model a Vending Machine

/* a vending machine is an object
it has an array of snacks (make 3 snacks)
snacks are objects that have a name and a price
a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
Be able to call vendingMachine.vend() with a valid integer to return a snack z*/
 
/* const vendingMachine = {
    snacks: [
        {
        name: 'cheetos',
        price: 1
    },
    {
        name: 'whatchamacallit',
        price: 1
    },
    {
        name: 'almond_joy',
        price: 2
    }
],
    vend: function vend(obj, userInput){
        console.log('please pick your order')
            if(userInput<= obj.snacks.length -1){
               return obj.snacks[userInput]
            } else if(userInput === undefined || choice > obj.snacks.length -1) {
             return'please try again'
                }           
            }
        }
console.log(vendingMachine.vend(vendingMachine, 1))
            /*for(let i = 0; i < obj.snack.length; i++){
            if(choice === Number && choice <=){
            //console.log(obj.d[choice]]
                if (choice === number && choice < obj.snack.length -1) {
                    console.log(obj.snacks[choice])
                //return obj.snack[choice]
             }
    
*/
   ///////////////
///Callbacks///
//////////////
//
/*Make a function add that takes two arguments (numbers) and sums them together
const addition = (num1, num2) => {
    return num1 + num2;
}
addition();
//console.log(addition(5,5));
//Make a function subtract that takes two arguments (numbers) and subtracts them
const subtraction = (num1, num2) => {
    return num1 - num2;
}
subtraction();
//console.log(subtraction(5,5));
//Make a function multiply that takes two arguments and multiplies them
const multiplication = (num1, num2) => {
    return num1 * num2;
}
multiplication();
//console.log(multiplication(5,5));
//Make a function divide that takes two arguments and divides them
const division = (num1, num2) => {
    return num1 / num2;
}
division();
//console.log(division(5,5));
/* Take a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
Call calculate 4 times, each time using one of the operation functions you wrote
const calculate = (num1, num2, operates) => {
    return operates (num1, num2);
}
console.log(calculate(10, 10, addition));
console.log(calculate(10, 10, subtraction));
console.log(calculate(10, 10, multiplication));
console.log(calculate(10, 10, division)); */
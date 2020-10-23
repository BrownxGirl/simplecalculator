class Animal{
    constructor(name){
        this.name = name;
    }

    eat(){
       return this.name + " eats"
    }

}

//inheritance from animal 

class Dog extends Animal{
    
sound(){ 
return "Dog"+ " barks";    
 }
}

class Cat extends Animal{
    sound(){ 
        return "Cat" + " meows";    
         }
}

//Adopting Pet

class Home {
    
  adoptPet(animal){
        if( adoptedPet.length == 0){
          adoptedPet.push(animal)
        } else {
            for(let i = 0; i < adoptedPet.length; i++){
                if(animal == adoptedPet[i]) {
                   return console.log("already taken");
                }       
               }
               adoptedPet.push(animal);
           }
       }     

       //making all sounds of the animal that are adopted
       makeAllSounds(){

//this method should access the adpotedPet array
// return the sounds od each adopted pet
//i can create another sound() method similar to the in animal class i created or
//find a way to access the sound of the adopted pet in the animal class
for(let i = 0; i < adoptedPet.length; i++){
  
        return adoptedPet[i].sound();
        
    
}


       
       
        // if( adoptedPet.length == 0){
        //     return " "
        //   } else {
        //       for(let i = 0; i < adoptedPet.length; i++){
        //           if(animal == adoptedPet[i]) {
        //              return console.log(animal.sound());
        //           }       
        //          }
        //          adoptedPet.push(animal.sound());
        //      }


       }
}
    


let home = new Home(); //instance of the class of home to access the method adoptPet
let adoptedPet = [];
var dog = new Dog("Rax");
var cat = new Cat ("Stormy")
home.adoptPet(cat);
home.adoptPet(dog);
console.log(makeAllSounds());
console.log(adoptedPet);


// console.log(cat.eat())
//TASK 1 class movie with instances representing a film
class Movie{
    constructor(title="",studio="",rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
     static getPG(movi){
        return movi.filter((mo)=>mo.rating==="PG");

     }
    
   
}
const obj1= new Movie("leo","redgiant")
console.log(obj1);        // rating will be automatically set as PG 
 const one = new Movie("Casino Royale", "Eon Production","PG13");
 const two =  new Movie("SARVAM", "ABC Production","PG");
 const three =new Movie("Manjumalboyz", "kerela Production","PG");
 const movies =[one,two,three]
 console.log(Movie.getPG(movies));       // movies with rating PG will be displayed
console.log(one); // given movie title,production and rating will be displayed


//TASK 2 class circle

 class Circle{
    constructor(radius=1.0,color="red"){
        this.radius = radius;
        this.color = color;
    }
    get Radius(){
        return this.radius;
    }
    set Radius(r){
        if(typeof r == Number)
        {
            return this.radius;
        }
        else{
            console.log("not a number");
        }
    }

    get Color(){
        return this.color;
    }
    set Color(c){
        if(typeof c === String){
            return this.color;
        }
        else{
            console.log("not a string")
        }
    }


    toString(){
        console.log(`"Circle[radius=${this.radius}, color=${this.color}]"`);
    }

    get Area() {
        return Math.PI * this.radius* this.radius;
    }
    get Circumference() { 
        return 2 * (Math.PI) * this.radius ;
    }

 }
  
 let objC= new Circle();
 console.log("circle radius:",objC.Radius);
 console.log("circle color:",objC.Color);
objC.toString();// the given string will be printed
console.log("area:",objC.Area);
console.log("circumference:",objC.Circumference);


//TASK 3 a class person to hold the details of the person

class Person{
    constructor(name,age,gender,martialstatus,contact,email){
        this.name=name;
        this.age = age;
        this.gender = gender;
        this.martialstatus=martialstatus;
        this.contact=contact;
        this.email = email;
    
    }
}
                         
const obj = new Person("subha",25,"female","single","90928844","subhanila@gmail.com");
console.log("person details:",obj);



// TASK 4 uber price calculation

class Uber{
    constructor(vehicle, km, time){
        this.vehicle = vehicle;
        this.km = km;
        this.time = time;
        
        }

    get cost(){
        if(this.vehicle == "auto"){
            if(this.time>=8 && this.time<=10 && this.time>=16 && this.time<=20){
             
             return this.km * 40;
            }
            else{
                return this.km * 20;
                
            }
          
          
        }
        if(this.vehicle == "car")
        {
            if((this.time>=8 && this.time<=10) || (this.time>=16 && this.time<=20)){
                return this.km * 60;
            }
            else{
                return this.km * 30;
            }
            
            
            
        }
        
    }
}

const uber1 = new Uber("auto", 4,5)
console.log("ride cost:",uber1.cost);
const uber2 = new Uber("car", 10, 9);
console.log("ride cost:",uber2.cost);
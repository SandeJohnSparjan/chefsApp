var a:number;
a =10;
console.log(a);

let doLog = (a) => console.log(a*a);


doLog(a);


///INTERFCE
interface Point{
    x:number, 
    y: number
}

let integers = (points : Point) => {
    console.log(points.x+points.y);
}

integers({
    x:1,
    y:1
})
///INTERFACE ENDS

///CLASS
class Points{
    x:number; 
    y:number;
    constructor(x,y){
        this.x =x;
        this.y=y;
    }

    inte():void {
        console.log("In class:"+ (this.x+this.y))
    }
}
///CLASS ENDS


let integers1 = (points : Points) => {
    console.log(points.x+points.y);
}

//creating object from class
let addP = new Points(1,2);
addP.inte();


class Pointer extends Points{
    mess : string;
    
    intePoint(): void{
        console.log("This is :"+ this.mess);
    }
}

let addP1 = new Pointer(1,3);
addP1.intePoint();




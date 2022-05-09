// Your code here
class Polygon{
    constructor(arr){
        this.arr = arr;
    }

    get countSides(){
        return (this.arr.length);    
    }

    get perimeter(){
        let total = 0;

        for (let index of this.arr){
            total += index;
        }

        return total;
    }
}

class Triangle extends Polygon{
    // 0 = 15, 1 = 10, 2 = 1
    get isValid(){
        return (((this.arr[0] + this.arr[1]) > this.arr[2]) && ((this.arr[0] + this.arr[2]) > this.arr[1])
            && ((this.arr[1] + this.arr[2]) > this.arr[0]))
    }
}

class Square extends Polygon{
    
    get isValid(){
        return ((this.arr[0] === this.arr[1]) && (this.arr[0] === this.arr[2]) && (this.arr[0] === this.arr[3])
            && (this.arr[1] === this.arr[2]) && (this.arr[1] === this.arr[3]) && (this.arr[2] === this.arr[3])) 
    }

    get area(){
        return (this.arr[0] * this.arr[0]);
    }
}
import { IIterator } from "./IIterator";

class IteratorImple<T> implements IIterator<T>{
    private items: T[];
    private index: number;

    constructor(item: T[]) {
        this.items = item;
        this.index = 0;
    }
    next(): boolean {
        return this.index + 1 < this.items.length;
    }
    current(): T {
        return this.items[this.index++];
    }

}

class Item { 
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

}


const arry = [new Item('영희',10),new Item('민수',14),new Item('철수',20),];
const iter = new IteratorImple(arry);
while(iter.next()){
    console.log(iter.current());
}
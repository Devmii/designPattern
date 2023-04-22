abstract class Unit {
    abstract getSize(): number;

    abstract toString(): string;
}

class FolderUnit extends Unit {
    private unitList: Unit[] | undefined;
    private name: string;

    constructor(name: string){
        super();
        this.name = name;
    }

    getSize(): number {
        let size =0;

        this.unitList?.forEach(unit=>{
            size += unit.getSize();
        });

        return size; 
    }

    add(unit:Unit){
        const list = this.unitList ?? (this.unitList = []);
        list.push(unit);
    }
    
    toString(): string {
        return `[${this.name}] : ${this.getSize()}`;
    }
}

class FileUnit extends Unit {
    private name:string;
    private size:number;
    
    constructor(name: string, size: number) {
        super();
        this.name = name;
        this.size = size;
    }
    
    getSize(): number {
        // throw new Error("Method not implemented.");
        return this.size;
    }

    toString():string{
        return `[${this.name}] : ${this.size}`
    }
}

const file1 = new FileUnit("test1", 100);
const file2 = new FileUnit("test2", 200);
const folder1 = new FolderUnit("folder1");
folder1.add(file1);
folder1.add(file2);

const folder2 = new FolderUnit('folder2');
const file3  =new FileUnit('test3',500);
folder2.add(folder1);
folder2.add(file3);

console.log(folder2.toString())
 
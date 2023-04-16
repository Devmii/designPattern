export interface ISumStratege{
    sum(end:number): number;
}

export class SimpleSum implements ISumStratege{
    sum(end: number): number {
        let result = 0; let i = 0;
        while (i <= end) result += i++;
        return result; 
    }
}

export class GaussSum implements ISumStratege{
    sum(end: number): number {
        return (1 + end) * end / 2;
    }
}

class PrintSum {
    print(sumStatege: ISumStratege, end: number) {
        console.log(sumStatege.sum(end));
    }
}

new PrintSum().print(new SimpleSum(),5);
new PrintSum().print(new GaussSum(),5);

import { Injectable } from '@angular/core';
import Big from 'big.js';

@Injectable()
export class MultiplyService {

    private do(n: number) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            let bigNum = new Big(n);
            return bigNum.mul(this.do(n - 1));
        }
    }

    public multiply(n: number, i: number) {
        this.do(n);
        return i;
    }
}

import { Component, OnInit } from '@angular/core';
import { MultiplyService } from "app/multiply.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

    items: number[] = [];
    total: number = 20;
    count: number = 0;

    constructor(private multiplyService: MultiplyService) { }

    ngOnInit(): void {
        for (let i = 0; i <= this.total; i++) {
            setTimeout(() => {
                this.count = this.multiplyService.multiply(2000, i);
                if (i % 2 === 0) {
                    this.items.push(i);
                }
            }, 0);
        };
    }
}

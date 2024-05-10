import { Coffee } from './coffee.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class coffeeService {
    private apiURL!: string;

    coffee: Coffee[] = [];
    coffeeAvailable: Coffee[] = [];

    constructor(private http: HttpClient) {
        this.apiURL = "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";
        this.getCoffeeAvailable();
    }

    getAllCoffees() {
        this.http.get<any>(this.apiURL)
            .subscribe(data => {
                this.coffee = data;
            });
        return this.coffee;
    }

    getCoffeeAvailable() {
        this.http.get<any>(this.apiURL)
            .subscribe(data => {
                data.forEach((result: any) => {
                    if (result.available === true) {
                        this.coffeeAvailable.push(result);
                    }
                });
            });

    }
}
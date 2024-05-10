import { coffeeService } from './coffee.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Coffee } from './coffee.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple-coffee-listing';

  coffees: Coffee[] = [];
  coffeesAvailable: Coffee[] = [];

  allproducts: boolean = true;
  availableproducts: boolean = false;

  constructor(private coffeeService: coffeeService) {
    this.coffees = this.coffeeService.getAllCoffees();
    this.coffeesAvailable = this.coffeeService.coffeeAvailable;
  }

  allProductsActive() {
    this.allproducts = true;
  }

  availableNowActive() {
    this.allproducts = false;
    this.availableproducts = true;
    const btnAll = document.querySelector('#btn-all');
    if (btnAll != null) {
      btnAll.classList.remove('active');
    }
  }

}

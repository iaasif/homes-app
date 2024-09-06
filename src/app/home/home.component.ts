import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocationComponent } from "../housing-location/housing-location.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form action="">
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">search</button>
      </form>
    </section>
    <section class="resutls">
      <app-housing-location></app-housing-location>
    </section>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {}

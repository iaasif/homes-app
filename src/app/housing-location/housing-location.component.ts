// import { Component, Input } from "@angular/core";
// import { CommonModule } from "@angular/common";
// import { HousingLocation } from "../housingLocation";

// @Component({
//   selector: "app-housing-location",
//   standalone: true,
//   imports: [CommonModule],
//   template: `
//     <!-- <section class="listing">
//       <img class="listing-photo" [src]="HousingLocation.photo"  alt= "Exterior photo of {{HousingLocation.name}} " />
//       <h2 class="lisiting-heading">{{HousingLocation.name}} </h2>
//       <p class="listing-location"> {{HousingLocation.city}} {{HousingLocation.state}} </p>
//     </section> -->

//     <section>HOUSLOCATION IS WORKING</section>
//     <section class="listing">
//       <img
//         class="listing-photo"
//         [src]="housingLocation.photo"
//         alt="Exterior photo of {{ housingLocation.name }}"
//         crossorigin
//       />
//       <h2 class="listing-heading">{{ housingLocation.name }}</h2>
//       <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
//     </section>

//   `,
//   styleUrls: ["./housing-location.component.css"],
// })
// export class HousingLocationComponent {
//   @Input() housingLocation!: HousingLocation;
// }

////////////////////
import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocation } from "../housingLocation";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-housing-location",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
      <a routerLink="details">learn more...</a>
      <!-- router link added -->
    </section>
  `,
  styleUrls: ["./housing-location.component.css"],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}

import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule],
  template: ` <p>details works!</p> `,
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute); //last here  https://www.youtube.com/watch?v=r5DEBMuStPw&list=PL1w1q3fL4pmj9k1FrJ3Pe91EPub2_h4jF&index=5 13.41 min
}

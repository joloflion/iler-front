import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent {
   @Input() range: number = 0;


   getRange (range: number): string[]{
    let output: string[] = [];
    for(let i =0 ; i < range; i++){
      output.push("fas fa-star text-warning");
    }
    if(range < 5){
      for(let i =0 ; i < ( 5 - range); i++){
        output.push("fas fa-star text-muted");
      }
    }
    return output;
   }
}

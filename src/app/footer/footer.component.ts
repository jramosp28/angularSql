import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public websiteName: string = 'Segunda Practica Angular';
  public copyrightYear: number = 2023;
  public authorName: string = 'Javier Ramos';
}

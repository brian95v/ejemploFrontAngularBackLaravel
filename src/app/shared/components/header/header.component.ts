import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  nombreUser: string = '';
  
  ngOnInit(): void {
    this.nombreUser = sessionStorage.getItem('userName') || '';
  }


}

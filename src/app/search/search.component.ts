import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchText = '';
  constructor(private route: Router) {}

  ngOnInit(): void {}
  onNavigate() {
    console.log('searcText', this.searchText);
    if (this.searchText.toLowerCase() == 'mohan') {
      this.route.navigate(['/search_results']);
    }
  }
}

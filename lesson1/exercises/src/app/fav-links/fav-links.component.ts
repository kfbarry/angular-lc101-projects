import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
linksToStuff = ["https://www.espn.com/","https://chavasmexican.com/"]
  constructor() { }

  ngOnInit() {
  }

}

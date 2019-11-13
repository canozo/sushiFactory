import { Component, OnInit } from '@angular/core';
import { SushiService } from '../../services/sushi.service';
import { Sushi } from '../../models/Sushi';

@Component({
  selector: 'app-sushis',
  templateUrl: './sushis.component.html',
  styleUrls: ['./sushis.component.css']
})
export class SushisComponent implements OnInit {
  sushis: Sushi[];

  constructor(private sushiService: SushiService) { }

  ngOnInit() {
    this.sushiService.getSushis().subscribe(sushis => {
      this.sushis = sushis;
    });
  }

}

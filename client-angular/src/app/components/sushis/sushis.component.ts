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
  sushisType: Sushi[];

  constructor(private sushiService: SushiService) { }

  ngOnInit() {
    this.sushiService.getSushis().subscribe(sushis => {
      this.sushis = sushis;
    });

    this.sushiService.getSushisType().subscribe(sushisType => {
      this.sushisType = sushisType;
    });
  }

  createSushi(sushi: Sushi) {
    this.sushis.push(sushi);
  }

  deleteSushi(sushi: Sushi) {
    this.sushis = this.sushis.filter(t => t.id !== sushi.id);
  }
}

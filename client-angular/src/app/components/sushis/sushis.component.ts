import { Component, OnInit } from '@angular/core';
import { SushiService } from '../../services/sushi.service';
import { Sushi } from '../../models/Sushi';
import { SushiUpdate } from 'src/app/models/SushiUpdate';

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

  updateSushi(sushiData: SushiUpdate) {
    const index = this.sushis.findIndex(s => s.id === sushiData.id);
    const sushiRes = this.sushisType.find(s => s.id === sushiData.nuevoTipo);
    sushiRes.id = sushiData.id;
    this.sushis[index] = sushiRes;
  }

  deleteSushi(sushi: Sushi) {
    this.sushis = this.sushis.filter(t => t.id !== sushi.id);
  }
}

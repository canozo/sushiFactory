import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sushi } from 'src/app/models/Sushi';
import { SushiService } from '../../services/sushi.service';
import { ResultRes } from 'src/app/models/ResultRes';

@Component({
  selector: 'app-sushi-item-create',
  templateUrl: './sushi-item-create.component.html',
  styleUrls: ['./sushi-item-create.component.css']
})
export class SushiItemCreateComponent implements OnInit {
  @Input() sushi: Sushi;
  @Output() createSushi: EventEmitter<Sushi> = new EventEmitter();

  constructor(private sushiService: SushiService) { }

  ngOnInit() {
  }

  onCreate() {
    this.sushiService.create(this.sushi.id)
      .subscribe((res: ResultRes) => {
        const tempSushi = { ...this.sushi };
        tempSushi.id = res.insertId;
        this.createSushi.emit(tempSushi)
      });
  }
}

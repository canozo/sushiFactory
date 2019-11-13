import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sushi } from 'src/app/models/Sushi';
import { SushiService } from '../../services/sushi.service';

@Component({
  selector: 'app-sushi-item',
  templateUrl: './sushi-item.component.html',
  styleUrls: ['./sushi-item.component.css']
})
export class SushiItemComponent implements OnInit {
  @Input() sushi: Sushi;
  @Output() deleteSushi: EventEmitter<Sushi> = new EventEmitter();

  constructor(private sushiService: SushiService) { }

  ngOnInit() {
  }

  onDelete() {
    console.log('Deleting: ', this.sushi.id);
    this.sushiService.delete(this.sushi.id)
      .subscribe(res => console.log(res));
    this.deleteSushi.emit(this.sushi);
  }
}

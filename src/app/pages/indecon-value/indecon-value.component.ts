import {Component, Input, OnInit} from '@angular/core';
import {IndeconValue} from '../../models/indeconValue';

@Component({
  selector: 'app-indecon-value',
  templateUrl: './indecon-value.component.html',
  styleUrls: ['./indecon-value.component.css']
})
export class IndeconValueComponent implements OnInit {

  @Input() indeconValue: IndeconValue = new IndeconValue();

  constructor() {
  }

  ngOnInit(): void {
  }

}

import {Component, OnInit} from '@angular/core';
import {IndeconControllerService} from '../../api/services/indecon-controller.service';
import {IndeconLastValuesResponseDto} from '../../api/models/indecon-last-values-response-dto';
import {IndeconValue} from '../../models/indeconValue';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent implements OnInit {

  indeconValuesArray: IndeconValue[] = [];

  constructor(private indeconService: IndeconControllerService) {
  }

  ngOnInit(): void {
  }

  onSearch() {
    this.indeconService.getLastValuesUsingGET()
      .subscribe(value => {
        this.indeconValuesArray = this.mapIndeconLastValues(value);
      });
  }

  mapIndeconLastValues(content: IndeconLastValuesResponseDto) {

    const indeconValuesArray: IndeconValue[] = [];

    if (content.indeconValueDtoList) {
      content.indeconValueDtoList.forEach(value => {
        const indeconValue: IndeconValue = new IndeconValue();

        indeconValue.name = value.name as string;
        indeconValue.value = value.value as number;
        indeconValue.unit = value.unit as string;
        indeconValue.key = value.key as string;
        indeconValue.date = value.date as string;

        indeconValuesArray.push(indeconValue);
      });
    }
    return indeconValuesArray;
  }
}

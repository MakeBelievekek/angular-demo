import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {ButtonTmplContext} from '../../../model/buttonTmplContext';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {
  @Input()
  buttonTemplate: TemplateRef<ButtonTmplContext>;
  value = 99;
  selectedValue: number;
  ctx;

  get getSelectedValue(): any {
    console.log('getSelectedValue', {$implicit: this.selectedValue});
    return {$implicit: this.selectedValue};
  }

  constructor() {
  }

  ngOnInit(): void {
    this.ctx = {$implicit: 99, value: 15};
  }

  setSelectedValue(value: number): void {
    console.log(value);
    this.selectedValue = value;
  }
}

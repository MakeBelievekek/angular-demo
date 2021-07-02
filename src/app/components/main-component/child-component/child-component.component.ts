import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {
  @Input()
  buttonTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}

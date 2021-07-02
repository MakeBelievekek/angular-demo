import {Component, OnInit} from '@angular/core';
import {DefaultService} from '../../services/default.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {

  constructor(private defaultService: DefaultService) {
  }

  ngOnInit(): void {
  }

  work = (value): void => {
    this.defaultService.doSmthing();
    console.log(value);
  }
}

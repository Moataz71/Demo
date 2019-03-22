import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  @Input()
  public mTitle: string;

  @Output()
  public mTitleClicked: EventEmitter<string> = new EventEmitter<string>();

  public onMTitleClicked(mTitle: string) {
    this.mTitleClicked.emit(mTitle);
  }
}

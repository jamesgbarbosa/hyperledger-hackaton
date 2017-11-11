import {Component, OnInit} from '@angular/core';
import {ModalService} from "./modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ModalService]
})
export class AppComponent implements OnInit{
  title = 'app'
  testBool = false;
  constructor(private modalService: ModalService) {

  }
  ngOnInit() {
    this.modalService.modalOpen.subscribe((value) => {
      this.testBool = value
    })
  }
}

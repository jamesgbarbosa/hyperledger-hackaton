import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ModalService} from "../modal.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  clickEvent(){
    this.modalService.modalStatus(true);
  }

}

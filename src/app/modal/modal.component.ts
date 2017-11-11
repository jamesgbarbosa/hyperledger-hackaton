import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ModalService} from "../modal.service";
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  clickEvent(){
    this.modalService.modalStatus(false);
  }

  onSubmit(e){
    console.log(e)
  }
}

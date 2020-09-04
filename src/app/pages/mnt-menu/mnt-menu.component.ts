import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-mnt-menu',
  templateUrl: './mnt-menu.component.html',
  styleUrls: ['./mnt-menu.component.css']
})
export class MntMenuComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }
  

  ngOnInit() {
  }

  menu={
    idMenu:0,
    nombre:'',
    tipoMenu:0,
    estado:0
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}

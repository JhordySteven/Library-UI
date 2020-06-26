import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MenuService } from "../../Service/menu.service";
@Component({
  selector: 'app-mnt-menu',
  templateUrl: './mnt-menu.component.html',
  styleUrls: ['./mnt-menu.component.css']
})
export class MntMenuComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,private menu:MenuService) { }
  

  ngOnInit() {
    
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}

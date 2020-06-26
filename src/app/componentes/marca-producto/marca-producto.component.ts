import { Component, TemplateRef,OnInit} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-marca-producto',
  templateUrl: './marca-producto.component.html',
  styleUrls: ['./marca-producto.component.css']
})
export class MarcaProductoComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}

import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Hero } from 'src/app/services/models';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'confirm-delete-modal',
  templateUrl: './confirm-delete-modal.component.html',
  styleUrls: [],
})
export class ConfirmDeleteModalComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  @Input() hero!: Hero;
  @Input() onDelete!: any

  ngOnInit(): void {}

  hideModal() {
    this.modalService.hide();
  }

}

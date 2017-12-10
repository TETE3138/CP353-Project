import { Component, OnInit } from '@angular/core';
import { NotebookManagementService } from '../../services/notebook-management.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private notebookManagementService: NotebookManagementService) { }

  private notebookList: Notebook[];
  ngOnInit() {
    this.notebookManagementService.getNotebookList().subscribe((response) => {
      this.notebookList = response;
    })
  }


}
interface Notebook {
  brand: string;
  nbname: string;
  price: number;
  cpu: string;
  gpu: string;
  os: string;
  display: number;
  ram: number;
  hdd: number;
  img_url: string;
  insert_by: string;
  insert_date: string;
}


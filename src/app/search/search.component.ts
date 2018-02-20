import { Component, OnInit } from '@angular/core';
import { NasaPatentModel } from '../Models/nasa-patent.model';
import { NasaPatentService } from '../Services/nasa-patent.service';
import { deserialize } from 'json-typescript-mapper';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  currentPage = 1;
  patents: NasaPatentModel[];
  itemsPerPage = 10;
  displayedCollection: NasaPatentModel[];
  searchTerm: string = '';

  constructor(private patentService: NasaPatentService) { }

  ngOnInit() {
    this.getPatents();
  }

  getPatents(): void {
    this.patents = [];
    this.patentService.getPatents()
      .subscribe(patentsRaw => {
        for (let patent of patentsRaw as object[]) {
          const patentNasa = deserialize(NasaPatentModel, patent);
          this.patents.push(patentNasa);
        }
        this.resetPaging();
      });
  }

  searchPatents(query: string): void {
    this.patents = [];
    this.patentService.searchPatents(query)
      .subscribe(patentsRaw => {
        for (let patent of patentsRaw as object[]) {
          const patentNasa = deserialize(NasaPatentModel, patent);
          this.patents.push(patentNasa);
        }
        this.resetPaging();
      });
  }

  pageChanged(event: any): void {
    const startIndex = (event.page - 1) * this.itemsPerPage;
    const endIndex = (event.page * this.itemsPerPage) - 1;
    this.displayedCollection = this.patents.slice(startIndex, endIndex);
  }

  resetPaging(): void {
    this.currentPage = 1;
    this.displayedCollection = this.patents.slice(0, this.itemsPerPage - 1);
  }
}

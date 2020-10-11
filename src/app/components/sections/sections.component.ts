import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { sections } from '../../store/reducers/sections.reducer';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  sectionList: any;

  constructor(private store: Store<any>,
    private router: Router) {
  }

  ngOnInit() {
    console.log("SectionComponent ngOnInit() ");
    this.store.select(state => state.sections).subscribe(res => {
     // this.allSections$ = res;
      this.sectionList = res;
       console.log("sectionComponent ngOnInit() Response from section Component " );
       console.log(this.sectionList);
     });
  }
}

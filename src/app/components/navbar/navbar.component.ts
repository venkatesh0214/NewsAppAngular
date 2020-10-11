import { News } from './../../model/news';
import { NewsState } from './../../store/reducers/news.reducer';
import { NewsActions } from '../../store/actions/news.actions';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  subsections: string[]=[];
  response: Object[];
  constructor(
    private store: Store<any>,
    private newsActions: NewsActions
  ) { }

  ngOnInit() {

    console.log("NavBar ngInit(): ");
    this.store.select(state => state.news).subscribe(data => {this.response = data.newsList;    
      console.log("NavBar ngInit(): store.Select subscribe ")
      this.subsections=[];
      for(let item of this.response)
      {
        if(item['subsection'] != null && item['subsection']!= "")
        {
          this.subsections.push(item['subsection']);
          //console.log("Subsection =>  "+ item['subsection']);
        }
      }

      //Remove duplicate
     this.subsections = this.subsections.filter((elem, i, arr) => {
        if (arr.indexOf(elem) === i) {
          return elem
        } 
        })
    });
  }

  dispatchAction($event: string) {

    console.log("DispatchAction function()");

    this.store.dispatch(this.newsActions.FilterSubsection($event));
    
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import '../../../../node_modules/zone.js/dist/zone.js';

import { NewsItemComponent } from './news-item/news-item.component';
import { NewsService } from '../../services/news.service';
import { News } from '../../model/news';
import { NewsActions } from '../../store/actions/news.actions';
import { getNews } from '../../store/reducers/selector';
import { news ,NewsState} from '../../store/reducers/news.reducer';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: []
})
export class NewsComponent implements OnInit {
  sectionNewsList: any;

  constructor(private actions: NewsActions,private store: Store<NewsState>,
    private route: ActivatedRoute, private newsService : NewsService,private location: Location) { 
      let sectionName;
      this.route.params.subscribe(data => { sectionName = data.id; });
      console.log("NewsComponent COnstructor");
    }

  ngOnInit() {
    console.log("News Component ngOnInit() : ");
    let sectionName;

    this.route.params.subscribe( params => {sectionName= params['id']
        console.log("NewsComponent route subscribe sectionName =>  " + sectionName);
      // send this sectionName to newsService. Subscribe newsService and get the newsList
        this.newsService.getSectionNews(sectionName)
        .subscribe((data) => {

          this.sectionNewsList = data.results;

          this.store.dispatch(this.actions.LoadSectionNews(this.sectionNewsList));
          //this.sectionNewsList = data;
          //console.log(data);
        });

    });
      // now, get news from store
      this.store.select(state => state.newsList).subscribe(res => {
        // this.allSections$ = res;
         this.sectionNewsList = res;
         console.log(res);
        });
  
  }
}

import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { News, NewsResponse } from '../model/news';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {

  constructor(public http: Http) { }

  getSectionNews(sectionName: string): Observable<any> {
    // fetch news of that sectionName
    let baseUrl   = 'https://api.nytimes.com/svc/topstories/v2/' + sectionName + '.json?api-key=315a5a51483b469a918246dc2753b339';
    return this.http
      .get(`${baseUrl}`)
      .map(res => {
        console.log("getSectionNews : "+res);
          return res.json()
            //.map((itm: News[])  => { 
            //return itm})
            });
  }
}

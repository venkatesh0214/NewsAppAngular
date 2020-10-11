import { SectionsComponent } from './components/sections/sections.component';
import { Routes }   from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import {NewsItemComponent} from './components/news/news-item/news-item.component';

export const routes: Routes     = [
    { path: '', redirectTo: 'section/home', pathMatch: 'full'},
    {path:'foo', component:NewsComponent},
    { path: 'section/:id', component: NewsComponent}
];

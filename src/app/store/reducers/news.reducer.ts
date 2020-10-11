import { NewsActions } from './../actions/news.actions';
import { Action } from '@ngrx/store';
import { News } from '../../model/news';

// define actions
export const LOAD_SECTION_NEWS = '[News] LOAD_SECTION_NEWS';
export const FILTER_SUBSECTION = '[News] FILTER_SUBSECTION';

// define state interface
export interface NewsState {
    newsList: News[];
    filter: string;
}

// initial state
export const initialState: NewsState = {
    newsList: [],
    filter: ''
};

// implement actions
export function news (state = initialState, action: Action) {
    switch (action.type) {
        case LOAD_SECTION_NEWS: {
            return {
                //newsList: [],
                newsList : action.payload,
                filter: ''
            };
        }
        case FILTER_SUBSECTION: {
            //var newsListTemp : News[];
            console.log("NewsReducer Filter_subsection =>  " + action.payload +  "  action.type => " +action.type);
            //newsListTemp= state.newsList.filter(item => item.subsection == action.payload);
            return {
                newsList: state.newsList,
                filter: action.payload
            };
        }
        default:
            return state;
    }
}

export const getNewsList = (state: any) => {
    state.newsList.filter((item: { subsection: any; }) => item.subsection == state.filter);
};

export const getFilter = (state: any) => {
    return state.filter;
};

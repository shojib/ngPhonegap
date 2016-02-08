import {Component, View, OnInit, Inject} from 'angular2/core';
import {Factory} from './files/factory';
import {NgModel} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({ 
    selector: 'article',
    providers: [Factory, HTTP_PROVIDERS]
})

@View({ 
    directives: [NgModel],
    templateUrl: './modules/article/tmpl/article.html'
})

export class Article implements OnInit {
    private searchQuery: String;
    private articles: any;
    private errorMessage: any;
    
    ngOnInit() { 
        this.getArticles(this.searchQuery);
    }
    
    constructor (private factory: Factory) {
        this.searchQuery = 'Technology';
    }
    
    getArticles (query) {
        this.factory.getArticles(query)
            .subscribe(
                articles => this.setArticles(articles),
                error =>  this.errorMessage = <any>error,
                () => this.completed())
    }
    
    setArticles (articles) {
        this.articles = articles;
    }
    
    setError (error) {
        this.errorMessage = error;
    }
    
    completed () {
        console.log('Completed: ' + this.articles[0].multimedia[0].url);
    }
}


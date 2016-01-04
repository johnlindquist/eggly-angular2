import {Component} from 'angular2/core';
import {CategoriesService} from '../providers/categories-service';
import {Category} from '../providers/category-model';

@Component({
  selector: 'categories',
  providers: [ CategoriesService ],
  template: require('./categories.tmpl.html'),
  styles: [ require('./categories.css') ]
})

export class Categories {
    public categories: Category[] = undefined;

    constructor(public CategoriesService: CategoriesService) {};

    ngOnInit() {
        this.CategoriesService.getCategories()
            .then(
                (data: Category[]) => this.categories = data,
                error => console.error(error)
            );
    }
}

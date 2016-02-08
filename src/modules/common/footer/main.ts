import {Component, View} from 'angular2/core';

@Component({ 
  selector: 'footer-widget'
})

@View({ 
  templateUrl: './modules/common/footer/tmpl/footer.html'
})

export class Footer {
    currentYear = new Date().getFullYear();
    date = this.currentYear > 2016 ? 2016 + '-' + this.currentYear : 2016;
}


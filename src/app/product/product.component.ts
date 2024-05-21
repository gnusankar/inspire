import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 
  constructor(private router: ActivatedRoute, private common: CommonService) {

  }

  ngOnInit() {
    this.router.queryParams.subscribe((data) => {
      console.log(data)
    })
  }

  
}

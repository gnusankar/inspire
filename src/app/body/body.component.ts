import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  userData: any = [];
  constructor(private router: Router, private common: CommonService) { }

  ngOnInit() {
      this.common.getUsersAllData().subscribe((data: any) => {
        this.userData = data;
        // console.log(data)
        data.forEach((value: any, index: number) => {
          if(index < 10) {
          this.getUserDetails(value.id)
          }

        })
      })

  }

  getUserDetails(id: any) {
    if(id) {
      this.common.getUserDetail(id).subscribe((data:any) => {

        this.userData = this.userData.map((i: any) => {
          
           if(i.id == data.id) {
              i.email = data.email
              i.name = data.name
           }
           return i;
        })
      })
    }
   
  }

  goToProduct(value: any) {
    
    // let ans = JSON.stringify(value.id)
    let data = {
      user: value.id
    }

    this.router.navigate(['/product'], {queryParams: data})

  }
}

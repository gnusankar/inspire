import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CommonService } from './common.service';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  {path: 'product', component: ProductComponent},
  {path: '', component: BodyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  

}

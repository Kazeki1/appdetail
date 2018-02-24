import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product/product-detail.component';
import { ProductGuardService } from './product/product-guard.service';
import { ProductService } from './product/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    WelcomeComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'product', component: ProductListComponent },
      {
        path: 'product/:id',
        canActivate: [ProductGuardService],
        component: ProductDetailComponent
      },
      { path: 'welcome', component: WelcomeComponent },
    ]),
    HttpClientModule

  ],
  providers: [ProductGuardService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

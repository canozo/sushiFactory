import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SushisComponent } from './components/sushis/sushis.component';
import { SushiItemComponent } from './components/sushi-item/sushi-item.component';
import { SushiItemCreateComponent } from './components/sushi-item-create/sushi-item-create.component';

@NgModule({
  declarations: [
    AppComponent,
    SushisComponent,
    SushiItemComponent,
    SushiItemCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}

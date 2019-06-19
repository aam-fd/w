import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DemoMaterialModule } from './material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { SmallBoxComponent } from './components/small-box/small-box.component';
import { LargeBoxComponent } from './components/large-box/large-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SmallBoxComponent,
    LargeBoxComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule
  ],
  exports: [

  ],
  providers: [], // services
  bootstrap: [AppComponent]
})
export class AppModule { }

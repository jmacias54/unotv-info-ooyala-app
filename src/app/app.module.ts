import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InfoOoyalaComponent } from './info-ooyala/info-ooyala.component';
import { DetailOoyalaComponent } from './detail-ooyala/detail-ooyala.component';
import { CallWSService } from './shared/call-ws.service';


@NgModule({
  declarations: [
    AppComponent,
    InfoOoyalaComponent,
    DetailOoyalaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ CallWSService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

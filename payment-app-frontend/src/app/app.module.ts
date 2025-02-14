import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // ✅ Import the Routing Module
import { AppComponent } from './app.component'; // ✅ Import the AppComponent
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent // ✅ Declare the AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([])// ✅ Import AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // ✅ Bootstrap AppComponent
})
export class AppModule {}
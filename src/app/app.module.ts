import { WorkerAppModule } from '@angular/platform-webworker';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MultiplyService } from "app/multiply.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   BrowserModule,
    // WorkerAppModule,
  ],
  providers: [MultiplyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { DisplayService } from './services/index';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatButtonModule, MatIconModule, MatProgressBarModule, MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatTableModule
  ],
  providers: [DisplayService],
  bootstrap: [AppComponent]
})
export class AppModule { }

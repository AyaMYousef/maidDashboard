import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [HttpClientModule, BrowserModule, FormsModule, MaterialModule],
  imports: [MaterialModule],
  providers: [
    provideAnimations(),
    provideHttpClient(
      withInterceptors([

      ])
    ),
  ],
})
export class CoreModule {}

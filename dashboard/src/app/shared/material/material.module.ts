import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
  ],
  providers: [

  ],
})
export class MaterialModule {
  constructor() { }



}

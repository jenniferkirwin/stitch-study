import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';

// Materialize Components
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { StitchesOverviewComponent } from './stitches-overview/stitches-overview.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StitchesListViewComponent } from './stitches-list-view/stitches-list-view.component';
import { StitchesCardViewComponent } from './stitches-card-view/stitches-card-view.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StitchesOverviewComponent,
    SearchbarComponent,
    StitchesListViewComponent,
    StitchesCardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Start Materialize Components
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

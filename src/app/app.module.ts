import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuatschComponent } from './quatsch/quatsch.component';
import { ConjureAnimalsComponent } from './spells/conjure-animals/conjure-animals.component';
import { SpellsComponent } from './spells/spells.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DefinedPipe } from './defined.pipe'




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpellsComponent,
    ConjureAnimalsComponent,
    QuatschComponent,
    DefinedPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatTooltipModule,
    MatExpansionModule,
    MatGridListModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

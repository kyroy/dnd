import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConjureAnimalsComponent } from './spells/conjure-animals/conjure-animals.component';
import { HomeComponent } from './home/home.component';
import { SpellsComponent } from './spells/spells.component';
import { QuatschComponent } from './quatsch/quatsch.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quatsch', component: QuatschComponent },
  { 
    path: 'spells',
    children: [
      { path: '', component: SpellsComponent },
      { path: 'conjure-animals', component: ConjureAnimalsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

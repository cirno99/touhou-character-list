import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './component/characters/characters.component';
import { AboutComponent } from './component/about/about.component';
import { CharacterDetailComponent } from './component/character-detail/character-detail.component';
const routes: Routes = [
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
   {
    path: 'character/:name',
    component: CharacterDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './component/characters/characters.component';
import { AboutComponent } from './component/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CharacterImgComponent } from './component/character-img/character-img.component';
import { ThumbnailPipe } from './pipe/thumbnail.pipe';
import { CharacterDetailComponent } from './component/character-detail/character-detail.component';
import { CharacterDataComponent } from './component/character-data/character-data.component';
import { CharacterWorksComponent } from './component/character-works/character-works.component';
import { CharacterWorkDetailComponent } from './component/character-work-detail/character-work-detail.component';
import { CharacterMusicComponent } from './component/character-music/character-music.component';
@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    AboutComponent,
    NavbarComponent,
    CharacterImgComponent,
    ThumbnailPipe,
    CharacterDetailComponent,
    CharacterDataComponent,
    CharacterWorksComponent,
    CharacterWorkDetailComponent,
    CharacterMusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

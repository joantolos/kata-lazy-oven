import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RecipeComponent } from './components/steps/recipe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LazyOvenService } from './services/lazy-oven.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SettingsComponent,
    RecipeComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'settings', component: SettingsComponent},
      {path: 'steps', component: RecipeComponent},
      {path: '', redirectTo: '/settings', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [LazyOvenService],
  bootstrap: [AppComponent]
})
export class AppModule { }

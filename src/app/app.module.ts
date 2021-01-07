import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { LazyOvenService } from './services/lazy-oven.service';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SettingsComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'settings', component: SettingsComponent},
      {path: 'recipe', component: RecipeComponent},
      {path: '', redirectTo: '/settings', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
    MatSelectModule,
    FormsModule,
  ],
  providers: [LazyOvenService],
  bootstrap: [AppComponent]
})
export class AppModule { }

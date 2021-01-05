import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StepsComponent } from './components/steps/steps.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsService } from './services/settings.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SettingsComponent,
    StepsComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'settings', component: SettingsComponent},
      {path: 'steps', component: StepsComponent},
      {path: '', redirectTo: '/settings', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

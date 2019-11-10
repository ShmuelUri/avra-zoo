import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeastPanelComponent } from './comps/panels/beast-panel/beast-panel.component';
import { BirdsPanelComponent } from './comps/panels/birds-panel/birds-panel.component';
import { WildsPanelComponent } from './comps/panels/wilds-panel/wilds-panel.component';
import { BeastCardComponent } from './comps/cards/beast-card/beast-card.component';
import { BirdsCardComponent } from './comps/cards/birds-card/birds-card.component';
import { WildsCardComponent } from './comps/cards/wilds-card/wilds-card.component';
import { HeaderComponent } from './comps/genral/header/header.component';
import { NevComponent } from './comps/genral/nev/nev.component';
import { PaginatorComponent } from './comps/genral/paginator/paginator.component';
import { FooterComponent } from './comps/genral/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BeastPanelComponent,
    BirdsPanelComponent,
    WildsPanelComponent,
    BeastCardComponent,
    BirdsCardComponent,
    WildsCardComponent,
    HeaderComponent,
    NevComponent,
    PaginatorComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

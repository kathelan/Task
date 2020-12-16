import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TasksSharedModule } from 'app/shared/shared.module';
import { TasksCoreModule } from 'app/core/core.module';
import { TasksAppRoutingModule } from './app-routing.module';
import { TasksHomeModule } from './home/home.module';
import { TasksEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TasksSharedModule,
    TasksCoreModule,
    TasksHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TasksEntityModule,
    TasksAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class TasksAppModule {}

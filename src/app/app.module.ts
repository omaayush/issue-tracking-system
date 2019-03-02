import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { IssueCardMiniComponent } from './issue-card-mini/issue-card-mini.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { IssuesListComponent } from './issues-list/issues-list.component';
import { IssueDetailsComponent } from './issue-details/issue-details.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DashboardComponent,
    HeaderComponent,
    IssueCardMiniComponent,
    IssuesListComponent,
    KanbanBoardComponent,
    NavComponent,
    IssueDetailsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

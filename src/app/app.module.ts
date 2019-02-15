import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { IssueCardMiniComponent } from './issue-card-mini/issue-card-mini.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueDetailsComponent } from './issue-details/issue-details.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IssueCardMiniProgressComponent } from './issue-card-mini-progress/issue-card-mini-progress.component';
import { GraphComponent } from './graph/graph.component';
import { ModalComponent } from './modal/modal.component';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown.component';
import { AssigneeListComponent } from './assignee/assignee-list/assignee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    KanbanBoardComponent,
    HeaderComponent,
    NavComponent,
    DashboardComponent,
    CreateComponent,
    IssueCardMiniComponent,
    IssueListComponent,
    IssueDetailsComponent,
    IssueCardMiniProgressComponent,
    GraphComponent,
    ModalComponent,
    SelectDropdownComponent,
    AssigneeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import {StanzaComponent} from './stanza/stanza.component';

const routes: Routes = [
  { path: '',   redirectTo: 'app-home', pathMatch: 'full'},
  { path: 'app-login', component: LoginComponent },
  { path: 'app-chat', component: ChatComponent },
  { path: 'app-home', component: HomeComponent },
  { path: 'app-stanza', component: StanzaComponent },
  { path: 'app-chat/app-stanza',   redirectTo: 'app-stanza', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

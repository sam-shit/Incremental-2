import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTeamsComponent } from './list-teams/list-teams.component';
import { FindTeamComponent } from './find-team/find-team.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { AddTeamComponent } from './add-team/add-team.component';

const routes: Routes = [
  {path : 'listteams', component : ListTeamsComponent},
  {path : 'listteam/:id', component : FindTeamComponent},
  {path : 'addplayer', component : AddPlayerComponent},
  {path : 'addteam', component : AddTeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

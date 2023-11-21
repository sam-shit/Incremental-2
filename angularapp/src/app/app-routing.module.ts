import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTeamsComponent } from './list-teams/list-teams.component';
import { FindTeamComponent } from './find-team/find-team.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { DeleteTeamComponent } from './delete-team/delete-team.component';

const routes: Routes = [
  {path : 'listteams', component : ListTeamsComponent},
  {path : 'listteam/:id', component : FindTeamComponent},
  {path : 'addplayer', component : AddPlayerComponent},
  {path : 'addteam', component : AddTeamComponent},
  {path : 'editteam/:id', component : EditTeamComponent},
  {path : 'deleteteam/:id', component : DeleteTeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

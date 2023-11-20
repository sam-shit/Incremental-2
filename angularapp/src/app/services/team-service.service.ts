import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITeam } from '../model/iteam';
import { IPlayer } from '../model/iplayer';

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {

  constructor(private httpclient : HttpClient) { }

  private url = 'https://8080-addabcfedcbbadfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin'

  getTeams() : Observable<ITeam[]> {
    return this.httpclient.get<ITeam[]>(this.url + '/ListTeam')
  }

  getTeam(id : number) : Observable<ITeam> {
    return this.httpclient.get<ITeam>(this.url + '/ListTeam/' + id)
  }

  getPlayer(teamId : number) : Observable<IPlayer[]> {
    return this.httpclient.get<IPlayer[]>(this.url + '/DisplayTeamPlayers/(id)?id=' + teamId)
  }

  httpOptions = {headers : new HttpHeaders({'Content-type': 'application/json'})}

  AddPlayer(player : IPlayer) : Observable<IPlayer> {
    return this.httpclient.post<IPlayer>(this.url + '/AddPlayer', player, this.httpOptions)
  }

  AddTeam(team : ITeam) : Observable<ITeam> {
    return this.httpclient.post<ITeam>(this.url + '/AddTeam', team, this.httpOptions)
  }

  EditTeam(id : number)



}

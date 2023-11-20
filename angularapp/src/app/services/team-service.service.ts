import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  getPlayer(id : number) : Observable<IPlayer[]> {
    return this.httpclient.get<IPlayer[]>(this.url + '/DisplayTeamPlayers/(id)?id=' + id)
  }



}

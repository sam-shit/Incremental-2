import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from '../services/team-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ITeam } from '../model/iteam';

@Component({
  selector: 'app-find-team',
  templateUrl: './find-team.component.html',
  styleUrls: ['./find-team.component.css']
})
export class FindTeamComponent implements OnInit {

  id : number
  teamdata : ITeam

  constructor(private ms : TeamServiceService, private ar : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    const tid = this.ar.snapshot.paramMap.get('id')
    this.id = Number(tid)
    this.getTeam(this.id)
  }

  getTeam(id : number) {
    this.ms.getTeam(id).subscribe((data : ITeam) => {
      this.teamdata = data
      console.log(this.teamdata)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})

export class DeveloperComponent implements OnInit {
  
  public developer : Developer;

  constructor(){ }

  ngOnInit(): void {
    this.developer = new Developer ("jean", "jores", 56, "male", "lorem ipsume", []);
    this.developer.skills.push(new Skill ("Html", "logo", "www.skill.com"));
  }

}

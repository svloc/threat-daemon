import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-edit-risk',
  templateUrl: './create-edit-risk.component.html',
  styleUrls: ['./create-edit-risk.component.scss']
})
export class CreateEditRiskComponent implements OnInit {

  riskForm: FormGroup;
  selectedFileName:any='';
  constructor(private router:Router) { }

  ngOnInit(): void {

    this.riskForm = new FormGroup({
      risk_id: new FormControl(''),
      component_name: new FormControl(''),
      threat_title: new FormControl(''),
      attack_surface: new FormControl(''),
      attack_goal: new FormControl(''),
      multiple_vulnerabilities: new FormControl(''),
      risk_name: new FormControl(''),
      risk_desc: new FormControl(''),
      risk_calculator: new FormControl(''),
      comments: new FormControl(''),
    });
  }

  onSubmit() {

  }

  onCloseClick() {
    this.router.navigate(['project-list']);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-edit-counter-measure',
  templateUrl: './create-edit-counter-measure.component.html',
  styleUrls: ['./create-edit-counter-measure.component.scss']
})
export class CreateEditCounterMeasureComponent implements OnInit {

  counterMeasuresForm: FormGroup;
  selectedFileName:any='';
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.counterMeasuresForm = new FormGroup({
      risk_id: new FormControl(''),
      threat_title: new FormControl(''),
      status: new FormControl(''),
      remediation: new FormControl(''),
      counter_measure_comments: new FormControl(''),
    });
  }

  onSubmit() {

  }

  onCloseClick() {
    this.router.navigate(['project-list']);
  }

}

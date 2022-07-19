import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, OnInit,ViewChild} from '@angular/core';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-create-edit-threats',
  templateUrl: './create-edit-threats.component.html',
  styleUrls: ['./create-edit-threats.component.scss']
})
export class CreateEditThreatsComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  threatForm: FormGroup;
  selectedFileName:any='';
  constructor(private router:Router) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
   }

  ngOnInit(): void {
    this.threatForm = new FormGroup({
      threat_id: new FormControl(''),
      creator_name: new FormControl(''),
      owner_name: new FormControl(''),
      component_name: new FormControl(''),
      threat_type: new FormControl(''),
      use_case: new FormControl(''),
      threat_desc: new FormControl(''),
      threat_status: new FormControl(''),
      liklihood: new FormControl(''),
      comments: new FormControl(''),
    });
  }

  onSubmit() {

  }

  onCloseClick() {
    this.router.navigate(['project-list']);
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.fruits.push(value);
    }
   // event?.chipInput!.clear();
    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

}

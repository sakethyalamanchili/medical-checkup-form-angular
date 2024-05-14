import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-evaluation',
  standalone: true,
  imports: [MatFormFieldModule, CommonModule, NgSelectModule, ReactiveFormsModule],
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.css'
})
export class EvaluationComponent {
  medicalForm:any;

  constructor(private formBuilder:FormBuilder) {

  }

  ngOnInit() {
    this.initializeForm()
  }

  initializeForm() {
    this.medicalForm = this.formBuilder.group({
    name:['',[Validators.required, Validators.pattern(/^.{1,50}$/)]], // 1 to 50 characters only
    age:['',[Validators.required, Validators.min(1), Validators.max(100)]],
    gender:['Select Gender',Validators.required],
    address:['',Validators.required],
    diagnosis:['', Validators.required],
    contact:['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    email:['',[Validators.required, Validators.email]],
    personalHistory:[''],
    familyHistory:[''],
    painScore:['Select Pain Score']
    });
  }

  submitForm() {
    if(this.medicalForm.valid) {
      console.log("Form is submitted", this.medicalForm.value);
    }
  }
}

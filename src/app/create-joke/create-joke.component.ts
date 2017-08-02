import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-create-joke',
  templateUrl: './create-joke.component.html',
  styleUrls: ['./create-joke.component.css']
})
export class CreateJokeComponent implements OnInit {
  public jokeForm: FormGroup 
  constructor(
    private fb: FormBuilder
  ) {
    this.createJokeForm() 
   }

  ngOnInit() {
  }

  createJokeForm() {
    this.jokeForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    })
  }

  onSubmit() {
    console.log(this.jokeForm.value)
  }

  isValid() {
    return this.jokeForm.status == 'VALID'
  }
}

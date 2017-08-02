import { Component, OnInit } from '@angular/core'
<<<<<<< HEAD
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'

=======
import { JokeService } from './../services/jokes.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
>>>>>>> streaming
@Component({
  selector: 'app-create-joke',
  templateUrl: './create-joke.component.html',
  styleUrls: ['./create-joke.component.css']
})
export class CreateJokeComponent implements OnInit {
  public jokeForm: FormGroup 
  constructor(
    private fb: FormBuilder,
    private jokeService: JokeService
  ) {
    this.createForm()
   }

   createForm() {
     this.jokeForm = this.fb.group({
       title: ['', [
         Validators.required 
       ]], 
       content: ['', [
         Validators.required, 
         Validators.minLength(5)
       ]]
     })
   }

  ngOnInit() {
  }

<<<<<<< HEAD
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
=======
  onSubmit() {
    console.log(this.jokeForm.value )
    this.jokeService.createJoke(this.jokeForm.value)
                    .then(resp => {
                      console.log(resp)
                    })
  }

>>>>>>> streaming
}

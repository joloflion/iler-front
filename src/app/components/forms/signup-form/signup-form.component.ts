import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {

  userGroup = [
    {
      key: 'Agriculteur',
      value: 'AGR'
    },
    {
      key: 'Coach',
      value: 'ING'
    },
    {
      key: 'Acheteur',
      value: 'ACH'

    },
    {
      key: 'Investisseur',
      value: 'INV'

    }

  ]

  public signUpForm!: FormGroup

  public selected: any = null;
  constructor(
    public authService: AuthService,
    private fb: FormBuilder
    ){
     this.signUpForm = fb.group(
      {
        userEmail: ['', [Validators.email, Validators.required]],
        userPwd:   ['', [Validators.minLength(4), Validators.required]],
        name:      ['', [Validators.required]]
      }
     )
  }

  signUp(){
     console.log('clicked')
    this.authService.SignUp(this.signUpForm.get('userEmail')?.value , this.signUpForm.get('userPwd')?.value, this.signUpForm.get('name')?.value, this.selected.value)
  }

  isFormValid(): boolean{
    return this.signUpForm.valid && this.selected !== null;
  }
}

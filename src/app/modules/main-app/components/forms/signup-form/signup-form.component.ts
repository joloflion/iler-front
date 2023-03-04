import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {

  public signUpForm!: FormGroup

  public selected: any = null;
  constructor(
    public authService: AuthService,
    private fb: FormBuilder
    ){
     this.signUpForm = this.fb.group(
      {
        userEmail: ['', [Validators.email, Validators.required]],
        userPwd:   ['', [Validators.minLength(6), Validators.required]],
        name:      ['', [Validators.required]],
        pwdVerif:  ['', [Validators.required, this.validateVerifPwd.bind(this)]]
      }
     )
  }

  validateVerifPwd(control: FormControl){
    if(this.signUpForm?.get('userPwd')?.value !== control.value){
      return {invalidPwdVerif: true}
    }
    return null;
  }

  signUp(){
    this.authService
    .SignUp(this.signUpForm.get('userEmail')?.value , this.signUpForm?.get('userPwd')?.value, this.signUpForm?.get('name')?.value)
  }



}

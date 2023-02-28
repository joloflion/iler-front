import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {

  public errorMessage: string = "";
  public loading: boolean = false;
  public signUpForm!: FormGroup

  public selected: any = null;
  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    private loader: LoaderService
    ){
      loader.isLoading.subscribe(v => this.loading = v)
     this.signUpForm = fb.group(
      {
        userEmail: ['', [Validators.email, Validators.required]],
        userPwd:   ['', [Validators.minLength(4), Validators.required]],
        name:      ['', [Validators.required]],
        pwdVerif:  ['', [Validators.required]]
      }
     )
  }

  signUp(){

    this.authService
    .SignUp(this.signUpForm.get('userEmail')?.value , this.signUpForm.get('userPwd')?.value, this.signUpForm.get('name')?.value, this.selected.value)
  }

  isFormValid(): boolean{
    return this.signUpForm.valid && this.selected !== null;
  }
}

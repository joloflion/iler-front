import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent {
  errorMessage: string = "";
  loading: boolean = false;
  constructor(
    public authService:AuthService,
    public loader: LoaderService){
       loader.isLoading.subscribe(v => this.loading = v)
  }

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(6), Validators.required]),
  });

  submit() {
    this.loader.show()
    if (this.form.valid) {
      console.log
      this.authService.SignIn( this.form.value.email, this.form.value.password)
      .then(() => {
        this.loader.hide()
      })
      .catch((err) =>{
          this.errorMessage = "Email ou mot de passe invalid";
          this.loader.hide()
      },
      )
    }
  }


}

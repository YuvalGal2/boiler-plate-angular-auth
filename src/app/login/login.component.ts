import {Component, Input, OnInit}  from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../services/shared/auth.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() error: string | null;
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    server: new FormControl(''),

  });
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      this.authService.authenticate(
        this.form.value.username,
        this.form.value.password,
        this.form.value.server).subscribe((result) => {
          this.router.navigate(['/']);
      });
    }
  }
}

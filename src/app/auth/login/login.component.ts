import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private connexionService: AuthService) {
  }

  ngOnInit(): void {
  }

  onLogin(f: NgForm): void {
    if (f.valid) {
      this.connexionService.login(f.value.email, f.value.password).subscribe((result) => {
        this.connexionService.accessToken = result.access_token;
        this.connexionService.refreshToken = result.refresh_token;
        this.router.navigate(['my-team']);
      });
    }
  }

  onRegister(f: NgForm): void {
    if (f.valid) {
      this.connexionService.register(f.value.email, f.value.password).subscribe(() => {
        this.router.navigate(['my-team']);
      });
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  cpfCnpj = '';
  error = false;
  loading = false;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
  }

  submit() {
    this.loading = true;
    this.error = false;
    this.auth.mailing(this.cpfCnpj).subscribe(mailings => {
      this.auth.me.isLogged = (mailings.indexOf('GRANDESCONTASDS') >= 0);
      this.error = (!this.auth.me.isLogged);
      this.loading = false;
    }, () => {
      this.error = true;
      this.loading = false;
    });
  }
}

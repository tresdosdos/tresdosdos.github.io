import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {TokenizingService} from '../../services/tokenizing.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  constructor(private token: TokenizingService,
              public auth: AuthService,
              private router: Router) { }
  logOut(): void {
    this.token.deleteLocalToken();
    this.router.navigate(['/']);
  }
  ngOnInit() {
  }

}

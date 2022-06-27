import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      this._router.navigate(["/dashboard"]);
    }
  }

}

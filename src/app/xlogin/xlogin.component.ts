import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-xlogin',
  templateUrl: './xlogin.component.html',
  styleUrls: ['./xlogin.component.scss']
})
export class XloginComponent implements OnInit {

  username: any = {
    name: null,
    email: null,
  }
  
  constructor(private router: Router) { }

  onSubmit(form) {
    console.log(form)

    console.log(this.username.value);

    this.router.navigate(['/home']);

    //console.log(this.username)
  }

  ngOnInit(): void {

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public httpc:HttpClient, public route: Router) { }

  ngOnInit() {
  }
  logout(){
    this.route.navigate(['/login']);
  }

}

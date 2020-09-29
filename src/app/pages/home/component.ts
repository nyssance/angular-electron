import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({ templateUrl: './home.html' })
export class Home implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void { }
}

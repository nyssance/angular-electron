import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { Home } from './component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [Home],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'home', component: Home }
    ]),
    SharedModule
  ]
})
export class Module { }

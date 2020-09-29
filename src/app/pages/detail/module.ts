import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { Detail } from './component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [Detail],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'detail', component: Detail }
    ])
  ]
})
export class Module { }

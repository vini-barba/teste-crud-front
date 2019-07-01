import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UserComponent } from './components/user/user.component'

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: '*', redirectTo: 'user', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

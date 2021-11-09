import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componente nuevo
import { UiComponent } from './ui/ui.component';


const routes: Routes = [
  { path: 'ui', component: UiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

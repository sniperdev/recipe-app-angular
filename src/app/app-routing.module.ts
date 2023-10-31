import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingEnum } from './shared/utils/enums/app.routing.enum';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: AppRoutingEnum.home,
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

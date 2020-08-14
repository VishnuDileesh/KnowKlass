import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassRoomComponent } from './pages/class-room/class-room.component';

const routes: Routes = [
  { path: 'classroom/10c', component: ClassRoomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

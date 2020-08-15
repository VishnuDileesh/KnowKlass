import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassRoomComponent } from './pages/class-room/class-room.component';
import { StreamRoomComponent } from './pages/stream-room/stream-room.component';

const routes: Routes = [
  { path: 'classroom/10c', component: ClassRoomComponent },
  {
    path: 'classroom/10c/:roomid/:channelname',
    component: StreamRoomComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

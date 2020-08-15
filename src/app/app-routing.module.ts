import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherStreamComponent } from './pages/teacher-stream/teacher-stream.component';
import { ClassRoomComponent } from './pages/class-room/class-room.component';
import { StreamRoomComponent } from './pages/stream-room/stream-room.component';
import { StudentStreamComponent } from './pages/student-stream/student-stream.component';

const routes: Routes = [
  { path: 'classroom/10c', component: ClassRoomComponent },
  {
    path: 'classroom/10c/:roomid/:channelname',
    component: StreamRoomComponent,
  },
  {
    path: 'classroom/10c/teacher/:roomid/:channelname',
    component: TeacherStreamComponent,
  },
  {
    path: 'classroom/10c/student/:roomid/:channelname',
    component: StudentStreamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

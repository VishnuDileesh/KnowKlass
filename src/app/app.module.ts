import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxAgoraModule } from 'ngx-agora';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassRoomComponent } from './pages/class-room/class-room.component';

import { environment } from '../environments/environment.prod';
import { StreamRoomComponent } from './pages/stream-room/stream-room.component';

// const agoraConfig: AgoraConfig = {
//   AppID: environment.AGORA_APPID,
// };

@NgModule({
  declarations: [AppComponent, ClassRoomComponent, StreamRoomComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxAgoraModule.forRoot({ AppID: environment.AGORA_APPID }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxAgoraModule, AgoraConfig } from 'ngx-agora';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassRoomComponent } from './pages/class-room/class-room.component';

import { environment } from '../environments/environment.prod';

const agoraConfig: AgoraConfig = {
  AppID: environment.AGORA_APPID,
};

@NgModule({
  declarations: [AppComponent, ClassRoomComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxAgoraModule.forRoot(agoraConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

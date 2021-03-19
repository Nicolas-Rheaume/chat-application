import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FormsModule } from '@angular/forms';
import { ChatService } from './services/chat.service';
import { SocketService } from './services/socket.service';
import { HomeComponent } from './components/home/home.component';
import { RoomComponent } from './components/room/room.component';
import { RoomGuard } from './guards/room.guard';

const config: SocketIoConfig = { 
  url: 'http://localhost:8081', 
  options: {
    withCredentials: false,
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    ChatService,
    SocketService,
    RoomGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

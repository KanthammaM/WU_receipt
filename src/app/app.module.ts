import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { SendFlowModule } from './components/send-flow/send-flow.module';

@NgModule({
  declarations: [
        AppComponent        
  ],
  imports: [
      BrowserModule,
      //RouterModule,
      AppRoutingModule,
      SendFlowModule
  ],
  providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
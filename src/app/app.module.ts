import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { TesteComponent } from './teste/teste/teste.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiertivaNgclassComponent } from './diertiva-ngclass/diertiva-ngclass.component';
import { DiertivasNgstyleComponent } from './diertivas-ngstyle/diertivas-ngstyle.component';

@NgModule({
  declarations: [
    AppComponent,
   
    DiretivaNgifComponent,
        TesteComponent,
        DiretivaNgswitchComponent,
        DiretivaNgforComponent,
        DiertivaNgclassComponent,
        DiertivasNgstyleComponent
        
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

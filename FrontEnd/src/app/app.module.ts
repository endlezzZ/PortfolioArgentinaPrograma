import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolbarComponent,
    SobreMiComponent,
    EstudiosComponent,
    HabilidadesComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({
      backgroundOpacity: 1,
      radius: 60,
      space: -10,
      unitsColor: "#d1d1d1",
      outerStrokeGradient: true,
      outerStrokeWidth: 10,
      outerStrokeColor: "#0d6efd",
      outerStrokeGradientStopColor: "#0006ff",
      innerStrokeColor: "#737373",
      innerStrokeWidth: 10,
      titleColor: "#ffffff",
      subtitleColor: "#ffffff",
      animateTitle: false,
      animationDuration: 1500,
      showUnits: false,
      showBackground: false,
      clockwise: false,
      startFromZero: false,
      lazy: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from './timer/timer.component';
import { PrefixZeroPipe } from './prefix-zero.pipe';
import { RouterModule, Routes } from '@angular/router';
import { AllWorkoutsComponent } from './all-workouts/all-workouts.component';
import { HttpClientModule } from '@angular/common/http';
import { PanelModule } from 'primeng/panel';
import { SingleWoodComponent } from './single-wood/single-wood.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { LogComponent } from './log/log.component';
import { TableModule } from 'primeng/table';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { InputTextModule } from 'primeng/inputtext';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'all-wod',
    component: AllWorkoutsComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'log',
    component: LogComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'all-wod/:id',
    component: SingleWoodComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
];

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    PrefixZeroPipe,
    AllWorkoutsComponent,
    SingleWoodComponent,
    LogComponent,
    LoginComponent,
    NavigationComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    CardModule,
    TabMenuModule,
    DialogModule,
    BrowserAnimationsModule,
    ToggleButtonModule,
    MenuModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    PanelModule,
    TableModule,
    InputTextModule,
    DialogModule,
    PanelModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

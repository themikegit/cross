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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AccordionModule } from 'primeng/accordion';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddNewComponent } from './add-new/add-new.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HeaderComponent } from './header/header.component';

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
    path: 'add-new',
    component: AddNewComponent,
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
    AddNewComponent,
    HeaderComponent,
  ],
  imports: [
    ReactiveFormsModule,
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
    MessageModule,
    MessagesModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    PanelModule,
    TableModule,
    TabViewModule,
    InputTextModule,
    DialogModule,
    PanelModule,
    AccordionModule,
    AngularFireModule.initializeApp(environment.firebase),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

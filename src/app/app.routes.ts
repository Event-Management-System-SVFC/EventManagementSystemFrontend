import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventlistComponent } from './components/eventlist/eventlist.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';


export const routes: Routes = [{ path: 'about', component: AboutComponent },
    { path: 'home', component: HomeComponent }, { path: 'services', component: ServicesComponent },
    { path: 'dashboard', component: DashboardComponent}, { path: 'eventlist', component: EventlistComponent},
    { path: 'userlogin', component:UserloginComponent },
];

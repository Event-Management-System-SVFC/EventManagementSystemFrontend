import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


export const routes: Routes = [{ path: 'about', component: AboutComponent },
    { path: 'home', component: HomeComponent }, { path: 'services', component: ServicesComponent },
    { path: 'dashboard', component: DashboardComponent}
];

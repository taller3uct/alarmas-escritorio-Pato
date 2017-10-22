import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AlarmasComponent } from './components/alarmas/alarmas.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent  },
    { path: 'about', component: AboutComponent  },
    { path: 'alarmas', component: AlarmasComponent  },
    { path: '**', pathMatch: 'full', redirectTo: 'home'  }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });

import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', children: [
            { path: '', loadComponent:() => import('./pages/home/home.component').then(c=> c.HomeComponent)},
            {path:'details', loadComponent:()=> import('./pages/details-news/details-news.component').then(c=> c.DetailsNewsComponent)},
            {path:'about', loadComponent:()=> import('./pages/about/about.component').then(c=> c.AboutComponent)}

        ]
    }
];

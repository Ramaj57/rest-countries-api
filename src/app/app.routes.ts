import { Routes } from '@angular/router';
import { CountryHomeComponent } from './country-home/country-home.component';
import { CountryDetailsComponent } from './country-details/country-details.component';

export const routes: Routes = [
    {
        path:'', component: CountryHomeComponent,
    },
    {
        path:'home', component:CountryHomeComponent,
        children:[
            {
                path:':place', component: CountryDetailsComponent,
            
            }
        ]
            
    },
    
];

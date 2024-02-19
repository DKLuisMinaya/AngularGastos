import { Routes } from '@angular/router';
import { GastosComponent } from './gastos/gastos.component';
import { ShowComponent } from './show/show.component';

export const routes: Routes = [
    {path: 'gastos', component: GastosComponent },
    {path: 'show', component: ShowComponent }
];

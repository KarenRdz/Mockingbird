import { Routes } from '@angular/router';

import { Home } from '../components/Home/home.component';
import { ParentSession } from '../components/ParentSession/parent-session.component';

export const appRoutes: Routes = [
    {path: 'mockingbird', component: Home},
    {path: 'mockingbird/parentSession', component: ParentSession},
    { path: '**', redirectTo: '/mockingbird' }
];
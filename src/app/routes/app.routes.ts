import { Routes } from '@angular/router';

import { Home } from '../components/Home/home.component';
import { ParentSession } from '../components/ParentSession/parent-session.component';
import { ChildDetail } from '../components/ChildDetail/child-detail.component';

export const appRoutes: Routes = [
    {path: 'mockingbird', component: Home},
    {path: 'mockingbird/parentSession', component: ParentSession,
     children:[
        {path:'detail/:name',component:ChildDetail}
    ]},
    { path: '**', redirectTo: '/mockingbird' }
];
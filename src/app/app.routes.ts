import { Routes } from '@angular/router';
import { UserExperienceComponent } from '../pages/user-experience/user-experience.component';

export const routes: Routes = [
    {path: '', redirectTo: '/user-experience.component', pathMatch: 'full'},
    {path: 'user-experience.component', component: UserExperienceComponent}
];

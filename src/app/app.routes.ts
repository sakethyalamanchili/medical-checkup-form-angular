import { Routes } from '@angular/router';
import { MedicalFormModule } from './medical-form/medical-form.module';

export const routes: Routes = [
    {
        path: 'medical-form', 
        loadChildren: () => import('./medical-form/medical-form.module').then(m => m.MedicalFormModule)}
];

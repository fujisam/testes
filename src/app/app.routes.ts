import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './security/auth.guard';

export const ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES, { useHash: true });
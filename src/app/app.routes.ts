import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

import { ContactComponent } from './pages/contact/contact.component';
import { AnoncesComponent } from './pages/anonces/anonces.component';
import { AnunciosComponent } from './pages/anuncios/anuncios.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { PagoComponent } from './components/pago/pago.component';






 export const routes: Routes = [   {
     path: '',
     component: LayoutComponent,
     children: [
       { path: '', component: HomeComponent },     //pagina principal
       { path: 'home', redirectTo: '', pathMatch: 'full' },  // Redirigir '/home' a la página principal
       { path:'anonces/:id', component: AnoncesComponent},
       { path: 'anuncios/:categoria', component: AnunciosComponent },
       { path: 'about', component: AboutComponent },
       { path: 'contacto', component: ContactComponent },
       { path: 'login', component: LoginComponent },
       { path: 'registrar', component: RegistroComponent },
       { path: 'pago', component: PagoComponent },

     ]
   }
 ];

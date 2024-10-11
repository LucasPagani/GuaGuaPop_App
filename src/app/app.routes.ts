import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { ServComponent } from './pages/serv/serv.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AnoncesComponent } from './pages/anonces/anonces.component';





 export const routes: Routes = [   {
     path: '',
     component: LayoutComponent,
     children: [
       { path: '', component: HomeComponent },        // Ruta para la página de inicio
       { path: 'home', redirectTo: '', pathMatch: 'full' },  // Redirigir '/home' a la página principal
       { path:'anonces/:id', component: AnoncesComponent},
       { path: 'about', component: AboutComponent },
       { path: 'productos', component: ProductComponent },
       { path: 'servicios', component: ServComponent },
       { path: 'contacto', component: ContactComponent },
     ]
   }
 ];

import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { ServComponent } from './pages/serv/serv.component';
export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [

      { path:'',component:HomeComponent},
      { path:'about',component: AboutComponent },
      { path: 'productos', component: ProductComponent},
      { path: 'servicios', component: ServComponent}

    ]
  }
];

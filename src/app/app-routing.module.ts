import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategorieComponent } from './pages/categories/add-categorie/add-categorie.component';
import { ListCategoriesComponent } from './pages/categories/list-categories/list-categories.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddEmployeeComponent } from './pages/employee/add-employee/add-employee.component';
import { ListEmployeesComponent } from './pages/employee/list-employees/list-employees.component';
import { LoginComponent } from './pages/login/login.component';
import { AddProductComponent } from './pages/products/add-product/add-product.component';
import { ListProductsComponent } from './pages/products/list-products/list-products.component';
import { AddTableComponent } from './pages/tables/add-table/add-table.component';
import { ListTablesComponent } from './pages/tables/list-tables/list-tables.component';
import { AuthUserGuard } from './services/espace-client/auth-user.guard';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: SidebarComponent, children: [
      {
        path: 'dashboard', component: DashboardComponent,
        canActivate: [AuthUserGuard]
      },
      {
        path: 'employees', component: ListEmployeesComponent
      },
      {
        path: 'add-employee', component: AddEmployeeComponent
      },
       {
        path: 'add-category', component: AddCategorieComponent
      },
      {
        path: 'categories', component: ListCategoriesComponent
      },
      {
        path: 'products', component: ListProductsComponent
      },
      {
        path: 'add-product', component: AddProductComponent
      },
      {
        path: 'tables', component: ListTablesComponent
      },
      {
        path: 'add-table', component: AddTableComponent
      },
    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

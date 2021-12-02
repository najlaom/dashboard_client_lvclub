import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './pages/employee/add-employee/add-employee.component';
import { ListEmployeesComponent } from './pages/employee/list-employees/list-employees.component';
import { ListCategoriesComponent } from './pages/categories/list-categories/list-categories.component';
import { AddCategorieComponent } from './pages/categories/add-categorie/add-categorie.component';
import { AddProductComponent } from './pages/products/add-product/add-product.component';
import { ListProductsComponent } from './pages/products/list-products/list-products.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    AddEmployeeComponent,
    ListEmployeesComponent,
    ListCategoriesComponent,
    AddCategorieComponent,
    AddProductComponent,
    ListProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { AddEmployeeComponent } from './pages/employee/add-employee/add-employee.component';
import { ListEmployeesComponent } from './pages/employee/list-employees/list-employees.component';
import { ListCategoriesComponent } from './pages/categories/list-categories/list-categories.component';
import { AddCategorieComponent } from './pages/categories/add-categorie/add-categorie.component';
import { AddProductComponent } from './pages/products/add-product/add-product.component';
import { ListProductsComponent } from './pages/products/list-products/list-products.component';
import { AddTableComponent } from './pages/tables/add-table/add-table.component';
import { ListTablesComponent } from './pages/tables/list-tables/list-tables.component';

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
    ListProductsComponent,
    AddTableComponent,
    ListTablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    QRCodeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

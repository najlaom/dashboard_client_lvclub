import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  imageUrl : string =''; 
  fileToUpload : File = null ;
  listCategories: any = [];

  constructor(private categoryService: CategoriesService) { }

  async ngOnInit(){
    await this.getCategories();
  }

  handleFileInput(file : FileList){
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    } 
    reader.readAsDataURL(this.fileToUpload);
  }


  OnSubmit(name, slug, image, parentId){

    this.categoryService.addCategory(name.value, slug.value, this.fileToUpload, parentId.value,).subscribe(
      response => {
        name.value = null;
        slug.value = null;
        image.value =null;
        parentId.value = null;
       
       
        
      }, (error) => {
        if(error.status == 400){
          console.log({error : error})
        }
        if(error.status == 500){
          console.log({error  })
        }
   
      });
    
  }  
  getCategories() {

    this.categoryService.getCategories().then(
      (data) => {
        this.listCategories = data;
        console.log("datacccccccccc")
        console.log(data)

      }
    )
  }

}

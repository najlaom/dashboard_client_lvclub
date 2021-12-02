import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  myForm: FormGroup;
  constructor(private categoryService: CategoriesService,
    private fb: FormBuilder) { 
      this.myForm = this.fb.group({    
        name :  new FormControl('', [Validators.required]),
        
      })
    }

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

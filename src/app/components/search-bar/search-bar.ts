import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Auto } from '../../Interfaces/auto';
import { CurrencyPipe, NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  imports: [CurrencyPipe, NgClass, NgStyle],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  @Input({required:true}) autos:Auto[]=[] // with required: wehn calling app search bar in app.html it should have autos
  @Output() onSelectAuto=new EventEmitter<Auto>()
  // output c pour creer un evenement personnalisé "onSelectAuto" et facilite la communication entre pere et fils
  selectedAutos:Auto[]=[]

  selectAutolist(brand:string){
    this.selectedAutos=this.autos.filter(
      //x=>x.brand==brand
      //x=>x.brand.includes(brand)
      x=>x.brand.toLowerCase().startsWith(brand.toLowerCase())
      
    )
    console.log(this.selectedAutos)
    //console.table(this.selectedAutos)
  }

  showDetails(auto:Auto){
    this.onSelectAuto.emit(auto)
  }

  test_function(){
    
  }

}

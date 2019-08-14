import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // declaring and initializing the values to variables.
  title = 'Welcome to Agaanee';
  site = "http://Agyaanee.com";

  // declaring the variable
  MoreInfo:string;
  moreSite = []; // array of type any
  oneMoreExample:webtype[];
  constructor(){
    // initializing the values in constructer.
    this.MoreInfo = "Blogging site";
    this.moreSite = [
      {Name:"Agyaanee",Url:"http://agyaanee.com/"},
      {Name:"W3school",Url:"https://www.w3schools.com/"},
      {Name:"Angular IO",Url:"https://angular.io/"},
    ];
    console.log(this.moreSite)
    console.log(typeof(this.moreSite));
    
    this.oneMoreExample = [
      new webtype("Agyaanee","http://agyaanee.com/"),
      new webtype("W3school","https://www.w3schools.com/"),
      new webtype("Angular IO","https://angular.io/")
    ];
    console.log(this.oneMoreExample);
    console.log(typeof(this.oneMoreExample));
    
  }

// Now you know how to use:

// Interpolation with double curly braces to display a component property.
// ngFor to display an array of items.
// A TypeScript class to shape the model data for your component and display properties of that model.
// ngIf to conditionally display a chunk of HTML based on a boolean expression.
  
}

export class webtype{
  // make sure name and url should be public
  constructor(public Name:String,public Url:String){
    
    
  }
}

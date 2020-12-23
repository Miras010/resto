import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var bigsize = "300"; //Размер большой картинки
    var smallsize = "150"; //Размер маленькой картинки
    function changeSizeImage(im) {
      if(im.height == bigsize) im.height = smallsize;
      else im.height = bigsize;
    }
  }

}

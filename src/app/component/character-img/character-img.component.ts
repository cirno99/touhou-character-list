import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../../services/image.service';
@Component({
  selector: 'app-character-img',
  templateUrl: './character-img.component.html',
  styleUrls: ['./character-img.component.less'],
  providers: [ImageService]
})
export class CharacterImgComponent implements OnInit {
  constructor(private imageService: ImageService) {}
  imgs: {[key: string]: string};
  // imgs;
  @Input() name: string;
  ngOnInit(): void {
    this.imageService.getImages().subscribe(data => {
      this.imgs = data[0];
      // console.log(data);
    });
  }
  showCharacterImage() {
    const str =  this.imgs[`${this.name}`];
    console.log(str);
    return str;
  }
}

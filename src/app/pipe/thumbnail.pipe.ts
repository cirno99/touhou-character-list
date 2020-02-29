import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {
  transform(url: string): string {
    return url.replace('large', 'bmiddle');
    // return url.replace('large', 'small');
  }
}

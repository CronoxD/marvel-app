import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagem'
})
export class ImagemPipe implements PipeTransform {

  transform(value: string[]): string {

    if( !value) {
      return 'assets/img/noimage.png';
    }

    return `${value['path']}.${value['extension']}`;
  }

}

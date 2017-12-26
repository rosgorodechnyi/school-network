import { Pipe, PipeTransform } from '@angular/core';
import { appConfig } from '../app-config';

@Pipe({
  name: 'snImage'
})
export class ImagePipe implements PipeTransform {

  transform(value: string): string {
    return `${appConfig.api}${value}`;
  }

}

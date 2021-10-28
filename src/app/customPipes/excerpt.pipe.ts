import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(content: string) {
    const postSummary = content.replace(/(<([^>]+)>)/ig, '');
    if (postSummary.length > 400) {
      return postSummary.substr(0, 400) + ' [...]';
    } else {
      return postSummary;
    }
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { User } from './User.class';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {



  transform(use: User[], search: string = ""): User[] {

    search = search.toLowerCase();
    let selected: User[] = [];
    for(let u of use){
      if(u.userName.toLowerCase().includes(search) || u.email.toLowerCase().includes(search)) {
        selected.push(u);
      }
    }
    return selected;
  }

}

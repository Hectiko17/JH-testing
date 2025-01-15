
import { ConsoleModule } from '../console.module';


export class CreateConsoleDto implements Omit <ConsoleModule,'id'>{
  
  
  type:string;

  year: number;

  price:number;


}
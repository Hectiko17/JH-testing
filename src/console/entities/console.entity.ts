import { Column, PrimaryColumn } from "typeorm";
import { ConsoleModule } from "../console.module"

export class Console implements ConsoleModule {
@PrimaryColumn()
 id:number;
 @Column()
type:string;
@Column()
year:number;
@Column()
price:number;

}

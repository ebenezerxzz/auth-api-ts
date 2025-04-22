import { PrimaryGeneratedColumn , Column, Entity } from "typeorm";
import { EntityUserInterface } from "../../interfaces/entity_user_interface";

@Entity('user')
export class User {
    constructor({ id, email, phone, createdat, password }: EntityUserInterface) {
        this.id = id;
        this.email = email;
        this.phone = phone;
        this.createdat = createdat;
        this.password = password;
    }
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    createdat: string;

    @Column()
    password: string
}
import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";
import { InterfaceEntityUser } from "../../interfaces/entity_user_interface"

@Entity('user')
export class User {
    constructor({id, username, email, phone, createdat, password}: InterfaceEntityUser) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.createdat = createdat;
        this.password = password;
    }

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;
    @Column()
    email: string;
    @Column()
    phone: string;
    @Column()
    createdat: string;
    @Column()
    password: string;
}
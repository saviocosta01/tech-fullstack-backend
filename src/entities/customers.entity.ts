import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import Contact from './contacts.entity';

@Entity('customers')
export class Customer {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    full_name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({"length": 11})
    phone: string;

    @CreateDateColumn({type: 'date'})
    registration_Date: string;

    @OneToMany(() => Contact, (contact) => contact.customer)
    contacts: Contact[];
}

export default Customer
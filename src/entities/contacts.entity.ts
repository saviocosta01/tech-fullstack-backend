import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import Customer from './customers.entity';

@Entity('contacts')
export class Contact {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    full_name: string;

    @Column()
    email: string;

    @Column({"length": 11})
    phone: string;

    @CreateDateColumn({type: 'date'})
    registration_Date: string;

    @ManyToOne(() => Customer)
    customer: Customer
}

export default Contact
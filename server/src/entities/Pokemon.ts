import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Pokemon extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}
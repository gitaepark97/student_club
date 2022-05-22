import { Entity, Column, ManyToOne } from 'typeorm'
import { Base } from '../Base'
import { User } from './User'

@Entity('CLUB')
export class Club extends Base {
  @Column()
  name: string

  @Column({ nullable: true })
  university: string

  @ManyToOne(() => User, { onDelete: 'SET NULL' })
  chairman: User

  @ManyToOne(() => User, { onDelete: 'SET NULL' })
  vice_chairman: User
}

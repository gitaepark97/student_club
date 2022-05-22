import { Entity, Column, ManyToOne } from 'typeorm'
import { Base } from '../Base'
import { Club } from './Club'

@Entity('CATEGORY')
export class Category extends Base {
  @ManyToOne(() => Club, { onDelete: 'CASCADE' })
  club: Club

  @Column()
  name: string
}

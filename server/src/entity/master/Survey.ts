import { Entity, Column, ManyToOne } from 'typeorm'
import { Base } from '../Base'
import { Category } from './Category'

@Entity('SURVEY')
export class Survey extends Base {
  @ManyToOne(() => Category, { onDelete: 'CASCADE' })
  category: Category

  @Column()
  title: string

  @Column({ default: 0 })
  is_anonymous: number

  @Column({ default: 0 })
  is_close: number

  @Column({ nullable: true, default: null })
  deadline: Date
}

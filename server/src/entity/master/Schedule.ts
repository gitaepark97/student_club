import { Entity, Column, ManyToOne } from 'typeorm'
import { Base } from '../Base'
import { Club } from './Club'

@Entity('SCHEDULE')
export class Schedule extends Base {
  @ManyToOne(() => Club, { onDelete: 'CASCADE' })
  club: Club

  @Column()
  title: string

  @Column({ nullable: true, default: null })
  place: string

  @Column()
  start_date: Date

  @Column()
  end_date: Date
}

import { Entity, Column, ManyToOne } from 'typeorm'
import { Base } from '../Base'
import { Survey } from './Survey'

@Entity('ANSWER')
export class Answer extends Base {
  @ManyToOne(() => Survey, { onDelete: 'CASCADE' })
  survey: Survey

  @Column({ nullable: true, default: null })
  title: string
}

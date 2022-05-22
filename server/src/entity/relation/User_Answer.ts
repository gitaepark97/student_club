import { Entity, Column, ManyToOne } from 'typeorm'
import { Base } from '../Base'
import { Answer } from '../master/Answer'
import { User } from '../master/User'

@Entity('USER_ANSWER')
export class User_Answer extends Base {
  @ManyToOne(() => User, { onDelete: 'CASCADE', nullable: true })
  user: User

  @ManyToOne(() => Answer, { onDelete: 'CASCADE' })
  answer: Answer
}

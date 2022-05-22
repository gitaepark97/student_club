import { Entity, Column, OneToOne, ManyToOne } from 'typeorm'
import { Base } from '../Base'
import { Category } from './Category'
import { User } from './User'

enum PostGrade {
  PUBLIC = 'public',
  EXECUTIVE = 'executive',
}

@Entity('POST')
export class Post extends Base {
  @OneToOne(() => Category, { onDelete: 'CASCADE' })
  club: Category

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  create_user: User

  @Column({ unique: true })
  title: string

  @Column({ type: 'text' })
  text: string

  @Column({ default: 0 })
  like: number

  @Column({ type: 'enum', enum: PostGrade, default: PostGrade.PUBLIC })
  grade: PostGrade
}

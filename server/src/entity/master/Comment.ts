import { Entity, Column, OneToOne, JoinColumn } from 'typeorm'
import { Base } from '../Base'
import { Post } from './Post'
import { User } from './User'

@Entity('COMMENT')
export class Comment extends Base {
  @OneToOne(() => Post)
  post: Post

  @OneToOne(() => User)
  @JoinColumn()
  user: User

  @OneToOne(() => Comment, { nullable: true })
  @JoinColumn()
  parents_comment: Comment

  @Column({ type: 'text' })
  text: string

  @Column({ default: 0 })
  like: number

  @Column({ default: 0 })
  is_secret: number
}

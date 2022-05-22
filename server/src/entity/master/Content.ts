import { Entity, Column, ManyToOne } from 'typeorm'
import { Base } from '../Base'
import { Post } from './Post'

@Entity('CONTENT')
export class Content extends Base {
  @ManyToOne(() => Post, { onDelete: 'CASCADE' })
  post: Post

  @Column()
  url: string
}

import { Entity, Column } from 'typeorm'
import { Base } from '../Base'

enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
  DEVELOPER = 'developer',
}

@Entity('USER')
export class User extends Base {
  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @Column({ default: 0 })
  is_confirm: number

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role: UserRole

  @Column()
  name: string

  @Column()
  university: string

  @Column()
  student_id: string

  @Column()
  age: number

  @Column({ nullable: true, default: null })
  profile_url: string

  @Column({ default: false })
  is_access: boolean

  @Column({ nullable: true, default: null })
  last_access_date: Date
}

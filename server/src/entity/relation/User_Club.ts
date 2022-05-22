import { Entity, Column, ManyToOne } from 'typeorm'
import { Base } from '../Base'
import { Club } from '../master/Club'
import { User } from '../master/User'

enum ClubRole {
  MEMBER = 'member',
  EXECUTIVE = 'executive',
}

@Entity('USER_CLUB')
export class User_Club extends Base {
  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User

  @ManyToOne(() => Club, { onDelete: 'CASCADE' })
  club: Club

  @Column({ type: 'enum', enum: ClubRole, default: ClubRole.MEMBER })
  role: ClubRole
}

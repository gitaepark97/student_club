import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

export class Base {
  @PrimaryGeneratedColumn('increment')
  id: number

  @CreateDateColumn()
  created_date: Date

  @UpdateDateColumn()
  updated_date: Date

  @Column({ default: false })
  is_delete: Boolean
}

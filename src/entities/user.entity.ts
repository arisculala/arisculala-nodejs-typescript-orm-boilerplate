/**
 * user entity
 */
import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryColumn({ name: 'id' })
  id: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Column({ name: 'username' })
  username: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'is_deleted' })
  isDeleted: boolean;

  @Column({ name: 'is_2fa_enable' })
  is2FAEnable: boolean;

  @CreateDateColumn({ name: 'created_at' }) // Automatically sets the column value to the current timestamp when a new row is inserted
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' }) // Automatically sets the column value to the current timestamp when a row is updated
  updatedAt: Date;
}

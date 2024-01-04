import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { CinemaEntity } from "../cinema/cinema.entity";

@Entity("users")
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 6 })
  color: string;

  @Column({ length: 15 })
  ip: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn({ nullable: true, default: null })
  deleted_at: Date;

  @OneToMany(() => TicketEntity, (ticket) => ticket.user)
  tickets: TicketEntity[];
}

@Entity("tickets")
export class TicketEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 2 })
  seats_row: string;

  @Column()
  seats_column: number;

  @ManyToOne(() => UserEntity, (user) => user.tickets)
  @JoinColumn({ name: "user_id" })
  user: UserEntity;

  @ManyToOne(() => CinemaEntity, (cinema) => cinema.tickets)
  @JoinColumn({ name: "cinema_id" })
  cinema: CinemaEntity;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn({ nullable: true, default: null })
  deleted_at: Date;
}

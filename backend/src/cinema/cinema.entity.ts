import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { TicketEntity } from "../ticket/ticket.entity";

@Entity("cinemas")
export class CinemaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @OneToMany(() => SeatsRowEntity, (seats_row) => seats_row.cinema)
  seats_row: SeatsRowEntity[];

  @OneToMany(() => TicketEntity, (ticket) => ticket.cinema)
  tickets: TicketEntity[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn({ nullable: true, default: null })
  deleted_at: Date;
}

@Entity("seats_row")
export class SeatsRowEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 2, unique: true })
  row: string;

  @Column()
  max_column: number;

  @ManyToOne(() => CinemaEntity, (cinema) => cinema.seats_row)
  cinema: CinemaEntity;
}

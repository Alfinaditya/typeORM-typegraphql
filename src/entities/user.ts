import { Field, ID, ObjectType, registerEnumType } from 'type-graphql';
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	CreateDateColumn,
} from 'typeorm';

export enum UserRole {
	ADMIN = 'admin',
	USER = 'user',
}

registerEnumType(UserRole, {
	name: 'role',
});

@ObjectType()
@Entity()
export class User extends BaseEntity {
	@Field(_type => ID)
	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@Field()
	@Column({ unique: true })
	name!: string;

	@Field()
	@Column({ unique: true })
	email!: string;

	@Column()
	password!: string;

	@Field()
	@CreateDateColumn()
	createdAt!: Date;

	@Field()
	@Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
	role!: UserRole;
}

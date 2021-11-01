import { Field, ID, ObjectType } from 'type-graphql';
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToMany,
} from 'typeorm';
import { Book } from './book';

@ObjectType()
@Entity()
export class Author extends BaseEntity {
	@Field(_type => ID)
	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@Field()
	@Column({ unique: true })
	name!: string;

	@Field(_type => [Book], { nullable: true })
	@OneToMany(() => Book, book => book.author)
	books!: Book[];
}

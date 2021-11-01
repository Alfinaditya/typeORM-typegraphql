import { Field, ID, ObjectType } from 'type-graphql';
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	ManyToOne,
	RelationId,
} from 'typeorm';
import { Author } from './author';

@ObjectType()
@Entity()
export class Book extends BaseEntity {
	@Field(_type => ID)
	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@Field()
	@Column({ unique: true })
	name!: string;

	@Field()
	@Column()
	pages!: number;

	@Field({ nullable: true })
	@Column({ nullable: true })
	releaseYear?: number;

	@Field(_type => Author)
	@ManyToOne(() => Author, author => author.books, { onDelete: 'CASCADE' })
	author!: Author;

	@Field(_type => ID)
	@RelationId((book: Book) => book.author)
	authorId!: string;
}

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from './Product';

@Entity('category')
export class Category {
    // @PrimaryGeneratedColumn() indica que o campo é a chave primária (PK) e será auto-incrementado
    @PrimaryGeneratedColumn()
    id: number;

    // @Column define que esta propriedade será uma coluna no banco
    // length: 100 → tamanho máximo do campo
    // nullable: false → não pode ser nulo
    @Column({ length: 100, nullable: false })
    name: string;

    @OneToMany(() => Product, (product) => product.category)
         products:Product[];
}
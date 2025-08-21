import { Category } from './Category';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

 @Entity('products')
 export class Product {
     // @PrimaryGeneratedColumn() indica que o campo é a chave primária (PK) e será auto-incrementado
     @PrimaryGeneratedColumn()
     id: number;
 
     // @Column define que esta propriedade será uma coluna no banco
     // length: 100 → tamanho máximo do campo
     // nullable: false → não pode ser nulo
     @Column({ length: 100, nullable: false })
     name: string;

    @Column()
     price:number;
    
     @ManyToOne(() => Category, (category) => category.products)
     category:Category;
    }
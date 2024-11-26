create table client(
id_client int primary key,
nome_cliente varchar(80) not null, 
sobrenome_client varchar(80) not null

)
select*from client

create table product(
id_product int primary key,
name_product varchar(30) not null,
description text not null, 
price numeric check (price>0) not null,
qtde_stock smallint not null default 0
)

create table request(
id_request serial primary key,
fk_client int not null references client(id_client),
fk_produto int not null references product(id_product),
qtde smallint not null
)
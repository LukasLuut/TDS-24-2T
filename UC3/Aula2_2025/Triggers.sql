create table cliente(
ID_cliente int primary key,
salario money not null 
)

insert into cliente (ID_cliente, salario)
values(1,1.200)

update cliente set salario=1200 where ID_cliente=1

create table historico_salarial (
	ID_historico serial primary key,  
	ID_cliente int references cliente(ID_cliente),
	data_alteracao date,
	salario money
)


create or replace function atualizacao_salario() returns 
trigger as $$ begin
insert into historico_salarial (ID_cliente, data_alteracao,salario)
values(New.ID_cliente, NOW(), New.salario);
return null;end;$$language plpgsql; 

create or replace trigger trigger_salario
after insert or update on cliente 
for each row
execute function atualizacao_salario() 

insert into cliente (ID_cliente, salario)
values (2,2800)

select * from historico_salarial

update cliente set salario=9650 where ID_cliente=1

create table produto (
id_produto serial primary key,
preco money not null
)
create table historico_preco(
id_historico_preco serial primary key,
fk_produto int references produto(id_produto),
data_alteracao date,
preco money
)

create or replace function atualizacao_preco() returns 
trigger as $$ begin
insert into historico_preco(fk_produto,data_alteracao,preco)
values (New.id_produto,NOW(),New.preco);
return null;end;$$language plpgsql; 

create or replace trigger trigger_preco
after insert or update on produto
for each row
execute function atualizacao_preco()

select * from historico_preco
select * from produto

insert into produto (id_produto,preco)
values (3,1100)


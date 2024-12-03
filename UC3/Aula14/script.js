/*
Agregação em subconsultas 
DQL(Data Query Language)AVG

Calculando média de valores
SELECT AVG(ATRIBUTO) as [nome da pesquisa] from (TABELA)

CRIANDO UMA TABELA PARA CALCULAR 
select avg (num_pedido) from
(select fk_client, count(*) as num_pedido from request group by fk_client)as media_pedido


SOMATORIAS 

SELECT SUM (atributo) FROM nome_relação (tabela)

Exibir a quantidade de usuarios do sexo masculino e a quantidade de usuarios do sexo feminino:

select genero, count (genero) as qtde_genero from client group by genero




*/

create table Personagem(
    id_personagem serial primary key,
    nome_personagem varchar(80) not null
    )
    
    create table item (
    id_item serial primary key not null,
    nome_item varchar(80) not null 
    )
    
    create table cenario (
    id_cenario serial primary key not null, 
    nome_cenario varchar(80)
    )
    
    create table coletado (
    id_cenario serial primary key not null,
    fk_personagem int not null references personagem (id_personagem),
    fk_item int not null references item(id_item),
    fk_cenario int not null references cenario(id_cenario)
    )
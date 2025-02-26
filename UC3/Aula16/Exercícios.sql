create or replace view produtos_comprados as 
select PE.id_request as pedido, nome_cliente as cliente,
PR.name_product as produto, PE.Qtde as quantidade, 
PE.Qtde*PR.price as fatura 
from request PE
join product PR
on PE.fk_produto=PR.id_product
join client CL
on PE.fk_client=cl.ID_client

select * from product


create or replace view produtos_categoria as 
select name_product as Produto,
description as Descricao, price as Preco, qtde_stock as Qtde, nome_categoria as Categoria
from product
left join categoria
on product.fk_categoria = categoria.id_categoria

select * from produtos_categoria

create or replace view pedidos_feitos as 
select nome_cliente as cliente,
id_request as Pedido
from client
right join request
on request.fk_client=client.id_client


select * from pedidos_feitos


create or replace view Usuarios_cliente as 

select nome_cliente as cliente,
name_product as produto,
id_request as numero_pedido,
qtde as quantidade
from client
left join request 
on client.id_client=request.fk_client
join product
on product.id_product=request.fk_produto


create index on client(id_client)
create index on product using hash(id_product)
create index on request(id_request)
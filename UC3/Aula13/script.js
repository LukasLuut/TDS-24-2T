/* 
1) contar o número de produtos na tabela de produto:
select count(*) from produt

2)contar o número de pedidos feitos pelo cliente 2
select count(*) from request where fk_client=2

3)contar o número de pedidos feitos do produto 1
select cont (*) as[aqui vai o nome que quero dar para tabela] pedido_1 from pedidos

4)contar o numero de clientes que fizeram pelo menos 1 pedido 
select count (distinct fk_client) from request

*/
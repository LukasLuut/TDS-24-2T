insert into product(id_product,name_product,description, price, qtde_stock)
values(3,'faca','Faca de esfaquear',15.00,20),
(4,'corda','corda de amarrar',19.00,30),
(5,'saco','saco de enssacar',1.00,50),
(6,'qBoa','água sanitária',15.00,20),
(7,'luva','luva cirúrgica',100.00,15),
(8,'máscara','máscara de assassino',15.00,20),
(9,'cloriforme','produto para sequestro',99.00,10),
(10,'carro','veículo de fuga',3.000,20);


insert into request(fk_client,fk_produto,qtde)
values(1,2,5),
(4,5,2),
(5,3,1),
(6,7,4),
(7,9,2),
(8,6,3),
(9,4,7),
(10,10,1),
(4,1,2),
(7,5,10);


insert into client(id_client,nome_cliente,sobrenome_client)
values(4,'Isadora','Pinto'),
(5,'Isadora','Rishtothen'),
(6,'Victória','Loló'),
(7,'Jão','Jorge'),
(8,'Vitor','Vitão'),
(9,'Vitor','Vitinho'),
(10,'Victória','Clonazepã')

select * from product
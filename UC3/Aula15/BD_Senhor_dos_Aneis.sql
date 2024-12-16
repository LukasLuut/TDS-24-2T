select * from personagem

INSERT INTO personagem (id_personagem, nome_personagem) VALUES
(5,'Galadriel'),
(6,'Isildur');

INSERT INTO cenario (id_cenario, nome_cenario) VALUES
(1, 'Floresta de Lothlórien'),
(2, 'Montanhas de Moria'),
(3, 'Campo de Batalha de Helm'),
(4,'Condado'),
(5,'Mordor');

INSERT INTO item (id_item, nome_item, preco) VALUES
(1, 'Espada Elfica', 500),
(2, 'Arco Longo', 300),
(3, 'Machado de Batalha', 400),
(4, 'Varinha Mágica', 600),
(5, 'Narsil',3000),
(6,'Um Anel',10000),
(7,'Lâmina Orc',100);

alter table item add preco int

INSERT INTO coletado (fk_personagem, fk_item, fk_cenario) VALUES
(1, 2, 1),
(2, 2, 2),
(3, 3, 4),
(4, 4, 3),
(1, 3, 3),
(6, 6, 5);


SELECT nome_personagem,nome_item
FROM personagem
INNER JOIN coletado
ON personagem.id_personagem = coletado.fk_personagem
INNER JOIN item
ON item.id_item = coletado.fk_item

SELECT nome_personagem, nome_cenario
from personagem
inner join coletado
on personagem.id_personagem = coletado.fk_personagem
inner join cenario
on cenario.id_cenario=coletado.fk_cenario


select * from coletado
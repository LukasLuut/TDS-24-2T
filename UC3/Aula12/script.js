/*
DDL

DQL(Data Query Language)
Consulta

SELECT* ou atributo FROM tabela
WHERE condicao

DML(Data Manipulation Language)



Exemplo:
CREATE TABLE clientes (
ID_Cliente INT PRIMARY KEY,
Nome_Cliente VARCHAR(20) NOT NULL,
Sobrenome_Cliente VARCHAR(40) NOT NULL
);



Para as chaves estrangeiras em Pedidos ela pode ser declarada de duas formas:

ID_Cliente INT NOT NULL REFERENCES clientes(ID_Cliente);

ID_Cliente INT NOT NULL,
FOREIGN KEY (ID_Cliente ) REFERENCES clientes(ID_Cliente);



Renomear tabela:
ALTER TABLE nome_tabela RENAME TO novo_nome;

Adicionar a coluna:
ALTER TABLE nome_tabela ADD nome_coluna tipo(número);

Apagar coluna:
ALTER TABLE nome_tabela DROP COLUMN nome_coluna;

Alterar o tipo de dado:
ALTER TABLE nome_tabela ALTER COLUMN nome_coluna TYPE novo_tipo;

Alterar restrições da coluna:
ALTER TABLE nome_tabela ALTER COLUMN nome_coluna SET NOT NULL;

*/
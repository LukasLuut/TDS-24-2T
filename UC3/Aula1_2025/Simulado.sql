create database Hogwarts_Legacy 

create table casa
id_casa serial primary key,
nome_casa varchar(80) not null

create table Materia 
id_materia serial primary key,
nome_materia varchar(80) not null 

create table personagem 
id_personagem serial primary key,
nome_personagem varchar(80) not null,
fk_casa int foreign key references casa (id_casa),
/*fk_feitico int foreign key references feitico(id_feitico)*/

create table professor
id_professor serial primary key,
fk_personagem int foreign key references personagem (id_personagem)
fk_materia int foreign key references materia(id_materia)

create table feitico
id_feitico serial primary key,
nome_feitico varchar(80) not null 

create table feitico_personagem
id_feitico_personagem int primary key,
fk_feitico int foreign key references feitico(id_feitico),
fk_personagem int foreign key references personagem(id_personagem)


insert into casa (id_casa, nome_casa)
VALUES (1, 'Grifinória'),
(2, 'Lufa-Lufa'),
(3, 'Sonserina'),
(4, 'Corvinal')

insert into materia (id_materia, nome_materia)
VALUES (1, 'Transfiguração'),
(2,'Feitiçaria'),
(3,'poções'),
(4,'Defesa contra artes das trevas'),
(5,'Astronomia'),
(6,'Voo'),
(7,'Trato das Criaturas Mágicas')

insert into feitico(id_feitico,nome_feitico)
VALUES (1, 'Lumos'),
(2,'Crucio'),
(3,'Alohomora'),
(4,'Wingardium leviosá'),
(5,'Expeliarmos'),
(6,'Avadah Kedavra'),
(7,'Imperium'),
(8,'Expecto Patronum'),
(9, 'Accio')

insert into personagem (id_personagem, nome, fk_casa)
VALUES (1, 'Alastor Moody',1),
(2,'Harry Potter',1),
(3,'Hermione Granger',1),
(4,'Ron Weasley',1),
(5,'Alvo Dumbledore',1),
(6,'Severus Snape',3),
(7,'Draco Malfoy',3),
(8,'Sirius Black',1),
(9,'Luna Lovegood',4),
(10,'Neville Longbottom',1),
(11,'Hagrid',1)

insert into professor (id_professor, fk_personagem, fk_materia)
VALUES (1,5,1),
(2,6,3),
(3,11,7),
(4,1,4)

insert into feitico_personagem(fk_personagem, fk_feitico)
VALUES 


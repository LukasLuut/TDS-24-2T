/* Lógico_1: */

CREATE TABLE Personagem (
    ID_Personagem int PRIMARY KEY,
    Nome varchar(80),
    Raca varchar(40),
    Descricao text,
    Afiliacao varchar(40)
);

CREATE TABLE Item (
    ID_Item int PRIMARY KEY,
    Nome varchar(80),
    Tipo varchar(40),
    Efeito text,
    Raridade text
);

CREATE TABLE Local (
    ID_Local int PRIMARY KEY,
    Nome varchar(80),
    Descricao text,
    Tipo text
);

CREATE TABLE Goron (
    Habilidade_especial text,
    fk_Personagem_ID_Personagem int PRIMARY KEY
);

CREATE TABLE Hyllian (
    Habilidade_especial text,
    fk_Personagem_ID_Personagem int PRIMARY KEY
);

CREATE TABLE Inventario__Tem (
    Quatidade int,
    fk_Personagem_ID_Personagem int,
    fk_Item_ID_Item int
);

CREATE TABLE relacao (
    fk_Personagem_ID_Personagem int,
    fk_Personagem_ID_Personagem_ int
);

CREATE TABLE estar (
    fk_Personagem_ID_Personagem int,
    fk_Local_ID_Local int
);
 
ALTER TABLE Goron ADD CONSTRAINT FK_Goron_2
    FOREIGN KEY (fk_Personagem_ID_Personagem)
    REFERENCES Personagem (ID_Personagem)
    ON DELETE CASCADE;
 
ALTER TABLE Hyllian ADD CONSTRAINT FK_Hyllian_2
    FOREIGN KEY (fk_Personagem_ID_Personagem)
    REFERENCES Personagem (ID_Personagem)
    ON DELETE CASCADE;
 
ALTER TABLE Inventario__Tem ADD CONSTRAINT FK_Inventario__Tem_1
    FOREIGN KEY (fk_Personagem_ID_Personagem)
    REFERENCES Personagem (ID_Personagem);
 
ALTER TABLE Inventario__Tem ADD CONSTRAINT FK_Inventario__Tem_2
    FOREIGN KEY (fk_Item_ID_Item)
    REFERENCES Item (ID_Item);
 
ALTER TABLE relacao ADD CONSTRAINT FK_relacao_1
    FOREIGN KEY (fk_Personagem_ID_Personagem)
    REFERENCES Personagem (ID_Personagem)
    ON DELETE RESTRICT;
 
ALTER TABLE relacao ADD CONSTRAINT FK_relacao_2
    FOREIGN KEY (fk_Personagem_ID_Personagem_)
    REFERENCES Personagem (ID_Personagem)
    ON DELETE RESTRICT;
 
ALTER TABLE estar ADD CONSTRAINT FK_estar_1
    FOREIGN KEY (fk_Personagem_ID_Personagem)
    REFERENCES Personagem (ID_Personagem)
    ON DELETE RESTRICT;
 
ALTER TABLE estar ADD CONSTRAINT FK_estar_2
    FOREIGN KEY (fk_Local_ID_Local)
    REFERENCES Local (ID_Local)
    ON DELETE RESTRICT;
	
/* Lógico_1_League_Of_Legends: */

CREATE TABLE Team (
    ID_Team Number(3) PRIMARY KEY,
    Name String(10),
    fk_Match_ID_Match Number(3)
);

CREATE TABLE Player (
    Level Number(2),
    Score Number(5),
    Region String(2),
    User_Name String(10),
    ID_Player Number(3) PRIMARY KEY,
    fk_Team_ID_Team Number(3)
);

CREATE TABLE Match (
    ID_Match Number(3) PRIMARY KEY,
    Result String(10),
    Duration Date_Time,
    Date_Time Date_Time
);

CREATE TABLE Champion (
    ID_Champion Number(3) PRIMARY KEY,
    Name String(10),
    Ability String(10),
    Damage_Type Number(5),
    Function String(10),
    fk_Player_ID_Player Number(3)
);

CREATE TABLE Offensive_Item (
    Magic_Damage Number(3),
    Physic_Damage Number(3),
    fk_Item_ID_Item Number(3) PRIMARY KEY
);

CREATE TABLE Defensive_Item (
    Magic_resist Number(3),
    Armor Number(3),
    fk_Item_ID_Item Number(3) PRIMARY KEY
);

CREATE TABLE Item (
    ID_Item Number(3) PRIMARY KEY,
    Cost Number(3),
    Description String(10),
    Effect String(10),
    Name String(10),
    fk_Match_ID_Match Number(3)
);

CREATE TABLE Consumable (
    Damage Number(3),
    HP Number(3),
    fk_Item_ID_Item Number(3) PRIMARY KEY
);

CREATE TABLE Player_Match_Game (
    fk_Match_ID_Match Number(3),
    fk_Player_ID_Player Number(3)
);
 
ALTER TABLE Team ADD CONSTRAINT FK_Team_2
    FOREIGN KEY (fk_Match_ID_Match)
    REFERENCES Match (ID_Match)
    ON DELETE RESTRICT;
 
ALTER TABLE Player ADD CONSTRAINT FK_Player_2
    FOREIGN KEY (fk_Team_ID_Team)
    REFERENCES Team (ID_Team)
    ON DELETE RESTRICT;
 
ALTER TABLE Champion ADD CONSTRAINT FK_Champion_1
    FOREIGN KEY (fk_Player_ID_Player)
    REFERENCES Player (ID_Player)
    ON DELETE RESTRICT;
 
ALTER TABLE Offensive_Item ADD CONSTRAINT FK_Offensive_Item_2
    FOREIGN KEY (fk_Item_ID_Item)
    REFERENCES Item (ID_Item)
    ON DELETE CASCADE;
 
ALTER TABLE Defensive_Item ADD CONSTRAINT FK_Defensive_Item_2
    FOREIGN KEY (fk_Item_ID_Item)
    REFERENCES Item (ID_Item)
    ON DELETE CASCADE;
 
ALTER TABLE Item ADD CONSTRAINT FK_Item_2
    FOREIGN KEY (fk_Match_ID_Match)
    REFERENCES Match (ID_Match)
    ON DELETE RESTRICT;
 
ALTER TABLE Consumable ADD CONSTRAINT FK_Consumable_2
    FOREIGN KEY (fk_Item_ID_Item)
    REFERENCES Item (ID_Item)
    ON DELETE CASCADE;
 
ALTER TABLE Player_Match_Game ADD CONSTRAINT FK_Player_Match_Game_1
    FOREIGN KEY (fk_Match_ID_Match)
    REFERENCES Match (ID_Match);
 
ALTER TABLE Player_Match_Game ADD CONSTRAINT FK_Player_Match_Game_2
    FOREIGN KEY (fk_Player_ID_Player)
    REFERENCES Player (ID_Player);
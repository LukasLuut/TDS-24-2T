/* Lógico_1_League_Of_Legends: */

CREATE TABLE Team (
    ID_Team INT PRIMARY KEY,
    Name VARCHAR(80),
    fk_Match_ID_Match INT
);

CREATE TABLE Player (
    Level INT,
    Score INT,
    Region VARCHAR(80),
    User_Name VARCHAR(80),
    ID_Player INT PRIMARY KEY,
    fk_Team_ID_Team INT
);

CREATE TABLE Match (
    ID_Match INT PRIMARY KEY,
    Result VARCHAR(10),
    Duration time,
    Date_Time time
);

CREATE TABLE Champion (
    ID_Champion INT PRIMARY KEY,
    Name VARCHAR(80),
    Ability VARCHAR(80),
    Damage_Type INT,
    Function VARCHAR(10),
    fk_Player_ID_Player INT
);

CREATE TABLE Offensive_Item (
    Magic_Damage INT,
    Physic_Damage INT,
    fk_Item_ID_Item INT PRIMARY KEY
);

CREATE TABLE Defensive_Item (
    Magic_resist INT,
    Armor INT,
    fk_Item_ID_Item INT PRIMARY KEY
);

CREATE TABLE Item (
    ID_Item INT PRIMARY KEY,
    Cost INT,
    Description VARCHAR(80),
    Effect VARCHAR(80),
    Name VARCHAR(80),
    fk_Match_ID_Match INT
);

CREATE TABLE Consumable (
    Damage INT,
    HP INT,
    fk_Item_ID_Item INT PRIMARY KEY
);

CREATE TABLE Player_Match_Game (
    fk_Match_ID_Match INT,
    fk_Player_ID_Player INT
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

	select * from champion
	
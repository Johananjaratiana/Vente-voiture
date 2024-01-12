INSERT INTO energie
	( id, nom, status) VALUES 
    ( DEFAULT, 'Essence', 0 ),
    ( DEFAULT, 'Diesel', 0 ),
    ( DEFAULT, 'Électrique', 0 );

INSERT INTO usage
	( id, nom, status) VALUES 
    ( DEFAULT, 'Quotidienne' , 0 ),
    ( DEFAULT, 'Transport de marchandises' , 0 ),
    ( DEFAULT, 'Loisir et tourisme' , 0 );

INSERT INTO taille
	( id, nom, status) VALUES 
    ( DEFAULT, 'Sous-compacte', 0 ),
    ( DEFAULT, 'Compacte', 0 ),
    ( DEFAULT, 'Intermédiaire', 0 ),
    ( DEFAULT, 'Full-Size', 0 ),
    ( DEFAULT, 'Fourgonnette', 0 ),
    ( DEFAULT, 'Camion', 0 ),
    ( DEFAULT, 'Berlin', 0 );

INSERT INTO type_moteur
	( id, nom, status) VALUES 
    ( DEFAULT, 'Moteur à explosion', 0 ),
    ( DEFAULT, 'Moteur à combustion', 0 ),
    ( DEFAULT, 'Moteur électrique', 0 ),
    ( DEFAULT, 'Moteur en étoile', 0 ),
    ( DEFAULT, 'Moteur à plat', 0 ),
    ( DEFAULT, 'Moteur en ligne', 0 ),
    ( DEFAULT, 'Moteur en V', 0 ),
    ( DEFAULT, 'Moteur en W', 0 );

INSERT INTO type_annonce
	( id, nom, status, commission) VALUES 
    ( DEFAULT, 'Annonces Sponsorisées', 0 , 2/100),
    ( DEFAULT, 'Annonces Premium', 0 , 3/100 ),
    ( DEFAULT, 'Annonces Featured', 0 , 4/100 ),
    ( DEFAULT, 'Annonces VIP', 0, 5/100 );
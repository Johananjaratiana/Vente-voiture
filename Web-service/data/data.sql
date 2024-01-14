CREATE SEQUENCE "public".profil_utilisateur_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".test_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".token_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".users_id_seq START WITH 1 INCREMENT BY 1;

CREATE  TABLE "public".profil_utilisateur ( 
	id                   integer DEFAULT nextval('profil_utilisateur_id_seq'::regclass) NOT NULL  ,
	nom                  varchar(50)  NOT NULL  ,
	CONSTRAINT profil_utilisateur_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".test ( 
	date_                timestamp DEFAULT CURRENT_TIMESTAMP   ,
	id                   bigint DEFAULT nextval('test_id_seq'::regclass) NOT NULL  ,
	nom                  varchar(255)    ,
	CONSTRAINT test_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".users ( 
	id                   integer DEFAULT nextval('users_id_seq'::regclass) NOT NULL  ,
	idprofile            integer  NOT NULL  ,
	nom                  varchar(50)  NOT NULL  ,
	mdp                  varchar(50)  NOT NULL  ,
	CONSTRAINT users_pkey PRIMARY KEY ( id ),
	CONSTRAINT fk_users_profil_utilisateur FOREIGN KEY ( idprofile ) REFERENCES "public".profil_utilisateur( id ) ON DELETE CASCADE ON UPDATE CASCADE 
 );

CREATE  TABLE "public".token ( 
	id                   integer DEFAULT nextval('token_id_seq'::regclass) NOT NULL  ,
	idusers              integer  NOT NULL  ,
	token                varchar(255)  NOT NULL  ,
	dtexp                date DEFAULT (CURRENT_DATE + '1 mon'::interval) NOT NULL  ,
	isvalidate           boolean DEFAULT true NOT NULL  ,
	CONSTRAINT token_pkey PRIMARY KEY ( id ),
	CONSTRAINT fk_token_users FOREIGN KEY ( idusers ) REFERENCES "public".users( id ) ON DELETE CASCADE ON UPDATE CASCADE 
 );

CREATE VIEW "public".v_test AS  SELECT test.date_,
    test.id,
    test.nom
   FROM test;

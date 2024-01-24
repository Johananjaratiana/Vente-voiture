CREATE SEQUENCE "public".annonce_favoris_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".annonce_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".couleur_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".energie_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".etat_annonce_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".marque_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".modele_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".pdp_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".photo_annonce_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".profil_utilisateur_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".taille_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".token_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".transmission_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".type_annonce_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".type_moteur_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".usage_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".users_id_seq START WITH 1 INCREMENT BY 1;

CREATE  TABLE "public".couleur ( 
	id                   integer DEFAULT nextval('couleur_id_seq'::regclass) NOT NULL  ,
	nom                  varchar(50)  NOT NULL  ,
	rgb                  varchar  NOT NULL  ,
	status               integer  NOT NULL  ,
	CONSTRAINT pk_couleur PRIMARY KEY ( id )
 );

CREATE  TABLE "public".energie ( 
	id                   integer DEFAULT nextval('energie_id_seq'::regclass) NOT NULL  ,
	nom                  varchar(50)  NOT NULL  ,
	status               integer DEFAULT 0 NOT NULL  ,
	CONSTRAINT pk_energie PRIMARY KEY ( id )
 );

CREATE  TABLE "public".marque ( 
	id                   integer DEFAULT nextval('marque_id_seq'::regclass) NOT NULL  ,
	nom                  varchar(50)  NOT NULL  ,
	status               integer DEFAULT 0 NOT NULL  ,
	CONSTRAINT pk_marque PRIMARY KEY ( id )
 );

CREATE  TABLE "public".modele ( 
	id                   integer DEFAULT nextval('modele_id_seq'::regclass) NOT NULL  ,
	nom                  varchar(50)  NOT NULL  ,
	status               integer DEFAULT 0 NOT NULL  ,
	CONSTRAINT pk_modele PRIMARY KEY ( id )
 );

CREATE  TABLE "public".profil_utilisateur ( 
	id                   integer DEFAULT nextval('profil_utilisateur_id_seq'::regclass) NOT NULL  ,
	nom                  varchar(50)  NOT NULL  ,
	CONSTRAINT profil_utilisateur_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".taille ( 
	id                   integer DEFAULT nextval('taille_id_seq'::regclass) NOT NULL  ,
	nom                  varchar(50)  NOT NULL  ,
	status               integer DEFAULT 0 NOT NULL  ,
	CONSTRAINT pk_taille PRIMARY KEY ( id )
 );

CREATE  TABLE "public".transmission ( 
	id                   integer DEFAULT nextval('transmission_id_seq'::regclass) NOT NULL  ,
	nom                  varchar(50)  NOT NULL  ,
	status               integer DEFAULT 0 NOT NULL  ,
	CONSTRAINT pk_transmission PRIMARY KEY ( id )
 );

CREATE  TABLE "public".type_annonce ( 
	id                   integer DEFAULT nextval('type_annonce_id_seq'::regclass) NOT NULL  ,
	nom                  varchar(50)  NOT NULL  ,
	status               integer DEFAULT 0 NOT NULL  ,
	commission           double precision  NOT NULL  ,
	niveau               integer  NOT NULL  ,
	CONSTRAINT pk_type_annonce PRIMARY KEY ( id )
 );

CREATE  TABLE "public".type_moteur ( 
	id                   integer DEFAULT nextval('type_moteur_id_seq'::regclass) NOT NULL  ,
	nom                  varchar(50)  NOT NULL  ,
	status               integer DEFAULT 0 NOT NULL  ,
	CONSTRAINT pk_type_moteur PRIMARY KEY ( id )
 );

CREATE  TABLE "public"."usage" ( 
	id                   integer DEFAULT nextval('usage_id_seq'::regclass) NOT NULL  ,
	nom                  varchar(50)  NOT NULL  ,
	status               integer DEFAULT 0 NOT NULL  ,
	CONSTRAINT pk_tbl PRIMARY KEY ( id )
 );

CREATE  TABLE "public".users ( 
	id                   integer DEFAULT nextval('users_id_seq'::regclass) NOT NULL  ,
	idprofile            integer  NOT NULL  ,
	nom                  varchar(50)  NOT NULL  ,
	mdp                  varchar(50)  NOT NULL  ,
	prenom               varchar  NOT NULL  ,
	dtn                  date  NOT NULL  ,
	addresse             varchar(100)  NOT NULL  ,
	email                varchar  NOT NULL  ,
	telephone            varchar  NOT NULL  ,
	CONSTRAINT users_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".annonce ( 
	id                   integer DEFAULT nextval('annonce_id_seq'::regclass) NOT NULL  ,
	id_marque            integer  NOT NULL  ,
	id_modele            integer  NOT NULL  ,
	"version"            varchar  NOT NULL  ,
	nb_place             integer  NOT NULL  ,
	description          varchar  NOT NULL  ,
	prix_vente           double precision  NOT NULL  ,
	consommation         double precision  NOT NULL  ,
	nb_vitesse           integer  NOT NULL  ,
	id_type_moteur       integer  NOT NULL  ,
	puissance            integer  NOT NULL  ,
	id_type_annonce      integer  NOT NULL  ,
	date_annonce         date  NOT NULL  ,
	status               integer DEFAULT 0 NOT NULL  ,
	id_users             integer  NOT NULL  ,
	id_energie           integer  NOT NULL  ,
	id_transmission      integer  NOT NULL  ,
	id_usage             integer  NOT NULL  ,
	id_taille            integer  NOT NULL  ,
	km_effectue          double precision  NOT NULL  ,
	id_couleur           integer  NOT NULL  ,
	numero               varchar  NOT NULL  ,
	CONSTRAINT pk_annonce PRIMARY KEY ( id )
 );

CREATE  TABLE "public".annonce_favoris ( 
	id                   integer DEFAULT nextval('annonce_favoris_id_seq'::regclass) NOT NULL  ,
	id_users             integer  NOT NULL  ,
	id_annonce           integer  NOT NULL  ,
	CONSTRAINT pk_annonce_favoris PRIMARY KEY ( id )
 );

CREATE  TABLE "public".etat_annonce ( 
	id                   integer DEFAULT nextval('etat_annonce_id_seq'::regclass) NOT NULL  ,
	id_annonce           integer  NOT NULL  ,
	carrosserie          integer  NOT NULL  ,
	siege                integer  NOT NULL  ,
	tableau_bord         integer  NOT NULL  ,
	moteur               integer  NOT NULL  ,
	freinage             integer  NOT NULL  ,
	transmission         integer  NOT NULL  ,
	pneu                 integer  NOT NULL  ,
	electronique         integer  NOT NULL  ,
	suspension           integer  NOT NULL  ,
	CONSTRAINT pk_etat_annonce PRIMARY KEY ( id )
 );

CREATE INDEX idx_etat_annonce ON "public".etat_annonce  ( id_annonce );

CREATE  TABLE "public".pdp ( 
	id                   integer DEFAULT nextval('pdp_id_seq'::regclass) NOT NULL  ,
	id_users             integer  NOT NULL  ,
	image                varchar  NOT NULL  ,
	CONSTRAINT pk_pdp PRIMARY KEY ( id ),
	CONSTRAINT unq_pdp UNIQUE ( id_users ) 
 );

CREATE  TABLE "public".photo_annonce ( 
	id                   integer DEFAULT nextval('photo_annonce_id_seq'::regclass) NOT NULL  ,
	id_annonce           integer  NOT NULL  ,
	image                varchar  NOT NULL  ,
	CONSTRAINT pk_photo_annonce PRIMARY KEY ( id )
 );

CREATE  TABLE "public".token ( 
	id                   integer DEFAULT nextval('token_id_seq'::regclass) NOT NULL  ,
	idusers              integer  NOT NULL  ,
	token                varchar(255)  NOT NULL  ,
	dtexp                date DEFAULT (CURRENT_DATE + '1 mon'::interval) NOT NULL  ,
	isvalidate           boolean DEFAULT true NOT NULL  ,
	CONSTRAINT token_pkey PRIMARY KEY ( id )
 );

ALTER TABLE "public".annonce ADD CONSTRAINT fk_annonce_couleur FOREIGN KEY ( id_couleur ) REFERENCES "public".couleur( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".annonce ADD CONSTRAINT fk_annonce_energie FOREIGN KEY ( id_energie ) REFERENCES "public".energie( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".annonce ADD CONSTRAINT fk_annonce_marque FOREIGN KEY ( id_marque ) REFERENCES "public".marque( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".annonce ADD CONSTRAINT fk_annonce_modele FOREIGN KEY ( id_modele ) REFERENCES "public".modele( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".annonce ADD CONSTRAINT fk_annonce_taille FOREIGN KEY ( id_taille ) REFERENCES "public".taille( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".annonce ADD CONSTRAINT fk_annonce_transmission FOREIGN KEY ( id_transmission ) REFERENCES "public".transmission( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".annonce ADD CONSTRAINT fk_annonce_type_annonce FOREIGN KEY ( id_type_annonce ) REFERENCES "public".type_annonce( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".annonce ADD CONSTRAINT fk_annonce_type_moteur FOREIGN KEY ( id_type_moteur ) REFERENCES "public".type_moteur( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".annonce ADD CONSTRAINT fk_annonce_usage FOREIGN KEY ( id_usage ) REFERENCES "public"."usage"( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".annonce ADD CONSTRAINT fk_annonce_users FOREIGN KEY ( id_users ) REFERENCES "public".users( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".annonce_favoris ADD CONSTRAINT fk_annonce_favoris_annonce FOREIGN KEY ( id_annonce ) REFERENCES "public".annonce( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".annonce_favoris ADD CONSTRAINT fk_annonce_favoris_users FOREIGN KEY ( id_users ) REFERENCES "public".users( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".etat_annonce ADD CONSTRAINT fk_etat_annonce_annonce FOREIGN KEY ( id_annonce ) REFERENCES "public".annonce( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".pdp ADD CONSTRAINT fk_pdp_users FOREIGN KEY ( id_users ) REFERENCES "public".users( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".photo_annonce ADD CONSTRAINT fk_photo_annonce_annonce FOREIGN KEY ( id_annonce ) REFERENCES "public".annonce( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".token ADD CONSTRAINT fk_token_users FOREIGN KEY ( idusers ) REFERENCES "public".users( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".users ADD CONSTRAINT fk_users_profil_utilisateur FOREIGN KEY ( idprofile ) REFERENCES "public".profil_utilisateur( id ) ON DELETE CASCADE ON UPDATE CASCADE;

CREATE VIEW "public".v_annonce_complet AS  SELECT a.id,
    a.id_marque,
    a.id_modele,
    a.version,
    a.nb_place,
    a.description,
    a.prix_vente,
    a.consommation,
    a.nb_vitesse,
    a.id_type_moteur,
    a.puissance,
    a.id_type_annonce,
    a.date_annonce,
    a.status,
    a.id_users,
    a.id_energie,
    a.id_transmission,
    a.id_usage,
    a.id_taille,
    a.km_effectue,
    a.id_couleur,
    a.numero,
    ma.nom AS nom_marque,
    mo.nom AS nom_modele,
    tm.nom AS nom_type_moteur,
    ta.nom AS nom_type_annonce,
    ta.commission AS commission_type_annonce,
    ta.niveau AS niveau_type_annonce,
    u.nom AS nom_users,
    u.prenom AS prenom_users,
    u.email AS email_users,
    u.telephone AS telephone_users,
    e.nom AS nom_energie,
    t.nom AS nom_transmission,
    us.nom AS nom_usage,
    tai.nom AS nom_taille,
    ea.carrosserie AS etat_carrosserie,
    ea.siege AS etat_siege,
    ea.tableau_bord AS etat_tableau_bord,
    ea.moteur AS etat_moteur,
    ea.freinage AS etat_freinage,
    ea.transmission AS etat_transmission,
    ea.pneu AS etat_pneu,
    ea.electronique AS etat_electronique,
    ea.suspension AS etat_suspension,
    c.nom AS nom_couleur,
    c.rgb AS rgb_couleur
   FROM (((((((((((annonce a
     JOIN marque ma ON ((ma.id = a.id_marque)))
     JOIN modele mo ON ((mo.id = a.id_modele)))
     JOIN type_moteur tm ON ((tm.id = a.id_type_moteur)))
     JOIN type_annonce ta ON ((ta.id = a.id_type_annonce)))
     JOIN users u ON ((u.id = a.id_users)))
     JOIN energie e ON ((e.id = a.id_energie)))
     JOIN transmission t ON ((t.id = a.id_transmission)))
     JOIN usage us ON ((us.id = a.id_usage)))
     JOIN taille tai ON ((tai.id = a.id_taille)))
     LEFT JOIN etat_annonce ea ON ((a.id = ea.id_annonce)))
     JOIN couleur c ON ((c.id = a.id_couleur)));

CREATE VIEW "public".v_annonce_complet_current_month AS  SELECT vac.id,
    vac.id_marque,
    vac.id_modele,
    vac.version,
    vac.nb_place,
    vac.description,
    vac.prix_vente,
    vac.consommation,
    vac.nb_vitesse,
    vac.id_type_moteur,
    vac.puissance,
    vac.id_type_annonce,
    vac.date_annonce,
    vac.status,
    vac.id_users,
    vac.id_energie,
    vac.id_transmission,
    vac.id_usage,
    vac.id_taille,
    vac.km_effectue,
    vac.id_couleur,
    vac.numero,
    vac.nom_marque,
    vac.nom_modele,
    vac.nom_type_moteur,
    vac.nom_type_annonce,
    vac.commission_type_annonce,
    vac.niveau_type_annonce,
    vac.nom_users,
    vac.prenom_users,
    vac.email_users,
    vac.telephone_users,
    vac.nom_energie,
    vac.nom_transmission,
    vac.nom_usage,
    vac.nom_taille,
    vac.etat_carrosserie,
    vac.etat_siege,
    vac.etat_tableau_bord,
    vac.etat_moteur,
    vac.etat_freinage,
    vac.etat_transmission,
    vac.etat_pneu,
    vac.etat_electronique,
    vac.etat_suspension,
    vac.nom_couleur,
    vac.rgb_couleur
   FROM v_annonce_complet vac
  WHERE ((vac.status = 20) AND (EXTRACT(month FROM vac.date_annonce) = EXTRACT(month FROM CURRENT_DATE)));

CREATE VIEW "public".v_annonce_complet_ordered_by_type_annonce AS  SELECT v_annonce_complet.id,
    v_annonce_complet.id_marque,
    v_annonce_complet.id_modele,
    v_annonce_complet.version,
    v_annonce_complet.nb_place,
    v_annonce_complet.description,
    v_annonce_complet.prix_vente,
    v_annonce_complet.consommation,
    v_annonce_complet.nb_vitesse,
    v_annonce_complet.id_type_moteur,
    v_annonce_complet.puissance,
    v_annonce_complet.id_type_annonce,
    v_annonce_complet.date_annonce,
    v_annonce_complet.status,
    v_annonce_complet.id_users,
    v_annonce_complet.id_energie,
    v_annonce_complet.id_transmission,
    v_annonce_complet.id_usage,
    v_annonce_complet.id_taille,
    v_annonce_complet.km_effectue,
    v_annonce_complet.id_couleur,
    v_annonce_complet.numero,
    v_annonce_complet.nom_marque,
    v_annonce_complet.nom_modele,
    v_annonce_complet.nom_type_moteur,
    v_annonce_complet.nom_type_annonce,
    v_annonce_complet.commission_type_annonce,
    v_annonce_complet.niveau_type_annonce,
    v_annonce_complet.nom_users,
    v_annonce_complet.prenom_users,
    v_annonce_complet.email_users,
    v_annonce_complet.telephone_users,
    v_annonce_complet.nom_energie,
    v_annonce_complet.nom_transmission,
    v_annonce_complet.nom_usage,
    v_annonce_complet.nom_taille,
    v_annonce_complet.etat_carrosserie,
    v_annonce_complet.etat_siege,
    v_annonce_complet.etat_tableau_bord,
    v_annonce_complet.etat_moteur,
    v_annonce_complet.etat_freinage,
    v_annonce_complet.etat_transmission,
    v_annonce_complet.etat_pneu,
    v_annonce_complet.etat_electronique,
    v_annonce_complet.etat_suspension,
    v_annonce_complet.nom_couleur,
    v_annonce_complet.rgb_couleur
   FROM v_annonce_complet
  ORDER BY v_annonce_complet.niveau_type_annonce DESC, v_annonce_complet.id DESC;

CREATE VIEW "public".v_annonce_en_attente_validation AS  SELECT a.id,
    (((m.nom)::text || ' '::text) || (mo.nom)::text) AS voiture,
    a.description,
    (((u.nom)::text || ' '::text) || (u.prenom)::text) AS utilisateur,
    a.prix_vente
   FROM (((annonce a
     JOIN users u ON ((a.id_users = u.id)))
     JOIN marque m ON ((a.id_marque = m.id)))
     JOIN modele mo ON ((a.id_modele = mo.id)))
  WHERE (a.status = 0);

CREATE VIEW "public".v_best_user AS  SELECT u.id,
    u.idprofile,
    u.nom,
    u.mdp,
    u.prenom,
    u.dtn,
    u.addresse,
    u.email,
    u.telephone,
    tcu.commission
   FROM (v_users_with_total_commission tcu
     JOIN users u ON ((u.id = tcu.id_users)))
  ORDER BY tcu.commission DESC;

CREATE VIEW "public".v_count_annonce_current_month AS  SELECT count(*) AS nb_annonce
   FROM annonce a
  WHERE (EXTRACT(month FROM a.date_annonce) = EXTRACT(month FROM CURRENT_DATE));

CREATE VIEW "public".v_count_annonce_current_year AS  SELECT count(*) AS nb_annonce
   FROM annonce a
  WHERE (EXTRACT(year FROM a.date_annonce) = EXTRACT(year FROM CURRENT_DATE));

CREATE VIEW "public".v_count_annonce_valide_current_month AS  SELECT count(*) AS nb_annonce_valide
   FROM annonce a
  WHERE ((a.status = 10) AND (EXTRACT(month FROM a.date_annonce) = EXTRACT(month FROM CURRENT_DATE)));

CREATE VIEW "public".v_count_annonce_valide_current_year AS  SELECT count(*) AS nb_annonce_valide
   FROM annonce a
  WHERE ((a.status = 10) AND (EXTRACT(year FROM a.date_annonce) = EXTRACT(year FROM CURRENT_DATE)));

CREATE VIEW "public".v_count_annonce_vendu_current_month AS  SELECT count(*) AS nb_annonce_vendu
   FROM annonce a
  WHERE ((a.status = 20) AND (EXTRACT(month FROM a.date_annonce) = EXTRACT(month FROM CURRENT_DATE)));

CREATE VIEW "public".v_count_annonce_vendu_current_year AS  SELECT count(*) AS nb_annonce_vendu
   FROM annonce a
  WHERE ((a.status = 20) AND (EXTRACT(year FROM a.date_annonce) = EXTRACT(year FROM CURRENT_DATE)));

CREATE VIEW "public".v_latest_annonce_vendu AS  SELECT v_annonce_complet.id,
    v_annonce_complet.id_marque,
    v_annonce_complet.id_modele,
    v_annonce_complet.version,
    v_annonce_complet.nb_place,
    v_annonce_complet.description,
    v_annonce_complet.prix_vente,
    v_annonce_complet.consommation,
    v_annonce_complet.nb_vitesse,
    v_annonce_complet.id_type_moteur,
    v_annonce_complet.puissance,
    v_annonce_complet.id_type_annonce,
    v_annonce_complet.date_annonce,
    v_annonce_complet.status,
    v_annonce_complet.id_users,
    v_annonce_complet.id_energie,
    v_annonce_complet.id_transmission,
    v_annonce_complet.id_usage,
    v_annonce_complet.id_taille,
    v_annonce_complet.km_effectue,
    v_annonce_complet.id_couleur,
    v_annonce_complet.numero,
    v_annonce_complet.nom_marque,
    v_annonce_complet.nom_modele,
    v_annonce_complet.nom_type_moteur,
    v_annonce_complet.nom_type_annonce,
    v_annonce_complet.commission_type_annonce,
    v_annonce_complet.niveau_type_annonce,
    v_annonce_complet.nom_users,
    v_annonce_complet.prenom_users,
    v_annonce_complet.email_users,
    v_annonce_complet.telephone_users,
    v_annonce_complet.nom_energie,
    v_annonce_complet.nom_transmission,
    v_annonce_complet.nom_usage,
    v_annonce_complet.nom_taille,
    v_annonce_complet.etat_carrosserie,
    v_annonce_complet.etat_siege,
    v_annonce_complet.etat_tableau_bord,
    v_annonce_complet.etat_moteur,
    v_annonce_complet.etat_freinage,
    v_annonce_complet.etat_transmission,
    v_annonce_complet.etat_pneu,
    v_annonce_complet.etat_electronique,
    v_annonce_complet.etat_suspension,
    v_annonce_complet.nom_couleur,
    v_annonce_complet.rgb_couleur,
    (v_annonce_complet.prix_vente * v_annonce_complet.commission_type_annonce) AS commission_obtenue
   FROM v_annonce_complet
  WHERE (v_annonce_complet.status = 20)
  ORDER BY v_annonce_complet.date_annonce DESC;

CREATE VIEW "public".v_nombre_important AS  SELECT '-1'::integer AS id,
    ( SELECT count(*) AS count
           FROM users) AS nb_users,
    ( SELECT count(*) AS count
           FROM annonce) AS nb_annonces,
    ( SELECT count(*) AS count
           FROM annonce
          WHERE (annonce.status = 0)) AS nb_annonce_en_attente,
    ( SELECT count(*) AS count
           FROM annonce
          WHERE (annonce.status = '-10'::integer)) AS nb_annonce_rejete,
    ( SELECT count(*) AS count
           FROM annonce
          WHERE (annonce.status = 10)) AS nb_annonce_valide,
    ( SELECT count(*) AS count
           FROM annonce
          WHERE (annonce.status = 20)) AS nb_annonce_vendu,
    ( SELECT sum((annonce.prix_vente * ta.commission)) AS sum
           FROM (annonce
             JOIN type_annonce ta ON ((ta.id = annonce.id_type_annonce)))
          WHERE (annonce.status = 20)) AS total_commission;

CREATE VIEW "public".v_stat_annonce_vendu_par_marque AS  SELECT a.id_marque AS id,
    a.id_marque,
    m.nom AS nom_marque,
    count(a.id) AS nb_annonce_vendu
   FROM (annonce a
     JOIN marque m ON ((m.id = a.id_marque)))
  WHERE (a.status = 20)
  GROUP BY a.id_marque, m.nom;

CREATE VIEW "public".v_stat_by_month AS  SELECT (EXTRACT(month FROM a.date_annonce))::integer AS id,
    ( SELECT v_count_annonce_current_month.nb_annonce
           FROM v_count_annonce_current_month) AS nb_annonce,
    ( SELECT v_count_annonce_vendu_current_month.nb_annonce_vendu
           FROM v_count_annonce_vendu_current_month) AS nb_annonce_vendu,
    COALESCE(sum(a.prix_vente), (0)::double precision) AS prix_mois_actuelle,
    COALESCE(sum((a.prix_vente * ta.commission)), (0)::double precision) AS commission_mois_actuelle,
    EXTRACT(month FROM CURRENT_DATE) AS month,
    EXTRACT(year FROM CURRENT_DATE) AS year
   FROM (annonce a
     JOIN type_annonce ta ON ((ta.id = a.id_type_annonce)))
  WHERE ((a.status = 20) AND (EXTRACT(year FROM a.date_annonce) = EXTRACT(year FROM CURRENT_DATE)))
  GROUP BY (EXTRACT(month FROM a.date_annonce));

CREATE VIEW "public".v_stat_by_year AS  SELECT EXTRACT(year FROM a.date_annonce) AS id,
    ( SELECT v_count_annonce_current_year.nb_annonce
           FROM v_count_annonce_current_year) AS nb_annonce,
    ( SELECT v_count_annonce_vendu_current_year.nb_annonce_vendu
           FROM v_count_annonce_vendu_current_year) AS nb_annonce_vendu,
    COALESCE(sum(a.prix_vente), (0)::double precision) AS prix_mois_actuelle,
    COALESCE(sum((a.prix_vente * ta.commission)), (0)::double precision) AS commission_mois_actuelle
   FROM (annonce a
     JOIN type_annonce ta ON ((ta.id = a.id_type_annonce)))
  WHERE (a.status = 20)
  GROUP BY (EXTRACT(year FROM a.date_annonce));

CREATE VIEW "public".v_stat_current_month AS  SELECT '-1'::integer AS id,
    ( SELECT v_count_annonce_current_month.nb_annonce
           FROM v_count_annonce_current_month) AS nb_annonce,
    ( SELECT v_count_annonce_vendu_current_month.nb_annonce_vendu
           FROM v_count_annonce_vendu_current_month) AS nb_annonce_vendu,
    COALESCE(sum(a.prix_vente), (0)::double precision) AS prix_mois_actuelle,
    COALESCE(sum((a.prix_vente * ta.commission)), (0)::double precision) AS commission_mois_actuelle,
    EXTRACT(month FROM CURRENT_DATE) AS month,
    EXTRACT(year FROM CURRENT_DATE) AS year
   FROM (annonce a
     JOIN type_annonce ta ON ((ta.id = a.id_type_annonce)))
  WHERE ((a.status = 20) AND (EXTRACT(year FROM a.date_annonce) = EXTRACT(year FROM CURRENT_DATE)) AND (EXTRACT(month FROM a.date_annonce) = EXTRACT(month FROM CURRENT_DATE)));

CREATE VIEW "public".v_stat_current_year AS  SELECT '-1'::integer AS id,
    ( SELECT v_count_annonce_current_year.nb_annonce
           FROM v_count_annonce_current_year) AS nb_annonce,
    ( SELECT v_count_annonce_vendu_current_year.nb_annonce_vendu
           FROM v_count_annonce_vendu_current_year) AS nb_annonce_vendu,
    COALESCE(sum(a.prix_vente), (0)::double precision) AS prix_mois_actuelle,
    COALESCE(sum((a.prix_vente * ta.commission)), (0)::double precision) AS commission_mois_actuelle,
    EXTRACT(year FROM CURRENT_DATE) AS year
   FROM (annonce a
     JOIN type_annonce ta ON ((ta.id = a.id_type_annonce)))
  WHERE ((a.status = 20) AND (EXTRACT(year FROM a.date_annonce) = EXTRACT(year FROM CURRENT_DATE)));

CREATE VIEW "public".v_user_complet AS  SELECT u.id,
    u.idprofile,
    u.nom,
    u.mdp,
    u.prenom,
    u.dtn,
    u.addresse,
    u.email,
    u.telephone,
    pu.nom AS nom_pofil_utilisateur,
    pdp.image
   FROM ((users u
     LEFT JOIN pdp ON ((pdp.id_users = u.id)))
     JOIN profil_utilisateur pu ON ((pu.id = u.idprofile)));

CREATE VIEW "public".v_user_ordered_by_commission AS  SELECT u.id,
    u.idprofile,
    u.nom,
    u.mdp,
    u.prenom,
    u.dtn,
    u.addresse,
    u.email,
    u.telephone,
    uc.commission
   FROM (users u
     LEFT JOIN v_users_commission uc ON ((uc.id_users = u.id)))
  ORDER BY uc.commission DESC;

CREATE VIEW "public".v_users_commission AS  SELECT a.id_users,
    sum((a.prix_vente * ta.commission)) AS commission
   FROM (annonce a
     JOIN type_annonce ta ON ((ta.id = a.id_type_annonce)))
  GROUP BY a.id_users;

CREATE VIEW "public".v_users_with_total_commission AS  SELECT a.id_users,
    sum((a.prix_vente * ta.commission)) AS commission
   FROM (annonce a
     JOIN type_annonce ta ON ((ta.id = a.id_type_annonce)))
  WHERE (a.status = 20)
  GROUP BY a.id_users;

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
	CONSTRAINT users_pkey PRIMARY KEY ( id ),
	CONSTRAINT fk_users_profil_utilisateur FOREIGN KEY ( idprofile ) REFERENCES "public".profil_utilisateur( id ) ON DELETE CASCADE ON UPDATE CASCADE 
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
	CONSTRAINT pk_annonce PRIMARY KEY ( id ),
	CONSTRAINT fk_annonce_couleur FOREIGN KEY ( id_couleur ) REFERENCES "public".couleur( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_annonce_energie FOREIGN KEY ( id_energie ) REFERENCES "public".energie( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_annonce_marque FOREIGN KEY ( id_marque ) REFERENCES "public".marque( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_annonce_modele FOREIGN KEY ( id_modele ) REFERENCES "public".modele( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_annonce_taille FOREIGN KEY ( id_taille ) REFERENCES "public".taille( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_annonce_transmission FOREIGN KEY ( id_transmission ) REFERENCES "public".transmission( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_annonce_type_annonce FOREIGN KEY ( id_type_annonce ) REFERENCES "public".type_annonce( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_annonce_type_moteur FOREIGN KEY ( id_type_moteur ) REFERENCES "public".type_moteur( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_annonce_usage FOREIGN KEY ( id_usage ) REFERENCES "public"."usage"( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_annonce_users FOREIGN KEY ( id_users ) REFERENCES "public".users( id ) ON DELETE CASCADE ON UPDATE CASCADE 
 );

CREATE  TABLE "public".annonce_favoris ( 
	id                   integer DEFAULT nextval('annonce_favoris_id_seq'::regclass) NOT NULL  ,
	id_users             integer  NOT NULL  ,
	id_annonce           integer  NOT NULL  ,
	status               integer DEFAULT 0 NOT NULL  ,
	CONSTRAINT pk_annonce_favoris PRIMARY KEY ( id ),
	CONSTRAINT fk_annonce_favoris_annonce FOREIGN KEY ( id_annonce ) REFERENCES "public".annonce( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_annonce_favoris_users FOREIGN KEY ( id_users ) REFERENCES "public".users( id ) ON DELETE CASCADE ON UPDATE CASCADE 
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
	CONSTRAINT pk_etat_annonce PRIMARY KEY ( id ),
	CONSTRAINT fk_etat_annonce_annonce FOREIGN KEY ( id_annonce ) REFERENCES "public".annonce( id ) ON DELETE CASCADE ON UPDATE CASCADE 
 );

CREATE INDEX idx_etat_annonce ON "public".etat_annonce  ( id_annonce );

CREATE  TABLE "public".pdp ( 
	id                   integer DEFAULT nextval('pdp_id_seq'::regclass) NOT NULL  ,
	id_users             integer  NOT NULL  ,
	image                varchar  NOT NULL  ,
	CONSTRAINT pk_pdp PRIMARY KEY ( id ),
	CONSTRAINT unq_pdp UNIQUE ( id_users ) ,
	CONSTRAINT fk_pdp_users FOREIGN KEY ( id_users ) REFERENCES "public".users( id ) ON DELETE CASCADE ON UPDATE CASCADE 
 );

CREATE  TABLE "public".photo_annonce ( 
	id                   integer DEFAULT nextval('photo_annonce_id_seq'::regclass) NOT NULL  ,
	id_annonce           integer  NOT NULL  ,
	image                varchar  NOT NULL  ,
	CONSTRAINT pk_photo_annonce PRIMARY KEY ( id ),
	CONSTRAINT fk_photo_annonce_annonce FOREIGN KEY ( id_annonce ) REFERENCES "public".annonce( id ) ON DELETE CASCADE ON UPDATE CASCADE 
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

CREATE  TABLE "public".user_notification ( 
	id                   serial  NOT NULL  ,
	id_users             integer  NOT NULL  ,
	token                varchar(255)  NOT NULL  ,
	CONSTRAINT pk_users_notification PRIMARY KEY ( id ),
	CONSTRAINT fk_users_notification_users FOREIGN KEY ( id_users ) REFERENCES "public".users( id ) ON DELETE CASCADE ON UPDATE CASCADE 
 );

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
    COALESCE(ea.carrosserie, 0) AS etat_carrosserie,
    COALESCE(ea.siege, 0) AS etat_siege,
    COALESCE(ea.tableau_bord, 0) AS etat_tableau_bord,
    COALESCE(ea.moteur, 0) AS etat_moteur,
    COALESCE(ea.freinage, 0) AS etat_freinage,
    COALESCE(ea.transmission, 0) AS etat_transmission,
    COALESCE(ea.pneu, 0) AS etat_pneu,
    COALESCE(ea.electronique, 0) AS etat_electronique,
    COALESCE(ea.suspension, 0) AS etat_suspension,
    c.nom AS nom_couleur,
    c.rgb AS rgb_couleur,
    ( SELECT pa.image
           FROM photo_annonce pa
          WHERE (pa.id_annonce = a.id)
          ORDER BY pa.id
         LIMIT 1) AS image
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

CREATE VIEW "public".v_annonce_vendu_current_month AS  SELECT v_annonce_complet.id,
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
    v_annonce_complet.image,
    (v_annonce_complet.prix_vente * v_annonce_complet.commission_type_annonce) AS commission_obtenue
   FROM v_annonce_complet
  WHERE ((v_annonce_complet.status = 20) AND (EXTRACT(month FROM v_annonce_complet.date_annonce) = EXTRACT(month FROM CURRENT_DATE)))
  ORDER BY v_annonce_complet.date_annonce DESC;

CREATE VIEW "public".v_users_with_total_commission AS  SELECT a.id_users,
    sum((a.prix_vente * ta.commission)) AS commission
   FROM (annonce a
     JOIN type_annonce ta ON ((ta.id = a.id_type_annonce)))
  WHERE (a.status = 20)
  GROUP BY a.id_users;

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
    v_annonce_complet.image,
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


CREATE VIEW "public".v_users_commission AS  SELECT a.id_users,
    sum((a.prix_vente * ta.commission)) AS commission
   FROM (annonce a
     JOIN type_annonce ta ON ((ta.id = a.id_type_annonce)))
  GROUP BY a.id_users;
  
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


INSERT INTO "public".couleur( id, nom, rgb, status ) VALUES ( 1, 'Blanc', '#FFFFFF', 1);
INSERT INTO "public".couleur( id, nom, rgb, status ) VALUES ( 2, 'Noir', '#000000', 1);
INSERT INTO "public".couleur( id, nom, rgb, status ) VALUES ( 3, 'Rouge', '#F12424', 1);
INSERT INTO "public".couleur( id, nom, rgb, status ) VALUES ( 4, 'Vert', '#3BED14', 1);
INSERT INTO "public".couleur( id, nom, rgb, status ) VALUES ( 5, 'Gris', '#A4A6A4', 1);
INSERT INTO "public".couleur( id, nom, rgb, status ) VALUES ( 6, 'Jaune', '#F4D03F', 1);
INSERT INTO "public".couleur( id, nom, rgb, status ) VALUES ( 7, 'Bleu', '#3498DB', 1);
INSERT INTO "public".couleur( id, nom, rgb, status ) VALUES ( 8, 'Rose', '#F5B7B1', 1);
INSERT INTO "public".couleur( id, nom, rgb, status ) VALUES ( 9, 'Violet', '#F5B7B1', 1);
INSERT INTO "public".energie( id, nom, status ) VALUES ( 1, 'Essence', 0);
INSERT INTO "public".energie( id, nom, status ) VALUES ( 2, 'Diesel', 0);
INSERT INTO "public".energie( id, nom, status ) VALUES ( 3, 'Électrique', 0);
INSERT INTO "public".marque( id, nom, status ) VALUES ( 1, 'Toyota', 0);
INSERT INTO "public".marque( id, nom, status ) VALUES ( 2, 'Suzuki', 0);
INSERT INTO "public".marque( id, nom, status ) VALUES ( 3, 'Nissan', 0);
INSERT INTO "public".marque( id, nom, status ) VALUES ( 4, 'Volkswagen', 0);
INSERT INTO "public".marque( id, nom, status ) VALUES ( 5, 'Honda', 0);
INSERT INTO "public".marque( id, nom, status ) VALUES ( 6, 'Hyundai', 0);
INSERT INTO "public".marque( id, nom, status ) VALUES ( 7, 'BMW', 0);
INSERT INTO "public".marque( id, nom, status ) VALUES ( 8, 'Mercedes-Benz', 0);
INSERT INTO "public".marque( id, nom, status ) VALUES ( 9, 'Ford', 0);
INSERT INTO "public".marque( id, nom, status ) VALUES ( 10, 'Audi', 0);
INSERT INTO "public".marque( id, nom, status ) VALUES ( 11, 'Renault', 0);
INSERT INTO "public".marque( id, nom, status ) VALUES ( 12, 'Chevrolet', 0);
INSERT INTO "public".marque( id, nom, status ) VALUES ( 13, 'Peugeot', 0);
INSERT INTO "public".marque( id, nom, status ) VALUES ( 14, 'Kia', 0);
INSERT INTO "public".marque( id, nom, status ) VALUES ( 15, 'Fiat', 0);
INSERT INTO "public".marque( id, nom, status ) VALUES ( 16, 'Porche', 1);
INSERT INTO "public".marque( id, nom, status ) VALUES ( 17, 'Mazda', 1);
INSERT INTO "public".marque( id, nom, status ) VALUES ( 18, 'MINI Cooper', 1);
INSERT INTO "public".modele( id, nom, status ) VALUES ( 1, 'Arteon', 0);
INSERT INTO "public".modele( id, nom, status ) VALUES ( 2, 'Celestiq', 0);
INSERT INTO "public".modele( id, nom, status ) VALUES ( 3, 'CR-V', 0);
INSERT INTO "public".modele( id, nom, status ) VALUES ( 4, 'Panamera', 0);
INSERT INTO "public".modele( id, nom, status ) VALUES ( 6, 'RAV4 XLE', 1);
INSERT INTO "public".modele( id, nom, status ) VALUES ( 7, '3 GX', 1);
INSERT INTO "public".modele( id, nom, status ) VALUES ( 8, 'Hardtop', 1);
INSERT INTO "public".modele( id, nom, status ) VALUES ( 9, 'X5', 1);
INSERT INTO "public".profil_utilisateur( id, nom ) VALUES ( 1, 'admin');
INSERT INTO "public".profil_utilisateur( id, nom ) VALUES ( 2, 'user');
INSERT INTO "public".taille( id, nom, status ) VALUES ( 1, 'Sous-compacte', 0);
INSERT INTO "public".taille( id, nom, status ) VALUES ( 2, 'Compacte', 0);
INSERT INTO "public".taille( id, nom, status ) VALUES ( 3, 'Intermédiaire', 0);
INSERT INTO "public".taille( id, nom, status ) VALUES ( 4, 'Full-Size', 0);
INSERT INTO "public".taille( id, nom, status ) VALUES ( 5, 'Fourgonnette', 0);
INSERT INTO "public".taille( id, nom, status ) VALUES ( 6, 'Camion', 0);
INSERT INTO "public".taille( id, nom, status ) VALUES ( 7, 'Berlin', 0);
INSERT INTO "public".transmission( id, nom, status ) VALUES ( 1, 'Manuelle', 1);
INSERT INTO "public".transmission( id, nom, status ) VALUES ( 2, 'Automatique', 1);
INSERT INTO "public".transmission( id, nom, status ) VALUES ( 3, 'Séquentielle', 1);
INSERT INTO "public".transmission( id, nom, status ) VALUES ( 4, 'Robotisée', 1);
INSERT INTO "public".type_annonce( id, nom, status, commission, niveau ) VALUES ( 1, 'Annonces Simple', 0, 0.05, 10);
INSERT INTO "public".type_annonce( id, nom, status, commission, niveau ) VALUES ( 2, 'Annonces Premium', 0, 0.1, 20);
INSERT INTO "public".type_moteur( id, nom, status ) VALUES ( 1, 'Explosion', 1);
INSERT INTO "public".type_moteur( id, nom, status ) VALUES ( 2, 'Combustion', 1);
INSERT INTO "public".type_moteur( id, nom, status ) VALUES ( 3, 'Electrique', 1);
INSERT INTO "public".type_moteur( id, nom, status ) VALUES ( 4, 'Etoile', 1);
INSERT INTO "public".type_moteur( id, nom, status ) VALUES ( 6, 'En ligne', 1);
INSERT INTO "public"."usage"( id, nom, status ) VALUES ( 1, 'Quotidienne', 0);
INSERT INTO "public"."usage"( id, nom, status ) VALUES ( 3, 'Loisir et tourisme', 0);
INSERT INTO "public"."usage"( id, nom, status ) VALUES ( 2, 'Transport', 1);
INSERT INTO "public".users( id, idprofile, nom, mdp, prenom, dtn, addresse, email, telephone ) VALUES ( 6, 2, 'Mamiarilaza', 'to', 'To', '2004-01-12', 'TD 001 Tsididy', 'to@gmail.com', '+261341451743');
INSERT INTO "public".users( id, idprofile, nom, mdp, prenom, dtn, addresse, email, telephone ) VALUES ( 7, 2, 'Anjaratiana', 'johan', 'Johan', '2003-08-26', 'III AB 50 Andrononobe', 'johan@gmail.com', '+261348969262');
INSERT INTO "public".users( id, idprofile, nom, mdp, prenom, dtn, addresse, email, telephone ) VALUES ( 8, 2, 'Rakotoarison', 'gael', 'Tiavina Gael', '2003-08-08', 'Lot H 121 TER A Alasora', 'gael@gmail.com', '+261326470822');
INSERT INTO "public".users( id, idprofile, nom, mdp, prenom, dtn, addresse, email, telephone ) VALUES ( 9, 2, 'raby', 'dio', 'Dio', '2004-01-29', 'Andoharanofotsy', 'dio@gmail.com', '+2613290093');
INSERT INTO "public".annonce( id, id_marque, id_modele, "version", nb_place, description, prix_vente, consommation, nb_vitesse, id_type_moteur, puissance, id_type_annonce, date_annonce, status, id_users, id_energie, id_transmission, id_usage, id_taille, km_effectue, id_couleur, numero ) VALUES ( 7, 17, 7, '4', 5, 'Découvrez l''alliance parfaite de l''élégance et de la performance avec la Mazda 3 GX4 2015. Son design moderne et sportif se marie à une conduite dynamique grâce à son moteur réactif et économe en carburant. L''intérieur raffiné offre un confort exceptionnel, tandis que les technologies avancées, telles que l''infodivertissement intégré et les systèmes de sécurité, ajoutent une touche de modernité. Avec un entretien suivi rigoureux, cette Mazda 3 GX4 2015 est prête à vous offrir une expérience de conduite exceptionnelle. Ne manquez pas l''opportunité de posséder cette berline compacte qui allie style et performance. Planifiez votre essai routier dès maintenant pour ressentir le plaisir de conduire cette Mazda 3.', 2.5E8, 7.5, 5, 1, 240, 1, '2024-01-29', 10, 6, 1, 2, 3, 4, 10000.0, 2, '2314 TBU');
INSERT INTO "public".annonce( id, id_marque, id_modele, "version", nb_place, description, prix_vente, consommation, nb_vitesse, id_type_moteur, puissance, id_type_annonce, date_annonce, status, id_users, id_energie, id_transmission, id_usage, id_taille, km_effectue, id_couleur, numero ) VALUES ( 6, 7, 9, '2018', 5, 'Plongez dans l''excellence automobile avec la BMW X5 2018. Dotée d''un moteur puissant, elle offre une performance exceptionnelle. Son design allie élégance et sportivité, aussi bien à l''intérieur qu''à l''extérieur. Équipée des dernières technologies, elle garantit une conduite sûre et connectée. Polyvalente et confortable, elle est parfaite pour chaque trajet. Entretien méticuleux assurant une longévité exceptionnelle. Ne manquez pas l''opportunité de posséder cette SUV qui incarne le luxe et la sophistication. Planifiez un essai routier dès aujourd''hui pour découvrir une expérience de conduite inégalée.', 6.0E8, 10.0, 6, 2, 310, 2, '2024-01-29', 0, 6, 2, 2, 1, 3, 32000.0, 1, '1212 TBA');
INSERT INTO "public".annonce( id, id_marque, id_modele, "version", nb_place, description, prix_vente, consommation, nb_vitesse, id_type_moteur, puissance, id_type_annonce, date_annonce, status, id_users, id_energie, id_transmission, id_usage, id_taille, km_effectue, id_couleur, numero ) VALUES ( 9, 16, 4, '1', 5, 'Plongez dans le summum du luxe automobile avec la Porsche Panamera Turbo First 2017. Cette berline sportive incarne l''élégance raffinée et la puissance brute. Animée par un moteur suralimenté, elle offre des performances de classe mondiale, tandis que son design avant-gardiste et son intérieur somptueux créent une expérience de conduite inégalée.', 5.0E8, 9.0, 7, 1, 320, 1, '2024-01-29', 0, 7, 2, 2, 1, 4, 15400.0, 2, '1213 TBE');
INSERT INTO "public".annonce( id, id_marque, id_modele, "version", nb_place, description, prix_vente, consommation, nb_vitesse, id_type_moteur, puissance, id_type_annonce, date_annonce, status, id_users, id_energie, id_transmission, id_usage, id_taille, km_effectue, id_couleur, numero ) VALUES ( 8, 18, 8, 'S', 4, 'Découvrez l''essence du style et du dynamisme avec la MINI Cooper Hardtop S 2007. Cette icône intemporelle allie un design distinctif à une performance pétillante, vous offrant une expérience de conduite inimitable. Son moteur agile et sa maniabilité exceptionnelle font de chaque trajet un véritable plaisir, tandis que son intérieur élégant et bien conçu crée une ambiance accueillante.', 1.0E8, 6.0, 5, 2, 150, 2, '2024-01-29', 10, 7, 1, 1, 1, 1, 35000.0, 5, '2309 TBG');
INSERT INTO "public".annonce( id, id_marque, id_modele, "version", nb_place, description, prix_vente, consommation, nb_vitesse, id_type_moteur, puissance, id_type_annonce, date_annonce, status, id_users, id_energie, id_transmission, id_usage, id_taille, km_effectue, id_couleur, numero ) VALUES ( 10, 1, 6, '1.0', 5, 'Explorez le monde avec style et confort à bord du Toyota RAV4 XLE 2017. Cette SUV polyvalente incarne la fiabilité légendaire de Toyota et offre une expérience de conduite dynamique. Avec son design moderne, son intérieur spacieux et ses fonctionnalités avancées, le RAV4 XLE 2017 est prêt à vous accompagner dans toutes vos aventures.', 2.0E8, 8.8, 5, 2, 280, 2, '2024-01-29', 10, 8, 1, 3, 1, 3, 5000.0, 5, '1432 TBG');
INSERT INTO "public".annonce( id, id_marque, id_modele, "version", nb_place, description, prix_vente, consommation, nb_vitesse, id_type_moteur, puissance, id_type_annonce, date_annonce, status, id_users, id_energie, id_transmission, id_usage, id_taille, km_effectue, id_couleur, numero ) VALUES ( 19, 2, 1, '2', 5, '', 3.0E8, 6.0, 5, 1, 300, 1, '2024-02-05', 0, 8, 2, 1, 1, 5, 1000.0, 1, '1212 TBG');
INSERT INTO "public".annonce_favoris( id, id_users, id_annonce, status ) VALUES ( 1, 6, 6, 0);
INSERT INTO "public".etat_annonce( id, id_annonce, carrosserie, siege, tableau_bord, moteur, freinage, transmission, pneu, electronique, suspension ) VALUES ( 7, 7, 10, 10, 10, 10, 10, 10, 10, 10, 10);
INSERT INTO "public".etat_annonce( id, id_annonce, carrosserie, siege, tableau_bord, moteur, freinage, transmission, pneu, electronique, suspension ) VALUES ( 8, 8, 10, 10, 10, 10, 10, 10, 10, 10, 10);
INSERT INTO "public".etat_annonce( id, id_annonce, carrosserie, siege, tableau_bord, moteur, freinage, transmission, pneu, electronique, suspension ) VALUES ( 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10);
INSERT INTO "public".etat_annonce( id, id_annonce, carrosserie, siege, tableau_bord, moteur, freinage, transmission, pneu, electronique, suspension ) VALUES ( 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10);
INSERT INTO "public".etat_annonce( id, id_annonce, carrosserie, siege, tableau_bord, moteur, freinage, transmission, pneu, electronique, suspension ) VALUES ( 6,  6, 8, 10, 9, 8, 10, 10, 7, 10, 10);
INSERT INTO "public".etat_annonce( id, id_annonce, carrosserie, siege, tableau_bord, moteur, freinage, transmission, pneu, electronique, suspension ) VALUES ( 19,19, 10, 10, 10, 10, 10, 10, 10, 10, 10);
INSERT INTO "public".pdp( id, id_users, image ) VALUES ( 4, 7, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/709e1b88-d67f-424b-b47c-68a5528e2c3c.png?alt=media');
INSERT INTO "public".pdp( id, id_users, image ) VALUES ( 5, 8, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/3f607442-3d68-4070-9739-737678d86ab7.png?alt=media');
INSERT INTO "public".pdp( id, id_users, image ) VALUES ( 7, 6, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/7cd52cc4-56d4-4e28-9a0c-26d6d64924af.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 7, 6, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/c2260030-bf07-4248-8f33-77484196f807.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 8, 6, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/df646c47-f28a-4dc6-ad91-4ffe973fdeca.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 9, 6, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/52a7c61e-c462-4d0b-bc9c-594fb6a991ff.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 10, 6, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/2434c0d5-70a9-498b-a6f9-bff792d60bd2.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 11, 6, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/42fd9182-5cc2-404c-9605-2a8645b2c17d.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 12, 7, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/d1f7322e-21d2-4a9f-ae1b-9b316bcb5b60.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 13, 7, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/ee4f5eb0-4b2a-4353-ae71-6b620e978d1c.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 14, 7, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/98918e44-eb47-4dc5-9717-6b3de039106e.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 15, 7, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/7cf663f9-17b5-46a0-9009-20349201a6e8.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 16, 7, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/363ef087-c34b-4d74-ba56-f1f5874c5ae4.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 17, 8, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/7af1c089-fac8-4704-8ef5-d40b912fc900.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 18, 8, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/c139b938-432b-4e22-b18f-6e286b69d19a.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 19, 8, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/2994093f-f1d8-47bb-a136-18bfffbbc3ad.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 20, 8, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/4cf2bc79-5b11-4c41-8258-71b9fa8ac53c.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 21, 8, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/5570fa4b-d47e-4df2-8376-c2e7a9999c40.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 22, 9, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/5a0d4bf9-c306-4ac4-aa29-10b3fd51e5ba.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 23, 9, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/caff31bf-abbc-48e5-8e09-ad295323f633.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 24, 9, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/0a858ee2-acdc-461c-adb1-7caf271d4c12.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 25, 9, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/46585ede-6d9d-45dd-affe-e9d7e3e0f42a.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 26, 10, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/b2aac415-5f4a-4924-9da6-b24cb612b7bd.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 27, 10, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/f5a9764b-57f4-43a7-86f5-3923f425ffdd.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 28, 10, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/8d03666f-b4f0-4d36-9d22-8c77cf94cee3.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 29, 10, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/3c5c6fd0-4f0e-4869-839a-d9ed54023c2e.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 30, 10, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/e4f31b7a-c089-46e7-a2ad-b359db8a72d8.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 33, 19, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/1ff506d3-aa9c-4351-96d7-844a1256db64.png?alt=media');
INSERT INTO "public".photo_annonce( id, id_annonce, image ) VALUES ( 34, 19, 'https://firebasestorage.googleapis.com/v0/b/cloud-image-vente-voiture.appspot.com/o/8c0ce89b-436d-4642-bd6d-c873d4cdf28e.png?alt=media');
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 53, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA2NTE2NzM3LCJleHAiOjE3MDY2MDMxMzd9.StjJfUKQ4XOxunaktJ2XVfbejmSKJWqqLZgHjNATml03IskLBWrP9CBDoe9iAVB7wP2pMmg4z4K8TwCdy3oC_A', '2024-01-30', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 54, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA2NTE2ODI5LCJleHAiOjE3MDY2MDMyMjl9.v2HR-k57asDpt3BgWlwVWpmuK9mqIAsrKVpIUc2km99nSbIp8xmWwZnG5EZCwp13DcJ3CJCTRU_Y64Sumg2GPQ', '2024-01-30', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 55, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA2NTE3MDEzLCJleHAiOjE3MDY2MDM0MTN9.__8NlTD5VoqO2ypomdnV9EXR2XQqQArNYv9nwLZgRYVEmwuDPhmsD-6UxY2uq_TXXsTCJvIQIyAHtkdUHHZ67w', '2024-01-30', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 56, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA2NTE3MTMxLCJleHAiOjE3MDY2MDM1MzF9.vs6keUHcaY-OMMoLk2W5-XPPfWUWIyjUsku2_O2ZYN6rbtbqpKcNMGtXSy0ZReGVnNAB3kWK9ZJJQKe_khSFMg', '2024-01-30', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 57, 7, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3IiwiaWF0IjoxNzA2NTE4MjYwLCJleHAiOjE3MDY2MDQ2NjB9.PSVyopp15LyXz_DMlIXzowUlPllbwjgBFomdCugKOLM8N1yH2dA3pwvOb27hN2jsynuRuiSnXRCxyUhH5EG_8A', '2024-01-30', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 58, 8, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4IiwiaWF0IjoxNzA2NTE4Njk2LCJleHAiOjE3MDY2MDUwOTZ9.zmSKBvEHkbBeDIhA14RF1YIieMOw_pyqd6dAx9SUhjA4Z9PDHHV-T8wkyGGRAthUPYcBB8N8mzxporVFe73Swg', '2024-01-30', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 59, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA2NTE4NzU5LCJleHAiOjE3MDY2MDUxNTl9.et5Yt31es9urV59QyDQmcMF5Amj62jabMvj0Q0u5NA0y1DTHRAageWk5lknukLIrw1lkv_RXDOBTXv6WxmCZLg', '2024-01-30', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 60, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA2NTM0ODk1LCJleHAiOjE3MDY2MjEyOTV9.dEtwhXOthczrvEUOPERgX9X8VACtRUcUXtQVkJT2f5kuAKjtXxKvcXwIGJM7ChJhk06aGn8vKn-8_1YHwubBSQ', '2024-01-30', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 61, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA2NTM1MjYzLCJleHAiOjE3MDY2MjE2NjN9.p2O3yn9BgmkyM9Cu2HN-N2WnkRQUUUIjAtSZMezG2zQD2Cd2boGDbGpd8LEOx0C6tnV9ZCYk5Ei0BTPQnE72Pw', '2024-01-30', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 62, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA2NTM3OTAxLCJleHAiOjE3MDY2MjQzMDF9.pBAFT3UWuBMsl_6IPIjRCZlqkUxxd4gU5vjcJ7nLJa2xnLuV08IzNt1E65v3OKxySFyHATbqwekvfsL9956qOA', '2024-01-30', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 63, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA2NTM4MTg2LCJleHAiOjE3MDY2MjQ1ODZ9.0AKOiF20qzews5jc24tR4I6kMztmJX6fo-xPydcClZjd7PKUJndNl3z1n-Bonjvn_8W_AwHNDHxIELWpxuXK6A', '2024-01-30', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 64, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA2NTQxODczLCJleHAiOjE3MDY2MjgyNzN9.av-bcgU9Jaldq429l_AEnfrtdvUEPz-snbYftCCi-zBzAc4ilQ5xF05mQwRpmm29qBZr7GOGfOQaF_x2dfw0rw', '2024-01-30', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 65, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA2NTQyMDE4LCJleHAiOjE3MDY2Mjg0MTh9.P9jRc1s2epnk1OoKIeuYo9R0FWF6kmn7HOh_kVA1nwRkHJsnWSBo0Ujiap-hwv7lxrnYJDF-T197URoH9QODcw', '2024-01-30', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 66, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA2NTQyMTUwLCJleHAiOjE3MDY2Mjg1NTB9.QdBxW6O0s8aUc6dZA0y4hBdlXUaUGPBQ5lAs9RmeZGbJWI-dJ8caBIY5dHrSCboksO1fEnhLmIzEggYoJ6xWOA', '2024-01-30', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 67, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA2NTQyMzkxLCJleHAiOjE3MDY2Mjg3OTF9.RxXLEGdx0ox385IAh4kaVWJm-Kgnuf5Ly3YNXn6GMrRCk-kpBF1PMqRl_AIgzNawiHHGYTqNXtkExcMlQQ6KTg', '2024-01-30', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 68, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA2NTQ4NTA0LCJleHAiOjE3MDY2MzQ5MDR9.xqlKmNxGb0JOT6SZijrBxfdSgO_mu-F13yub_HIaQ6dfYsIc-cfDjhPCJ37UQ5b1V3CJF_xF7NsdyOdGd9Coog', '2024-01-30', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 69, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA2NTkwNDI2LCJleHAiOjE3MDY2NzY4MjZ9.Nnh7uEiJGX2nfkLvPwL_FTuaCfaDzzgDTpdZl_R3erUY-2fZykHL3IhTOJ87np2uoq6wmaFCdKjiGb3rrX3wRg', '2024-01-31', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 70, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA2NTkwNDI2LCJleHAiOjE3MDY2NzY4MjZ9.Nnh7uEiJGX2nfkLvPwL_FTuaCfaDzzgDTpdZl_R3erUY-2fZykHL3IhTOJ87np2uoq6wmaFCdKjiGb3rrX3wRg', '2024-01-31', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 71, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA2NjM3NTA0LCJleHAiOjE3MDY3MjM5MDR9.0YaOTsh99SMYuJxNhr6NoSHHAsgJ36wbg_xyrlm_s88K43V5gdAEnzpJbc3ixoehazWo5mdiodyGoBRhhRROEw', '2024-01-31', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 72, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA2NjM3Njg2LCJleHAiOjE3MDY3MjQwODZ9.tedbHVsdOWIMHR9GbJtGnTqzKeUpREY-6s7AYyddkZAwd3skjcudG9CM-vFGOWj6lVrLTB4p-xhSQ4Ln4M2BIw', '2024-01-31', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 73, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA2Njk4MTE4LCJleHAiOjE3MDY3ODQ1MTh9.zmCsbQqMcktd7kNSk0hP-9xkPZG8Q1RNArAWHm52JMq3QiZ0OqtK3LOI7DxQsNOj_AXZ8VZS2ceKlTBIIMlEpg', '2024-02-01', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 74, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA2NzEyNTUwLCJleHAiOjE3MDY3OTg5NTB9.vI92Y0PdxcCD0qqVJoOLuPgqb9WDg9vmSRnKhnRtL4_7jcpHpaqvnvRUhOLR8UNwR0VE720hIUoh4TZeuaTkAw', '2024-02-01', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 75, 8, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4IiwiaWF0IjoxNzA2ODU2MDE5LCJleHAiOjE3MDY5NDI0MTl9.IoTG4ZM9ReyvaMH6I4BinL--IT9SuKT3Mj7qT7nbsH8YoHB-LMmAjPdgkmsXdIqKQnSwOe3Wzx9PjMNtWn95gw', '2024-02-03', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 76, 8, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4IiwiaWF0IjoxNzA2ODY4MTk2LCJleHAiOjE3MDY5NTQ1OTZ9.o8CYRixEamwBRFkXqoEtC1i7yUrdlwR1U6DlFzAtuDHclbefBSrjLgXBTbYFQU7QMNlY9pZs4kNPRmWVE3StLw', '2024-02-03', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 77, 8, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4IiwiaWF0IjoxNzA2ODcyODEyLCJleHAiOjE3MDY5NTkyMTJ9.YFrLx0Rk1V3uPzLp8ETwiKLHhn2fbg1Cxhr2DiEqMedmgd117EbqgPeCzlfLBwAaPf3FPqVXv0KhvxzjumDWqg', '2024-02-03', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 78, 8, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4IiwiaWF0IjoxNzA2ODc2OTc4LCJleHAiOjE3MDY5NjMzNzh9.SXVyJwLm1CRw3g1gczPrkUd_6fvjjiRZJUbCrXvTcGCMYUf5EKdMvrdNBiA_e3k4zvtEnZVyZ9Yn_o-_xLD0gA', '2024-02-03', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 79, 8, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4IiwiaWF0IjoxNzA2ODc3OTcxLCJleHAiOjE3MDY5NjQzNzF9.w1InJd_xTMhMNh08AU9RBMFxPqRfr-QQKM4Rj6-g5avmDL0vv7Z9Yi2-zRt4l0_QYCA4cCIDyltYW77i2G58_w', '2024-02-03', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 80, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA2ODc4OTQ2LCJleHAiOjE3MDY5NjUzNDZ9.B-09RA4wHu8ta19ZLUTtuLGHW5nzG657zpuYPqtM5khMxQ1mZXzM-dhbRwrwSTzUv4S28rga27aPUUCmDakAUA', '2024-02-03', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 81, 7, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3IiwiaWF0IjoxNzA2ODgwNTI2LCJleHAiOjE3MDY5NjY5MjZ9.sWlAbavMWD4KJVa5MlNo9PWv8cXiYVSxxrwFGACm44QgVUwrrdOjGPy7mRmZ8Ghfwazz7-Y0GbwvLDa6WXAUBQ', '2024-02-03', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 82, 7, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3IiwiaWF0IjoxNzA2ODgxMTA2LCJleHAiOjE3MDY5Njc1MDZ9.nGC6lqQ9MVABEt4mkUFoPjbbfh2s4ARTSn4KrWKr3dmJvRxZsq2npr53URzQKVXjmF7wjVHwipQaP0-jQ-t3KA', '2024-02-03', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 83, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA2ODgxMjg2LCJleHAiOjE3MDY5Njc2ODZ9.io3GypUFcbuUKQIxxk4poNhYmcGlCmWajMuqSVc-ndFL5pD3AI57srt4wy31MxlLHWCZ19NYWF8aID94u8vnBA', '2024-02-03', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 84, 7, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3IiwiaWF0IjoxNzA2ODgxMzYwLCJleHAiOjE3MDY5Njc3NjB9.Y_L1Bdp4I-b802rlZ-xAX2t2xa1un9kRzCQU74zVd4TgnbzKRl4Y-Kg34n39r5x3sXD9oDnxNF1HFMd2If04GQ', '2024-02-03', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 85, 7, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3IiwiaWF0IjoxNzA2ODgyMjg5LCJleHAiOjE3MDY5Njg2ODl9.nlIU278as1HnliyXGV3-wGDyH4ZI0FaEyw3QXxShQyck5RGPXM9mVMtB42cmwze7DagDHXGKhQg3o65UcvMNyQ', '2024-02-03', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 86, 7, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3IiwiaWF0IjoxNzA2ODgyNDQxLCJleHAiOjE3MDY5Njg4NDF9.tzsyHlF60CLcXyi-ZtUU4rmJN72jL33N0v2J15akDl4z3wDwxJRCpp3HbmTP-SfGqcV08aL8iget1WqV3GixiA', '2024-02-03', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 87, 7, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3IiwiaWF0IjoxNzA2ODgyNjMwLCJleHAiOjE3MDY5NjkwMzB9.cI464BJpQHGi7lpD3v0ZIZMBGYk5giIAE4Y8-l5T7OhYDSdUjEwxmwMS_dD7XfmINoVsqBGWZgwI0g14JezRsA', '2024-02-03', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 88, 7, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3IiwiaWF0IjoxNzA2ODgyODUyLCJleHAiOjE3MDY5NjkyNTJ9.OsAeVYI51jupzUyzrHGHf-hT7unYNDOSn1e9B3ApxgJFkEiEh3R1-gM_FbrfqTOJb4Fh9nUKzyyGmZZQ0mgkCA', '2024-02-03', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 89, 8, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4IiwiaWF0IjoxNzA3MTEwOTY4LCJleHAiOjE3MDcxOTczNjh9.DyNb6x16gp5GIrCzrqAgbc3xmwA297XqZobYnMY06BmpnYwJgI-2zK88Pd3WJSbfAJjVmm3AWX4UZiQnj9kjCA', '2024-02-06', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 90, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA3MTExNTI0LCJleHAiOjE3MDcxOTc5MjR9.Mi1SB7o5rLqxGAawa2uDRycqO_shFQtLaJG2ELUUIys85Kh9fDKApKghdCGC33nqE_k6VAmm0FIET32JhdAA7w', '2024-02-06', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 91, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA3MTE5MDY4LCJleHAiOjE3MDcyMDU0Njh9.L_gvdzpYf_ahzHXbwox9olJJn3lSoYJg-G5cw6qiayKiTz_RUtdKYJAIzY_d81gtPwd91FBDSuGjJ6j4yekRkw', '2024-02-06', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 92, 8, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4IiwiaWF0IjoxNzA3MTIyODQ4LCJleHAiOjE3MDcyMDkyNDh9.od7lISFqbW8rJQ0ckteIB1RKSY15kPsufPDSB6w0ro5JRYX4qtovFMjdPHSQ0WZsDS0PWgpzKKrUvMt8-2IFtg', '2024-02-06', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 93, 8, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4IiwiaWF0IjoxNzA3MTIzMTAwLCJleHAiOjE3MDcyMDk1MDB9.XjPwdvSLJKlykabwO0bFzrYoRoB81klOU6lQpQ-8v57GlGsMkKSsZZt5xqqKQNrQAfb5Ugo3efHxHaSx7jb_Zg', '2024-02-06', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 94, 8, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4IiwiaWF0IjoxNzA3MTI2Mzg2LCJleHAiOjE3MDcyMTI3ODZ9._RKYKoOAQDciFttJihLUy6eNrQhTuAtn0SZOxSe87bsMDAyVonQ_wu1VZ70YWTlQazkOzwnAIiqdMy1ggv3wzA', '2024-02-06', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 95, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA3MTI5MTY3LCJleHAiOjE3MDcyMTU1Njd9.oHfHZsDeBooXUNNTExpsTrzotSjgBl6mwpZC3fezQ_nbHD_oIodQh0GFvnSUFSnwJVJ7x4xglXZPQGkPcTMQKQ', '2024-02-06', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 96, 8, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4IiwiaWF0IjoxNzA3MTMyNTUzLCJleHAiOjE3MDcyMTg5NTN9.um_aPPtoAZvRWcGWOXVa2UvzUyveIEH25mINtWZvg_Ta8K1Lft0j2LzKYIvUee0Rjowhs09ZFmlehvTjeyIsYQ', '2024-02-06', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 97, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA3MTM4OTY0LCJleHAiOjE3MDcyMjUzNjR9.Yw9qhQsC4pomi6ToaL-IfGPrqVTSp595YH6wknoGOrXA3aWQzT0Zu6YTEQ-HzKFn0jsPgM7bwUi9Kwh7K2vq_A', '2024-02-06', true);
INSERT INTO "public".token( id, idusers, token, dtexp, isvalidate ) VALUES ( 98, 6, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA3MTM5Njg1LCJleHAiOjE3MDcyMjYwODV9.VB1DPy6g-OLpWxSw6Z9HrLZRcqIT65UXfIljPm-kMb-t-1JlU6jrj2JiI8tzvwtUunjDGM3YYbKe0jU43F_FrQ', '2024-02-06', true);
INSERT INTO "public".user_notification( id, id_users, token ) VALUES ( 1, 8, 'cF9abeEJSoOy2kNND_QGFl:APA91bF1mjZXGb2vwDEKNvoOETw6QBLWU9tUEo4006g8hCJBKEOH7gVGEXWEnaQ_peY4LUyruxU_T-wWdNq5g8eRPmex_8TTwFye5qJStcNmC2vhyGpsT7Pon_XrGPXGWFg3eaLWkSne');
INSERT INTO "public".user_notification( id, id_users, token ) VALUES ( 2, 7, 'cF9abeEJSoOy2kNND_QGFl:APA91bF1mjZXGb2vwDEKNvoOETw6QBLWU9tUEo4006g8hCJBKEOH7gVGEXWEnaQ_peY4LUyruxU_T-wWdNq5g8eRPmex_8TTwFye5qJStcNmC2vhyGpsT7Pon_XrGPXGWFg3eaLWkSne');
INSERT INTO "public".user_notification( id, id_users, token ) VALUES ( 3, 6, 'eGza_GXXRBGWlIeDxUzKVm:APA91bFV76H1uj-WCL8t7Qiem-F-uuCATVUH66TFAEJFBUo5ErqQUH5cFyh5EPxAm0NlbRuiX-kmbYJXEcnaOJh31wsFjnLtu1Netq9LZbHzRXEm04wrMVP0IqTi598rg-WrhWQDV44U');
INSERT INTO "public".user_notification( id, id_users, token ) VALUES ( 4, 6, 'eGza_GXXRBGWlIeDxUzKVm:APA91bFV76H1uj-WCL8t7Qiem-F-uuCATVUH66TFAEJFBUo5ErqQUH5cFyh5EPxAm0NlbRuiX-kmbYJXEcnaOJh31wsFjnLtu1Netq9LZbHzRXEm04wrMVP0IqTi598rg-WrhWQDV44U');
INSERT INTO "public".user_notification( id, id_users, token ) VALUES ( 5, 6, 'eGza_GXXRBGWlIeDxUzKVm:APA91bFV76H1uj-WCL8t7Qiem-F-uuCATVUH66TFAEJFBUo5ErqQUH5cFyh5EPxAm0NlbRuiX-kmbYJXEcnaOJh31wsFjnLtu1Netq9LZbHzRXEm04wrMVP0IqTi598rg-WrhWQDV44U');
INSERT INTO "public".user_notification( id, id_users, token ) VALUES ( 6, 6, 'cInMbMqsT-uDk7jiSZ2GGH:APA91bF0c6KChOAGchbDig8Lc2EnFz024ArTUZVaawUixi8oQuXkr5Flf74V2g4MhcQlR7QkGLW0KXUeqOTD9tZeobO6FgZ--jZky8TDdhRtxfprOaINqBzzGAronot3LQt-Uin-rM7m');
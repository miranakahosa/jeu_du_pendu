const NBR_MAX_ERREURS = 6;

const mots = [
"abandon","abeille","abimer","aborder","aboutir","abriter","absence","absolu","absorber","abuser",
"academie","acajou","acarien","accabler","accepter","acces","accident","accolade","accorder","accuser",
"achat","acheter","acidite","acier","acompte","acquerir","acteur","actif","action","actuel",
"adapter","addition","admettre","admirer","adopter","adorer","adresse","adulte","advenir","affaire",
"affecter","affiche","affirmer","affoler","affreux","afrique","agacer","agence","agenda","agent",
"agir","agiter","agrandir","agreable","agresser","aider","aigle","aiguille","aileron","aimant",
"aimer","ainsi","ajouter","alarme","album","alcool","alerte","algorithme","aliment","alleger",
"allumer","allure","alors","alterner","amateur","ambiance","ambre","ameliorer","amener","amiral",
"amour","amuser","analyse","ancien","ancre","animal","annonce","annuler","anonyme","antenne",
"antique","anxiete","apaiser","apercevoir","appareil","appeler","apporter","appuyer","apres",
"aquarium","arbre","arcade","ardeur","argent","armee","arranger","arreter","arriver","arroser",
"article","artisan","aspect","assaut","assembler","assister","associer","assurer","astre","atelier",
"atome","attacher","attaque","atteindre","attendre","attirer","attraper","auberge","aucun","audace",
"augmenter","auteur","auto","automne","autour","avance","avancer","avenir","aventure","avion",
"aviser","avocat","avouer","avril","axe","badge","bagage","bagarre","bague","baiser",
"balancer","balcon","baleine","balle","ballon","bande","banque","barbe","barque","barrage",
"barriere","bataille","bateau","batterie","beau","beaucoup","belette","belier","benefice","berger",
"besoin","beton","beurre","biberon","bibliotheque","bijou","bilan","billet","binaire","biologie",
"biscuit","bison","bizarre","blague","blanc","blesser","bloc","bloquer","blond","boire",
"bois","boite","bonbon","bonheur","bonjour","bonne","bord","borne","botte","boucher",
"boucle","boue","bouger","bougie","boulanger","boule","bourse","boutique","branche","bras",
"brave","brique","briser","broder","bronze","brosse","brouillard","bruit","bruler","brume",
"brutal","budget","bureau","cabane","cable","cabinet","cadeau","cadre","cafe","cahier",
"caillou","calcul","calme","camera","campagne","canal","canard","canette","canon","capable",
"capital","capitaine","caractere","carbone","carotte","carre","carriere","carte","carton","cascade",
"caserne","casque","casser","cause","caution","cave","ceci","ceder","celebre","cellule",
"cendre","cent","centre","cerise","cerveau","cesser","chaine","chaise","chaleur","chambre",
"chance","changer","chant","chaos","chapitre","charge","charme","chat","chaud","chef",
"chemin","chemise","chenille","cher","chercher","cheval","cheveu","chien","chiffre","chimie",
"choisir","chose","chute","cible","ciel","ciment","circuit","cirer","cirque","citation",
"citoyen","civil","clair","clavier","client","climat","cloche","clore","clos","club",
"coach","code","coffre","coin","colere","colline","combat","combler","comique","commande",
"comment","commerce","commune","compact","compagnie","comparer","complet","composer","compter","concept",
"conclure","conduire","confier","confondre","conforme","confort","congel","congres","connu","conseil",
"conserver","consigne","constant","contact","contenu","contexte","continuer","contrat","contre","convaincre",
"copain","copie","coq","corbeau","corde","corniche","corps","correct","cortex","costume",
"cote","coton","coude","coudre","couleur","coup","couper","courage","courbe","courir",
"courrier","cours","court","cousin","cout","couteau","couvrir","crabe","crainte","crayon",
"creer","creme","creuser","crever","cri","crier","crime","crise","croire","croiser",
"croix","croute","cube","cueillir","cuisine","cuivre","culture","curieux","cycle","cylindre",
"dangereux","danse","danger","debattre","debit","debut","decider","declin","decoder","decor",
"decouvrir","decrire","deduire","defense","defier","definir","deformer","degre","dejeuner","delai",
"deleguer","delice","demain","demande","demeurer","demolir","demon","demontre","denier","densite",
"dent","depart","depense","deplacer","deposer","depuis","dernier","desert","design","desir",
"dessin","detacher","detail","detecter","detente","detruire","devenir","deviner","devoir","dialogue",
"diamant","diction","difficile","digne","diluer","diner","direct","diriger","discuter","disposer",
"distance","distinct","diviser","docteur","document","domaine","donner","dormir","dossier","doute",
"doux","dragon","drap","dresser","droit","durable","durer","eau","echo","eclair",
"ecole","economie","ecouter","ecran","ecrire","effacer","effet","effort","egal","eglise",
"election","elephant","elevage","elever","elite","elle","emballer","emission","emploi","emporter",
"emprise","emprunt","encore","endroit","energie","enfance","enfer","engager","engin","enigme",
"enlever","ennemi","enorme","enquete","enrichir","enseigne","entendre","entier","entrer","envahir",
"enveloppe","envie","environ","epais","epaule","epice","epine","episode","epoque","epreuve",
"escalier","espace","esprit","essai","essence","estime","etage","etat","eteindre","etendre",
"eternel","ethique","etirer","etoile","etude","europe","evader","evaluation","eviter","exact",
"examen","excuser","exemple","exiger","exister","exotique","expansion","expert","expliquer","exposer",
"exprimer","extension","extra","fabrique","facile","facteur","faible","faim","faire","falaise",
"famille","fan","fantome","farine","fatal","faute","faveur","feuille","feu","fibre",
"fiche","fiction","fidele","figure","filer","film","filtre","final","finir","fixer",
"flamme","flanc","flot","flux","foi","foire","fond","force","forger","forme",
"formule","fort","fossile","fou","foule","four","fragile","frais","franc","frapper",
"frein","frere","frisson","front","fruit","fuite","fusion","futur","gagner","galaxie",
"galerie","garder","gauche","geler","generer","genial","genre","gerer","geste","gilet",
"glace","glisser","global","gloire","golf","gomme","gout","gouverner","grain","grand",
"graphe","grave","gravite","greffe","grenier","gris","groupe","guerre","guide","habile",
"habiter","habituel","hache","haine","hall","hasard","haut","herbe","heure","hibou",
"histoire","hiver","homme","honneur","honte","horizon","horloge","hotel","huile","humain",
"humeur","humide","humour","ideal","idee","identite","ignorer","ile","image","imaginer",
"imiter","immense","impact","imposer","imprimer","improviser","impulsion","incapable","incendie","inclure",
"indice","individu","industrie","inerte","informe","ingener","initial","injure","innocent","insecte",
"insister","instant","insulte","intact","intense","interet","interne","intime","introduire","inutile",
"inviter","iode","ironie","isoler","issue","item","ivresse","jamais","jardin","jaune",
"jet","jeu","jeune","joie","joindre","joli","jouer","journal","jour","joyeux",
"juger","jungle","juin","juillet","jupe","justice","juste","karma","kayak","kilo",
"kiwi","koala","label","labo","lac","lait","lampe","lancer","langue","large",
"laser","laver","lecture","legal","leger","legume","lendemain","lent","leopard","lettre",
"lever","levier","libre","ligne","limer","limite","lire","liste","litre","livre",
"local","loger","logique","loi","loisir","long","lourd","louer","loup","lumiere",
"lundi","lune","lutter","machine","magasin","magie","magnifique","main","maintenir","maison",
"maitre","majeur","malade","malin","manche","manger","manquer","marche","mardi","marine",
"marquer","marteau","masque","masse","matin","matiere","maximum","mecanique","medaille","media",
"medecin","melange","memoire","menace","mener","mensonge","mental","mention","menu","merci",
"mercredi","merveille","message","mesure","metal","metier","mettre","meuble","midi","miel",
"mieux","milieu","militaire","million","minerai","minimal","minute","miracle","miroir","mode",
"model","modifier","module","moelle","moindre","mois","moment","monde","montagne","monter",
"montrer","moral","morceau","mort","mot","moteur","mou","mouche","mouvement","moyen",
"mur","muscle","musique","mystere","nager","naissance","nature","navire","neige","nerf",
"neuf","neutre","niveau","noble","noir","nombre","nommer","nord","normal","noter",
"notion","nourrir","nouveau","nuit","nul","nuage","nuance","objet","obliger","obtenir",
"occasion","occuper","octobre","odeur","offre","offrir","oiseau","ombre","oncle","onde",
"ongle","operation","opinion","opposer","option","orange","ordre","organiser","organe","orienter",
"origine","oser","outil","ouvrir","ouvrage","oxygene","page","paille","pain","paire",
"paix","palais","panne","papier","paraitre","parc","parcourir","pardon","parler","paroi",
"part","partager","partir","passage","passer","patience","patron","pays","peau","peine",
"penser","perdre","permettre","personne","petit","peur","phase","photo","phrase","physique",
"piano","piece","pierre","piste","place","plage","plaisir","plan","plante","plaque",
"plasma","plein","pleurer","plier","plomb","pluie","plus","poche","poeme","poids",
"poisson","poivre","pole","police","politique","pomme","pont","populaire","porter","poser",
"position","possible","poste","pot","pouce","poule","pouvoir","prairie","pratique","precision",
"predire","preferer","premier","prendre","preparer","presence","presque","preuve","prevoir","prier",
"primaire","principe","priorite","prison","priver","prix","probleme","procedure","processus","produire",
"profond","programme","projet","promettre","propre","proteger","prouver","public","puis","puissance",
"qualite","quantite","quart","quartier","quasi","quatre","question","queue","quete","quitter",
"quota","raconter","radar","radical","rafale","raison","ralentir","ramener","ranger","rapide",
"rapport","rare","rassembler","ration","rayon","reagir","rechercher","recompense","recruter","recto",
"recueillir","reculer","reel","refaire","reflet","reflexe","refuser","regard","regime","region",
"regler","regret","rein","rejouer","relatif","relax","remarquer","remede","remettre","remplir",
"renard","rencontrer","rendement","renforcer","renoncer","renseigner","rentree","renverser","repas","reponse",
"reposer","reprendre","reproduire","requete","reserve","resister","respect","respirer","responsable","reste",
"resultat","retard","retirer","retour","reunion","reussir","revanche","reve","revenir","rever",
"reviser","revolution","riche","rideau","rien","rigide","rire","risque","rivage","rive",
"robot","roche","rocher","roi","role","romain","rompre","rond","rose","roue",
"rouge","route","routine","royaume","ruban","rubrique","ruche","rue","ruine","ruisseau",
"sable","sac","sage","saison","salade","salle","salon","saluer","samedi","sang",
"sante","savoir","scene","science","score","secret","securite","semaine","sens","sentier",
"sentiment","separer","serieux","serpent","service","seuil","seul","sexe","sieste","signal",
"silence","simple","singe","situation","societe","soeur","soif","soin","soir","soleil",
"solide","solution","somme","sommet","son","songer","sonner","sorte","sortie","souci",
"soudain","souffle","souhait","soulager","source","sourire","sous","soutenir","souvenir","spectacle",
"sport","stable","stage","station","statue","structure","studio","style","subir","substance",
"succes","sucre","sud","suivre","super","support","surface","surprise","surtout","suspendre",
"symbole","systeme","tableau","tache","taille","talent","tambour","tapis","tard","taux",
"technique","tele","temps","tendre","tenir","tentative","terme","terrain","terre","texte",
"theme","theorie","thermique","thune","ticket","tigre","tissu","titre","toile","toit",
"tomber","ton","tonnerre","top","torchon","tordre","total","touchant","toucher","tour",
"tourner","trace","traduire","train","trajet","trancher","travail","travers","tremble","tresor",
"triangle","trier","triste","tromper","tronc","trop","trou","trouble","troupe","tube",
"tuer","tunnel","type","unique","univers","urgent","usage","usine","utile","vacance",
"vague","valeur","valise","vallon","valoir","vanille","vapeur","variable","varier","vaste",
"veau","vegetal","vehicule","veiller","vendre","venir","vent","verbe","verdict","verifier",
"verre","verrou","vers","version","vert","vestiaire","vetement","veto","viande","vider",
"vie","vieux","vigilance","village","ville","vin","violence","violet","virtuel","virus",
"visage","viser","vision","visite","vite","vivre","voile","voir","voisin","voiture",
"volume","vote","vouloir","voyage","vrai","vue","wagon","zone","zoo","zen"
];

let motCache = '';
let lettresCorrectes = [];
let lettresIncorrectes = [];
let enCours = true;

const elPlateau = document.getElementById('plateau');
const elErreurs = document.getElementById('erreurs');
const elNotification = document.getElementById('notification');
const elPopup = document.getElementById('popup');
const elDernierMessage = document.getElementById('dernier-message');
const elMotCache = document.getElementById('mot-cache');
const btnRejouer = document.getElementById('btn-rejouer');
const elClavier = document.getElementById('clavier');

function creerClavier() {
    elClavier.innerHTML = '';
    for (let i = 0; i < 26; i++) {
        const lettre = String.fromCharCode(97 + i);
        const btn = document.createElement('button');
        btn.className = 'btn-lettre';
        btn.textContent = lettre.toUpperCase();
        btn.dataset.lettre = lettre;
        btn.addEventListener('click', () => traiterLettre(lettre, btn));
        elClavier.appendChild(btn);
    }
}

function traiterLettre(lettre, btn) {
    if (!enCours) return;

    if (motCache.includes(lettre)) {
        if (!lettresCorrectes.includes(lettre)) {
            lettresCorrectes.push(lettre);
            afficherMot();
        } else {
            afficherNotification();
        }
    } else {
        if (!lettresIncorrectes.includes(lettre)) {
            lettresIncorrectes.push(lettre);
            afficherNbrErreurs();
        } else {
            afficherNotification();
        }
    }
    btn.disabled = true;
}

function genererMot() {
    const index = Math.floor(Math.random() * mots.length);

    return mots[index].toLowerCase();
}

function afficherMot() {
    elPlateau.innerHTML = motCache.split('').map(
        (lettre) => `
            <span class="lettre">${lettresCorrectes.includes(lettre) ? lettre : ''}</span>
        `
    ).join('');

    const motAffichie = motCache
    .split('')
    .filter(l => lettresCorrectes.includes(l))
    .join('');

    if (motAffichie == motCache) {
        elDernierMessage.innerText = 'Bravo, vous avez gagné !'
        elMotCache.innerText = '';
        elPopup.style.display = 'flex';
        enCours = false;
    }
}

function afficherNbrErreurs() {
    const nbrErreurs = lettresIncorrectes.length;

    elErreurs.innerText = `Erreurs (${lettresIncorrectes.join(', ')}) : ${nbrErreurs}/${NBR_MAX_ERREURS}`;

    if (nbrErreurs == 0) {
        elErreurs.innerText = '';
    }


    if (nbrErreurs >= NBR_MAX_ERREURS) {
        elDernierMessage.innerText = 'Desolé, vous avez perdu.'
        elMotCache.innerText = `Le mot caché était : ${motCache}`;
        elPopup.style.display = 'flex';
        enCours = false;
    }
}

function afficherNotification() {
    elNotification.classList.add('afficher');

    setTimeout(() => {
		elNotification.classList.remove('afficher');
	}, 2000);
}

btnRejouer.addEventListener('click', () => {
    elPopup.style.display = 'none';
    initialiserJeu();
    creerClavier();
});

window.addEventListener('keydown', (e) => {
    const regex = /^[a-z]$/i;

    if (enCours && regex.test(e.key)) {
        const lettre = e.key.toLowerCase();

        if (motCache.includes(lettre)) {
            if (!lettresCorrectes.includes(lettre)) {
                lettresCorrectes.push(lettre);
                afficherMot();
            } else {
                afficherNotification();
            }
        }
        else {
            if (!lettresIncorrectes.includes(lettre)) {
                lettresIncorrectes.push(lettre);
                afficherNbrErreurs();
            } else {
                afficherNotification();
            }
        }
    }

});

function initialiserJeu() {
    motCache = genererMot();
    lettresCorrectes = [];
    lettresIncorrectes = [];
    enCours = true;
    afficherMot();
    afficherNbrErreurs();
}

initialiserJeu();
creerClavier();
const mois = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Novembre","Décembre"];
const plageh = ["09:00:00","10:00:00","11:00:00","12:00:00","13:00:00","14:00:00","15:00:00","16:00:00","17:00:00","18:00:00","00:00:00"];
const jweek = ["LU", "MA", "ME", "JE", "VE", "SA", "DI"];
const projweek = ["proj-lu", "proj-ma", "proj-me", "proj-je", "proj-ve", "proj-sa", "proj-di"];

var jsontask = [
    {
        "id": 0,
        "name": "Cyprimoche",
        "machine": "print3D",
        "desc": "faire un cyprien moche",
        "requestdate": "2023-04-10T13:45:00.000Z",
        "startdate":"2023-07-27",
        "starttime":"10:00:00",
        "enddate":"2023-07-27",
        "endtime":"14:00:00"
    },
    {
        "id": 1,
        "name": "Antonaflat",
        "machine": "lasercut",
        "desc": "couper Antoine",
        "requestdate": "2023-04-10T13:45:00",
        "startdate":"2023-07-28",
        "starttime":"15:00:00",
        "enddate":"2023-07-30",
        "endtime":"10:00:00"
    },
    {
        "id": 2,
        "name": "test",
        "machine": "lasercut",
        "desc": "OUI",
        "requestdate": "2023-04-10T13:45:00",
        "startdate":"2023-07-25",
        "starttime":"15:00:00",
        "enddate":"2023-07-27",
        "endtime":"07:00:00"
    },
    {
        "id": 3,
        "name": "peut etre",
        "machine": "traceur",
        "desc": "il est ici sans doute",
        "requestdate": "2023-04-10T13:45:00",
        "startdate":"2023-07-28",
        "starttime":"10:00:00",
        "enddate":"2023-07-28",
        "endtime":"14:00:00"
    },
    {
        "id": 4,
        "name": "Guijojo",
        "machine": "print3D",
        "desc": "le jojo d'adrien",
        "requestdate": "2023-04-10T13:45:00",
        "startdate":"2023-07-29",
        "starttime":"09:00:00",
        "enddate":"2023-07-29",
        "endtime":"16:00:00"
    },
    {
        "id": 5,
        "name": "bootcamp",
        "machine": "vr",
        "desc": "le jojo d'adrien",
        "requestdate": "2023-04-10T13:45:00",
        "startdate":"2023-07-30",
        "starttime":"00:00:00",
        "enddate":"2023-07-30",
        "endtime":"23:00:00"
    },
    {
        "id": 6,
        "name": "Découpe",
        "machine": "lasercut",
        "desc": "je veux une découpe",
        "requestdate": "2023-04-10T13:45:00",
        "startdate":"2023-07-31",
        "starttime":"11:00:00",
        "enddate":"2023-07-31",
        "endtime":"17:00:00"
    },
    {
        "id": 7,
        "name": "imprimante",
        "machine": "print3D",
        "desc": "je veux imprimer",
        "requestdate": "2023-04-10T13:45:00",
        "startdate":"2023-07-30",
        "starttime":"17:00:00",
        "enddate":"2023-07-31",
        "endtime":"16:00:00"
    },
    {
        "id": 8,
        "name": "tracer",
        "machine": "traceur",
        "desc": "je veux du A0",
        "requestdate": "2023-04-10T13:45:00",
        "startdate":"2023-07-31",
        "starttime":"09:00:00",
        "enddate":"2023-07-31",
        "endtime":"13:00:00"
    },
    {
        "id": 9,
        "name": "beat cyber",
        "machine": "vr",
        "desc": "de la musique avec les mains",
        "requestdate": "2023-04-10T13:45:00",
        "startdate":"2023-07-31",
        "starttime":"10:00:00",
        "enddate":"2023-07-31",
        "endtime":"14:00:00"
    },
    {
        "id": 10,
        "name": "carte de visite",
        "machine": "riso",
        "desc": "carte de visite pour ma société qui n'existe pas",
        "requestdate": "2023-04-10T13:45:00",
        "startdate":"2023-07-31",
        "starttime":"10:00:00",
        "enddate":"2023-07-31",
        "endtime":"17:00:00"
    },
    {
        "id": 11,
        "name": "flayer chic",
        "machine": "riso",
        "desc": "mes flyers les plus beau",
        "requestdate": "2023-04-10T13:45:00",
        "startdate":"2023-07-27",
        "starttime":"10:00:00",
        "enddate":"2023-07-28",
        "endtime":"10:00:00"
    }
];

let actuweek = ["2023-07-27","2023-07-28","2023-07-29","2023-07-30","2023-07-31","2023-08-01","2023-08-02"];


let usedate = actuweek[0].split("-");

// boucles pour chaque jours de la semaines
for (let j = 0; j < jweek.length; j++) {
    
    let divjour = document.getElementById(jweek[j]);
    let usedate = actuweek[j].split("-");
    divjour.querySelector('.currentnum').innerHTML = usedate[2];


    // pour le premier jour de la semmaine mettre le moi
    if (j == 0) {
        let nummoi = parseInt(usedate[1], 10) - 1;
        divjour.querySelector('.currentmoi').innerHTML = mois[nummoi];
    };


    // si on change de moi faire une séparation et remettre le moi
    if (usedate[2] === '01') {
        divjour.classList.add('newmoi')
        let nummoi = parseInt(usedate[1], 10) - 1;
        divjour.querySelector('.currentmoi').innerHTML = mois[nummoi];
    };


    // boucle pour chaque tache du json
    for (let i = 0; i < jsontask.length; i++) {
        let start = jsontask[i]['startdate'];
        let now = actuweek[j];
        let end = jsontask[i]['enddate'];

        // si la tache faire parti de la journée ou pas
        if (start <= now && end >= now) {

            // config le début du projet de la journée
            let hstart;  
            let bup ='d';
            if (start < now) {
                hstart = 0;
                bup = 'blprojup';
            }else{
                hstart = jsontask[i]['starttime'].split(":");
                hstart = hstart[0];

                if (hstart > 0 && hstart < 9) {
                    hstart = "0"
                }
                
                if (hstart > 18 && hstart < 24) {
                    hstart = "18"
                }
            }

            // config la fin du projet de la journée
            let hend;
            let bdown ='d';
            if (end > now) {
                hend = 0;
                bdown = 'blprojdown';
            }else{
                hend = jsontask[i]['endtime'].split(":");
                hend = hend[0];

                if (hend > 0 && hend < 9) {
                    hend = "9"
                }
                if (hend > 18 && hend < 24) {
                    hend = "0"
                }
            }

            // faire la class de div projet
            let clsh = 'h'+parseInt(hstart, 10)+'-'+parseInt(hend, 10);;

            // créer la div
            let = divjproj = document.getElementById(projweek[j]);
            let newDiv = document.createElement("div");
            let = newContent = document.createTextNode(jsontask[i]['name']);
            newDiv.dataset.idproject = jsontask[i]['id'];
            newDiv.classList.add(clsh, jsontask[i]['machine'], "blproj", bup, bdown);
            newDiv.appendChild(newContent);
            divjproj.appendChild(newDiv);

        }

        
    }

};



//créer une vision d projet
var printproj = document.getElementsByClassName("blproj");

var ctnallview = document.getElementById("jour-heur");

var btnX = document.createElement("button");
btnX.appendChild(document.createTextNode('✕'));

// chercher l'action d'ouverture de vision
for (let c = 0; c < printproj.length; c++) {
    printproj[c].addEventListener("click", function(){
        
        //si la vision est déja ouverte fermé la précédente
        if (document.getElementById("ctnview") != undefined) {
            close()
        }

        let = ctnview = document.createElement("ctnview");
        ctnallview.appendChild(ctnview);
        ctnview.setAttribute("id","ctnview");

        let divview = document.createElement("div");
        ctnview.appendChild(divview);
        divview.setAttribute("id","view");

        divview.appendChild(btnX);
        btnX.setAttribute("id","Xview");
        btnX.setAttribute("onclick","close()");

        // faire le titre
        let currentid = this.dataset.idproject;
        let ptitle = document.createElement("h2");
        let = contenttitle = document.createTextNode(jsontask[currentid]['name']);
        ptitle.appendChild(contenttitle);
        divview.appendChild(ptitle);

        // écrire la description
        let pdescr = document.createElement("p");
        let = contentdesc = document.createTextNode(jsontask[currentid]['desc']);
        pdescr.appendChild(contentdesc);
        divview.appendChild(pdescr);
        
        // écrire la machine
        let pmachine = document.createElement("p");
        let = contentmachine = document.createTextNode("Machine: "+ jsontask[currentid]['machine']);
        pmachine.appendChild(contentmachine);
        divview.appendChild(pmachine);

        // écrire quand ça débute
        let pdebut = document.createElement("p");
        let = contentdebut = document.createTextNode("Débute le "+ jsontask[currentid]['startdate']+' à '+ jsontask[currentid]['starttime']);
        pdebut.appendChild(contentdebut);
        divview.appendChild(pdebut);
        
        // écrire quand ça fini
        let pfin = document.createElement("p");
        let = contentfin = document.createTextNode("fini le "+ jsontask[currentid]['enddate']+' à '+ jsontask[currentid]['endtime']);
        pfin.appendChild(contentfin);
        divview.appendChild(pfin);

        // écrire la durée
        let duree = document.createElement("p");
        let = contentduree = document.createTextNode("Durée: "+calcduree(jsontask[currentid]));
        duree.appendChild(contentduree);
        divview.appendChild(duree);

    });
}

// chercher si la fonction fermé la vision est appelé
btnX.addEventListener("click", function(){
    close();
})

// fonction pour fermé la vision
function close(){
    let remove = document.getElementById("ctnview");
    remove.remove();
}

// fonction pour caculer la durée
function calcduree(data){
    let debut =  new Date(data['startdate'] + 'T' + data['starttime']);
    let fin = new Date(data['enddate'] + 'T' + data['endtime']);
    let heur = fin.getTime() - debut.getTime();
    let jour = "";

    //convertir milliseconde en heur
    heur = parseInt(heur / 1000 * 0.000277778, 10);
    
    // si il y a plus de 24h indiqué des jours
    if (heur >= 24) {
        jour = parseInt(heur / 24, 10);
        heur = heur - 24 * jour;

        // chercher le singulier ou le pluriel
        if (jour == 1) {
            jour = jour+" jour";
        }else{
            jour = jour+" jours";
        }

        if (heur > 0) {
            jour = jour + " et ";
        }
    }

    // indiqué si il y a encore des y heur, le singulier our le pluriel
    switch (heur) {
        case 0:
            heur = "";
            break;
        
        case 1:
            heur = "1 heure";
            break;

        default:
            heur = heur + " heures";
            break;
    }

    // écrier la durée et la renvoyer
    duree = jour + heur;
    return duree;
}
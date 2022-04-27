console.log("work");

/*
Viene fornito un layout di base in cui è presente **una card di esempio** inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e **dovrà quindi essere rimossa dall’html**.
Aggiungere un file js in cui definire **un array di oggetti** che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: **Nome, Ruolo e Foto**.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.
BONUS:
Utilizzare gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un **nuovo oggetto**, il quale viene **inserito nell’array iniziale** e viene stampata una nuova card con tutte le informazioni inserite dall’utente.
**Consigli del giorno:**
Ragioniamo come sempre a step.
Scriviamo prima la logica in italiano e poi traduciamo in codice.
console.log() è nostro amico.
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
*/

const teamOffice = [
  {//angela-caroll-chief-editor
    fullName: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {//angela-lopez-social-media-manager
    fullName: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {//barbara-ramos-graphic-designer
    fullName: "Barbaraa Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
  {//scott-estrada-developer
    fullName: "Scott Estrada",
    role: "Devloper",
    image: "scott-estrada-developer.jpg",
  },
  {//walter-gordon-office-manager
    fullName: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {//wayne-barnett-founder-ceo
    fullName: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  }
];

console.log(teamOffice);

const cardPlace = document.querySelector(".team-container");

for(let i in teamOffice){
  console.log(teamOffice[i]);
  cardPlace.innerHTML +=`
  <div class="team-card">
    <div class="card-image">
      <img
        src="img/${teamOffice[i].image}"
        alt="${teamOffice[i].fullName}"
      />
    </div>
    <div class="card-text">
      <h3>${teamOffice[i].fullName}</h3>
      <p>${teamOffice[i].role}</p>
    </div>
  </div> 
  `;
};

// Bonus

const btn = document.querySelector("#addMemberButton")
console.log(btn)

const addNewMember = (name, role, img) =>{
  teamOffice.push({
      fullName: name,
      role: role,
      image: img
  });
};



btn.addEventListener("click", () =>{
  const nameVal = document.querySelector("#name").value
  
  const roleVal = document.querySelector("#role").value
  
  const imgVal = document.querySelector("#image").value

  console.log(roleVal);
  console.log(nameVal);
  console.log(imgVal);
  
  addNewMember(nameVal, roleVal, imgVal);
  
  cardPlace.innerHTML +=`
  <div class="team-card">
  <div class="card-image">
    <img
      src="img/${imgVal}"
      alt="${nameVal}"
    />
  </div>
  <div class="card-text">
    <h3>${nameVal}</h3>
    <p>${roleVal}</p>
  </div>
  </div> 
  `;
  console.log(teamOffice);
});
  

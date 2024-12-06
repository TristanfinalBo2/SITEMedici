import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getFirestore, doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js'; // Add Firestore imports
import { getDatabase, ref, child, get } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js'; // Realtime Database imports
const firebaseConfig = {
apiKey: "AIzaSyAkv2z5o--_QWEyiO0Tj_Nvpq2h28-21Rg",
authDomain: "hr-medici.firebaseapp.com",
projectId: "hr-medici",
storageBucket: "hr-medici.firebasestorage.app",
messagingSenderId: "125815151089",
appId: "1:125815151089:web:dd920d8749221e6df08c50",
measurementId: "G-9MZ9ML041N"
};
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 // Initialize Firestore
 const db = getFirestore(app); // This is where you got the error
 
 // Reference to the document you want to retrieve from Firestore
 const docRef = doc(db, "medici", "2P56nByBKEOVrNeGiXlc");
 
 // Get the document
 getDoc(docRef)
 .then((docSnap) => {
     if (docSnap.exists()) {
     // Retrieve the field "number" from the document
     const number = docSnap.data().numar;
     document.getElementById('medic').innerHTML =`~ ${number} Cadre Medicale`
     } else {
     console.log("No such document!");
     }
 })
 .catch((error) => {
     console.error("Error getting document:", error);
 });

    // JavaScript pentru meniul hamburger
document.querySelector('.hamburger').addEventListener('click', function () {
this.classList.toggle('active');
document.querySelector('.nav-menu').classList.toggle('active');
});

    let sec = document.querySelectorAll('section');
    let links = document.querySelectorAll('nav a');

    window.onscroll = () => {
        sec.forEach(setction => {
            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height)
            links.forEach(link => {
            link.classList.remove('active');
            document.querySelector('nav a[href*=' + id +']').classList.add('active');
        })
        })
    };

document.getElementById('eventForm').addEventListener('submit', function(event) {
event.preventDefault();  // Previne comportamentul implicit al formularului

// Preluăm datele din formular
const name = document.getElementById('NAME').value.trim();
const eventName = document.getElementById('NUME_EVENIMENT').value.trim();
const location = document.getElementById('LOCATIE').value.trim();
const eventDate = document.getElementById('DATA_EVENIMENT').value.trim();
const description = document.getElementById('DESCRIERE').value.trim();
const contact = document.getElementById('CONTACT').value.trim();
const discordName = document.getElementById('EMAIL').value.trim();
const helpers = document.getElementById('AJUTOARE').value.trim();
const eventClock = document.getElementById('ORA_EVENIMENT').value.trim();
const photos = document.getElementById('POZE').value.trim();
const webhookUrl = "https://discordapp.com/api/webhooks/1313551020562841721/HKybFtoZPWRbzf_Bqmo7mhzrBGZtbKtx5fu6arFWewDnJGas9aXPoku2Jds4zoSG_Eni"; // Înlocuiește cu URL-ul tău

// Construim mesajul de payload
const payload = {
content: `<@&908967632865202208>\n
:tada: **Cerere Eveniment** :tada: \n
**1) Nume:** ${name}\n
**2) Nume Eveniment:** ${eventName}\n
**3) Locatie:** ${location}\n
**4) Data Evenimentului:** ${eventDate}\n
**5) Ora Evenimentului:** ${eventClock}\n
**5) Descriere Eveniment:** ${description}\n
**6) Număr de contact:** ${contact}\n
**7) Ce fel de ajutor are nevoie la eveniment:** ${helpers}\n
**8) Imagini:** ${photos}`
};

// Trimitem datele la Discord folosind fetch
fetch(webhookUrl, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(payload)
})
.then(response => {
if (response.ok) {
document.getElementById('responseMessageEveniment').innerText = `Mulțumim, ${name}! Cererea Dvs de eveniment a fost înregistrată.`;
document.getElementById('eventForm').reset();
} else {
return response.json().then(data => {
    console.error('Răspuns eroare Discord:', data);
    document.getElementById('responseMessageEveniment').innerText = "Eroare la trimiterea cererii. Te rugăm să încerci din nou.";
});
}
})

.catch(error => {
console.error("Eroare la trimiterea cererii către Discord:", error);
document.getElementById('responseMessageEveniment').innerText = "Eroare la trimiterea cererii. Te rugăm să încerci din nou.";
});
});


function formatPhoneNumber(inputId) {
const phoneInput = document.getElementById(inputId);
phoneInput.addEventListener('input', function (e) {
let value = e.target.value.replace(/\D/g, ''); // Elimină caracterele non-numerice
if (value.length > 3) {
    value = value.slice(0, 3) + '-' + value.slice(3, 7); // Adaugă cratima
}
e.target.value = value;
});
}

// Aplică formatul pentru ambele câmpuri
formatPhoneNumber('NUMAR_DE_TEL');
formatPhoneNumber('CONTACT');


    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Preluăm datele din formular
        const name = document.getElementById('NUME').value.trim();
        const cnp = document.getElementById('ID').value.trim();
        const medicReclamat = document.getElementById('NUME_RECLAMAT').value.trim();
        const callSign = document.getElementById('CALL_SIGN').value.trim();
        const phone = document.getElementById('NUMAR_DE_TEL').value.trim();
        const incidentDate = document.getElementById('DATA').value.trim();
        const discordName = document.getElementById('EMAIL').value.trim();
        const proof = document.getElementById('DETALII').value.trim();

        const webhookUrl = "https://discordapp.com/api/webhooks/1300111955003965451/XRSZ-2xrgA8Tpi8ogr3bATh1gVXzfnGcPvsHlklvmC-WjQT1r5ImSecEMr9a9TfTooT1";

        // Construim mesajul de payload
        const payload = {
            content: `:warning: **Cerere Audiență** :warning: \n
**1) Nume:** ${name}\n
**2) CNP:** ${cnp}\n
**3) Numele medicului reclamat:** ${medicReclamat}\n
**4) Call Sign Medic:** ${callSign}\n
**5) Număr de telefon:** ${phone}\n
**6) Discord:** ${discordName}\n
**7) Data incidentului:** ${incidentDate}\n
**8) Dovada:** ${proof}`
        };

        // Trimitem datele la Discord folosind fetch
        fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (response.ok) {
                document.getElementById('responseMessage').innerText = `Mulțumim, ${name}! Cererea Dvs a fost inregistrata, un membru al Conducerii se v-a ocupa.`;
                document.getElementById('contactForm').reset();
            } else {
                document.getElementById('responseMessage').innerText = "Eroare la trimiterea mesajului. Te rugăm să încerci din nou.";
            }
        })
        .catch(error => {
            console.error("Eroare la trimiterea datelor către Discord:", error);
            document.getElementById('responseMessage').innerText = "Eroare la trimiterea mesajului. Te rugăm să încerci din nou.";
        });
    });
    class MediumImage extends HTMLElement {
    constructor() {
        super();

        // Cream un shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Cream elementele interne: containerul și imaginea
        const container = document.createElement('div');
        const image = document.createElement('div');

        // Adăugăm stiluri
        const style = document.createElement('style');
        style.textContent = `
            div {
                width: 300px;
                height: 200px;
                background-size: cover;
                background-position: center;
                border-radius: 8px;
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
            }
        `;

        // Setăm imaginea ca background în funcție de atributul `src`
        const src = this.getAttribute('src');
        image.style.backgroundImage = `url(${src})`;

        // Adăugăm totul în shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(container);
        container.appendChild(image);
    }
}

// Înregistrăm elementul personalizat <medium-image>
customElements.define('medium-image', MediumImage);
export default {
  login: {
    username: 'Prihlasovacie meno',
    password: 'Heslo',
    login: 'Prihlásiť sa',
  },
  navigation: {
    home: 'Domov',
    settings: 'Nastavenia',
    logout: 'Odhlásiť sa',
    details: 'Podrobnosti',
  },
  home: {
    follow: 'Sledovať',
    noitems: 'Žiadne položky',
  },
  details: {
    name: 'Názov: ',
    from: 'Od: ',
    id: 'ID: ',
    message: 'Správa: ',
    infoSystem: 'Informačný systém',
    product: 'Produkt',
    type: 'Typ',
    priority: 'Priorita',
    duedate: 'Požadovaný termín realizácie',
    customer: 'Zákazník',
    contractType: 'Typ serv. zmluvy',
    contractItem: 'Položka serv. zmluvy',
    currentSolver: 'Zamestnanec',
    access: 'Prístup na VZS',
    employmentContractType: 'Typ pracovnej zmluvy',
    viewPager: {
      detailedInfo: {
        name: 'Podrobné informácie',
        description: 'Opis',
        pilot: 'Pilot: ',
        repeatable: 'Opakovateľná: ',
        originForm: 'Forma Zadania',
        deviceCount: 'Na koľkých PC',
        solutionPropose: 'Návrh riešenia',
        creator: 'Zadal',
        version: 'Verzia',
        createDate: 'Dátum zápisu',
        capacity: 'Kapacita celkom'
      },

      files: {
        name:'Pripojené súbory',
        browse: 'Hladať',
        add: 'Pridať',
        addPlaceholder: 'Pridať súbor...',
        table: {
          name: 'Názov súboru',
          type: 'Typ súboru',
          open: 'Otvoriť',
          delete: 'Zmazať',
          state: 'Stav',
          user: 'Užívateľ'
        }
      },

      assessment: {
        name: 'Posúdenie', 
        description: 'Podklady na schválenie',
        neededIn: 'Požadované vo',
        reviewDueDate: 'posúdiť do',
        version: 'verzii',
        solvingPriority: 'Priorita riešenia',
        requestCategory: 'Kategória požiadavky',
        solvingForm: 'Forma riešenia',
        capacity: 'Kapacita',
        analyzingCapacity: 'Kapacita analýza',
        programmingCapacity: 'Kapacita programovanie',

      },

      realization: {
        name: 'Realizácia',
        description: 'Realizácia',
        version: 'Zaradené do verzia',
        solvedInVersion: 'Vyriešené vo verzii',

        filesReady: 'Súbory pripravené ',

      },

      conclusion: {
        name: 'Ukončenie',
        description: 'Ukončenie',
        solvedInVersion: 'Vyriešené vo verzii',

      },

      workflow: {
        name: 'Workflow',
        state: 'Stav',
        sendDate: 'Dátum zaslania',
        currentSolver: 'Aktuálny riešiteľ',
        description: 'Opis',

      },

      email: {
        name: 'E-mail',
        user: 'Používateľ',
        sendTo: 'Komu zaslať',

      },

      hotline: {
        name: 'HotLine',
        showError: 'Chybu zobraziť všetkým používateľom',
        text: 'Text hotline',
        showUpgrade: 'Zobraziť upgrade všetkým',
        upgradeDate: 'Dátum započítanie upgrade'
      },

      merge: {
        name: 'Zlúčenie',
        description: 'Zlúčiť môžete len pripomienku, ktorá sa rieši (nie je v stave 900, 901 a 251) a nie je nikde v systéme označená ako hlavná. Ak chcete zrušiť zlúčenie, chodťe na hlavnú pripomienku a tam vykonajte zmeny.',
        objectionId: 'ID hlavnej pripomienky',
        objectionName: 'Názov hlavnej pripomienky',
        objectionIdDuplicate: 'ID duplicitnej pripomienky',
        objectionNameDuplicate: 'Názov duplicitnej pripomienky',
        edit: 'Upraviť',
      },
      
      testing: {
        name: 'Testovanie',
        testInVersion: 'Otestované vo verzii',
        testDescription: 'Testovanie (inštrukcie)',
        testResult: 'Záver z testovania',

      }



    }
  },
  settings: {
    lang: {
      title: 'Jazyk',
      description: 'Zmena jazyka',
    },
    theme: {
      title: 'Tmavý režim',
      description: 'Zapnúť/vypnúť tmavý režim',
    },
  },
  filter: {
    all: 'všetko',
    more: 'viac..',
    less: 'menej..',
  },
  logout: {
    prompt: 'Ste si istý?',
    yes:'Áno ',
    no: 'Naspäť',
  },
}

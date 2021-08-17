export default {
  login: {
    username: 'Username',
    password: 'Password',
    login: 'LOG IN',
    debug: 'DEBUG',
  },
  navigation: {
    home: 'Home',
    settings: 'Settings',
    logout: 'Logout',
    details: 'Details',
  },
  home: {
    follow: 'Follow',
    noitems: 'No items',
  },
  details: {
    name: 'Name: ',
    from: 'From: ',
    id: 'ID: ',
    message: 'Message: ',
    infoSystem: 'Information System',
    product: 'Product',
    type: 'Type',
    priority: 'Priority',
    duedate: 'Due to ',
    customer: 'Customer',
    contractType: 'Contract Type',
    contractItem: 'Contract Item',
    currentSolver: 'Current solver',
    access: 'Acess to VZS',
    employmentContractType: 'Employment contract type',
    viewPager: {
      detailedInfo: {
        name: 'Detailed info',
        description: 'Description',
        pilot: 'Pilot: ',
        repeatable: 'Repeatable: ',
        originForm: 'Origin form',
        deviceCount: 'PC count',
        solutionPropose: 'Proposed solution',
        creator: 'Created',
        version: 'Version',
        createDate: 'Date of creation',
        capacity: 'Capacity'
      },

      files: {
        name:'Attached files',
        browse: 'Browse',
        add: 'Add',
        addPlaceholder: 'Add file...',
        table: {
          name: 'Name of file',
          type: 'Type of file',
          open: 'Open',
          delete: 'Delete',
          state: 'State',
          user: 'User'
        }
      },

      assessment: {
        name: 'Assessment', 
        description: 'Files for assessment',
        neededIn: 'Needed in',
        reviewDueDate: 'Review due:',
        version: 'version',
        solvingPriority: 'Solvin Priority',
        requestCategory: 'Request category',
        solvingForm: 'Solving Form',
        capacity: 'Capacity',
        analyzingCapacity: 'Analyzing capacity',
        programmingCapacity: 'Programming capacity',

      },

      realization: {
        name: 'Realization',
        description: 'Realization',
        version: 'in Version',
        solvedInVersion: 'Solved in version',

        filesReady: 'Files ready',

      },

      conclusion: {
        name: 'Conclusion',
        description: 'Conclusion',
        solvedInVersion: 'Solved in version',

      },

      workflow: {
        name: 'Workflow',
        state: 'State',
        sendDate: 'Send date',
        currentSolver: 'Current solver',
        description: 'Description',

      },

      email: {
        name: 'E-mail',
        user: 'User',
        sendTo: 'Send to',

      },

      hotline: {
        name: 'HotLine',
        showError: 'Show error to everyone',
        text: 'Text hotline',
        showUpgrade: 'Show upgrade to everyone ',
        upgradeDate: 'Upgrade date'
      },

      merge: {
        name: 'Merge',
        description: 'Zlúčiť môžete len pripomienku, ktorá sa rieši (nie je v stave 900, 901 a 251) a nie je nikde v systéme označená ako hlavná. Ak chcete zrušiť zlúčenie, chodťe na hlavnú pripomienku a tam vykonajte zmeny.',
        objectionId: 'ID of main objection',
        objectionName: 'Name of main objection',
        objectionIdDuplicate: 'ID of duplicate objection',
        objectionNameDuplicate: 'Name of duplicate objection',
        edit: 'Edit',
      },
      
      testing: {
        name: 'Testing',
        testInVersion: 'Tested in version',
        testDescription: 'Testing (instructions)',
        testResult: 'Test result',

      }
    }

  },
  settings: {
    lang: {
      title: 'Language',
      description: 'Change application language',
    },
    theme: {
      title: 'Dark mode',
      description: 'Turn on/off the dark mode',
    },
  },
  filter: {
    all: 'all',
    more: 'more..',
    less: 'less..',
  },
  logout: {
    prompt: 'Are you sure?',
    yes:'Yes',
    no: 'Cancel',
  },
}

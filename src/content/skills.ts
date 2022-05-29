export interface ISkill {
  name: string,
  lvl: ELvl,
  hit?: string
}

export enum ELvl {
  'Basic',
  'Middle',
  'Advanced'
}

export interface IPosition {
  name: string,
  languages: ISkill[],
  frameworks: ISkill[],
}

export default [
  {
    name: 'Web developer',
    languages: [
      {
        name: 'JavaScript',
        lvl: ELvl.Advanced,
        hit: ''
      },
      {
        name: 'TypeScript',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'PHP',
        lvl: ELvl.Middle,
        hit: ''
      },

      {
        name: 'HTML/CSS',
        lvl: ELvl.Middle,
        hit: ''
      },
    ],
    frameworks: [
      {
        name: 'Angular',
        lvl: ELvl.Advanced,
        hit: ''
      },
      {
        name: 'React',
        lvl: ELvl.Basic,
        hit: ''
      },
      {
        name: 'Vue JS',
        lvl: ELvl.Basic,
        hit: ''
      },
      {
        name: 'WordPress',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'RxJS',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'NgRx',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'REST API',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'GraphQL',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'SSR',
        lvl: ELvl.Middle,
        hit: ''
      },
    ]
  },
  {
    name: 'Mobile developer',
    languages: [
      {
        name: 'Dart',
        lvl: ELvl.Advanced,
        hit: ''
      },
      {
        name: 'Java',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Kotlin',
        lvl: ELvl.Middle,
        hit: ''
      }
    ],
    frameworks: [
      {
        name: 'Flutter',
        lvl: ELvl.Advanced,
        hit: ''
      },
      {
        name: 'Android',
        lvl: ELvl.Advanced,
        hit: ''
      },
      {
        name: 'iOS',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'REST API',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'WebSockets',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Google Play',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Apple Store',
        lvl: ELvl.Middle,
        hit: ''
      },
    ]
  },
  {
    name: 'Back-end developer',
    languages: [
      {
        name: 'JavaScript',
        lvl: ELvl.Advanced,
        hit: ''
      },
      {
        name: 'TypeScript',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Java',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'PHP',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'SQL',
        lvl: ELvl.Advanced,
        hit: ''
      }
    ],
    frameworks: [

      {
        name: 'Node JS',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Nest JS',
        lvl: ELvl.Advanced,
        hit: ''
      },
      {
        name: 'Spring',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Yii2',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'PostgreSQL',
        lvl: ELvl.Advanced,
        hit: ''
      },
      {
        name: 'MySQL',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'MongoDB',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'WordPress',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'GraphQL',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'REST API',
        lvl: ELvl.Middle,
        hit: ''
      },
    ]
  },
  {
    name: 'Development & Operations',
    languages: [
      {
        name: 'Bash',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'JavaScript',
        lvl: ELvl.Advanced,
        hit: ''
      },
      {
        name: 'Python',
        lvl: ELvl.Basic,
        hit: ''
      },
      {
        name: 'PHP',
        lvl: ELvl.Middle,
        hit: ''
      }
    ],
    frameworks: [
      {
        name: 'Linux OS',
        lvl: ELvl.Advanced,
        hit: ''
      },
      {
        name: 'Amazon Web Services (AWS)',
        lvl: ELvl.Advanced,
        hit: ''
      },
      {
        name: 'Terraform',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Microservices cluster',
        lvl: ELvl.Middle,
        hit: ''
      },

      {
        name: 'PostgreSQL cluster',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Grafana',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'GitLab CI/CD',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Docker',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'RabbitMQ',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Redis',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Nginx',
        lvl: ELvl.Middle,
        hit: ''
      },

    ]
  },
  {
    name: 'Team lead',
    languages: [
      {
        name: 'Hiring',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Coaching',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Agile',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Development cycle',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Technical documentation',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Incident Management',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Non-functional requirements',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Technical debt management',
        lvl: ELvl.Middle,
        hit: ''
      }
    ],
    frameworks: [
      {
        name: 'Scrum',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Jira',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Code review',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'OneToOne',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: '30/60/90 method',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Personal Dev. Plan',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Performance Review',
        lvl: ELvl.Middle,
        hit: ''
      }
    ]
  },
  {
    name: 'Software Architect',
    languages: [
      {
        name: 'UML',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'ERD',
        lvl: ELvl.Advanced,
        hit: ''
      },
      {
        name: 'API',
        lvl: ELvl.Advanced,
        hit: ''
      },
      {
        name: 'Security',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Monolithic Apps',
        lvl: ELvl.Advanced,
        hit: ''
      },
      {
        name: 'SOA',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Microservices',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'ESB',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'SAGA',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'CQRS',
        lvl: ELvl.Middle,
        hit: ''
      },
    ],
    frameworks: [
      {
        name: 'Postman/Swagger',
        lvl: ELvl.Advanced,
        hit: ''
      },
      {
        name: 'RabbitMQ',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'PM2',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Redis',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'RPC',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'NodeJS',
        lvl: ELvl.Advanced,
        hit: ''
      },
      {
        name: 'PostgreSQL',
        lvl: ELvl.Advanced,
        hit: ''
      },
    ]
  },
  {
    name: 'Electronic engineer',
    languages: [
      {
        name: 'C/C++',
        lvl: ELvl.Advanced,
        hit: ''
      },
      {
        name: 'Java',
        lvl: ELvl.Advanced,
        hit: ''
      },
      {
        name: 'Python',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Bash',
        lvl: ELvl.Middle,
        hit: ''
      }
      ,
      {
        name: 'Space Technology',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Radio transmitters',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Analog electronics',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Digital electronics',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Electronics design',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: '3D modeling',
        lvl: ELvl.Middle,
        hit: ''
      }
    ],
    frameworks: [

      {
        name: 'AVR',
        lvl: ELvl.Advanced,
        hit: ''
      },
      {
        name: 'Arduino',
        lvl: ELvl.Advanced,
        hit: ''
      },
      {
        name: 'Raspberry Pi',
        lvl: ELvl.Advanced,
        hit: ''
      },
      {
        name: 'CubeSat',
        lvl: ELvl.Advanced,
        hit: ''
      },
      {
        name: 'UHV & HV',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Radio Ham',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Altium Designer',
        lvl: ELvl.Advanced,
        hit: ''
      },
      {
        name: 'SolidWorks 3D',
        lvl: ELvl.Advanced,
        hit: ''
      },
      {
        name: 'UART/RS-232',
        lvl: ELvl.Middle,
        hit: ''
      },
    ]
  },
  {
    name: 'Computer science',
    languages: [
      {
        name: 'Operating Systems',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Networks and telecommunications',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Information security',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Databases',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Mat. logic and theory of algorithms',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Graph theory',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Control Theory',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Automata theory',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Microprocessor systems',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Theory of computational processes',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Multiprocessor complexes',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Combinatorial optimization',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Theory of fuzzy logic',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Visual object recognition',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Intelligent systems theory',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Сhaos theory and bifurcation systems',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Artificial intelligence',
        lvl: ELvl.Middle,
        hit: ''
      },
    ],
    frameworks: [
      {
        name: 'Von Neumann arch.',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'OSI model',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'AES, DES, RSA',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Database normalization',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Dijkstra\'s algorithm',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Quicksort',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Karnaugh map',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'MATLAB',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'dLIB',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'BOINC',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Python & jupyter',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'KERAS',
        lvl: ELvl.Middle,
        hit: ''
      },
      {
        name: 'Gradient descent',
        lvl: ELvl.Middle,
        hit: ''
      }
    ]
  }
] as IPosition[];


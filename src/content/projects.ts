export interface IProject {
  name: string,
  description: string,
  link: string,
  imgUrl: string,
  tags: ProjectTag[]
}
export enum ProjectTag {
  All,
  Website,
  Desktop,
  Mobile,
  Engineer,
  Social
}
export default [
  {
    tags: [ProjectTag.Website, ProjectTag.Social],
    link: "http://sporadic.ru/",
    description: "A site to my students club. It powered by WordPress and dynamic Theme Fashion. I also provide technical support.",
    imgUrl: "assets/images/projects/sporadic.jpg",
    name: "SPORADIC",
  },
  {
    tags: [ProjectTag.Desktop],
    link: null,
    description: "Desktop version of Optimum Beauty's consolidated price programs for Velox LLC. The startup closed in 2016 but it gave me a good experience in communicating with retail clients",
    imgUrl: "assets/images/projects/optimum.jpg",
    name: "Optimum Beauty",
  },
  {
    tags: [ProjectTag.Mobile],
    link: "http://runlimit.com",
    description: "An application to pick the size of a motorcycle helmet using recognition.\nDevelopment of a mobile application. The project improved my API design skills and allowed me to learn Kotlin",
    imgUrl: "assets/images/projects/runlimit.jpg",
    name: "RUNLIMIT",
  },
  {
    tags: [ProjectTag.Website],
    link: "https://swiftbook.ru",
    description: "Education portal powered by Wordpress, migration from Drupal, writing plugins and supports. I improved my PHP, SQL and WordPress skills.",
    imgUrl: "assets/images/projects/swift.jpg",
    name: "SwiftBook",
  },
  {
    tags: [ProjectTag.Engineer],
    link: "https://amsat-uk.org/2017/06/30/russian-tanusha-1-and-2-satellites/",
    description: "Two Russian satellites activated from inside the International Space Station. It's my first true engineering project.",
    imgUrl: "assets/images/projects/tanyusha-yuzgu.jpg",
    name: "CubeSats Tanusha 1 & 2",
  },
  {
    tags: [ProjectTag.Engineer],
    link: "https://www.youtube.com/watch?v=FUMADz-zyj8",
    description: "International satellite project. I improved my engineering and programming skills in particular compression algorithms, and noise-correcting coding. Gave me the opportunity to move to Ecuador in the future.",
    imgUrl: "assets/images/projects/eq.jpg",
    name: "Ecuador UTE-SWSU RS3S",
  },
  {
    tags: [ProjectTag.Engineer],
    link: null,
    description: " ",
    imgUrl: "assets/images/projects/tpu.JPG",
    name: "Tomsk-TPU-120",
  },
  {
    tags: [ProjectTag.Mobile],
    link: null,
    description: "Android app for live cards with NFC",
    imgUrl: "assets/images/projects/a3.jpg",
    name: "iMatreshka",
  },
  {
    tags: [ProjectTag.Social],
    link: "https://hack-kursk.ru/",
    description: "Organizing and conducting a 3 competition for 100 programmers in 2017,2018 and 2019.",
    imgUrl: "assets/images/projects/work_8.jpg",
    name: "Hack-Kursk \"IT Vocation\"",
  },
  {
    tags: [ProjectTag.Website],
    link: "#",
    description: " ",
    imgUrl: "assets/images/projects/programmers.jpg",
    name: " PixelBook.ru",
  },
  {
    tags: [ProjectTag.Website],
    link: "#",
    description: "My first website experience on php, bootstrap, jQuery and ajax.",
    imgUrl: "assets/images/projects/dobriedela.png",
    name: "Dobrie dela",
  },
  {
    tags: [ProjectTag.Mobile],
    link: "https://fuelup.ru/",
    description: "Contactless car refueling system. I administered a microservice system. Became DevOps. A lot of nervous work. hahaha",
    imgUrl: "assets/images/projects/fuelup.png",
    name: "FuelUP",
  },
  {
    tags: [ProjectTag.Mobile],
    link: "https://fuelup.ru/",
    description: "Infrastructure development and administration",
    imgUrl: "assets/images/projects/fuelup.png",
    name: "FuelUP",
  },
  {
    tags: [ProjectTag.Social],
    link: 'https://sporadic.ru/%d1%80%d0%b0%d0%b7%d0%b2%d0%b8%d1%82%d0%b8%d0%b5-%d1%82%d0%b5%d1%85%d0%bd%d0%b8%d1%87%d0%b5%d1%81%d0%ba%d0%be%d0%b9-%d0%b3%d1%80%d0%b0%d0%bc%d0%be%d1%82%d0%bd%d0%be%d1%81%d1%82%d0%b8-%d0%b8-%d1%82/',
    description: "Development of a training program for a course \"Basics of circuitry\" for young people interested in electronics. Improved my teaching and communication skills.",
    imgUrl: "assets/images/projects/fuelup.png",
    name: "Course \"Basics of circuitry\"",
  },
  {
    tags: [ProjectTag.Social],
    link: 'https://sporadic.ru/%d1%80%d0%b0%d0%b7%d0%b2%d0%b8%d1%82%d0%b8%d0%b5-%d1%82%d0%b5%d1%85%d0%bd%d0%b8%d1%87%d0%b5%d1%81%d0%ba%d0%be%d0%b9-%d0%b3%d1%80%d0%b0%d0%bc%d0%be%d1%82%d0%bd%d0%be%d1%81%d1%82%d0%b8-%d0%b8-%d1%82/',
    description: "Development of a training program for a course \"Basics of circuitry\" for young people interested in electronics. Improved my teaching and communication skills.",
    imgUrl: "assets/images/projects/fuelup.png",
    name: "UCE Drones",
  },
  {
    tags: [ProjectTag.Social],
    link: 'https://sporadic.ru/%d1%80%d0%b0%d0%b7%d0%b2%d0%b8%d1%82%d0%b8%d0%b5-%d1%82%d0%b5%d1%85%d0%bd%d0%b8%d1%87%d0%b5%d1%81%d0%ba%d0%be%d0%b9-%d0%b3%d1%80%d0%b0%d0%bc%d0%be%d1%82%d0%bd%d0%be%d1%81%d1%82%d0%b8-%d0%b8-%d1%82/',
    description: "Development of a training program for a course \"Basics of circuitry\" for young people interested in electronics. Improved my teaching and communication skills.",
    imgUrl: "assets/images/projects/fuelup.png",
    name: "UTE Respirator artisicial",
  },
  {
    tags: [ProjectTag.Social],
    link: 'https://sporadic.ru/%d1%80%d0%b0%d0%b7%d0%b2%d0%b8%d1%82%d0%b8%d0%b5-%d1%82%d0%b5%d1%85%d0%bd%d0%b8%d1%87%d0%b5%d1%81%d0%ba%d0%be%d0%b9-%d0%b3%d1%80%d0%b0%d0%bc%d0%be%d1%82%d0%bd%d0%be%d1%81%d1%82%d0%b8-%d0%b8-%d1%82/',
    description: "Development of a training program for a course \"Basics of circuitry\" for young people interested in electronics. Improved my teaching and communication skills.",
    imgUrl: "assets/images/projects/fuelup.png",
    name: "UCE Cource ",
  },
  {
    tags: [ProjectTag.Social],
    link: ' ',
    description: "Development of a training program for a course \"Basics of circuitry\" for young people interested in electronics. Improved my teaching and communication skills.",
    imgUrl: "assets/images/projects/fuelup.png",
    name: "facebook ads rs pr",
  },
  {
    tags: [ProjectTag.Social],
    link: ' ',
    description: "Development of a training program for a course \"Basics of circuitry\" for young people interested in electronics. Improved my teaching and communication skills.",
    imgUrl: "assets/images/projects/fuelup.png",
    name: "PayEver",
  },
  {
    tags: [ProjectTag.Social],
    link: ' ',
    description: "Development of a training program for a course \"Basics of circuitry\" for young people interested in electronics. Improved my teaching and communication skills.",
    imgUrl: "assets/images/projects/fuelup.png",
    name: "Precious Payload",
  },
  {
    tags: [ProjectTag.Social],
    link: ' ',
    description: "Development of a training program for a course \"Basics of circuitry\" for young people interested in electronics. Improved my teaching and communication skills.",
    imgUrl: "assets/images/projects/fuelup.png",
    name: "WBF System core",
  },
  {
    tags: [ProjectTag.Social],
    link: ' ',
    description: "Development of a training program for a course \"Basics of circuitry\" for young people interested in electronics. Improved my teaching and communication skills.",
    imgUrl: "assets/images/projects/fuelup.png",
    name: "WBF Driver 360",
  }


] as IProject[];


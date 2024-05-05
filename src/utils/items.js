const items = [
  {
    id: 1,
    description: "Découvrez notre chaise élégante et confortable, alliant design contemporain et qualité supérieure pour une expérience d'assise incomparable.",
    price: 200,
    name: "Chaise à deux",
    img_path: "/assets/images/ken/2-chaises.webp"
  },
  {
    id: 2,
    description: "Ceci est le 4x4 ultime : robuste, polyvalent, prêt pour l'aventure. Barbie conduisait en toute confiance, où qu'elle allait.",
    price: 30000,
    name: "Voiture 4x4",
    img_path: "/assets/images/ken/4x4.webp"
  },
  {
    id: 3,
    description: "Plongez dans un monde d'excitation et de divertissement avec ce matériel captivant, offrant des défis stimulants, des moments de rire et une expérience inoubliable pour tous.",
    price: 600,
    name: "Matériel d'amusement royal",
    img_path: "/assets/images/ken/amus.webp"
  },
  {
    id: 4,
    description: "Je vends pour rien notre enceinte haute performance, avec des basses profondes pour une expérience audio immersive incomparable.",
    price: 20,
    name: "Baffle Hi-Fi",
    img_path: "/assets/images/ken/baffle.webp"
  },
  {
    id: 5,
    description: "Éblouissez-vous avec la bague que Barbie portait, je lui en ai fait cadeau pour la Saint-Valentin.",
    price: 1000,
    name: "La bague de Barbie",
    img_path: "/assets/images/ken/bague-femme.webp"
  },
  {
    id: 6,
    description: "Barbie me l'a offert pour notre lune de miel, un symbole de masculinité et de style, ajoutant une touche de raffinement à mon look quotidien.",
    price: 1000,
    name: "La bague K pour Carats.",
    img_path: "/assets/images/ken/bague-homme-k.webp"
  },
  {
    id: 7,
    description: "Détendez-vous avec style sur notre canapé, alliant confort et élégance pour des moments agréables à partager.",
    price: 31,
    name: "Canap confortable",
    img_path: "/assets/images/ken/canap.webp"
  },
  {
    id: 8,
    description: "C'était épique quand on faisait des courses hippiques avec Barbie, aujourd'hui, je vous vends mon cheval.",
    price: 29.99,
    name: "Cheval en bois",
    img_path: "/assets/images/ken/cheval.webp"
  },
  {
    id: 9,
    description: "Voyagez avec style dans notre Corvette rose, fusion parfaite de puissance et de beauté, attirant tous les regards sur la route",
    price: 1000000,
    name: "Ma Corvette chérie",
    img_path: "/assets/images/ken/corvette.webp"
  },
  {
    id: 10,
    description: "Transformez votre espace en piste de danse avec notre tapis disco, illuminant chaque pas de lumière et d'énergie pour une ambiance de fête inoubliable.",
    price: 200,
    name: "Tapis disco",
    img_path: "/assets/images/ken/disco.webp"
  },
  {
    id: 11,
    description: "Découvrez notre garde-robe, un espace de rangement élégant et fonctionnel pour organiser votre style avec facilité et raffinement.",
    price: 300,
    name: "Ma garde robe",
    img_path: "/assets/images/ken/garde-robe.webp"
  },
  {
    id: 12,
    description: "On a eu beaucoup d'aventure avec notre Jeep, le compagnon robuste et polyvalent pour explorer les routes les plus difficiles avec style et confiance.",
    price: 10000,
    name: "Mon Jeep",
    img_path: "/assets/images/ken/jeep.webp"
  },
  {
    id: 13,
    description: "On ne faisait pas que manger, sur cette table à manger. Elle vous servira mieux.",
    price: 29.99,
    name: "La table à manger",
    img_path: "/assets/images/ken/kitchen.webp"
  },
  {
    id: 14,
    description: "K pour Ken, Barbie avait le sens du design, en effet. Ce collier est un bijou raffiné qui ajoute une touche de glamour et de sophistication à chaque tenue.",
    price: 150,
    name: "Mon K-ollier porte-bonheur",
    img_path: "/assets/images/ken/kollier.webp"
  },
  {
    id: 15,
    description: "Et un autre collier magnifique avec un grand K.",
    price: 500,
    name: "Collier K en or massif",
    img_path: "/assets/images/ken/kolier2.webp"
  },
  {
    id: 16,
    description: "La table n'était le seul endroit pour profiter de la vie. Voici notre lit que je vous vends.",
    price: 700,
    name: "Lit magnifique",
    img_path: "/assets/images/ken/lit-reel.webp"
  },
  {
    id: 17,
    description: "Découvrez notre maison, un refuge chaleureux et accueillant où chaque détail est pensé pour créer des souvenirs inoubliables et des moments de bonheur en famille.",
    price: 5000000,
    name: "Villa Ken & Barbie",
    img_path: [
      "/assets/images/ken/maison-reel.webp",
      "/assets/images/ken/maison.webp",
      "/assets/images/ken/maison-reel.webp"
    ]
  },
  {
    id: 18,
    description: "Élégance est mon mot d'ordre, ce miroir reflètera votre style et illuminera votre beauté.",
    price: 10,
    name: "Miroir",
    img_path: "/assets/images/ken/miror.webp"
  },
  {
    id: 19,
    description: "Pensez-vous que mon corps d'athlète est venu tout seul ? Nooon.",
    price: 40,
    name: "Matériels de musculation",
    img_path: "/assets/images/ken/muscu.webp"
  },
  {
    id: 20,
    description: "Ceci est presque un cadeau, réunissant fonctionnalité, confort et style pour une productivité accrue et un environnement professionnel inspirant.",
    price: 300,
    name: "Pack espace de travail",
    img_path: "/assets/images/ken/pack-bureau.webp"
  },
  {
    id: 21,
    description: "Vous allez me dire que c'est seulement un T-shirt et un short, mais elle sent encore l'odeur de Barbie.",
    price: 20,
    name: "Ensemble T-shirt et Short",
    img_path: "/assets/images/ken/t-shirt bleu.webp"
  },
  {
    id: 22,
    description: "Quoi de mieux pour se détendre que profiter d'une belle vue sur la mer ?",
    price: 900,
    name: "Canapé de terrasse",
    img_path: "/assets/images/ken/terrasse.webp"
  },
  {
    id: 23,
    description: "Elle n'est pas moche, la photo n'est pas moche, sachez apprécier le vintage.",
    price: 20000,
    name: "Voiture Décapotable",
    img_path: "/assets/images/ken/voiture.webp"
  }
];
export default items; 
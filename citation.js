// Tableau de citations
let citations = [
    ["La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "Mahatma Gandhi"],
    ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg"],
    ["Le bonheur n'est pas d'avoir tout ce qu'on désire mais d'apprécier ce que l'on a...", "Paulo Coello"],
    ["Il faut toute la vie pour apprendre à vivre.", "Sénèque"],
    ["La vie est un défi à relever, un bonheur à mériter, une aventure à tenter", "Mère Teresa"],
    ["Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.", "T.S Elliot"],
    ["Là où il y a l'amour, il y a la vie", "Mahatma Gandhi"],
    ["Il n'existe que deux choses infinies, l'univers et la bêtise humaine... mais pour l'univers, je n'ai pas de certitude absolue", "Albert Einstein"],
    ["Le bonheur est la seule chose qui se multiplie quand on la partage.", "Albert Schweitzer"],
    ["La valeur d'un homme tient dans sa capacité à donner et non dans sa capacité à recevoir.", "Albert Einstein"],
    ["Le succès c'est d'avoir ce que vous désirez. Le bonheur c'est aimer ce que vous avez.", "H.Jackson Brown"],
    ["Le destin n'est pas une question de chance, mais de choix", "W.Jennings Bryan"],
    ["Le coeur d'une m_re est un abîme au fond duquel se trouve toujours un pardon.", "Honoré de Balzac"],
    ["Il n'ya que deux conduites avec la vie : ou on la rêve ou on l'accomplit.", "René Char"],
    ["Celui qui est le maître de lui-même est plus grand que celui qui est le maître du monde.", "Bouddha"],
    ["Le succès n'est pas la clé du bonheur. le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez.", "Albert Schweitzer"],
    ["Crois en toi-même et en tout ce que tu es. Sache qu'il y a des choses à l'intérieur de toi qui sont plus grandes que n'importe quel obstacle", "Christian Larson"],
    ["Vous ne pouvez choisir ni comment mourri, ni quand. Mais vous pouvez décider de comment vous allez vivre. Maintenant", "Joan Baez"],
    ["Seuls, nous pouvons faire si peu; ensemble nous pouvons faire tellement", "Helen Keller"],
    ["Vis comme si tu devais mourrir demain. Apprends comme si tu devais vivre toujours.", "Mahatma Gandhi"]
  ];

  let citation  = document.querySelector("#citation");
  let auteur    =  document.querySelector("#auteur");
  let button    = document.querySelector("#nouveau");

  let dernier   = 0;
  let nombreAleatoire;

  function entierAleatoire(max){

    return Math.floor(Math.random()* max +1)

}

  button.addEventListener('click',()=>{

    nombreAleatoire = entierAleatoire(19)
    dernier = citations[nombreAleatoire]
    
    citation.textContent = dernier[0];
    auteur.textContent = dernier[1]
      
  })


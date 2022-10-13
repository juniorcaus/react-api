import React from 'react'
import { Post } from './Post'


export  function Posts() {
   const title = 'Setembro Amarelo: como empresas podem criar um ambiente de segurança psicológica';
   const description ='Hoje, já conhecemos  o Setembro Amarelo e seu significado. Esse marco temporal se tornou parte das ações de promoção de saúde de empresas, governos, formadores de opinião e da sociedade em geral.';

   const title2 = 'Como incluir o público LGBTQIAP+ na sua empresa?';
   const description2 = 'Hoje, sabemos que um ambiente de trabalho acolhedor e inclusivo traz enormes benefícios para empresas e colaboradores. Acolher diversas perspectivas enriquece a experiência em todos os níveis e é capaz de gerar importantes resultados.';

   const title3 = 'Como fazer um onboarding impecável em sua empresa';
   const description3 = 'A Vitalk realizou uma pesquisa em junho de 2021 com 98 profissionais de RH sobre suas práticas de saúde mental na recepção de novas pessoas na empresa. Quase 70% dos entrevistados acreditam que ansiedade pelo novo ambiente de trabalho  e excesso de informações são as duas principais dores do(a) novo(a) colaborador(a). ';

   const title4 = '7 dicas para garantir um boa noite de sono';
   const description4 = 'A Vitalk realizou uma pesquisa em junho de 2021 com 98 profissionais de RH sobre suas práticas de saúde mental na recepção de novas pessoas na empresa. Quase 70% dos entrevistados acreditam que ansiedade pelo novo ambiente de trabalho  e excesso de informações são as duas principais dores do(a) novo(a) colaborador(a).';



  return (
    <ul>
        <Post title={title} description={description} />
        <Post title={title2} description={description2}/>
        <Post title={title3} description={description3}/>
        <Post title={title4} description={description4}/>
     
    </ul>
  )
}


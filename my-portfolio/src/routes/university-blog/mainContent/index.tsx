import React from 'react'
import {Article} from './article/Article'
import artigo01 from '../../../assets/images/university/pic01.jpg' 
import artigo02 from '../../../assets/images/university/pic02.jpg'
import artigo03 from '../../../assets/images/university/pic03.jpg'
import avatar from "../../../assets/images/university/avatar.jpg";
import "./styles.scss"

export const MainContent = () => {
  return (
    <section className="MainContent">
        <Article 
            autor='JANE DOE'
            date='NOVEMBER 1, 2015'
            subtitle='LOREM IPSUM DOLOR AMET NULLAM CONSEQUAT ETIAM FEUGIAT'
            title='MAGNA SED ADIPISCING'
            banner={artigo01}
            resume="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"
            profile={avatar}
            key={1}
        />
           <Article 
            autor='JANE DOE'
            date='NOVEMBER 1, 2015'
            subtitle='LOREM IPSUM DOLOR AMET NULLAM CONSEQUAT ETIAM FEUGIAT'
            title='ULTRICIES SED MAGNA EUISMOD ENIM VITAE GRAVIDA'
            banner={artigo02}
            resume="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letterS"
            profile={avatar}
            key={2}
        />
           <Article 
            autor='JANE DOE'
            date='NOVEMBER 1, 2015'
            subtitle='LOREM IPSUM DOLOR AMET NULLAM CONSEQUAT ETIAM FEUGIAT'
            title='EUISMOD ET ACCUMSAN'
            banner={artigo03}
            resume="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"
            profile={avatar}
            key={3}
        />
 
    </section>
  )
}

import React from 'react'
import {Header} from './header/Header';

export const UniversityBlog = () => {
  return (
      <>
          <Header 
            logo="CEFET - RJ" 
            menuItems={[
              {name: 'LOREM', link: '#'},
              {name: "IPSUM", link: '#'},
              {name: "FEUGIAT", link: '#'},
              {name: "TEMPUS", link:'#'},
              {name: "ADIPISCING", link: '#'}
          ]} />
      </>
    )
}

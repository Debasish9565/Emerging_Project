import React from "react"

import HeroContainer from "./Hero/HeroContainer"
import Gallaary from "./Gallary/Gallaary"
import PopularClasses from "./PopularClasses/PopularClasses"
import PopularTeacher from "./PopularTeacher/PopularTeacher"

const Home = () => {
  return (
   <section>
    <HeroContainer/>
      <div className="max-w-screen-xl mx-auto">
        <Gallaary/>
        <PopularClasses/>
        <PopularTeacher/>
      </div>
   </section>
  )
}

export default Home
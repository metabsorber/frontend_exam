import React from 'react';

import Card from "../Card/Card";
import cards from "../../data/main";

function Course() {
  return (
<>
<a name="course"></a>
<section class="course">
<div class="course__column">
  <div class="course__header">
    <h2 class="course__header-title">Наши курсы</h2>
  </div>
  <div class="course__section course__section_pk course__section_active">
    <div class="course__text">
      
    </div>
    <div class="course__cards">

    {cards.map((item) => {
      return (
        <Card
          title={item.title}
          name={item.name}
          text={item.text} 
        />
      )
    })}

    </div>
  </div>
</div>
</section>
</>
  );
}

export default Course;


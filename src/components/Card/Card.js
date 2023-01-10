import React from 'react';

function Card(props) {
  
  return (
    <div class="course__card">
    <p class="course__card-step">{props.title}</p>
   
    <div class="course__card-info">
      <div class="course__card-texts">
        <p class="course__card-info-title">{props.name}</p>
        <div>
          <p class="course__card-info-text">{props.text}</p>
          <p class="course__card-info-text">Группы 20-25 чел</p>
        </div>
      </div>
      <div class="course__card-info-add">
        <p class="course__card-info-add-price">24000 ₽/курс  |  1200 ₽/час</p>
        <div class="course__card-info-add-links">
          <a class="course__card-info-add-more" href="#popup:star"><p class="course__card-info-add-more-text">Подробнее</p></a>
          <a class="header__button header__button_course" href="#"><p class="header__button-text">Бронировать место</p></a>
        </div>
      </div>
    </div>
    <div class="course__card-flag">
      <p class="course__card-flag-text">18+</p>
      <img class="course__card-flag-image" src="https://i.postimg.cc/L649hvmt/course-card-flag-image.png" alt="" />
      <img class="course__card-flag-image course__card-flag-image_blue" src="https://i.postimg.cc/HsSpM5Lf/course-card-flag-image-blue.png" alt="" />
    </div>
  </div>
  );
}

export default Card;

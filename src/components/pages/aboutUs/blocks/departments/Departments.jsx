import React from "react";
import './departments.scss'

import departmentsPhoto1 from '../../../../../images/departmentsPhoto1.jpg'
import departmentsPhoto2 from '../../../../../images/departmentsPhoto2.jpg'
import departmentsPhoto3 from '../../../../../images/departmentsPhoto3.png'
import departmentsPhoto4 from '../../../../../images/departmentsPhoto4.jpg'

const departments = [
  {
    id: 1,
    img: departmentsPhoto1,
    subtitle: 'Департамент финансового консультирования',
    text: 'Отдел отвечает за первичное взаимодействие с клиентами, заинтересованными в наших услугах. Консультации проводятся лично, по телефону или через видеозвонок. Основная цель встречи с нашими консультантами — предоставить вам финансовую и личную поддержку в процессе оформления ипотеки',
  },
  {
    id: 2,
    img: departmentsPhoto2,
    subtitle: 'Операционный отдел и команда экономистов',
    text: 'Наши консультанты по ипотечным кредитам специализируются на привлечении займов для клиентов и управляют сотнями ипотечных портфелей различных типов, обеспечивая профессиональное сопровождение на каждом этапе процесса',
  },
  {
    id: 3,
    img: departmentsPhoto3,
    subtitle: 'Департамент страхования',
    text: 'Отдел отвечает за настройку страховых программ для клиентов в следующих областях: страхование жизни, имущества, содержимого жилья, а также различные пенсионные решения',
  },
  {
    id: 4,
    img: departmentsPhoto4,
    subtitle: 'Правовой отдел',
    text: 'Отдел специализируется на операциях с недвижимостью и вопросах налогообложения, связанных с недвижимым имуществом',
  },
];

export const Departments = () => {
  return (
    <div className="departments">
      <h1 className="departments__title"><span className="color-yellow">Мы собрали</span> команду из</h1>
      <div className="departments__types">
        {departments.map((department) => (
          <div className="departments__department" key={department.id}>
            <img
              src={department.img}
              alt="photo"
              className="departments__photo"
            />
            <div className="departments__description">
              <h2 className="departments__subtitle">
                {department.subtitle}
              </h2>
              <p className="departments__text">
                {department.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
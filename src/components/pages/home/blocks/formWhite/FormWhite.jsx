// import React from "react";
// import './formWhite.scss';

// export const FormWhite = () => {
//   return (
//     <form action="" className='formWhite'>
//       <h2 className="formWhite__subtitle">
//         Не стесняйтесь задавать вопросы, если они у вас есть
//       </h2>
//       <p className="formWhite__title">Оставьте контактные данные или позвоните нам
//         <br />
//         <a href="tel:+1 234 555-55-55" className="formWhite__link">
//           072-3456789
//         </a>
//       </p>
//       <div className="formWhite__inputs">
//         <div className="formWhite__inputText">
//           <div className="formWhite__inputText--half">
//             <input
//               type="text"
//               id="name"
//               className="formWhite__input"
//               placeholder="Имя"
//             />
//             <input
//               type="tel"
//               id="phone"
//               className="formWhite__input"
//               placeholder="Телефон"
//             />
//           </div>
//           <div className="formWhite__inputText--half">
//             <input
//               type="email"
//               id="email"
//               className="formWhite__input"
//               placeholder="Email"
//             />
//             <input
//               type="number"
//               id="number"
//               className="formWhite__input"
//               placeholder="Сумма кредита"
//             />
//           </div>
//         </div>
//         <select
//           name="options"
//           id="select"
//           className="formWhite__input"
//         >
//           <option value="" disabled selected>Вы владеете квартирой?</option>
//           <option value="option1">Да</option>
//           <option value="option2">Нет</option>
//         </select>
//         <input
//           type="submit"
//           id="submit"
//           className="formWhite__input formWhite__input--submit"
//         />
//       </div>
//     </form>
//   )
// }


import React from 'react';
import { useInView } from 'react-intersection-observer';
import './formWhite.scss';

export const FormWhite = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // анімація відбудеться тільки один раз
    threshold: 0.1, // поріг видимості елемента (10%)
  });

  return (
    <form 
      action="" 
      className={`formWhite ${inView ? 'animate' : ''}`}
      ref={ref}
    >
      <h2 className="formWhite__subtitle">
        Не стесняйтесь задавать вопросы, если они у вас есть
      </h2>
      <p className="formWhite__title">Оставьте контактные данные или позвоните нам
        <br />
        <a href="tel:+1 234 555-55-55" className="formWhite__link">
          072-3456789
        </a>
      </p>
      <div className="formWhite__inputs">
        <div className="formWhite__inputText">
          <div className="formWhite__inputText--half">
            <input
              type="text"
              id="name"
              className="formWhite__input"
              placeholder="Имя"
            />
            <input
              type="tel"
              id="phone"
              className="formWhite__input"
              placeholder="Телефон"
            />
          </div>
          <div className="formWhite__inputText--half">
            <input
              type="email"
              id="email"
              className="formWhite__input"
              placeholder="Email"
            />
            <input
              type="number"
              id="number"
              className="formWhite__input"
              placeholder="Сумма кредита"
            />
          </div>
        </div>
        <select
          name="options"
          id="select"
          className="formWhite__input"
        >
          <option value="" disabled selected>Вы владеете квартирой?</option>
          <option value="option1">Да</option>
          <option value="option2">Нет</option>
        </select>
        <input
          type="submit"
          id="submit"
          className="formWhite__input formWhite__input--submit"
        />
      </div>
    </form>
  )
}

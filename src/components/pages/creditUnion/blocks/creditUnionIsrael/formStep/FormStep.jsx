import React, { useState } from 'react';
import './formStep.scss';
import { StepIndicator } from './stepIndicator/StepIndicator';

export const FormStep = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    city: '',
    option6: '',
    phone: '',
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsModalVisible(true);
      } else {
        alert('Ошибка при отправлении');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setStep(1);
    setFormData('')
  }

  const handleNext = () => {
    if (step < 7) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <form className="formStep" onSubmit={handleSubmit}>
        <StepIndicator currentStep={step} /> {/* Відображаємо індикатор кроків */}
        {/* Весь інший код форми залишається без змін */}
        {step === 1 && (
          <div className="formStep__step">
            <label className="formStep__label">
              Сколько у вас сейчас активных кредитов (кроме ипотечных)?
            </label>
            <select
              name="option1"
              value={formData.option1}
              onChange={handleChange}
              required
              className="formStep__input"
            >
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5 и больше</option>
            </select>
            <div className='formStep__buttons'>
              <button
                type="button"
                onClick={handleNext}
                className="formStep__button"
                disabled={!formData.option1}
              >
                Далее
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className='formStep__step'>
            <label className='formStep__label'>Какая общая сумма ваших кредитов, не включая ипотеку?</label>
            <select
              name="option2"
              value={formData.option2}
              onChange={handleChange}
              required
              className='formStep__input'
            >
              <option value=""></option>
              <option value="100 000 - 300 000 шекелей">100 000 - 300 000 шекелей</option>
              <option value="300 000 - 500 000 шекелей">300 000 - 500 000 шекелей</option>
              <option value="Свыше 500 000 шекелей">Свыше 500 000 шекелей</option>
            </select>
            <div className='formStep__buttons'>
              <button
                type="button"
                onClick={handleBack}
                className='formStep__button'
              >
                Назад
              </button>
              <button
                type="button"
                onClick={handleNext}
                className='formStep__button'
                disabled={!formData.option2}
              >
                Далее
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className='formStep__step'>
            <label className='formStep__label'>Есть ли у вас квартира?</label>
            <div className='formStep__radio'>
              <input
                type="radio"
                name="option3"
                value="Да"
                onChange={handleChange}
                required
              />
              <span className='creditUnionIsrael__text'>Да</span><br />
              <input
                type="radio"
                name="option3"
                value="Нет, но она есть у моих родителей"
                onChange={handleChange}
                required
              />
              <span className='creditUnionIsrael__text'>Нет, но она есть у моих родителей</span>
            </div>
            <div className='formStep__buttons'>
              <button
                type="button"
                onClick={handleBack}
                className='formStep__button'
              >
                Назад
              </button>
              <button
                type="button"
                onClick={handleNext}
                className='formStep__button'
                disabled={!formData.option3}
              >
                Далее
              </button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className='formStep__step'>
            <label className='formStep__label'>
              Какая стоимость квартиры, которая принадлежит вам и/или вашим родителям?
            </label>
            <select
              name="option4"
              value={formData.option4}
              onChange={handleChange}
              required
              className='formStep__input'
            >
              <option value=""></option>
              <option value="До 1 000 000 шекелей">До 1 000 000 шекелей</option>
              <option value="1 000 000 - 2 000 000 шекелей">1 000 000 - 2 000 000 шекелей</option>
              <option value="2 000 000 - 3 000 000 шекелей">2 000 000 - 3 000 000 шекелей</option>
              <option value="3 000 000 - 4 000 000 шекелей">3 000 000 - 4 000 000 шекелей</option>
              <option value="4 000 000 - 5 000 000 шекелей">4 000 000 - 5 000 000 шекелей</option>
              <option value="Свыше 5 000 000 шекелей">Свыше 5 000 000 шекелей</option>
            </select>
            <div className='formStep__buttons'>
              <button
                type="button"
                onClick={handleBack}
                className='formStep__button'
              >
                Назад
              </button>
              <button
                type="button"
                onClick={handleNext}
                className='formStep__button'
                disabled={!formData.option4}
              >
                Далее
              </button>
            </div>
          </div>
        )}
        {step === 5 && (
          <div className='formStep__step'>
            <label className='formStep__label'>В каком городе вы проживаете?</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className='formStep__input'
            />
            <div className='formStep__buttons'>
              <button
                type="button"
                onClick={handleBack}
                className='formStep__button'
              >
                Назад
              </button>
              <button
                type="button"
                onClick={handleNext}
                className='formStep__button'
                disabled={
                  formData.city.length < 2 ||
                  /\d/.test(formData.city)
                }
              >
                Далее
              </button>
            </div>
          </div>
        )}
        {step === 6 && (
          <div className='formStep__step'>
            <label className='formStep__label'>
              Какой остаток по вашему ипотечному кредиту?
            </label>
            <select
              name="option6"
              value={formData.option6}
              onChange={handleChange}
              required
              className='formStep__input'
            >
              <option value=""></option>
              <option value="До 500 000 шекелей">До 500 000 шекелей</option>
              <option value="500 000 - 1 000 000 шекелей">500 000 - 1 000 000 шекелей</option>
              <option value="1 000 000 - 2 000 000 шекелей">1 000 000 - 2 000 000 шекелей</option>
              <option value="2 000 000 - 3 000 000 шекелей">2 000 000 - 3 000 000 шекелей</option>
              <option value="Свыше 3 000 000 шекелей">Свыше 3 000 000 шекелей</option>
            </select>
            <div className='formStep__buttons'>
              <button
                type="button"
                onClick={handleBack}
                className='formStep__button'
              >
                Назад
              </button>
              <button
                type="button"
                onClick={handleNext}
                className='formStep__button'
                disabled={!formData.option6}
              >
                Далее
              </button>
            </div>
          </div>
        )}
        {step === 7 && (
          <div className='formStep__step'>
            <label className='formStep__label'>
              Мы получили все необходимые данные и в ближайшее время проведем их анализ. Пожалуйста, оставьте Ваш номер телефона, чтобы мы могли связаться с вами и обсудить возможные варианты консолидации кредитов
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className='formStep__input'
            />
            <div className='formStep__buttons'>
              <button
                type="button"
                onClick={handleBack}
                className='formStep__button'
              >
                Назад
              </button>
              <button
                type="submit"
                className='formStep__button'
                disabled={
                  formData.phone.length < 8 ||
                  !/^\d+$/.test(formData.phone)
                }
              >
                Отправить
              </button>
            </div>
          </div>
        )}
      </form>

      {isModalVisible && (
        <div className="modal">
          <div className="modal__content">
            <p>Спасибо! Данные отправлены, мы свяжемся с Вами в ближайшее время!</p>
            <button onClick={closeModal} className="modal__close-button">Закрыть</button>
          </div>
        </div>
      )}
    </>
  );
};

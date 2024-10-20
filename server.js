const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Для обробки даних з форм
app.use(bodyParser.json());
app.use(cors());

// Налаштування транспорту для Nodemailer (приклад для Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rekhtmanevgni@gmail.com', // твоя пошта
    pass: 'xxxg psbd dbuu eqat',  // твій пароль (заміни на справжній)
  },
});

// Обробка POST запиту для відправки листа
app.post('/send-email', (req, res) => {
  const { name, phone, email, creditAmount, ownership, option1, option2, option3, option4, city, option6} = req.body;

  // Створюємо об'єкт з наданих даних, прибираючи ті, що мають undefined або порожні значення
  const formData = {
    Имя: name,
    Телефон: phone,
    Email: email,
    'Сумма кредита': creditAmount,
    Собственность: ownership,
    'Активных кредитов (кроме ипотечных)': option1,
    'Общая сумма кредитов, не включая ипотеку': option2,
    'Есть квартира?': option3,
    'Стоимость квартиры, которая принадлежит вам и/или вашим родителям': option4,
    'Город': city,
    'Остаток по ипотечному кредиту': option6,
  };

  // Фільтруємо поля, щоб залишити лише заповнені дані
  const filteredData = Object.entries(formData)
    .filter(([key, value]) => value) // залишаємо лише ті пари, де value не порожнє
    .map(([key, value]) => `${key}: ${value}`) // створюємо рядки для листа
    .join('\n'); // з'єднуємо їх у текстовий блок

  // Перевіряємо, чи є хоч якісь дані для відправки
  if (!filteredData) {
    return res.status(400).json({ message: 'Нет данных для отправки' });
  }

  const mailOptions = {
    from: 'your-email@gmail.com',
    // to: 'mortgagespegasus@gmail.com', // Пошта, на яку надсилати
    to: 'aviktorovich193@gmail.com', // Пошта, на яку надсилати
    subject: `Контактные данные с формы - ${phone || 'Новый лид'}`,
    text: filteredData, // Використовуємо лише заповнені дані
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
      res.status(500).json({ message: 'Ошибка отправки', error });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Лид отправлен', info });
    }
  });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

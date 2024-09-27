import React from "react";

import articlesPhoto4 from '../../../images/articlesPhoto4.png'

import './reasonsForRefusal.scss';

export const ReasonsForRefusal = () => {
  return (
    <div className="reasonsForRefusal">
      <h1 className="reasonsForRefusal__title">
        Кто может получить отказ в ипотеке?
      </h1>
      <img
        src={articlesPhoto4}
        alt="img"
        className="reasonsForRefusal__img"
      />
      <p className="reasonsForRefusal__text">
        Клиенты с отрицательной кредитной историей включают в себя такие категории, как компании с ограниченной ответственностью, банкроты, лица, находящиеся в исполнительном производстве или конкурсном производстве, а также те, кто неэффективно управляет своими счетами, превышает установленные кредитные лимиты и не выполняет свои обязательства.
        <br /><br />
        В большинстве из этих случаев компании BDI выдают соответствующий отчет и фиксируют предупреждение по этому поводу.
      </p>
      <h2 className="reasonsForRefusal__subtitle" id="reasonsForRefusal1">
        Что такое регистрация BDI?
      </h2>
      <p className="reasonsForRefusal__text">
        BDI — это компания, занимающаяся сбором и обобщением информации о кредитных потребителях. Она получает данные от различных организаций, включая банки и правоохранительные органы.
        <br /><br />
        Основная цель BDI — предоставить заинтересованным сторонам, рассматривающим возможность предоставления кредита, отчет о текущем поведении клиента, а также информацию о его прошлых финансовых действиях.
        <br /><br />
        Данные, полученные от BDI, могут существенно повлиять на вашу заявку на ипотеку, особенно в случае отказа. Поэтому к этой информации следует относиться с особой серьезностью.
      </p>
      <h2 className="reasonsForRefusal__subtitle" id="reasonsForRefusal2">
        Сроки хранения информации в BDI
      </h2>
      <p className="reasonsForRefusal__text">
        Вы, вероятно, интересуетесь, как долго информация хранится в BDI и предоставляется заинтересованным сторонам. Данные могут отображаться максимум 7 лет с даты последнего обновления, а в некоторых случаях информация может быть удалена через 5 лет с этой же даты. Это означает, что регистрация отказа в ипотеке не является пожизненной.
        <br /><br />
        Информация о людях с инвалидностью, имеющих серьезные ограничения и долговые обязательства перед банками, будет храниться в течение 5 лет с момента получения отчета. В то время как информация о клиентах-банкротах будет доступна в течение 7 лет с даты получения отчета.
      </p>
      <h2 className="reasonsForRefusal__subtitle" id="reasonsForRefusal3">
        Как преодолеть отказ в ипотеке и избежать подобной ситуации?
      </h2>
      <p className="reasonsForRefusal__text">
        Во-первых, не все банки готовы работать с клиентами, которые имеют сложные финансовые обстоятельства после отказа. Поэтому нет смысла обращаться в каждое финансовое учреждение в надежде получить ипотеку, так как это может привести к множественным отказам и негативно сказаться на вашей кредитной истории.
        Вместо этого стоит рассмотреть следующие шаги:
        <ul>
          <li className="reasonsForRefusal__item">
            Обратитесь к специалистам: Найдите кредитного консультанта или финансового специалиста, который поможет вам определить, какие банки могут рассмотреть вашу заявку и предложить подходящие условия.
          </li>
          <li className="reasonsForRefusal__item">
            Улучшите кредитную историю: Если возможно, работайте над улучшением своей кредитной истории, погашая долги и выполняя обязательства, чтобы повысить свои шансы на получение ипотеки в будущем.
          </li>
          <li className="reasonsForRefusal__item">
            Подготовьте необходимые документы: Убедитесь, что у вас есть все необходимые документы и информация, которые могут помочь убедить банк в вашей платежеспособности.
          </li>
          <li className="reasonsForRefusal__item">
            Обсудите альтернативные варианты: Рассмотрите возможность получения ипотеки под залог другой недвижимости или использования других финансовых инструментов.
          </li>
          <li className="reasonsForRefusal__item">
            Изучите специальные программы: Некоторые банки предлагают ипотечные программы для клиентов с негативной кредитной историей или нестандартными ситуациями. Узнайте, есть ли такие предложения.
          </li>
        </ul>
      </p>
      <h2 className="reasonsForRefusal__subtitle" id="reasonsForRefusal4">
        Распространенные причины отказа в ипотеке
      </h2>
      <p className="reasonsForRefusal__text">
        Несмотря на то, что банки заинтересованы в выдаче кредитов, есть несколько причин, по которым они могут отказать в ипотеке. Поскольку деньги принадлежат банку, он имеет право гарантировать, что не будет выдавать кредиты с высоким риском. Зная причину отказа, вы можете начать искать решение.
        Вот некоторые из распространенных причин отказа в ипотеке:
        <ul>
          <li className="reasonsForRefusal__item">
            Запрашиваемая ипотека имеет слишком высокий процент финансирования.
          </li>
          <li className="reasonsForRefusal__item">
            У вас есть непогашенные кредиты, взятые ранее у банка.
          </li>
          <li className="reasonsForRefusal__item">
            Чеки, которые вы предоставили, были возвращены.
          </li>
          <li className="reasonsForRefusal__item">
            Вы не соответствуете основным требованиям, таким как возраст или стаж работы.
          </li>
          <li className="reasonsForRefusal__item">
            Данные о вашей собственности не привлекательны для банка.
          </li>
          <li className="reasonsForRefusal__item">
            Форма регистрации квартиры вызывает подозрения у финансового учреждения.
          </li>
        </ul>
        В заключение, лучший способ преодолеть отказ банка в выдаче ипотеки — это понять причины отказа, устранить их и воспользоваться услугами нашей команды профессионалов, которые помогут вам решить возникшую проблему.
      </p>
    </div>
  )
}

import React from "react";
import './table.scss'

export const Table = ({ table }) => {
  return (
    <table className="table">
      <thead className="table__head">
        <tr>
          <th className="table__cell table__cell--head">Возраст</th>
          <th className="table__cell table__cell--head">Процент финансирования</th>
          <th className="table__cell table__cell--head">Возраст</th>
          <th className="table__cell table__cell--head">Процент финансирования</th>
          <th className="table__cell table__cell--head">Возраст</th>
          <th className="table__cell table__cell--head">Процент финансирования</th>
        </tr>
      </thead>
      <tbody>
        {table.map((item) => (
          <tr>
            <td className="table__cell table__cell--data">{item[0]}</td>
            <td className="table__cell table__cell--data">{item[1]}</td>
            <td className="table__cell table__cell--data">{item[2]}</td>
            <td className="table__cell table__cell--data">{item[3]}</td>
            <td className="table__cell table__cell--data">{item[4]}</td>
            <td className="table__cell table__cell--data">{item[5]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

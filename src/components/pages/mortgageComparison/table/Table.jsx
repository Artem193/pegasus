import React from "react";
import './table.scss'

export const Table = ({ table }) => {
  return (
    <table className="table">
      <thead className="table__head">
        <tr>
          <th className="table__cell table__cell--head"></th>
          <th className="table__cell table__cell--head">הראל</th>
          <th className="table__cell table__cell--head">כלל</th>
          <th className="table__cell table__cell--head">הפניקס</th>
          <th className="table__cell table__cell--head">איילון</th>
          <th className="table__cell table__cell--head">מנורה</th>
        </tr>
      </thead>
      <tbody>
        {table.map((item) => (
          <tr>
            <td className="table__cell table__cell--data"><strong>{item[0]}</strong></td>
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
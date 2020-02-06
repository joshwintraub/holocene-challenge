import React from 'react';

const Table = (props => {

  return (
    <div>
      <table className="table">
        <caption>Table</caption>
        <tbody>
          <tr>
            <th>A</th>
            <th style={{ color: "#C17A2C" }}>B</th>
            <th style={{ color: "#008EB3" }}>C</th>
          </tr>
          {props.ab_Set.map((elem, id) => (
            <tr key={id}>
              <td>{elem.x}</td>
              <td style={{ color: "#C17A2C" }}>{elem.y}</td>
              <td style={{ color: "#008EB3" }}>{props.ac_Set[id].y}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
})

export default Table;

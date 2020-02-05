import React from 'react';

const Table = (props => {

  return (
    <div>
      <table className="table" border="10">
        <caption>Table Format</caption>
        <tbody>
          <tr>
            <th>A</th>
            <th>B</th>
            <th>C</th>
          </tr>
          {props.ab_Set.map((elem, id) => (
            <tr key={id}>
              <td style={{ color: "red" }}>{elem.x}</td>
              <td>{elem.y}</td>
              <td>{props.ac_Set[id].y}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
})

export default Table;

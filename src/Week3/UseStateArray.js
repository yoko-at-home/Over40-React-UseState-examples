import React, { useState } from "react";
import { data } from "./../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = id => {
    let newPeople = people.filter(person => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      <h3 style={{ paddingTop: 40 }}>顔ぶれ</h3>
      {people.map(person => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>削除</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        全て削除
      </button>
    </>
  );
};

export default UseStateArray;

import React, { useState } from 'react'
import { data } from '../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removeItem = (id) => {
    //条件を与えて配列データを取得したい内容を「コールバック関数」に書いて、
    //データを抽出し、新しい配列を生成
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)

  }
  return (
    <>
      <div className="container">
        <h3 style={{ paddingTop: 40 }}>欠席者</h3>
      {people.map((person) => {
        // console.log(person)
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>参加</button>
          </div>
        )
      })}
      <button className='btn' onClick={() => setPeople([])}>
        全員参加
      </button>
      </div>
    </>
  )
}

export default UseStateArray

import React from "react";
import Person from "./Person";

function NameList() {
  const names = [
    {
      id: 1,
      name: "Tuan",
      age: 24,
      skill: "JS"
    },
    {
      id: 2,
      name: "Binh",
      age: 25,
      skill: "CSS"
    },
    {
      id: 3,
      name: "Hiep",
      age: 23,
      skill: "React"
    }
  ];
  const nameList = names.map(person => (
    <Person key={person.id} person={person} />
  ));
  return <div>{nameList}</div>;
}

export default NameList;

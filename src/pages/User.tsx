import React, { useState } from "react";

export default function User() {
  const [name, setName] = useState();

  function onNameChangeHamdler(e: any) {
    console.log(e.value.target);
    setName(e.value.target);
  }
  return (
    <div>
      <input placeholder="name" onChange={onNameChangeHamdler} value={name} />
    </div>
  );
}

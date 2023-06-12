import React from "react";

function Form({ onSubmit }) {
  function evaluateForm(e) {
    e.preventDefault();
    onSubmit(e.currentTarget.query.value, 0);
  }

  return (
    <form onSubmit={evaluateForm}>
      <label className="m-2">Type your search in here</label>
      <input
        className="m-2 text-stone-700"
        name="query"
        placeholder="ex. cats with a hat"
        type="text"
      />
      <button className="m-2 border-2 border-white py-2 px-4">Search</button>
    </form>
  );
}

export default Form;

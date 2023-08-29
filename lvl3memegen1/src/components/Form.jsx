import { useState, React } from "react";

export default function Form() {
  const [inputs, setInputs] = useState({
    topText: "",
    bottomText: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        [name]: value,
      };
    });
  }

  console.log(inputs);

  return (
    <>
      <form>
        <input
          placeholder="top text"
          onChange={handleChange}
          name="topText"
          value={inputs.topText}
        />
        <input
          placeholder="bottom text"
          onChange={handleChange}
          name="bottomText"
          value={inputs.bottomText}
        />
        <button>Submit</button>
      </form>
      <div>
        <p>{inputs.topText}</p>
        <p>{inputs.bottomText}</p>
      </div>
    </>
  );
}

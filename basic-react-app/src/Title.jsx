// import "./App.css";

function Title() {
  let name = "Saniya";
  return(
    <>
      <h1>Hello {name.toLowerCase()}</h1>
      <p>2 X 2 = {2*2}</p> //JSX with curly brackets for JS
    </>
  )
}

function Description() {
  return(
    <>
      <h2>Description</h2>
      <p>I am description</p>
    </>
  )
}

export{Title, Description};
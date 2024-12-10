import React from 'react'

const App = () => {

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log('Form Submitted');
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <h2>Fill Form</h2>

        <input type="text" />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
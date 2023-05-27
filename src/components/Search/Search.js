import React from 'react'

function Search() {


  const handeleChange=(e)=>{
    console.log(e.target.value);
  }

 
  
  return (
    <div>
      <input type="text" onChange={handeleChange} />
      <button onClick={handelSubmit} type='submit'>Submit</button>
    </div>
  )
}

export default Search
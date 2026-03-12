import React from 'react'

const App = () => {
  return (
    <div>
      <button onSubmit={(alert("Button Clicked"))} >
        {/* Immediate Invocation because without clicked showing clicked */}
        Click Me
      </button>
    </div>
  )
}

export default App

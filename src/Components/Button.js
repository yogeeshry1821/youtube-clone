import React from 'react'

const Button = (props) => {
  return (
    <div >
        <button className=' bg-gray-100 px-5 p-2 m-2 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300' >
            {props.name}
        </button>
    </div>
  )
}

export default Button
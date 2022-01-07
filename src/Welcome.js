import React from 'react'

const Welcome = (props) => {
    // console.log(props)
    const { name, country} = props
    return(
        <div>
          <h1>  {name}  is from {country}</h1>
        
        </div>
    )

}
export default Welcome;
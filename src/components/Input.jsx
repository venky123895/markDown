import React from 'react'
import ReactMarkdown from 'react-markdown'
const Input = (props) => {
  return (
    <div style={{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",

    }}>
          <input type="text" placeholder='Enter React Mark Down' onChange={(e)=>{
                    props.setInt(e.target.value);
                    console.log(props.Input)
            }}/>
            <ReactMarkdown>

                 {props.input}

            </ReactMarkdown>
    </div>
  )
}

export default Input
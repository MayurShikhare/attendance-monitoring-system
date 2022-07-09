import React from 'react'

const Student = ({detail, handler}) => {
  return (
    <div className={detail.isPresent === true ? "student active" : "student default"}
    //  onClick={()=>handler(detail.ID) }
     >
       <p>{detail.ID}</p>
       <p>{detail.Name}</p>
    </div>
  )
}

export default Student
import React from 'react'

const Languse = ({portfoliocom}) => {
  return (
    <div  className='grid grid-cols-1 md:grid-cols-2 ' style={{height:'100px',overflow:'scroll'}}>
        {
            portfoliocom.map((item,index)=>(
                <div  key={index} className='flex items-center gap-2'>
                 <svg color='red' fontSize='20px'  stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" class="Modal_arrowIcon__ayBOD" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 464c114.875 0 208-93.125 208-208S370.875 48 256 48 48 141.125 48 256s93.125 208 208 208zm-32-112V160l96 96-96 96z"></path></svg>
                    <li className='text-blue-700 text-[18px]  ' style={{listStyle:"none"}}>    {item.lanuges}</li>
                </div>
            ))
        }
    </div>
  )
}

export default Languse
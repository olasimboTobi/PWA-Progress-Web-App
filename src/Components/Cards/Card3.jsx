import React from 'react'

const Card3 = ({id,name,title,photo,description}) => {
  return (
    <div className='flex flex-col items-center bg-white px-8 justify-between py-4 w-[48%] border-[1px] h-[75%] rounded-md'>
        <div className='w-[50px] h-[50px] rounded-full'>
           <img src={photo} className="w-[100%] h-[100%] rounded-full" alt=""/>
        </div>
        <p className='text-[#1C1D93] text-[16px] font-normal'>{name}</p>
        <h2 className='text-[#FFA000] text-[24px] font-black'>{title}</h2>
        <p className='text-[#3D3D3D] text-[16px] font-normal'>{description}</p>
    </div>
  )
}

export default Card3
import React from 'react'
import Image from './Image'

function PostInfo() {
  return (
    <div className='cursor-pointer w-4 h-4 relative overflow-hidden '>
      <Image alt='' path="/public/icons/infoMore.svg" width={16} height={16}/>
    </div>
  )
}

export default PostInfo

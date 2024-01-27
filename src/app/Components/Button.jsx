import Link from 'next/link'
import React from 'react'




const Button = ({href, className, children}) => {
  return (
    <button className={`bg-black text-white rounded-xl px-2 py-1 border-2 border-black hover:bg-white hover:border-white hover:text-black  duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black transition-all text-lg font-bold ${className}`}>
        <Link href={href}>{children}</Link>
    </button>
  )
}

export default Button
import React from 'react'
import Header from '@/components/Header.jsx'
import AddTask from '@/components/AddTask'

const HomePage = () => {
  return (
    <div className='container pt-8 mx-auto'>
      <div className="w-full max-w-2xl p-6 mx-auto space-y-6">
        <Header />
        <AddTask />
      </div>
    </div>
  )
}

export default HomePage

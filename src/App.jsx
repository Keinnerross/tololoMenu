import TemplateOne from './common/template_1'
import TemplateTwo from './common/template_2'
import TemplateThree from './common/template_3'

import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='flex flex-col items-center gap-1 bg-gray-900'>
      <TemplateOne />
      <TemplateTwo />
      <TemplateThree />

    </div>
  )
}

export default App

import TemplateOne from './common/template_1'
import TemplateTwo from './common/template_2'
import TemplateThree from './common/template_3'
import TemplateFour from './common/template_4'
import './App.css'
import Loading from './common/loading'
import { AppContext } from './context/store';
import { useContext } from 'react'
import Footer from './common/footer'

function App() {

  const { loading } = useContext(AppContext);






  return (
    <div className='w-full flex flex-col items-center gap-1 bg-gray-950'>
      {loading ? <Loading /> : ""}
      <TemplateOne />
      <TemplateTwo />
      <TemplateThree />
      <TemplateFour />
      <div>
        <Footer />

      </div>
    </div>
  )
}

export default App

import './App.css'
import { Button } from './stories/Button/Button'
import { Card } from './stories/Card/Card'
function App() {
  return (
    <>
      <h1 className="text-quaternary font-bold  text-normal underline font-sans">
        Welcome to Tailwind CSS Installation Tutorial.
      </h1>
      <Button label='Login' size='xs' color='quaternary'/>
      <Button label='Login' size='md' color='primary'/>
      <Button label='Login' size='lg' color='secondary'/>
      <Card primary/>
      <Card/>
    </>
  )
}

export default App

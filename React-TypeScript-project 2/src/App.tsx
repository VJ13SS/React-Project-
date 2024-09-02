import './App.css'
import QuestionCard from './Components/questionCard'
import bgImg from '/src/bg.jpg'
export default function App() {

  return (
    <main>
      <img src = {bgImg} />
      <QuestionCard />
    </main>
  )
}

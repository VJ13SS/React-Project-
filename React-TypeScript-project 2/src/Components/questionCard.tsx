import React from 'react'
import './components.css'

import getQuestions,{Question} from './questions'
export default function QuestionCard() {

  const [questionData, setQuestionData] = React.useState<Question[]>([])

  function selectQuestion(Id:string):void{
    setQuestionData(
      questionData.map((question) =>{
        if(question.id === Id){
          return {...question,selected:true}
        }
        return question
      })
    )
  }
  
  function shuffle(answers:string[]):string[]{
    
    for(let i=0;i<answers.length;i++){
      let randomPos = Math.floor(Math.random()*answers.length);
      [answers[i],answers[randomPos]] = [answers[randomPos],answers[i]]
    }
    return answers;
  }

  function checkAnswer(choice : string, question: Question):boolean {
     if(choice == question.correct_answer){
       return true;
     }
    return false;
  }

  const [startQuiz,setStartQuiz] = React.useState<boolean>(false)
  let[score,setScore] = React.useState<number>(0)
  let [currentIndex,setCurrentIndex]= React.useState<number>(0)
  
  
  React.useEffect(() => {
    getQuestions().then(data => {
      setQuestionData(data)
      setQuestionData(prev => prev.map((question) =>{
        return(
          {...question,
incorrect_answers:shuffle([...question.incorrect_answers,question.correct_answer])
          }
        )
      }))
    })
  },[])//Executed only when the component mounts

  const [attemptedQuestions,setAttemptedQuestions] = React.useState<number>(0)
  const questions = questionData.map((question,index) =>{
    return(
      <div className = 'question' key = {index}>
        
        <h3>{question.question}</h3>
        <div className = 'options'>
          {question.incorrect_answers.map((answer,answerIndex )=>{
        return(
          <button 
            key = {answerIndex} 
            onClick = {()=>{
              selectQuestion(question.id);
              setAttemptedQuestions(prev=> !question.selected?prev+1:prev);
              setScore(prev => !question.selected?checkAnswer(answer,question)?prev + 1:prev:prev)
            console.log(checkAnswer(answer,question))}}
            style = {{
              backgroundColor: (question.selected)?checkAnswer(answer, question)?'#00ba06':'#ff1414':'#8c8c8c',
              border:'none',
              color:'white'
            }}>{answer}</button>
        )
        })}
        </div>
      </div>
    )
  })
  const totalQuestions:number = questions.length;
  
  console.log(score);
  return(
    <div className = 'quiz'>
      <h3 style = {{textDecoration:'underline'}}>QUIZ APP using React-TypeScript</h3>
      <div className = 'questions'>
        <div className = 'header'>
          <h4>{!startQuiz?'':`Score: ${score}/${questionData.length}`}</h4>
          <h4>{!startQuiz?'':`${attemptedQuestions}/${totalQuestions}`}</h4>
      </div>
        {!startQuiz?<h3>Are You ready to play?</h3>:questions[currentIndex]?questions[currentIndex]:<h1>Questions Loading</h1>}
        <button onClick = {() => {
        setStartQuiz(prev => !prev)}}
          style = {
            {
            display:!startQuiz?'block':'none',
            width:'100px'}
          }>Start</button>
        <div className = 'Controls'>
          <button onClick = {() => {
        setCurrentIndex(prevIndex=> (prevIndex - 1+totalQuestions)%totalQuestions)}}
            style = {{display:startQuiz?'block':'none'}}>Prev</button>
          <button 
            onClick = {() =>{
              setCurrentIndex(prevIndex=> (prevIndex + 1)%totalQuestions)}}
            style = {{display:startQuiz?'block':'none'}}
            >Next</button>
          <button onClick = {() => {
      window.location.reload()
        }}
          style = {
            {
            display:(attemptedQuestions === 10)?'block':'none',
            width:'100px'}
          }>Restart</button>
        </div>
      </div>
    </div>
  )
}

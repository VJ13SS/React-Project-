import {nanoid} from 'nanoid'

//Type of the responsr
export type Question = {
  id:string;
  category:string;
  type:string;
  difficulty:string;
  question:string;
  correct_answer:string;
  incorrect_answers:string[];
  selected:boolean;
}

type ApiResponse = {
  response_code:number;
  results: Question[];
}

const url:string = "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple"

async function getQuestions():Promise<Question[]>{
  try{
    let response = await fetch(url);

    if(!response.ok){
      throw new Error("Network response was not ok");
    }
    else{
      let data:ApiResponse = await response.json();
      return data.results.map(question =>({
        ...question,id:nanoid(),selected:false
      }));
    }
  }
  catch(error){
    throw(error);
  }
}

export default getQuestions;

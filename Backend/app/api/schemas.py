from pydantic import BaseModel, Field
from typing import List, Optional

class AnswerOptionSchema(BaseModel):
    text: str
    is_correct: bool = Field(..., alias='isCorrect') 
    rationale: Optional[str] = None

class QuestionSchema(BaseModel):
    question: str
    answer_options: List[AnswerOptionSchema] = Field(..., alias='answerOptions')
    hint: Optional[str] = None

class QuizInputSchema(BaseModel):
    quiz: List[QuestionSchema]
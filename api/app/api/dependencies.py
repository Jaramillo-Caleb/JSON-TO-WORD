import json
import logging
from fastapi import File, UploadFile, HTTPException, status

from app.api.schemas import QuizInputSchema
from app.domain.entities import Quiz, Question, AnswerOption
from app.infrastructure.word_document_adapter import WordDocumentAdapter
from app.application.use_cases import QuizConversionService

logger = logging.getLogger("uvicorn.error")

async def parse_and_validate_quiz(file: UploadFile = File(...)) -> Quiz:
    if file.content_type != 'application/json':
        raise HTTPException(status_code=415, detail="Sube un JSON.")

    content = await file.read()
    
    try:
        json_dict = json.loads(content)
        schema_data = QuizInputSchema(**json_dict) 
    except Exception as e:
        logger.error(f"Error JSON: {e}")
        raise HTTPException(status_code=422, detail=f"JSON inválido: {str(e)}")

    domain_questions = []
    for q_schema in schema_data.quiz:
        domain_opts = [
            AnswerOption(
                text=opt.text, 
                is_correct=opt.is_correct, 
                rationale=opt.rationale
            ) for opt in q_schema.answer_options
        ]
        domain_questions.append(
            Question(
                question=q_schema.question, 
                answer_options=domain_opts, 
                hint=q_schema.hint
            )
        )
    
    return Quiz(questions=domain_questions)

def get_quiz_service() -> QuizConversionService:
    adapter = WordDocumentAdapter()
    return QuizConversionService(document_service=adapter)
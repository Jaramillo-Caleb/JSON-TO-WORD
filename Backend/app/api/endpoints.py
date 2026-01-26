# app/api/endpoints.py
from fastapi import APIRouter, Depends
from fastapi.responses import StreamingResponse

from app.domain.entities import Quiz
from app.application.use_cases import QuizConversionService
from .dependencies import parse_and_validate_quiz, get_quiz_service

router = APIRouter()

DOCX_MIME_TYPE = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"

@router.post("/convert/exam", response_class=StreamingResponse)
async def convert_to_exam_document(
    quiz_data: Quiz = Depends(parse_and_validate_quiz),
    service: QuizConversionService = Depends(get_quiz_service) # Usamos APPLICATION Service
):
    exam_stream = service.generate_exam(quiz_data)
    
    headers = {
        'Content-Disposition': 'attachment; filename="Examen_Estudiantes.docx"'
    }

    return StreamingResponse(
        iter([exam_stream.read()]), 
        media_type=DOCX_MIME_TYPE,
        headers=headers
    )

@router.post("/convert/answers", response_class=StreamingResponse)
async def convert_to_answer_key_document(
    quiz_data: Quiz = Depends(parse_and_validate_quiz),
    service: QuizConversionService = Depends(get_quiz_service) # Usamos APPLICATION Service
):
    answer_key_stream = service.generate_answers(quiz_data)
    
    headers = {
        'Content-Disposition': 'attachment; filename="Guia_Docente_Respuestas.docx"'
    }

    return StreamingResponse(
        iter([answer_key_stream.read()]), 
        media_type=DOCX_MIME_TYPE,
        headers=headers
    )
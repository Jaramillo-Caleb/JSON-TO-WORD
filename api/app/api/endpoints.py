import base64
from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse

from app.domain.entities import Quiz
from app.application.use_cases import QuizConversionService
from .dependencies import parse_and_validate_quiz, get_quiz_service

router = APIRouter()

@router.post("/convert/all")
async def convert_all_documents(
    quiz_data: Quiz = Depends(parse_and_validate_quiz),
    service: QuizConversionService = Depends(get_quiz_service)
):
    
    exam_io = service.generate_exam(quiz_data)
    answers_io = service.generate_answers(quiz_data)

    exam_b64 = base64.b64encode(exam_io.getvalue()).decode('utf-8')
    answers_b64 = base64.b64encode(answers_io.getvalue()).decode('utf-8')

    return JSONResponse(content={
        "status": "success",
        "message": "Conversión exitosa",
        "files": {
            "exam": {
                "filename": "Examen_Estudiantes.docx",
                "content_type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "data": exam_b64
            },
            "answers": {
                "filename": "Guia_Docente_Respuestas.docx",
                "content_type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "data": answers_b64
            }
        }
    })
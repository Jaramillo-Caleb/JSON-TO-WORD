# app/api/dependencies.py
import json
from fastapi import File, UploadFile, HTTPException, status
from app.domain.entities import Quiz
from app.infrastructure.word_document_adapter import WordDocumentAdapter
from app.application.use_cases import QuizConversionService

async def parse_and_validate_quiz(file: UploadFile = File(...)) -> Quiz:
    if file.content_type != 'application/json':
        raise HTTPException(
            status_code=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE,
            detail="Por favor sube un archivo JSON."
        )
    try:
        content = await file.read()
        json_data = json.loads(content)
        return Quiz(**json_data)
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="JSON malformado o estructura incorrecta."
        )

def get_quiz_service() -> QuizConversionService:
    adapter = WordDocumentAdapter()
    return QuizConversionService(document_service=adapter)
# app/application/service.py
from io import BytesIO
from app.domain.entities import Quiz
from app.domain.IDocumentGenerator import IDocumentGenerator

class QuizConversionService:
    def __init__(self, document_service: IDocumentGenerator):
        self.document_service = document_service

    def generate_exam(self, quiz_data: Quiz) -> BytesIO:
        return self.document_service.create_exam_document(quiz_data)

    def generate_answers(self, quiz_data: Quiz) -> BytesIO:
        return self.document_service.create_answer_key_document(quiz_data)
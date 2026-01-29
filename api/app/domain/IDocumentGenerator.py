from abc import ABC, abstractmethod
from typing import Any
from .entities import Quiz

class IDocumentGenerator(ABC):
    
    @abstractmethod
    def generate_questions_document(self, quiz: Quiz) -> Any:
        pass

    @abstractmethod
    def generate_answers_document(self, quiz: Quiz) -> Any:
        pass
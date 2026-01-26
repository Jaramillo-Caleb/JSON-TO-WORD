from dataclasses import dataclass
from typing import List

@dataclass
class AnswerOption:
    text: str
    is_correct: bool
    rationale: str

@dataclass
class Question:
    question: str
    answer_options: List[AnswerOption]
    hint: str

@dataclass
class Quiz:
    questions: List[Question]
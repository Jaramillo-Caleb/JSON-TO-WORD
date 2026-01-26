from dataclasses import dataclass
from typing import List, Optional

@dataclass
class AnswerOption:
    text: str
    is_correct: bool
    rationale: Optional[str] = None

@dataclass
class Question:
    question: str
    answer_options: List[AnswerOption]
    hint: Optional[str] = None

@dataclass
class Quiz:
    questions: List[Question]
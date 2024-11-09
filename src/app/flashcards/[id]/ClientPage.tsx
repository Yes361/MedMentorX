'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ClientApp({ data }: { data: any }) {
  const params = useParams()

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState<number>(0)

  const question = data?.Questions[currentQuestionIndex]

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result
  //   }
  // }, [])

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index)

    setIsCorrect(index === question.CorrectAnswer)
    if (index === question.CorrectAnswer)
        setScore(score + 1)
  }

  const nextQuestion = () => {
    setSelectedAnswer(null)
    setIsCorrect(null)

    if (currentQuestionIndex + 1 >= data.Questions.length)
      setScore(0)
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % data.Questions.length)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-4">
      <h1 className="text-2xl font-bold mb-4">Flashcards Quiz</h1>
      <p className="text-gray-600">Flashcard ID: {params.id}</p>
      <p>{score} / {data.Questions.length}</p>

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mt-4">
        <h2 className="text-xl font-semibold mb-4">{question.Prompt}</h2>

        <div className="grid gap-3">
          {question.Options.map((option: any, index: number) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`py-2 px-4 rounded-lg font-medium ${
                selectedAnswer === index
                  ? isCorrect
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              disabled={selectedAnswer !== null}
            >
              {option}
            </button>
          ))}
        </div>

        {selectedAnswer !== null && (
          <div className="mt-4 text-center">
            {isCorrect ? (
              <p className="text-green-600 font-bold">Correct!</p>
            ) : (
              <p className="text-red-600 font-bold">Incorrect</p>
            )}
            <button
              onClick={nextQuestion}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Next Question
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

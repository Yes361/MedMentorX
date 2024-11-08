'use client'

import { getLessonsByUnit, getLessonsByUnitID, getUnitByID } from "@/actions/MongoDatabase"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function App({ params } : { params: { unit: string} }) {
    const unitID = params.unit
    const [lessons, setLessons] = useState<any[]>()
    const [unit, setUnit] = useState<any>()


    useEffect(() => {
        const fetchData = async () => {
            const results = await getLessonsByUnitID(unitID)
            setLessons(results)

            const value = await getUnitByID(unitID);
            setUnit(value)
        }
        fetchData()
    }, [])

    return (
        <div className="container mx-auto px-6 py-12 max-w-4xl">
            {/* Title & Introduction */}
            <header className="text-center mb-12">
                <h1 className="text-3xl font-bold text-blue-600">Lessons for Unit: {unit?.unitName}</h1>
                <p className="text-lg text-gray-700 mt-4">
                    Explore the lessons within this unit. Each lesson is designed to give you a deeper understanding of the topics covered in the unit. 
                    Start your learning journey today!
                </p>
            </header>

            {/* Lesson List */}
            <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Lessons</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {lessons?.map((lesson) => (
                        <Link href={`/courses/${unitID}/${lesson._id}`} key={lesson._id}>
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                                <h3 className="text-xl font-semibold text-blue-600">{lesson.lessonTitle}</h3>
                                <p className="text-gray-600 mt-2">
                                    {lesson.description ? lesson.description : "No description available for this lesson."}
                                </p>
                                <div className="mt-4 text-right">
                                    <span className="text-sm text-blue-500">Learn more</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Additional Info / Benefits Section */}
            <section className="mt-12 text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Why Take These Lessons?</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Each lesson in this unit is designed to build upon the previous, allowing you to gradually develop mastery in the subject. Here’s why our lessons stand out:
                </p>
                <ul className="list-inside list-disc mt-6 text-left text-gray-700 max-w-2xl mx-auto">
                    <li>Structured content for easy comprehension</li>
                    <li>Interactive learning tools to keep you engaged</li>
                    <li>Clear explanations and examples that make learning fun</li>
                    <li>Ability to track your progress and revisit lessons</li>
                </ul>
            </section>
        </div>
    )
}
'use client'

import { getLessonByID, getUnitByID } from "@/actions/MongoDatabase"
import { useEffect, useState } from "react"

export default function App({ params }: { params: { lesson: string } }) {
    const id = params.lesson;
    const [data, setData] = useState<any>()

    useEffect(() => {
        const fetchData = async () => {
            const results = await getLessonByID(id);
            setData(results);
        };
        fetchData();
    }, [id]); // Ensure effect runs only when the id changes

    return (
        <div className="container mx-auto px-6 py-12 max-w-4xl">
            {data ? (
                <div>
                    <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
                        {data.lessonTitle}
                    </h1>

                    {/* Lesson Content */}
                    <div className="lesson-content text-lg text-gray-700">
                        <p>{data.content}</p> {/* Simply display the content */}
                    </div>
                </div>
            ) : (
                <p>Loading lesson content...</p>
            )}
        </div>
    );
}

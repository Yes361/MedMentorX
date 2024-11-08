'use client'

import { ListCourseUnits } from "@/actions/MongoDatabase"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function App() {
    const [units, setUnits] = useState<any[]>()


    useEffect(() => {
        const fetchData = async () => {
            const results = await ListCourseUnits()
            setUnits(results)
            console.log(results)
        }
        fetchData()
    }, [])

    return (
        <div className="container mx-auto px-6 py-12 max-w-4xl">
            {/* Introduction Section */}
            <header className="text-center mb-12">
                <h1 className="text-3xl font-bold text-blue-600">Welcome to Our Learning Units</h1>
                <p className="text-lg text-gray-700 mt-4">
                    Dive into a structured learning experience with our carefully crafted units designed to guide you through each topic. Whether you're looking to master specific skills or expand your knowledge, our courses will help you reach your goals.
                </p>
            </header>

            {/* Course Units List */}
            <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Course Units</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {units?.map((unit, index) => (
                        <Link href={`/courses/${unit._id}`} key={unit._id}>
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                                <h3 className="text-xl font-semibold text-blue-600">{unit.unitName}</h3>
                                <p className="text-gray-600 mt-2">{unit.description ? unit.description : "No description available for this unit."}</p>
                                <div className="mt-4 text-right">
                                    <span className="text-sm text-blue-500">Learn more</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Benefits Section */}
            <section className="mt-12 text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Why Choose Our Courses?</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Our courses are designed to help you build practical skills in a structured environment, offering benefits such as:
                </p>
                <ul className="list-inside list-disc mt-6 text-left text-gray-700 max-w-2xl mx-auto">
                    <li>Expertly crafted units focused on real-world applications</li>
                    <li>Flexible learning at your own pace</li>
                    <li>Clear and concise content that's easy to understand</li>
                    <li>Access to resources and support throughout your learning journey</li>
                </ul>
            </section>
        </div>
    )
}
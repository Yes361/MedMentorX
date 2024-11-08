'use client';

import Image from 'next/image';
import non_profit from '@/public/images/non-profit.jpg';

export default function HomePage() {

  return (
    <div className="container mx-auto p-6 right-10">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 ">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg leading-relaxed">
            We are a non-profit organization dedicated to accurate and accessible health information. Founded by four high school students, MedMentorX was designed to compile reliable medical figures into digestible lessons—a mission of particular importance in a time of online misinformation and politicized science. From the comfort of your home, out and about, or within the classroom, MedMentorX is available to anyone curious about their health. More than just a website, MedMentorX is a tool for building a repository of medical knowledge, keeping you, your friends, and your family safe and informed about your well-being.
          </p>
        </div>

        <div className="flex-1 w-full max-w-md relative">
          <Image
            src={non_profit}
            alt="Medical Learning"
            layout="responsive"
            width={500}
            height={400}
            className="rounded-lg shadow-lg transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </div>
  )
}

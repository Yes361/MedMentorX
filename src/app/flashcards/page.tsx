'use client'

import { getFlashCardsByKeyword } from "@/actions/MongoDatabase";
import { 
  Input,
  Link,
  Button,
  Spacer
} from "@nextui-org/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function App() {
    const [keyword, setKeyword] = useState('');
    const [flashcards, setFlashcards] = useState<any[]>([]);

    const handleSearch = async () => {
      const results = await getFlashCardsByKeyword(keyword);
      setFlashcards(results);
    };

    useEffect(() => {
        handleSearch();
    }, []);

    return (
      <div className="container mx-auto px-8 py-10 max-w-3xl">
        {/* Title and Search Input */}
        <h1 className="text-3xl font-bold text-center mb-6">Search Quizzes</h1>
        
        <div className="flex items-center justify-center mb-8">
          <Input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Enter a keyword..."
            className="flex-grow"
          />
          <Button
            onClick={handleSearch}
            color="primary"
            className="ml-3"
          >
            Search
          </Button>
        </div>

        {/* Flashcard Results */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {flashcards.length > 0 ? (
            flashcards.map((flashcard) => (
              <Link href={`/flashcards/${flashcard._id}`} key={flashcard._id}>
                <Card className="h-full transition-all hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>{flashcard.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      {flashcard.description ? (
                        <p className="line-clamp-3 text-gray-700">
                          {flashcard.description}
                        </p>
                      ) : (
                        <p className="text-gray-500">No description available</p>
                      )}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-500">No flashcards found. Try a different keyword!</p>
          )}
        </div>

        <Spacer y={4} />
      </div>
    );
}

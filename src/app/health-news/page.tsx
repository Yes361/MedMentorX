// components/HealthNews.tsx
'use client';

import { useEffect, useState } from 'react';
import getHealthNewsHeadlines from '@/actions/HealthNewsAPI';
import { Card, CardHeader, CardBody, CardFooter, Button, Divider, Image } from "@nextui-org/react";
import { ExternalLinkIcon } from 'lucide-react';

export default function HealthNewsPage() {
    const [news, setNews] = useState<any[]>([]);

    useEffect(() => {
        const fetchNews = async () => {
            const result = await getHealthNewsHeadlines();
            setNews(result);
        };
        fetchNews();
    }, []);

    return (
        <div className="max-w-screen-lg mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Health News Headlines</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news?.length == 0 && <p>No Health News Results</p>}
                {news.map((article, index) => (
                    <Card key={index} className="shadow-lg hover:scale-105">
                        <CardHeader className="flex flex-col items-start p-4">
                            <h2 className="font-semibold text-lg">{article.title}</h2>
                        </CardHeader>
                        {article.urlToImage && (
                            <Image
                                src={article.urlToImage}
                                alt={article.title}
                                width="100%"
                                height="auto"
                                // objectFit="cover"
                                className="rounded-t-lg"
                            />
                        )}
                        <CardBody className="p-4">
                            <p className="text-gray-600">
                                {article.description ? article.description : "No description available."}
                            </p>
                        </CardBody>
                        <Divider />
                        <CardFooter className="p-4">
                            <Button
                                as="a"
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                color="primary"
                                variant="ghost"
                            >
                                Read More
                                <ExternalLinkIcon />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}

'use server'

import axios from 'axios';

export default async function getHealthNewsHeadlines() {
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
            params: {
                category: 'health',
                language: 'en',
                country: 'us',
                pageSize: 10,
                apiKey: process.env.NEWS_API_KEY,
            },
        });
        
        if (response.data.status === 'ok') {
            return response
                .data
                .articles
                .filter((data: any) => 
                    data.title != '[Removed]')
                
        } else {
            throw Error()
        }
    } catch (error) {
        console.error('Error fetching news headlines:', error);
        return {};
    }
}

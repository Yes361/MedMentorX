import NewsAPI from 'newsapi'

if (!process.env.NEWS_API_KEY)
    throw Error()

const API_KEY = process.env.NEWS_API_KEY
const newsAPI = new NewsAPI(API_KEY)

export default newsAPI
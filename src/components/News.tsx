"use client"

import { useEffect, useState } from 'react'

export default function News() {
    const [news, setNews] = useState([]);
    const [articleNum, setArticleNum] = useState(3);
    
    useEffect(() => {
      fetch('https://saurav.tech/NewsAPI/everything/cnn.json')
      .then((res) => res.json())
      .then((data) => {
        setNews(data.articles);
      });
    }, []);
    
    return (
      <div>
        {news.slice(0, articleNum).map((article) => (
          <h1>{article.title}</h1>
        ))}
      </div>
    );
}
"use client"

import { useEffect, useState } from 'react'

export default function News() {
    const [news, setNews] = useState([]);
    const [articleNum, setArticleNum] = useState(8);
    
    useEffect(() => {
      fetch('https://saurav.tech/NewsAPI/everything/cnn.json')
      .then((res) => res.json())
      .then((data) => {
        setNews(data.articles);
      });
    }, []);
    
    return (
      <div className='text-gray-700 space-y-3 bg-gray-100
      rounded-xl pt-2'>
        <h4 className='font-bold text-xl px-4'>Whats happening</h4>
        {news.slice(0, articleNum).map((article) => (
          <div key={article.url}>
            <a href={article.url} target='_blank'>
              <div className='flex items-center justify-between px-4 py-2
              space-x-1 hover:bg-gray-200 transition duration-200'>
                <div className='space-y-0.5'>
                  <h6 className='text-sm font=-bold'>{article.title}</h6>
                  <p className='text-xs font-medium text-gray-500'>
                    {article.source.name}
                  </p>
                </div>
                <img 
                  src={article.urlToImage}
                  alt={article.title}
                  width={70} 
                  className='rounded-xl'
                >
                </img>
              </div>
            </a>
          </div>
        ))}
        <button
          onClick={() => setArticleNum(articleNum + 3)}
          className='w-full py-2 bg-gray-200 hover:bg-gra-300 transition
          duration-200'
          >
            Load more
          </button>
      </div>
    );
}
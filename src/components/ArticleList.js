import React from 'react'

const articleComponents = articles.map(article => {
return <p key={article.id}>{article.title}</p>
    })

function ArticleList ({articles}) {
    return (
        <>
        {articleComponents}
        </>
    )
}

export default ArticleList
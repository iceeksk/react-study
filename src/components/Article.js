import React from 'react';

function Article(props) {
    console.dir(props);

    const {article} = props;

    console.dir(article);
    const body = <section>{article.text}</section>;
    return (
        <div>
            <h2>title</h2>
            {body}
            <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
        </div>
    )
};

export default Article;
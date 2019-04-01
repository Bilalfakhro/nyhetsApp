import React from 'react';


function Nyhetsartikel(props) {
    return (
        <section>
            <article>
                <img src={props.minArtikel.urlToImage} />
                <h2>{props.minArtikel.title}</h2>
                <p>{props.minArtikel.content}</p>
            </article>
        </section>);
}

export default Nyhetsartikel;
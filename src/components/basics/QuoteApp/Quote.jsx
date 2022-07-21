import React, { useEffect, useState } from "react";
import axios from "axios";

const Quote = () => {

    const [text, setText]=useState("");
    const [author, setAuthor]=useState("");

    const getQuoteData = async () => {
        try {
            const res = await fetch("https://type.fit/api/quotes");
            const data = await res.json();

            let random=Math.floor(Math.random()*100);
            setText(data[random].text);
            setAuthor(data[random].author)

            console.log(data[0].text);

        } catch (error) {
            console.log(error);
        }
    }

    const Random=()=>
    {
        getQuoteData();

    }

    useEffect(() => {
        getQuoteData();
    }, []);

    return (
        <>

            <div className="container-fluid py-sm-5 myCard flex-column">
                <div className="row">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-12">
                        <div className="card">
                            <div className="card-body d-flex align-items-center justify-content-center">
                                <div className="bg-white">
                                    <p className="card-text text-center" id="quotesText">{text=="" ? <span> Loading </span> : text}</p>
                                    <p className="text-center author mt-3" id="author">- {author=="" ? <span> Loading </span> : author}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btnColor" id="quote" onClick={Random}>Quotes</button>
            </div>

        </>
    );
}

export default Quote;
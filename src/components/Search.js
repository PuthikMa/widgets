import React, { useState,useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("home");
  const [results,setResults] = useState([]);
  const [debouncedTerm,setDebouncedTerm] = useState(term);
  useEffect(() => {
    console.log("term");
    const timerId = setTimeout(() => {
        setDebouncedTerm(term);
    },1000);

    return () => {
        clearTimeout(timerId);
    };
  },[term]);

  useEffect(() => {

    const searchWiki = async () => {
        const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
            params:{
                action:'query',
                list: 'search',
                origin: '*',
                format:'json',
                srsearch: debouncedTerm
            }
        });

        setResults(data.query.search);
    } 

    searchWiki();

    console.log("debouncedTerm");

  },[debouncedTerm]);
 

    const renderResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
          
                </div>
            </div>
        )
    })
  return (
    <div>
        <div className="ui form">
          <div className="field">
            <label>Search</label>
            <input type="text" value={term} className="input" onChange={(e) => setTerm(e.target.value)} />
          </div>
        </div>
        <div className="ui celled list">
            {renderResults}
        </div>
    </div>
  );
};

export default Search;

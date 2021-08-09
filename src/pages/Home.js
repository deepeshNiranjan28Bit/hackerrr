import React, { useCallback, useState } from "react";
import ResultList from "../components/ResultList";
import { apiGet } from "../misc/config";
import {
  HeadlineWrapper,
  SearchButtonWrapper,
  SearchInput,
} from "./Home.styled";

const renderResults = (results) => {
  if (results && results.length === 0) {
    return <div>No results found on the basis of your search.</div>;
  }

  if (results && results.length > 0) {
    return (
      <div>
        <ResultList data={results} />
      </div>
    );
  }

  return null;
};

function Home() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);

  const onSearch = () => {
    apiGet(`/search?query=${input}`).then((result) => {
      const { hits } = result;
      setResults(hits);
    });
  };

  const onInputChange = useCallback(
    (ev) => {
      setInput(ev.target.value);
    },
    [setInput]
  );

  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  return (
    <div className="MainDiv">
      <HeadlineWrapper>
        <h1>
          H A C K <span>E R R R</span>
        </h1>
        <h4>Wanna know about an hacker! Come let me hack you.</h4>
      </HeadlineWrapper>
      <SearchInput
        type="text"
        placeholder="Search for something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>
      {renderResults(results)}
      <div className="bg-balls"></div>
    </div>
  );
}

export default Home;

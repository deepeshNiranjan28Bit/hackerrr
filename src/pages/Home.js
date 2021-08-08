import React, { useCallback, useState } from "react";
import { apiGet } from "../misc/config";
import { SearchButtonWrapper, SearchInput } from "./Home.styled";

const renderResults = (results) => {
  if (results && results.length === 0) {
    return <div>No results</div>;
  }

  if (results && results.length > 0) {
    return <div>Found Something</div>;
  }

  return null;
};

function Home() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);

  const onSearch = () => {
    apiGet(`/search?query=${input}`).then((result) => {
      setResults(result);
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
    <div style={{ textAlign: "center" }}>
      <div>
        <h1>HACKERRR</h1>
        <h4>Wanna know about hacker! Come let me hack you.</h4>
      </div>
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
    </div>
  );
}

export default Home;

import "./App.css";
import { search } from "./services/giphy";
import Form from "./Form";
import { useState } from "react";
import ThumbnailList from "./ThumbnailList";
import Modal from "./Modal";
import { saveHistory } from "./services/local";

function App() {
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const [thumbnails, setThumbnails] = useState([]);
  const [selectedThumbnailIdx, selectThumbnailIdx] = useState(null);

  async function executeSearch(query, page) {
    const result = await search(query, page);
    await saveHistory(query, page);
    setQuery(query);
    setPage(page);
    if (page > 0) {
      setThumbnails([...thumbnails, ...result.data]);
    } else {
      setThumbnails(result.data);
    }
  }

  function gotoNext() {
    if (selectedThumbnailIdx < thumbnails.length - 1)
      selectThumbnailIdx(selectedThumbnailIdx + 1);
  }

  function gotoPrev() {
    if (selectedThumbnailIdx > 0) selectThumbnailIdx(selectedThumbnailIdx - 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form onSubmit={executeSearch} />
        <ThumbnailList onSelect={selectThumbnailIdx} thumbnails={thumbnails} />
        {thumbnails.length > 0 && (
          <button onClick={() => executeSearch(query, page + 1)}>
            Load More!
          </button>
        )}
        {selectedThumbnailIdx !== null && (
          <Modal
            onClose={() => selectThumbnailIdx(null)}
            onNextClick={gotoNext}
            onPrevClick={gotoPrev}
            thumbnailUrl={thumbnails[selectedThumbnailIdx].images.original.url}
          />
        )}
      </header>
    </div>
  );
}

export default App;

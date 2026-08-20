import { useState } from "react";

import Welcome from "./components/Welcome";
import Birthday from "./components/Birthday";
import Gallery from "./components/Gallery";
import Letter from "./components/Letter";
import Cake from "./components/Cake";
import FinalSurprise from "./components/FinalSurprise";

function App() {
  const [page, setPage] = useState("welcome");

  return (
    <>
      {page === "welcome" && (
        <Welcome onStart={() => setPage("birthday")} />
      )}

      {page === "birthday" && (
        <Birthday onNext={() => setPage("gallery")} />
      )}

      {page === "gallery" && (
        <Gallery onNext={() => setPage("letter")} />
      )}

      {page === "letter" && (
        <Letter onNext={() => setPage("cake")} />
      )}

      {page === "cake" && (
        <Cake onNext={() => setPage("surprise")} />
      )}

      {page === "surprise" && (
        <FinalSurprise />
      )}
    </>
  );
}

export default App;

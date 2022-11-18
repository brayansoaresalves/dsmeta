import Header from "./componentes/Header"
import Salescard from "./componentes/salescard"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <Salescard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App

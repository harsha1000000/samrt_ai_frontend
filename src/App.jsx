import React, { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import KpiStrip from './components/KpiStrip.jsx'
import ModuleSelector from './components/ModuleSelector.jsx'
import QueryConsole from './components/QueryConsole.jsx'
import ResultsGrid from './components/ResultsGrid.jsx'
import { fetchModules, fetchKpis, fetchRecommendations } from './api/api.js'

export default function App() {
  const [modules, setModules] = useState([])
  const [selectedModule, setSelectedModule] = useState(null)
  const [scenario, setScenario] = useState('')
  const [kpis, setKpis] = useState([])
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)
  const [error, setError] = useState(null)
  const [bootError, setBootError] = useState(null)

  useEffect(() => {
    fetchModules()
      .then((mods) => {
        setModules(mods)
        if (mods.length > 0) setSelectedModule(mods[0])
      })
      .catch((e) => setBootError(e.message))

    fetchKpis().catch(() => {})
    fetchKpis().then(setKpis).catch(() => {})
  }, [])

  async function handleSearch() {
    if (!selectedModule) return
    setLoading(true)
    setError(null)
    setSearched(true)
    try {
      const data = await fetchRecommendations({ module: selectedModule, scenario, topK: 4 })
      setResults(data)
    } catch (e) {
      setError('Could not reach the SmartSAT AI backend. Is it running on :8080?')
    } finally {
      setLoading(false)
    }
  }

  function handleModuleSelect(mod) {
    setSelectedModule(mod)
    setSearched(false)
    setResults([])
  }

  return (
    <div className="app-shell">
      <Header />

      {bootError && (
        <div className="boot-error">
          Backend unreachable ({bootError}). Start the Spring Boot service on port 8080, then reload.
        </div>
      )}

      <KpiStrip kpis={kpis} />

      <main className="app-main">
        <section className="console-panel">
          <h2 className="section-title">1. Select a module</h2>
          <ModuleSelector modules={modules} selected={selectedModule} onSelect={handleModuleSelect} />

          <h2 className="section-title">2. Describe the scenario</h2>
          <QueryConsole
            scenario={scenario}
            onScenarioChange={setScenario}
            onSearch={handleSearch}
            loading={loading}
            selectedModule={selectedModule}
          />
        </section>

        <section className="results-panel">
          <h2 className="section-title">Recommended SAT users</h2>
          <ResultsGrid results={results} loading={loading} error={error} searched={searched} />
        </section>
      </main>

      <footer className="app-footer">
        SmartSAT AI POC · dummy data for demo purposes · retrieval by local TF-IDF cosine similarity
        (swap in Azure OpenAI / OpenAI embeddings via <code>EmbeddingService</code>)
      </footer>
    </div>
  )
}

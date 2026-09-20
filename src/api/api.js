const BASE_URL = '/api'

async function handle(res) {
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`Request failed (${res.status}): ${text || res.statusText}`)
  }
  return res.json()
}

export async function fetchModules() {
  const res = await fetch(`${BASE_URL}/modules`)
  return handle(res)
}

export async function fetchKpis() {
  const res = await fetch(`${BASE_URL}/kpis`)
  return handle(res)
}

export async function fetchUseCase() {
  const res = await fetch(`${BASE_URL}/use-case`)
  return handle(res)
}

export async function fetchRecommendations({ module, scenario, topK = 3 }) {
  const res = await fetch(`${BASE_URL}/recommend`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ module, scenario, topK }),
  })
  return handle(res)
}

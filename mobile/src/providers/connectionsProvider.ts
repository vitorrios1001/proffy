import React from 'react'
import constate from 'constate'
import api from '../services/api'

interface ConnectionsResponse {
  total: number
}

const useConnections = () => {
  const [totalConnections, setTotalConnections] = React.useState(0)

  const createNewConnection = async (user_id: number) => {
    const { ok } = await api.post(`/connections`, { user_id })

    if (ok) {
      console.log('New connection created')
    }
  }
  
  const getTotalConnections = async () => {
    const { data, ok } = await api.get<ConnectionsResponse>('/connections')

    if (!ok) {
      return
    }

    if (data?.total) {
      setTotalConnections(data?.total)
    }
  }

  return {
    state: {
      totalConnections,
    },
    effects: {
      getTotalConnections,
      createNewConnection,
    }
  }
}

const [ConnectionsProvider, useConnectionsState, useConnectionsEffects] = constate(
  useConnections,
  value => ({ ...value.state }),
  value => ({ ...value.effects }),
)

export { ConnectionsProvider, useConnectionsState, useConnectionsEffects }
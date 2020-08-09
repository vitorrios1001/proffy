import React from 'react'
import constate from 'constate'
import { toast } from 'react-toastify'

import { ConnectionsResponse } from '../models/connectionModel'
import api from '../service'

const useConnections = () => {
  const [totalConnections, setTotalConnections] = React.useState(0)

  const createNewConnection = async (user_id: number) => {
    const { ok } = await api.post(`/connections`, { user_id })

    if (ok) {
      toast('Parabéns! Você está iniciando uma nova conexão', { type: 'success' })
    }
  }
  
  const getTotalConnections = async () => {
    const { data, ok } = await api.get<ConnectionsResponse>('/connections')

    if (!ok) {
      toast('Erro ao tentar carregar o total de conexões', { type: 'error' })
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
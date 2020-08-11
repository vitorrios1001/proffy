import React, { Dispatch, SetStateAction } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>,
]

function useStatePersisted<T>(key: string, initialValue: T): Response<T> {
  const [isInitialized, setIsInitialized] = React.useState(false)
  const [state, setState] = React.useState(initialValue)

  React.useEffect(() => {
    AsyncStorage.getItem(key).then((storage) => {
      if (storage) {
        try { //Secure parse
          const parsed = JSON.parse(storage)
          
          setState(parsed)
        } catch (error) {
          console.log('error in parse data', error)
        }
      }
      setIsInitialized(true)
    })
  }, [])

  React.useEffect(() => {
    async function setValue() {
      if (isInitialized) {
        await AsyncStorage.setItem(key, JSON.stringify(state))
      }
    }

    setValue()
  }, [key, state]);

  return [state, setState]
}

export default useStatePersisted

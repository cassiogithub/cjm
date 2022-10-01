import createGlobalState from 'react-create-global-state'

const [useLoader, LoaderProvider] = createGlobalState(false)

export { LoaderProvider, useLoader }

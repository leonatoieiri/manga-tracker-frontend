import React from "react"
import { Provider } from "react-redux"
import setupStore from "./redux/setupStore"
import "./styles/main.scss"

const store = setupStore()
console.log(store.getState())

function App() {
  return (
    <Provider store={store}>
      <h1 className="text-primary">Manga Tracker 3000</h1>
    </Provider>
  )
}

export default App

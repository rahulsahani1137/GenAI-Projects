import Header from "./components/sections/header"
import InputField from "./components/sections/input-field"
import OutputToken from "./components/sections/output"

const App = () => {
  return (
    <main className="flex flex-col px-64 py-20 w-full h-auto min-h-screen">
      <Header />
      <div className="grid grid-cols-2 gap-4">
        <InputField />
        <OutputToken />
      </div>
    </main>
  )
}

export default App
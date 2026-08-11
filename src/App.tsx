import { HabitForm } from "./components/habits/HabitForm.tsx";
import { HabitList } from "./components/habits/HabitList.tsx";
import { Header } from "./components/headers/Header.tsx";
import { HabitProvider } from "./context/HabitProvider.tsx";


export default function App() {

  return (
    <>
      <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
        <HabitProvider>
          <Header />
          <HabitForm />
          <HabitList />
        </HabitProvider>
      </div>
    </>
  )
}
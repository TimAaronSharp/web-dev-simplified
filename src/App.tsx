import { useState } from "react";
import { HabitForm } from "./components/habits/HabitForm.tsx";
import { HabitList, type Habit } from "./components/habits/HabitList.tsx";
import { Header } from "./components/headers/Header.tsx";


export default function App() {
  const [habits, setHabits] = useState<Habit[]>([]);

  function addHabit(name: string) {
    setHabits(curr => [...curr, { id: crypto.randomUUID(), name }]);
  }

  function deleteHabit(id: string) {
    setHabits(curr => curr.filter(h => h.id !== id));
  }

  return (
    <>
      <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
        <Header />
        <HabitForm addHabit={addHabit} />
        <HabitList deleteHabit={deleteHabit} habits={habits} />
      </div>
    </>
  )
}
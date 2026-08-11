import { useState } from "react";
import { HabitForm } from "./components/habits/HabitForm.tsx";
import { HabitList, type Habit } from "./components/habits/HabitList.tsx";
import { Header } from "./components/headers/Header.tsx";
import { isSameDay } from "date-fns";
import { HabitProvider } from "./context/HabitProvider.tsx";


export default function App() {

  return (
    <>
      <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
        <HabitProvider>
          <Header />
          <HabitForm addHabit={addHabit} />
          <HabitList deleteHabit={deleteHabit} habits={habits} toggleHabit={toggleHabit} />
        </HabitProvider>
      </div>
    </>
  )
}
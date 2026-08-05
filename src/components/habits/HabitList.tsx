
type Habit = {
  id: number;
  name: string;
}

export function HabitList() {
  const habits: Habit[] = [
    { id: 1, name: "Hi" },
    { id: 2, name: "Bye" }
  ];

  if (habits.length === 0) {
    return <p className="text-center text-zinc-500 py-12">No habits yet. Add one to get started!</p>
  }
  return (
    <>
      <div className="flex flex-col gap-3">
        {habits.map(habit => (
          <h2 key={habit.id}>{habit.name}</h2>
        ))}
      </div>
    </>
  )
}
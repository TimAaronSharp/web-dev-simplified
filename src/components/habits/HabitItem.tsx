import type { Habit } from "./HabitList.tsx"

/*NOTE We pass down "habit" objects from HabitList to HabitItem as props.
Props are passed down to a component as a single object. So the structure is
props.habit. { habit } is destructuring the props object to target the habit
property inside it, which itself is an object containing an id: number and
name: string. Destructuring further ({ habit: { name } }) gives us access to
the habit.name property by only needing to type "name" within this component.
"{ habit: { name } }: { habit: Habit }" is telling TypeScript that the habit
property/object we are destructuring is of type "Habit", so that it will know
that it contains both id: number and name: string properties. */
export function HabitItem({ habit: { name } }: { habit: Habit }) {
  return (
    <>
      <h2>{name}</h2>
    </>
  )

}
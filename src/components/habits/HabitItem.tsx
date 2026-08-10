import { Button } from "../buttons/Button.tsx"
import type { Habit } from "./HabitList.tsx"
import { eachDayOfInterval, endOfWeek, format, isFuture, startOfWeek } from "date-fns"

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

  /*NOTE date-fns is a library that helps with working with dates inside JS.
  weekStartsOn: sets the day of the week to start on. 0 (default) = Sunday,
  1 = Monday, etc. */

  const visibleDates = eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), { weekStartsOn: 1 })
  });
  return (
    <>
      <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <span className="font-medium">{name}</span>
            <span className="text-sm text-amber-400">🔥 3</span>
          </div>
          <Button variant="ghost-destructive" className="text-sm">Delete</Button>
        </div>
        <div className="flex gap-1.5">
          {visibleDates.map(date => (
            <Button className="flex flex-1 flex-col items-center gap-0.5 rounded-lg text-xs" key={date.toISOString()} disabled={isFuture(date)}>
              <span className="font-medium">{format(date, "EEE")}</span>
              <span className="font-medium">{format(date, "d")}</span>
            </Button>
          ))}
        </div>
      </div>
    </>
  )

}
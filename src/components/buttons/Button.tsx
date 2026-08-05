import type { ReactNode } from "react";

/*NOTE children is a property within every custom component in React
you create. It is whatever you pass in between your component element.
So when writing "<Button>Prev</Button>" in Header.tsx, "Prev" is the
child/children property of this <Button> component. Children is a 
"ReactNode" type.*/
type ButtonProps = {
  children: ReactNode;
}


export function Button({ children }: ButtonProps) {
  return (
    <>
      <button className="bg-violet-600 hover:bg-violet-500 transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed">{children}</button>
    </>
  )
}
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
      <button>{children}</button>
    </>
  )
}
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

/*NOTE ComponentProps is a TypeScript/React generic type utility that can accept 
either a custom component or an html element as a string. It will extract all the 
props of a custom component passed through as a generic (written as 
ComponentProps<typeof MyComponent>) (or all attributes that an html element can have). 
Combined with destructuring {...props} (which gathers the arguments (attributes/props)
into a bundle) in the function signature, React will map all attributes to properties 
for that element. Spreading {...props} inside the JSX passes that bundle along. 
So if you are passing a disabled, type, id, and onClick props from another component, 
writing <button {...props}> will map a disabled property to that button instead of 
needing to manually define each of those out inside this component. */

/* NOTE: ComponentProps is a TypeScript/React generic type utility that can accept 
either an HTML element string (e.g., "button") or a custom component using 'typeof'
(<typeof MyComponent>). It extracts all the valid props the generic can receive. 

Combined with JavaScript destructuring ({...props}) in the function signature, 
this bundles all incoming props into a single object. Spreading them (<button {...props}>) 
allows React to automatically map them to the underlying element's DOM properties. 

So if you pass disabled, type, id, and onClick from the outside, they are automatically 
applied to the native button without needing to manually define each one inside this component. */

type Variant = "primary" | "secondary" | "ghost-destructive"

type ButtonProps = {
  variant?: Variant;
} & ComponentProps<"button">


export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <>
      <button {...props} className={twMerge("transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed", getVariantStyles(variant), className)} />
    </>
  )
}

function getVariantStyles(variant: Variant) {
  switch (variant) {
    case "primary":
      return "bg-violet-600 hover:bg-violet-500";
    case "secondary":
      return "bg-zinc-700 hover:bg-zinc-600 text-zinc-400";
    case "ghost-destructive":
      return "hover:bg-red-800 text-red-800 hover:text-red-200"
    default:
      throw new Error(`Invalid variant: ${variant satisfies never}`);
  }
}


// NOTE Code that was refactored and no longer needed, but keeping for notes.

/*NOTE children is a property within every custom component in React
you create. It is whatever you pass in between your component element.
So when writing "<Button>Prev</Button>" in Header.tsx, "Prev" is the
child/children property of this <Button> component. Children is a 
"ReactNode" type.
type ButtonProps = {
  children: ReactNode,
  disabled?: boolean
}
  */
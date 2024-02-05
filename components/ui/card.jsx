import { splitProps } from "solid-js"

import { cn } from "../../lib/utils"

const Card = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    (<div
      class={cn("bg-card text-card-foreground rounded-lg border shadow-sm", props.class)}
      {...rest} />)
  );
}

const CardHeader = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <div class={cn("flex flex-col space-y-1.5 p-6", props.class)} {...rest} />;
}

const CardTitle = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    (<h3
      class={cn("text-lg font-semibold leading-none tracking-tight", props.class)}
      {...rest} />)
  );
}

const CardDescription = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <p class={cn("text-muted-foreground text-sm", props.class)} {...rest} />;
}

const CardContent = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <div class={cn("p-6 pt-0", props.class)} {...rest} />;
}

const CardFooter = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <div class={cn("flex items-center p-6 pt-0", props.class)} {...rest} />;
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

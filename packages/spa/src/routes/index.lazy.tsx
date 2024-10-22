import { createLazyFileRoute, } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/",)({
  component: () => <div className="font-extrabold underline">Home page (effect by tailwind) /!</div>,
},);

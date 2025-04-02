import FlipingCard from "~/components/FlipingCard";
import { Card, CardContent } from "~/components/ui/card";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "100 Board" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export const theDate = new Date(2025, 3, 29);

export default function Home() {
  return (
    <div className="flex justify-center bg-primary-foreground">
      <Card className="gap-2 flex flex-col bg-inherit/90 bg-opacity-25 shadow-md shadow-slate-300">
        <h1 className="text-4xl text-center"> 100 Board</h1>
        <CardContent className="grid grid-rows-10 grid-cols-10 gap-2 ">
          {Array(100)
            .fill(null)
            .map((v, index) => (
              <FlipingCard index={index} theDate={theDate} key={v} />
            ))
            .reverse()}
        </CardContent>
      </Card>
    </div>
  );
}

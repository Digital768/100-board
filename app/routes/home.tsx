import { differenceInDays } from "date-fns";
import FlipingCard from "~/components/FlipingCard";
import { Card, CardContent } from "~/components/ui/card";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "100 Board" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function checkIfPassed(index: number) {
  return differenceInDays(theDate, new Date()) <= index;
}

export const theDate = new Date(2025, 3, 30);

export default function Home() {
  const daysToEnd = differenceInDays(new Date(2025, 3, 30), new Date());
  function checkIfPassed(index: number) {
    return daysToEnd < index;
  }

  return (
    <div className="flex justify-center">
      <Card className="gap-2 flex flex-col">
        <h1 className="text-4xl text-center"> 100 Board</h1>
        <h3 className="text-2xl text-center">{daysToEnd} days until the end</h3>
        <CardContent className="grid grid-rows-10 grid-cols-10 gap-2">
          {Array(100)
            .fill(null)
            .map((v, index) => <FlipingCard index={index} key={v} />)
            .reverse()}
        </CardContent>
      </Card>
    </div>
  );
}

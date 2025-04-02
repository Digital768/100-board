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
  return (
    <div className="flex justify-center bg-[url(/board.jpg)]">
      <Card className="bg-inherit backdrop-blur-sm bg-opacity-5">
        <h1 className="text-5xl text-center p-2 text-white"> 100 Board</h1>
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

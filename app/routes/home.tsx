import { Card, CardContent, CardTitle } from "~/components/ui/card";
import type { Route } from "./+types/home";
import { differenceInDays } from "date-fns";
import { cn } from "~/lib/utils";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  function checkIfPassed(index: number) {
    return differenceInDays(new Date(2025, 3, 30), new Date()) < index;
  }

  return (
    <div className="flex justify-center">
      <Card>
        <h1 className="text-4xl text-center m-2"> 100 Board</h1>
        <CardContent className="grid grid-rows-10 grid-cols-10 gap-2">
          {Array(100)
            .fill(null)
            .map((v, index) => (
              <div
                className={cn(
                  "aspect-square h-20 w-20 bg-red-500 text-white text-center grid place-items-center p-2",
                  {
                    "bg-green-500 ": checkIfPassed(index),
                  }
                )}
              >
                <div>
                  <p className="text-xl">{index + 1}</p>
                  <p className="capitalize text-sm">days to freedom</p>
                </div>
              </div>
            ))
            .reverse()}
        </CardContent>
      </Card>
    </div>
  );
}

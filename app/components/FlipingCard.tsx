import { differenceInDays, subDays } from "date-fns";
import { cn } from "~/lib/utils";

function FlipingCard({ index, theDate }: { index: number; theDate: Date }) {
  
  function checkIfPassed(index: number) {
    return differenceInDays(theDate, new Date()) <= index;
  }

  const isPassed = checkIfPassed(index);
  return (
    <div className="mx-auto flex justify-center object-center">
      <div className="group h-20 w-20 [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front Face */}
          <div
            className={cn(
              "absolute inset-0 rounded-xl [backface-visibility:hidden] aspect-square h-20 w-20 bg-red-500 text-white text-center grid place-items-center p-2",
              {
                "bg-green-500 ": isPassed,
              }
            )}
          >
            <div>
              <p className="text-xl">{index + 1}</p>
              <p className="capitalize text-sm">days to freedom</p>
            </div>
          </div>
          {/* Back Face */}
          <div
            className={cn(
              "absolute inset-0 h-full w-full bg-red-500 text-center grid place-items-center p-2 rounded-xl text-white [transform:rotateY(180deg)] [backface-visibility:hidden]",
              {
                "bg-green-500": isPassed,
              }
            )}
          >
            <p className="flex flex-row text-s text-center">
              {new Date(subDays(theDate, index + 1)).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipingCard;

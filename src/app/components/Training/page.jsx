import { Box, ChakraProvider } from "@chakra-ui/react";
import Link from "next/link";
import { SelectMuscleParts } from "./SelectMuscleParts/SelectMuscleParts";
import { NumberOfTimes } from "./NumberOfTimes/NumberOfTimes";
import { SimpleDatePicker } from "./Calendar/Calendar";

export default function Page() {
  return (
    <>
      <div>トレーニングページです</div>

      <ChakraProvider>
        <Box mx="15%">
          <SelectMuscleParts />
          <SimpleDatePicker />
          <NumberOfTimes />
        </Box>
      </ChakraProvider>

      <Link href="/" className="font-bold text-blue-700">
        TOPへ戻る
      </Link>
    </>
  );
}

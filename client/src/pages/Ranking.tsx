import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RiCoinsFill } from "react-icons/ri";
const Ranking = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-center font-bold text-3xl py-10">Ranking page</div>
      <Table>
        <TableCaption>A list of users ranked by points</TableCaption>
        <TableHeader className="bg-slate-400">
          <TableRow className="bottom-1">
            <TableHead className="">Name</TableHead>
            <TableHead className="">Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">zouyed hafed</TableCell>
            <TableCell>
              <div className="flex items-center gap-3">
                49234 <RiCoinsFill size={16} />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Ranking;

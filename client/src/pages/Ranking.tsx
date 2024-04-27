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
    <div>
      <div>Ranking page</div>
      /* Table component */
      <Table>
        <TableCaption>A list of users ranked by points</TableCaption>
        <TableHeader className="bg-slate-400">
          <TableRow className="bottom-1">
            <TableHead className="">Name</TableHead>
            <TableHead className="">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">zouyed hafed</TableCell>
            <TableCell>
              49234 <RiCoinsFill />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Ranking;

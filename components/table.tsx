import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const products = [
  {
    id: 101,
    iName: "Ranjan Sharma",
    batch: "MLTR",
    bCode: "7DTA-7A-NTLA",
    Room: 404,
    building: "JEE | Plot No-10 ",
    jee: "✅",
    neet: "❌",
  },
];

import React from "react";

export default function StickyHeaderTableDemo({
  ref,
}: {
  ref: React.Ref<HTMLDivElement>;
}) {
  return (
    <div
      ref={ref}
      className="py-24 grid w-full [&>div]:max-h-[500px] [&>div]:border [&>div]:rounded container mx-auto  text-white font-medium"
    >
      <Table>
        <TableHeader>
          <TableRow className="[&>*]:whitespace-nowrap sticky top-0 bg-background after:content-[''] after:inset-x-0 after:h-px after:bg-border after:absolute after:bottom-0">
            <TableHead className="pl-4">ID</TableHead>
            <TableHead>Invigilator Name</TableHead>
            <TableHead>Batch</TableHead>
            <TableHead>Batch Code</TableHead>
            <TableHead>Room No</TableHead>
            <TableHead>Building</TableHead>
            <TableHead>JEE</TableHead>
            <TableHead>NEET</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="overflow-hidden">
          {products.map((product) => (
            <TableRow
              key={product.id}
              className="odd:bg-muted/50 [&>*]:whitespace-nowrap"
            >
              <TableCell className="pl-4">{product.id}</TableCell>
              <TableCell className="font-medium">{product.iName}</TableCell>
              <TableCell>{product.batch}</TableCell>
              <TableCell>{product.bCode}</TableCell>
              <TableCell>{product.Room}</TableCell>
              <TableCell>{product.building}</TableCell>
              <TableCell>{product.jee}</TableCell>
              <TableCell>{product.neet}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

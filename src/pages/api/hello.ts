// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { log } from "console";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  age: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.method);
  console.log("query", req.query);
  console.log("body", req.body);
  res.status(200).json({ name: "Pelle svanslös", age: 12 });
}

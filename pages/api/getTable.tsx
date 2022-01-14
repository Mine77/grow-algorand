// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Airtable from "airtable";

const Table = {
  Learning: {
    view: {
      Grid: "Grid view",
      Gallery: "Gallery",
    },
    keys: ["Title", "Description", "Link", "Image"],
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { table } = req.query;

  const tableName: string = String(table);

  if (!(tableName in Table)) {
    res.status(400).json({ error: "base not found" });
    return;
  }

  const apiKey = process.env.AIRTABLE_API;
  const baseId = process.env.AIRTABLE_BASE;
  const base = new Airtable({ apiKey: apiKey }).base(String(baseId));
  const tableKey = tableName as keyof typeof Table;

  try {
    const records = await base(tableName)
      .select({
        view: Table[tableKey].view.Grid,
      })
      .firstPage();
    var dataSet: {}[] = [];

    records.forEach((record) => {
      var data = {};
      Table[tableKey].keys.map((key) => {
        const value = record.get(key);
        data = { ...data, [key]: value };
      });
      dataSet.push(data);
    });

    res.status(200).json({ res: dataSet });
  } catch (error) {
    res.status(400).json(error);
  }
}

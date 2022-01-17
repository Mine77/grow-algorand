// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Airtable from "airtable";

const TableName = ["Learning", "VC"];

const TableKeys = ["Title", "Description", "Link", "Image", "Reviewed"];
const TableView = {
  Grid: "Grid view",
  Gallery: "Gallery",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const table = String(req.query.name);

  if (!TableName.includes(table)) {
    res.status(400).json({ error: "Category not found" });
    return;
  }

  const apiKey = process.env.AIRTABLE_API;
  const baseId = process.env.AIRTABLE_BASE;
  const base = new Airtable({ apiKey: apiKey }).base(String(baseId));

  try {
    const records = await base(table)
      .select({
        view: TableView.Grid,
      })
      .firstPage();
    var dataSet: {}[] = [];

    records.forEach((record) => {
      var data = {};
      var reviewed = false;
      TableKeys.map((key) => {
        const value = record.get(key);
        data = { ...data, [key]: value };
        if (key === "Reviewed" && String(value) === "true") {
          reviewed = true;
        }
      });
      if (reviewed) dataSet.push(data);
    });

    res.status(200).json({ res: dataSet });
  } catch (error) {
    res.status(400).json(error);
  }
}

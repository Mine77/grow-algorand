// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Airtable from "airtable";

const Category = ["Education", "DevTools", "VentureCapital"];

const TableKeys = ["Title", "Category", "Description", "Link", "Image"];
const TableView = {
  Grid: "Grid view",
  Gallery: "Gallery",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const category = String(req.query.category);

  if (!Category.includes(category)) {
    res.status(400).json({ error: "Category not found" });
    return;
  }

  const apiKey = process.env.AIRTABLE_API;
  const baseId = process.env.AIRTABLE_BASE;
  const base = new Airtable({ apiKey: apiKey }).base(String(baseId));

  try {
    const records = await base("Data")
      .select({
        view: TableView.Grid,
        filterByFormula: `{Category}="${category}"`,
      })
      .firstPage();
    var dataSet: {}[] = [];

    records.forEach((record) => {
      var data = {};
      TableKeys.map((key) => {
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

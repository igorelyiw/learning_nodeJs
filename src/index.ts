import express, { Response, Request } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("test!!!");
});

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`);
});

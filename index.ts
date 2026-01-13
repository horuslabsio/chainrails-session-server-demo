import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Chainrails, crapi } from "@chainrails/sdk";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(cors({ origin: process.env.CHAINRAILS_DOMAIN_WHITELIST }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});

app.get("/", (req, res) => res.send("Chainrails Session Server"));

app.post("/session", async (req, res) => {
  const { amount, destinationChain, recipient, token } = req.body;
  const api_key = process.env.CHAINRAILS_API_KEY;

  Chainrails.config({
    api_key,
  });

  const session = await crapi.auth.getSessionToken({
    amount: process.env.CHAINRAILS_FIXED_AMOUNT || amount,
    recipient: process.env.CHAINRAILS_FIXED_RECIPIENT || recipient,
    destinationChain: process.env.CHAINRAILS_FIXED_DESTINATION_CHAIN || destinationChain,
    token: process.env.CHAINRAILS_FIXED_TOKEN || token,
  });

  res.send(session);
});

export default app;

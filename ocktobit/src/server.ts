import { Octokit } from "@octokit/rest"
import express from "express"
import dotenv, { configDotenv } from "dotenv"

dotenv.config()

const app = express()
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

export async function GithubResources() {
   try {
    const response = await octokit.request("GET /users/rakesh0x");
    console.log("GitHub user data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch GitHub data:", error);
    return { error: "Failed to fetch GitHub data" };
  }
}

app.get("/", async (req, res) => {
  const response = await octokit.request("GET /users/rakesh0x");
  res.json(response.data); 
});


app.listen(8080, () => {
    console.log('Server running on port 8080')
})

GithubResources();
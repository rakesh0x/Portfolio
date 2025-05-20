var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Octokit } from "@octokit/rest";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
});
export function GithubResources() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield octokit.request("GET /users/rakesh0x");
            console.log("GitHub user data:", response.data);
            return response.data;
        }
        catch (error) {
            console.error("Failed to fetch GitHub data:", error);
            return { error: "Failed to fetch GitHub data" };
        }
    });
}
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield octokit.request("GET /users/rakesh0x");
    res.json(response.data); // <-- This responds to browser requests
}));
app.listen(8080, () => {
    console.log('Server running on port 8080');
});
GithubResources();

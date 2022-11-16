import Express from "express";
const app = express();
import authRouters from "./routes/auth.js";
import userRouters from "./routes/users.js";
import postRouters from "./routes/posts.js";
import commentRouters from "./routes/comments.js";
import likeRouters from "./routes/likes.js";

app.use("/api/auth", authRouters);
app.use("/api/users", userRouters);
app.use("/api/posts", postRouters);
app.use("/api/comments", commentRouters);
app.use("/api/likes", likeRouters);

app.listen(8800, () => {
  console.log("API working");
});

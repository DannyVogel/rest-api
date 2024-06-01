import { createStorage } from "unstorage";
import memoryDriver from "unstorage/drivers/memory";
import posts from "~/server/data/posts.json";

export const storage = createStorage({
  driver: memoryDriver(),
});

storage.setItem("posts.json", posts);

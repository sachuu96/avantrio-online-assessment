import { Router } from "express";
import { createStory, getStoryList } from "../services/storyService";
import { StorySchema } from "../schemaValidation";

const storyRouter = Router();

storyRouter.post("/", async (req, res, next) => {
  try {
    const {error} = StorySchema.validate(req.body)
    if(error){
        throw {message: error, statusCode: 400}
    }
    const { nickName, emojiSequence } = req.body;
    // TODO: pass this as an object
    const createdStory = await createStory(emojiSequence,nickName);
    return res.send(createdStory).status(200);
  } catch (error) {
    next(error);
  }
});

storyRouter.get("/", async (req, res, next) => {
  try {
   
    const storyList = await getStoryList();
    res.status(200).json({ storyList });
  } catch (error) {
    next(error);
  }
});

export default storyRouter;

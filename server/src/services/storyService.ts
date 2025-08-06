import { StoryRepository } from "../repository/storyRepository";

const storyRepo = new StoryRepository();

export const createStory = async (
  emojiSequence: string[],
  authorNickname: string
) => {
  const createdTask = await storyRepo.create(emojiSequence, authorNickname);
  return createdTask;
};

export const getStoryList = async () => {
  const storyList = await storyRepo.findAll();
  return storyList;
};

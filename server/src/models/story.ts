import mongoose, { Document, Schema } from "mongoose";

export interface IStory extends Document {
  emojiSequence: string[];
  //   translation: string;
  authorNickname: string;
  likes: number;
}

const StorySchema: Schema = new Schema(
  {
    emojiSequence: [String],
    // translation: {type: String},
    authorNickname: String,
    likes: Number,
  },
  { timestamps: true }
);

export const StoryModel = mongoose.model<IStory>("Story", StorySchema);

import Joi  from'joi';


export const StorySchema = Joi.object({
    nickName: Joi.string(),
    // TODO: come up with proper validation for emoji
    emojiSequence: Joi.any()
})
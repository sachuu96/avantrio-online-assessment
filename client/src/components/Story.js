import React, { useState, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";
import { createStory } from "../service";
// import { useGetStory } from "../hook";
import { getStory } from "../service";

export const Story = () => {
  const [name, setName] = useState();
  const [emojiList, setEmojiList] = useState([]);
  const [stories, setStories] = useState([]);
  //   const { error, isLoading, response } = useGetStory();

  useEffect(() => {
    // TODO: put this to a custom hook
    const loadStories = async () => {
      const data = await getStory();
      setStories(data);
      console.log(stories);
    };
    loadStories();
  }, []);

  const handleEmojiPicker = (event) => {
    setEmojiList([...emojiList, event.emoji]);
  };

  const handleSubmit = async () => {
    await createStory({ nickName: name, emojiSequence: emojiList });
  };

  return (
    <>
      <div>
        {/* {isLoading && !error ? (
          <p>Loading...</p>
        ) : ( */}
        <>
          <p>Enter author nick name</p>
          <input
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <br />
          <p>Enter your squence of emojis: </p>
          {emojiList &&
            emojiList.length > 0 &&
            emojiList.map((emoji) => {
              return <div>{emoji}</div>;
            })}
          <EmojiPicker
            onEmojiClick={(event) => {
              handleEmojiPicker(event);
            }}
          />
          <button onClick={handleSubmit}>Submit</button>
        </>
        {/* )} */}
      </div>
    </>
  );
};

import React, { useState } from 'react';
import { postComment } from './Api';

const AddComment = ({ setComments }) => {
  const [openPost, setOpenPost] = useState(false);
  const [body, setBody] = useState('');

  const username = 'anonymous';

  const handleSubmit = (event) => {
    event.preventDefault();
    console.dir(event);
    console.log(body);
  };

  return (
    <div>
      <button type="button" onClick={() => setOpenPost(true)}>
        Post Comment
      </button>
      {openPost ? (
        <form onSubmit={(event) => handleSubmit(event)}>
          <label htmlFor="postBody">
            <textarea
              name="postBody"
              id="postBody"
              onChange={(event) => setBody(event.target.value)}
              value={body}
              rows="5"
              cols="100"
              required
            ></textarea>
            <button type="submit">Post</button>
          </label>
        </form>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AddComment;

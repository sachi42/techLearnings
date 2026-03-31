//Code for Feedback system created - 
import React, { useState } from "react";

const FeedbackSystem = () => {

  const [feedback, setFeedback] = useState(
    [
      {
        name: 'Readability',
        upVotes: 0,
        downVotes: 0
      },
      {
        name: 'Performance',
        upVotes: 0,
        downVotes: 0
      },
      {
        name: 'Security',
        upVotes: 0,
        downVotes: 0
      },
      {
        name: 'Documentation',
        upVotes: 0,
        downVotes: 0
      },
      {
        name: 'Testing',
        upVotes: 0,
        downVotes: 0
      }
    ]
  );

  function handleUpVotes(name) {
    let newFeedback = [...feedback];
    const index = feedback.findIndex(i => i.name === name);
    newFeedback[index].upVotes += 1;
    setFeedback(newFeedback);
  }

  function handleDownVotes(name) {
    let newFeedback = [...feedback];
    const index = feedback.findIndex(i => i.name === name);
    newFeedback[index].downVotes += 1;
    setFeedback(newFeedback);
  }

 const finalOutput = feedback.map((item, index) => {
  return (
        <div key={item.name} className="pa-10 w-300 card">
          <h2>{item.name}</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button className="py-10 px-15" data-testid={"upvote-btn-"+index}
            onClick={() => handleUpVotes(item.name)}>
              👍 Upvote
            </button>
            <button className="py-10 px-15 danger" data-testid={"downvote-btn-"+index} onClick={() => handleDownVotes(item.name)}>
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid={"upvote-count-"+index}>
            Upvotes: <strong>{item.upVotes}</strong>
          </p>
          <p className="my-10 mx-0" data-testid={"downvote-count-"+index}>
            Downvotes: <strong>{item.downVotes}</strong>
          </p>
        </div>
  );
});

return (
  <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        {finalOutput}
      </div>
    </div>
)
};

export default FeedbackSystem;

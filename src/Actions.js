import React from "react";
import Rewind from "./components/actions/Rewind";
import Dislikes from "./components/actions/Dislikes";
import Likes from "./components/actions/Likes";
import Superlikes from "./components/actions/SuperLikes";

const Actions = ({ person, modifySuperficialChoices }) => {
  return (
    <div id="actions">
      <Rewind userId={person.id} />
      <Dislikes
        userId={person.id}
        modifySuperficialChoices={modifySuperficialChoices}
      />
      <Likes
        userId={person.id}
        modifySuperficialChoices={modifySuperficialChoices}
      />
      <Superlikes
        userId={person.id}
        modifySuperficialChoices={modifySuperficialChoices}
      />
    </div>
  );
};

export default Actions;

import { IconChevronsUp } from "@tabler/icons";
import React, { useState } from "react";

export default function UpVote() {
  const [karma, setKarma] = useState(0);

  function increaseKarma() {
    setKarma((prev) => prev + 1);
  }
  return (
    <div className="voting">
      <IconChevronsUp onClick={increaseKarma} />
      {karma > 0 && <p>This post has {karma} karma</p>}
    </div>
  );
}

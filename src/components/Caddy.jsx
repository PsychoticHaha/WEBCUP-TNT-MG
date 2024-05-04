import { useState } from "react";

export default function Caddy() {
  // Caddy content {type number}
  const [caddyContent] = useState(localStorage.getItem('caddyContent'));

  return (
    <div className="caddy">
      <div className="badge">
        {/* {caddyContent && caddyContent} */} 1
      </div>
      <div className="icon"></div>
    </div>
  );
}

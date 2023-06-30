import Script from "next/script";
import { useEffect } from "react";

const Comment = ({ id }) => {
  useEffect(() => {
    window.DISQUS &&
      DISQUS.reset({
        reload: true,
        config: function () {
          this.page.identifier = id;
          this.page.url = window.location;
        },
      });
  }, []);
  return <div id="disqus_thread"></div>;
};

export default Comment;

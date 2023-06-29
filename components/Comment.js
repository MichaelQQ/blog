import Script from "next/script";

const Comment = ({ id }) => {
  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: `DISQUS.reset({ reload: true, config: function () { this.page.identifier = ${id}; this.page.url = window.location; } });`,
        }}
      />
      <div id="disqus_thread"></div>
    </>
  );
};

export default Comment;

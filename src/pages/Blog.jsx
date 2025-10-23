const blogs = [
  {
    title: "The Ultimate Guide to Beating Procrastination",
    url: "https://niviyat.substack.com/p/the-ultimate-guide-to-beating-procrastination?r=55vvu8",
  },
  {
    title: "In search of life...",
    url: "https://niviyat.substack.com/p/in-search-of-life?r=55vvu8",
  },
  {
    title: "How writing made my life better",
    url: "https://niviyat.substack.com/p/how-writing-made-my-life-better?r=55vvu8",
  },
  {
    title: "Women ☕",
    url: "https://niviyat.substack.com/p/women?r=55vvu8",
  },
];

export default function Blog() {
  return (
    <div className="blog-wrapper">
      <h1 className="blog-title">Blogs</h1>
      <div className="blog-links">
        {blogs.map((b, i) => (
          <a
            key={i}
            href={b.url}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card"
          >
            <h3>{b.title}</h3>
            
            <span className="read-more">Read →</span>
          </a>
        ))}
      </div>
    </div>
  );
}

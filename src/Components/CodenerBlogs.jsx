export default function CodenerBlogs() {
  const blogs = [
    {
      title: "How to Identify and Target High-Value Customers Using Behavior Data",
      description:
        "Not all customers contribute equally to your revenue. Some make a big impact—...",
      tags: ["Data", "Informative"],
      image: "/blog1.png", // Replace with your actual image path or URL
      link: "https://codener.com/how-to-identify-and-target-high-value-customers-using-behavior-data/",
    },
    {
      title: "A Complete Guide to 13 Different Types of Graphic Design",
      description:
        "Graphic design is more than just aesthetics; it’s a powerful form of communication that...",
      tags: ["Graphic Design Types", "Informative"],
      image: "/blog2.png", // Replace with your actual image path or URL
      link: "https://codener.com/a-complete-guide-to-13-different-types-of-graphic-design/",
    },
    {
      title:
        "WordPress Hooks Explained: How to Use Actions & Filters Like a Pro",
      description:
        "If you’ve ever wanted to modify your WordPress site without touching the core...",
      tags: ["WordPress Hooks", "Informative"],
      image: "/blog3.png", // Replace with your actual image path or URL
      link: "https://codener.com/wordpress-hooks-explained-how-to-use-actions-filters-like-a-pro/",
    },
  ];

  return (
    <section className="px-6 py-12 bg-gray-50 flex justify-center">
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
          Codener Blogs
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {blogs.map(function (blog, index) {
            return (
              <a
                key={index}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-xs bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden block"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <div className="mb-2 space-x-2">
                    {blog.tags.map(function (tag, idx) {
                      return (
                        <span
                          key={idx}
                          className="inline-block text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700"
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                  <h3 className="text-md font-semibold text-gray-900 mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {blog.description}
                  </p>
                  <span className="text-blue-600 font-medium underline inline-block">
                    Read More →
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

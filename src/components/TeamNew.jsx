import { useState, useEffect, useCallback } from "react";

const BlogCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const blogPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
      category: "Technology",
      title: "The Future of AI in Web Development",
      description: "Discover how artificial intelligence is revolutionizing the way we build and maintain websites."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1518655048521-f130df041f66",
      category: "Design",
      title: "Mastering Modern UI Design Principles",
      description: "Learn the essential principles of modern UI design and how to apply them effectively."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      category: "Business",
      title: "Digital Marketing Strategies for 2024",
      description: "Explore the latest digital marketing trends and strategies for business growth."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      category: "Development",
      title: "Building Scalable Web Applications",
      description: "A comprehensive guide to developing scalable and maintainable web applications."
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      category: "Analytics",
      title: "Data-Driven Decision Making",
      description: "How to leverage data analytics to make informed business decisions."
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      category: "Security",
      title: "Cybersecurity Best Practices",
      description: "Essential security measures to protect your digital assets and data."
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const itemsPerView = window.innerWidth < 640 ? 1 : 3;
      const maxIndex = blogPosts.length - itemsPerView;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  }, [blogPosts.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const itemsPerView = window.innerWidth < 640 ? 1 : 3;
      const maxIndex = blogPosts.length - itemsPerView;
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (window.innerWidth < 640 ? 100 : 100 / 3)}%)`
            }}
          >
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="w-full sm:w-1/3 flex-shrink-0 px-4"
                role="article"
                aria-label={post.title}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transition-transform duration-300 hover:scale-105">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                      {post.category}
                    </span>
                    <h2 className="mt-4 text-xl font-bold text-gray-900 leading-tight">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-gray-600">{post.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Previous slide"
        >
          {/* Ikona za prethodni slajd */}
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Next slide"
        >
          {/* Ikona za sledeći slajd */}
        </button>

        <button
          onClick={toggleAutoplay}
          className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
        >
          {/* Ikona za play/pause */}
        </button>
      </div>
    </div>
  );
};

export default BlogCarousel;




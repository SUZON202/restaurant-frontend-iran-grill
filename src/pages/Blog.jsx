import React from 'react';

const More = () => {
  // ডামি ব্লগ পোস্টের ডেটা
  const blogPosts = [
    {
      id: 1,
      author: "Admin",
      date: "May 18, 2026",
      readTime: "2 min read",
      title: "THE SECRET BEHIND OUR SIGNATURE KEBAB",
      excerpt: "Join us at Iran Grill as we dive into the traditional methods of preparing our famous charcoal-grilled kebabs. From selecting the perfect spices to the exact grilling time, discover what makes our flavors so authentic.",
      views: 120,
      comments: 0,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop"
    },
    {
      id: 2,
      author: "Chef Amir",
      date: "May 10, 2026",
      readTime: "1 min read",
      title: "DRINKS MENU IS IRRESISTIBLE!",
      excerpt: "Summer is here, and we have crafted the perfect refreshing beverages to pair with your heavy grilled meals. Check out our new Mint Lemonade and Pomegranate Mojito to beat the heat.",
      views: 85,
      comments: 2,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop"
    },
    {
      id: 3,
      author: "Priya Singh",
      date: "May 01, 2026",
      readTime: "3 min read",
      title: "THE ART OF PERSIA DINING",
      excerpt: "Learn how the ancient royal families of Persia enjoyed their meals. It’s not just about the food, it’s about the whole experience. From the beautiful plates to the traditional music, discover the art of Persian hospitality.",
      views: 150,
      comments: 1,
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#0A0F1A] min-h-screen px-4 font-sans selection:bg-orange-500 selection:text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Header - matching "All Posts" title from your screenshot */}
        <div className="border-b border-white/10 pb-4 mb-8">
          <h2 className="text-orange-400 text-lg font-medium">All Posts</h2>
        </div>

        {/* Blog Posts List */}
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden flex flex-col md:flex-row shadow-lg hover:border-orange-500/30 transition-all duration-300">
              
              {/* Left Side: Image */}
              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Right Side: Content */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                
                <div>
                  {/* Author Info & 3 Dots Menu */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                      <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full object-cover border border-white/20" />
                      <div>
                        <p className="text-white text-sm font-medium">{post.author}</p>
                        <p className="text-gray-400 text-xs mt-0.5">
                          {post.date} &middot; {post.readTime}
                        </p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                    </button>
                  </div>

                  {/* Title - matching the elegant, cursive-like font as best as we can with Tailwind's serif/italic */}
                  <h3 className="text-2xl md:text-3xl font-serif italic text-white mb-4 leading-tight uppercase tracking-wide">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer: Views, Comments & Heart - matching the layout of your screenshot */}
                <div>
                  <div className="border-t border-white/10 pt-4 flex justify-between items-center text-xs text-gray-400">
                    <div className="flex gap-4">
                      <span>{post.views} views</span>
                      <span>{post.comments} comments</span>
                    </div>
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default More;
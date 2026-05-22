import React from 'react';

const HomeGallery = () => {
  // ২৫টি ছবির জন্য একটি লুপ তৈরি করা হয়েছে
  const images = Array.from({ length: 25 }, (_, index) => ({
    id: index,
    url: `https://picsum.photos/600/600?random=${index + 10}`, // কোয়ালিটি ৬০০px করা হয়েছে যাতে পরিষ্কার দেখায়
  }));

  return (
    <div className="py-20 bg-[#0A0F1A] selection:bg-orange-500">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* টাইটেল সেকশন */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-4">
            Our <span className="text-orange-500">Signature</span> Dishes
          </h2>
          <p className="text-gray-400 text-lg">আমাদের রেস্টুরেন্টের সেরা ২৫টি খাবারের ঝলক দেখে নিন।</p>
        </div>

        {/* ছবির গ্রিড */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-square shadow-xl hover:shadow-orange-500/10 transition-all duration-500"
            >
              <img 
                src={image.url} 
                alt={`Iran Grill Food ${image.id}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* ছবির ওপর হোভার এফেক্ট */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-bold tracking-widest uppercase">
                  Delicious Item #{image.id + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HomeGallery;
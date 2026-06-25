"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Calendar, ChevronRight, MessageSquare, Eye } from "lucide-react";

// --- MOCK DATA FOR SIDEBAR & DETAILS ---
const categories = [
  { name: "Health Care", count: 2 },
  { name: "Nutritions", count: 4 },
  { name: "Health Tips", count: 5 },
  { name: "Medical Research", count: 4 },
  { name: "Health Treatment", count: 6 },
];

const tags = ["Health Tips", "Awareness", "Health", "Wellness", "Treatments", "Checkup", "Prevention"];

const latestNews = [
  { title: "Managing Chronic Conditions: Expert Advice for Better Living", date: "06 Nov 2025", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=100" },
  { title: "Understanding Common Symptoms: When to See a Doctor", date: "15 Nov 2025", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=100" },
  { title: "Nutrition and Wellness: A Guide to Balanced Eating", date: "08 Dec 2025", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=100" },
  { title: "Top Preventive Health Measures Everyone Should Take", date: "17 Dec 2025", image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=100" },
];

// Single post data for demonstration
const postDetail = {
  id: "1",
  title: "10 Tips for Maintaining a Healthy Lifestyle Year-Round",
  category: "Health Tips",
  author: "Arthur Hetzel",
  authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  date: "4 Dec 2025",
  image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=1200",
  comments: 24,
  views: 890,
};

// --- SIDEBAR COMPONENT ---
interface BlogSidebarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const BlogSidebar = ({ searchQuery, onSearchChange }: BlogSidebarProps) => (
  <div className="space-y-6">
    {/* Search Box */}
    <div className="bg-white p-2 rounded-xl border border-slate-200 flex items-center">
      <input 
        type="text" 
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search articles..." 
        className="w-full px-4 py-2 outline-none text-sm text-slate-700 placeholder:text-slate-400"
      />
      <button className="p-3 bg-[#0A66C2] text-white rounded-lg hover:bg-[#08529c] transition-colors">
        <Search className="w-4 h-4" />
      </button>
    </div>

    {/* Latest News */}
    <div className="bg-white p-6 rounded-xl border border-slate-200">
      <h3 className="text-lg font-bold text-[#0A3D54] mb-4">Latest News</h3>
      <div className="space-y-4">
        {latestNews.map((news, idx) => (
          <div key={idx} className="flex gap-4 group cursor-pointer">
            <img src={news.image} alt="Thumbnail" className="w-16 h-16 rounded-lg object-cover" />
            <div>
              <p className="text-xs text-slate-500 mb-1">{news.date}</p>
              <h4 className="text-sm font-semibold text-[#0A3D54] group-hover:text-[#0A66C2] transition-colors line-clamp-2">
                {news.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Categories */}
    <div className="bg-white p-6 rounded-xl border border-slate-200">
      <h3 className="text-lg font-bold text-[#0A3D54] mb-4">Categories</h3>
      <ul className="space-y-3">
        {categories.map((cat, idx) => (
          <li key={idx} className="flex items-center justify-between text-sm text-slate-600 hover:text-[#0A66C2] cursor-pointer transition-colors">
            <span>{cat.name}</span>
            <span>({cat.count})</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Tags */}
    <div className="bg-white p-6 rounded-xl border border-slate-200">
      <h3 className="text-lg font-bold text-[#0A3D54] mb-4">Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span key={idx} className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 text-xs rounded-lg cursor-pointer hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// --- MAIN PAGE COMPONENT ---
export default function BlogDetailsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    // In a real application, you might redirect to the blog listing page with the query
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      
      {/* --- PAGE HEADER --- */}
      <section className="bg-[#0A3D54] py-16 px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-teal-400">Article Details</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Article Details
          </h1>
        </motion.div>
      </section>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Column: Article Content */}
            <div className="lg:w-2/3">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Article Header & Image */}
                <h1 className="text-3xl md:text-4xl font-bold text-[#0A3D54] mb-6 leading-tight">
                  {postDetail.title}
                </h1>
                
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden p-3 mb-8">
                  <img 
                    src={postDetail.image} 
                    alt={postDetail.title} 
                    className="w-full h-auto rounded-lg object-cover max-h-[450px] mb-6"
                  />
                  
                  {/* Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 px-2 border-b border-slate-100">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                      <span className="bg-[#00B4D8] text-white px-3 py-1.5 rounded-full font-bold text-xs">
                        {postDetail.category}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <span>{postDetail.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 border-l border-slate-200 pl-4">
                        <img src={postDetail.authorAvatar} alt={postDetail.author} className="w-6 h-6 rounded-full" />
                        <span className="font-medium text-[#0A3D54]">{postDetail.author}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm text-slate-500 font-medium px-2">
                      <div className="flex items-center gap-1.5 hover:text-[#0A66C2] transition-colors cursor-pointer">
                        <MessageSquare className="w-4 h-4" />
                        <span>{postDetail.comments}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Eye className="w-4 h-4" />
                        <span>{postDetail.views}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Text */}
                  <div className="pt-6 px-2 prose prose-slate max-w-none text-slate-600 space-y-6 text-[15px] leading-relaxed pb-4">
                    <p>
                      Maintaining a healthy lifestyle year-round is achievable with consistent habits that support your physical and mental well-being. One of the key pillars is staying hydrated, as water is essential for digestion, nutrient absorption, and overall bodily functions. Aim to drink at least eight glasses of water daily, adjusting for factors like weather and physical activity. A balanced diet is equally important, as it fuels your body with the nutrients it needs for energy, growth, and repair. 
                    </p>
                    
                    <p>
                      Regular physical activity is another cornerstone of a healthy lifestyle. Engaging in at least 150 minutes of moderate exercise per week, such as walking or cycling, can boost your cardiovascular health, strengthen muscles, and improve mood. Equally important is prioritizing sleep. Getting 7-9 hours of quality sleep each night helps regulate your mood, enhances mental clarity, and supports physical health. With these tips in mind, you will be on your way to maintaining a healthy lifestyle all year long.
                    </p>

                    <blockquote className="border-l-4 border-[#0A66C2] pl-6 py-4 my-8 bg-slate-50 text-slate-700 italic rounded-r-lg font-medium">
                      An extra important note to remember is that consistency is key. Small, sustainable changes in your daily habits will have a more lasting impact than short-term, extreme efforts. Prioritize gradual improvements in your routine and be patient with yourself.
                    </blockquote>

                    <h3 className="text-xl font-bold text-[#0A3D54] mt-8 mb-4">Incorporating Mindfulness</h3>
                    <p>
                      Beyond diet and exercise, mental well-being plays a critical role in overall health. Simple practices like taking a few minutes each day to meditate, practice deep breathing, or write in a gratitude journal can significantly lower stress levels. By integrating mindfulness into your daily routine, you create a stronger, more resilient foundation for your health journey.
                    </p>
                  </div>
                </div>

                {/* About Author Box */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-[#0A3D54] mb-4">About Author</h3>
                  <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col sm:flex-row gap-6 items-start">
                    <img 
                      src={postDetail.authorAvatar} 
                      alt={postDetail.author} 
                      className="w-24 h-24 rounded-lg object-cover shrink-0"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-[#0A3D54] mb-2">{postDetail.author}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        As a certified nutritionist and wellness coach, I am passionate about helping others achieve a balanced lifestyle and lasting health. My journey into health started with my own desire to feel better physically and mentally. I love exploring new ways to stay active, experimenting with healthy meals, and sharing tips that are practical for busy lives.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Article Tags */}
                <div>
                  <h3 className="text-lg font-bold text-[#0A3D54] mb-4">Article Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Health Tips", "Awareness", "Health", "Wellness"].map((tag, idx) => (
                      <span key={idx} className="px-4 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 text-xs rounded-lg hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-colors cursor-pointer">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </div>

            {/* Right Column: Sidebar */}
            <aside className="lg:w-1/3">
              <BlogSidebar 
                searchQuery={searchQuery} 
                onSearchChange={handleSearchChange} 
              />
            </aside>

          </div>
        </div>
      </div>
    </main>
  );
}
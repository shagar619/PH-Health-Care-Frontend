"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

// --- EXPANDED MOCK DATA (18 Posts) ---
const blogPosts = [
  {
    id: "1",
    title: "10 Tips for Maintaining a Healthy Lifestyle Year-Round",
    excerpt: "Discover practical, everyday tips to help you stay healthy throughout the year.",
    category: "Health Tips",
    author: "Arthur Hetzel",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "4 Dec 2025",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "2",
    title: "Understanding Common Symptoms: When to See a Doctor",
    excerpt: "Learn how to identify common symptoms and when it's important to seek medical attention.",
    category: "Awareness",
    author: "Robin Frost",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "14 Apr 2025",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "3",
    title: "Nutrition and Wellness: A Guide to Balanced Eating",
    excerpt: "Good nutrition is the foundation of wellness. Explore tips for creating a balanced diet.",
    category: "Nutritions",
    author: "Alyce Buck",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "21 May 2025",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "4",
    title: "Top Preventive Health Measures Everyone Should Take",
    excerpt: "Prevention is key to a long, healthy life. Discover the top preventive health measures you can adopt.",
    category: "Prevention",
    author: "Bernadette Vogel",
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "11 May 2025",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "5",
    title: "Mental Health Matters: Tips for Managing Stress and Anxiety",
    excerpt: "Earn practical techniques to manage stress and anxiety, and improve your emotional well-being.",
    category: "Wellness",
    author: "Gregory Johnson",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "15 Jun 2025",
    image: "https://images.unsplash.com/photo-1522845015757-50bce044e5da?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "6",
    title: "Advancements in Medical Technology: What's New in Healthcare?",
    excerpt: "From AI in diagnostics to cutting-edge treatments, discover how innovation is used in healthcare.",
    category: "Technology",
    author: "Teresa Baxter",
    authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "22 Jun 2025",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "7",
    title: "The Importance of Regular Eye Exams",
    excerpt: "Why getting your vision checked annually is crucial even if you think your eyesight is perfect.",
    category: "Health Care",
    author: "Marcus Chen",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "02 Jul 2025",
    image: "https://images.unsplash.com/photo-1589828131872-358c2ce1817c?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "8",
    title: "Superfoods to Boost Your Immune System",
    excerpt: "Add these 5 powerful foods to your diet to help fight off seasonal colds and infections naturally.",
    category: "Nutritions",
    author: "Sarah Jenkins",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "18 Jul 2025",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "9",
    title: "Demystifying Telehealth: What to Expect",
    excerpt: "Everything you need to know about preparing for your first virtual doctor's appointment.",
    category: "Health Care",
    author: "Dr. Amanda Cole",
    authorAvatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "05 Aug 2025",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "10",
    title: "Understanding High Blood Pressure",
    excerpt: "The silent killer: identifying the risks, symptoms, and lifestyle changes to manage hypertension.",
    category: "Awareness",
    author: "Dr. Robert Singh",
    authorAvatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "22 Aug 2025",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "11",
    title: "The Benefits of Daily Stretching",
    excerpt: "How just 10 minutes of stretching a day can improve your posture, reduce pain, and boost energy.",
    category: "Wellness",
    author: "Elena Rodriguez",
    authorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "09 Sep 2025",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "12",
    title: "Navigating Seasonal Allergies",
    excerpt: "Expert advice on identifying triggers and finding the right over-the-counter treatments.",
    category: "Health Tips",
    author: "Michael Chang",
    authorAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "25 Sep 2025",
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "13",
    title: "A Beginner's Guide to Meditation",
    excerpt: "Simple techniques to start a mindfulness practice and reduce daily stress.",
    category: "Wellness",
    author: "Sophie Lauren",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "12 Oct 2025",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "14",
    title: "Heart Disease in Women: What to Know",
    excerpt: "Why heart disease symptoms in women differ from men and what warning signs to watch for.",
    category: "Awareness",
    author: "Dr. Karen Evans",
    authorAvatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "28 Oct 2025",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "15",
    title: "Plant-Based Diets: Pros and Cons",
    excerpt: "A balanced look at the health impacts of switching to a vegetarian or vegan lifestyle.",
    category: "Nutritions",
    author: "Alyce Buck",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "04 Nov 2025",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "16",
    title: "Vaccination Updates for 2026",
    excerpt: "A comprehensive guide to recommended booster shots and new vaccines available this year.",
    category: "Prevention",
    author: "Dr. Darren Elder",
    authorAvatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "18 Nov 2025",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "17",
    title: "How to Build a Better Sleep Routine",
    excerpt: "Struggling to fall asleep? Try these science-backed tips to improve your sleep hygiene.",
    category: "Health Tips",
    author: "Gregory Johnson",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "02 Dec 2025",
    image: "https://images.unsplash.com/photo-1511295742362-92c96b124e52?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "18",
    title: "The Future of Wearable Health Tech",
    excerpt: "How smartwatches and fitness trackers are revolutionizing preventive healthcare.",
    category: "Technology",
    author: "Teresa Baxter",
    authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "15 Dec 2025",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=600",
  },
];

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
export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Search Filtering
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // Handlers
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      
      {/* --- PAGE HEADER --- */}
      <section className="bg-[#0A3D54] py-20 px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Health Insights & <span className="text-teal-400">Resources</span>
          </h1>
          <p className="text-lg text-white/80">
            Stay updated with the latest medical news, wellness tips, and expert advice from our top healthcare professionals.
          </p>
        </motion.div>
      </section>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Column: Blog Grid & Pagination */}
            <div className="lg:w-2/3">
              
              {filteredPosts.length === 0 ? (
                <div className="bg-white border border-slate-200 rounded-xl p-12 text-center">
                  <h3 className="text-xl font-bold text-[#0A3D54] mb-2">No results found</h3>
                  <p className="text-slate-500">We could not find any articles matching {searchQuery}.</p>
                </div>
              ) : (
                <>
                  {/* Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatePresence mode="popLayout">
                      {currentPosts.map((post) => (
                        <motion.div 
                          key={post.id}
                          layout
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="bg-white rounded-xl border border-slate-200 overflow-hidden group hover:border-[#0A66C2]/50 transition-colors flex flex-col"
                        >
                          {/* Image & Badge */}
                          <div className="relative h-48 overflow-hidden p-3 pb-0">
                            <img 
                              src={post.image} 
                              alt={post.title} 
                              className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-6 left-6 bg-[#00B4D8] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                              {post.category}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-5 flex-1 flex flex-col">
                            <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                              <div className="flex items-center gap-2">
                                <img src={post.authorAvatar} alt={post.author} className="w-5 h-5 rounded-full" />
                                <span className="font-medium text-slate-700">{post.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>{post.date}</span>
                              </div>
                            </div>
                            
                            <Link href={`/blog/${post.id}`}>
                              <h2 className="text-lg font-bold text-[#0A3D54] mb-2 leading-tight group-hover:text-[#0A66C2] transition-colors">
                                {post.title}
                              </h2>
                            </Link>
                            
                            <p className="text-sm text-slate-600 line-clamp-2 mt-auto">
                              {post.excerpt}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Pagination Controls */}
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-12">
                      <button 
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 text-sm hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
                      >
                        <ChevronLeft className="w-4 h-4" /> Prev
                      </button>
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button 
                          key={page}
                          onClick={() => handlePageClick(page)}
                          className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm transition-colors border ${
                            currentPage === page 
                              ? "bg-[#0A66C2] text-white border-[#0A66C2] font-bold" 
                              : "text-slate-600 border-slate-200 hover:bg-slate-50"
                          }`}
                        >
                          {page}
                        </button>
                      ))}

                      <button 
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 text-sm hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
                      >
                        Next <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </>
              )}
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
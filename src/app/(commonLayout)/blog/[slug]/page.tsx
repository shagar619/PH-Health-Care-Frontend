"use client";

import { motion } from "framer-motion";
import { Calendar, User, MessageSquare, Eye } from "lucide-react";

export default function BlogDetailsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content: Article */}
          <div className="lg:w-2/3">
            
            {/* Title & Hero Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-[#0A3D54] mb-6 leading-tight">
                10 Tips for Maintaining a Healthy Lifestyle Year-Round
              </h1>
              
              <div className="rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm p-4">
                <img 
                  src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=1200" 
                  alt="Healthy Lifestyle" 
                  className="w-full h-auto rounded-xl object-cover max-h-[450px] mb-6"
                />
                
                {/* Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                    <span className="bg-[#0A3D54] text-white px-3 py-1 rounded-full font-bold text-xs shadow-sm">
                      Health Tips
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span>4 Dec 2023</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Author" className="w-5 h-5 rounded-full" />
                      <span className="font-medium">Dr. Darren Elder</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-[#0A66C2] font-semibold">
                    <div className="flex items-center gap-1.5 border border-[#0A66C2]/20 bg-[#0A66C2]/5 px-3 py-1 rounded-full">
                      <MessageSquare className="w-4 h-4" />
                      <span>25</span>
                    </div>
                    <div className="flex items-center gap-1.5 border border-[#0A66C2]/20 bg-[#0A66C2]/5 px-3 py-1 rounded-full">
                      <Eye className="w-4 h-4" />
                      <span>90</span>
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div className="pt-6 prose prose-slate max-w-none text-slate-600 space-y-6 text-[15px] leading-relaxed">
                  <p>
                    Maintaining a healthy lifestyle year-round is achievable with consistent habits that support your physical and mental well-being. One of the key pillars is staying hydrated, as water is essential for digestion, nutrient absorption, and overall bodily functions. Aim to drink at least eight glasses of water daily, adjusting for factors like weather and physical activity. A balanced diet is equally important, as it fuels your body with the nutrients it needs for energy, growth, and repair. Incorporate a variety of fruits, vegetables, lean proteins, and whole grains to ensure you are getting a range of vitamins and minerals.
                  </p>
                  
                  <p>
                    Regular physical activity is another cornerstone of a healthy lifestyle. Engaging in at least 150 minutes of moderate exercise per week, such as walking or cycling, can boost your cardiovascular health, strengthen muscles, and improve mood. Equally important is prioritizing sleep. Getting 7-9 hours of quality sleep each night helps regulate your mood, enhances mental clarity, and supports physical health. With these tips in mind, you will be on your way to maintaining a healthy lifestyle all year long.
                  </p>

                  {/* Blockquote */}
                  <blockquote className="border-l-4 border-[#0A66C2] pl-6 py-4 my-8 bg-slate-50 text-slate-700 italic rounded-r-xl font-medium">
                    An extra important note to remember is that consistency is key. Small, sustainable changes in your daily habits will have a more lasting impact than short-term, extreme efforts. Prioritize gradual improvements in your routine and be patient with yourself - lasting health is a marathon, not a sprint.
                  </blockquote>
                </div>
              </div>
            </motion.div>

            {/* About Author Section */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#0A3D54] mb-4">About Author</h3>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-6 items-start">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80" 
                  alt="Dr. Darren Elder" 
                  className="w-24 h-24 rounded-xl object-cover shrink-0"
                />
                <div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    As a certified nutritionist and wellness coach, I am passionate about helping others achieve a balanced lifestyle and lasting health. My journey into health started with my own desire to feel better physically and mentally, and along the way, I have learned the importance of consistency and small, sustainable changes. I love exploring new ways to stay active, experimenting with healthy meals, and sharing tips that are practical and realistic for people with busy lives.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Tags */}
            <div>
              <h3 className="text-lg font-bold text-[#0A3D54] mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["Health Tips", "Awareness", "Health", "Wellness"].map((tag, idx) => (
                  <span key={idx} className="px-4 py-1.5 bg-[#0A3D54] text-white text-xs font-bold rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <BlogSidebar />
          </aside>
        </div>

      </div>
    </main>
  );
}
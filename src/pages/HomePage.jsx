/**
 * HomePage - Marketing landing page overhaul
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Upload, BarChart3, Briefcase, MessageSquare, 
  FileText, Star, CheckCircle, ArrowRight, Zap, 
  Shield, Globe, Layout as LayoutIcon, Sparkles,
  Search, Rocket, UserSearch, Cpu
} from 'lucide-react';
import Antigravity from '../components/common/Antigravity';
import LogoIcon from '../components/common/LogoIcon';

const features = [
  { 
    icon: Upload, 
    title: 'Smart Resume Parsing', 
    desc: 'Instantly extract and structure your career data from any PDF or DOCX file using advanced OCR and natural language processing.',
    bullets: ['Format-agnostic parsing', 'Data structuring', 'Immediate feedback'],
    stat: '99% Accuracy'
  },
  { 
    icon: Brain, 
    title: 'Deep ATS Scoring', 
    desc: 'Our AI simulates enterprise Applicant Tracking Systems to predict exactly how top companies will evaluate your resume.',
    bullets: ['Keyword optimization', 'Impact analysis', 'Readability score'],
    stat: 'Simulates 50+ ATS'
  },
  { 
    icon: FileText, 
    title: 'Dynamic Resume Builder', 
    desc: 'Generate perfectly formatted, pixel-perfect resumes that pass automated screenings and impress human recruiters.',
    bullets: ['1-Click ATS Templates', 'Live Markdown Preview', 'PDF Export'],
    stat: '4 Premium Layouts'
  },
  { 
    icon: Briefcase, 
    title: 'Intelligent Job Matcher', 
    desc: 'Stop scrolling through irrelevant listings. We analyze your unique skill footprint and bring the highest-probability matches to you.',
    bullets: ['Semantic matching', 'Salary insights', 'Culture fit analysis'],
    stat: 'Real-time API'
  },
  { 
    icon: MessageSquare, 
    title: 'AI Mock Interviews', 
    desc: 'Practice makes perfect. Face an AI recruiter that asks dynamic, contextual questions based strictly on your resume and target role.',
    bullets: ['Behavioral questions', 'Technical screens', 'Tone analysis'],
    stat: '24/7 Availability'
  },
  { 
    icon: BarChart3, 
    title: 'Career Analytics', 
    desc: 'Measure what matters. Track your application volume, interview conversion rates, and skill growth over time.',
    bullets: ['Conversion funnels', 'Skill gap analysis', 'Market trends'],
    stat: 'Comprehensive Dashboard'
  },
];



const testimonials = [
  { name: 'Varun Srivastava', role: 'Software Engineer', text: 'Got my ATS score from 45 to 89! Landed a job at Google within 2 months.', rating: 5 },
  { name: 'Vaibhav Khatri', role: 'Product Manager', text: 'The AI feedback was incredibly specific. It pointed out exactly what recruiters look for.', rating: 5 },
  { name: 'Priyani Tiwari', role: 'Data Scientist', text: 'Interview prep feature is a game changer. AI questions were better than real interviews!', rating: 5 },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[var(--background)] selection:bg-[var(--primary)] selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)] px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative group/logo">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover/logo:scale-110" style={{ background: 'var(--primary)' }}>
                <LogoIcon size={24} className="text-white" />
              </div>
            </div>
            <span className="font-black text-2xl tracking-tighter text-[var(--foreground)] transition-colors flex items-baseline">
              Resume<span style={{ color: 'var(--primary)', fontStyle: 'italic', fontWeight: 900, fontSize: '26px', padding: '0 1px' }}>X</span>pert<span style={{ color: 'var(--muted-foreground)', fontWeight: 600, fontSize: '14px', marginLeft: '4px' }}>AI</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 mr-auto ml-12 h-full">
            <div className="relative group h-full flex items-center">
              <a href="#features" className="text-sm font-bold text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors flex items-center gap-1 py-4">
                Features
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </a>
              
              {/* Features Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 pt-2">
                <div className="bg-white rounded-3xl shadow-2xl border border-[var(--border)] overflow-hidden p-6 grid grid-cols-2 gap-4">
                  {features.map((f) => (
                    <div key={f.title} className="flex gap-4 p-4 rounded-2xl hover:bg-[var(--muted)]/50 transition-colors group/item cursor-pointer">
                      <div className="w-10 h-10 rounded-xl bg-[var(--muted)] flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                        <f.icon size={20} style={{ color: 'var(--primary)' }} />
                      </div>
                      <div>
                        <div className="text-sm font-black text-[var(--foreground)] mb-1">{f.title}</div>
                        <div className="text-xs text-[var(--muted-foreground)] leading-snug line-clamp-2">{f.desc}</div>
                      </div>
                    </div>
                  ))}
                  <div className="col-span-2 mt-2 pt-4 border-t border-[var(--border)] flex items-center justify-between">
                    <p className="text-xs font-bold text-[var(--muted-foreground)] uppercase tracking-widest">Enterprise Ready AI</p>
                    <Link to="/register" className="text-xs font-black text-[var(--primary)] flex items-center gap-1 hover:gap-2 transition-all">
                      View All Features <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <a href="#testimonials" className="text-sm font-bold text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">Success Stories</a>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] font-semibold text-sm px-4 py-2 rounded-lg transition-colors">
              Sign In
            </Link>
            <Link to="/register" className="btn-primary text-sm py-2 px-6 shadow-lg shadow-[var(--primary)]/20">
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 px-4 overflow-hidden">
        {/* Antigravity Background Effect */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <Antigravity
            count={400}
            magnetRadius={8}
            ringRadius={5}
            waveSpeed={0.5}
            waveAmplitude={2}
            particleSize={0.6}
            lerpSpeed={0.06}
            color="#D16A4C"
            autoAnimate={true}
            particleVariance={0.5}
            pulseSpeed={2}
            fieldStrength={6}
          />
        </div>

        {/* Background blobs */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-10 pointer-events-none" style={{ background: 'var(--primary)' }} />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] rounded-full blur-[100px] opacity-5 pointer-events-none" style={{ background: 'var(--primary)' }} />

        <div className="max-w-5xl mx-auto text-center relative z-10 stagger-children">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-8 shadow-sm border border-[var(--border)] bg-white/50 backdrop-blur-sm" style={{ color: 'var(--primary)' }}>
            <Sparkles size={14} />
            Next-Gen AI Analysis Powered by Gemini
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[var(--foreground)] mb-8 leading-[1.1] tracking-tight">
            Stop Guessing.{' '}
            <span style={{ color: 'var(--primary)' }}>
              Start Getting Hired.
            </span>
          </h1>
          <p className="text-xl text-[var(--muted-foreground)] mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Your AI Resume Expert and Career Coach. <br/> Analyze. Optimize. Prepare. Get Hired.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/register" className="btn-primary text-lg py-4 px-10 flex items-center gap-2 justify-center shadow-xl shadow-[var(--primary)]/20">
              Analyze Your Resume <ArrowRight size={20} />
            </Link>
            <Link to="/login" className="btn-secondary text-lg py-4 px-10 border-[var(--border)] bg-white hover:bg-[var(--muted)] transition-all">
              View Demo Session
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm font-medium text-[var(--muted-foreground)]">
            <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-emerald-500" /> No Credit Card</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-emerald-500" /> Free Analysis</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-emerald-500" /> ATS Optimized</span>
          </div>
        </div>

        {/* Mock UI Preview */}
        <div className="max-w-5xl mx-auto mt-24 relative">
           <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent z-10" />
           <div className="card-hover bg-white rounded-3xl shadow-2xl border border-[var(--border)] overflow-hidden scale-95 md:scale-100">
            <div className="border-b border-[var(--border)] bg-[var(--muted)]/50 p-4 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
              </div>
              <div className="mx-auto text-[var(--muted-foreground)] text-xs font-bold tracking-widest uppercase">ResumeXpert AI v2.0</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-8 bg-[var(--background)]/30">
              <div className="md:col-span-4 card border-[var(--border)] flex flex-col items-center justify-center gap-4 py-10 bg-white/80">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-8 border-[var(--muted)]" />
                  <div className="absolute inset-0 rounded-full border-8 border-t-transparent border-r-transparent animate-spin-slow" style={{ borderColor: 'var(--primary)', borderTopColor: 'transparent', borderRightColor: 'transparent' }} />
                  <span className="text-5xl font-black" style={{ color: 'var(--primary)' }}>87</span>
                </div>
                <div className="text-center">
                  <div className="text-sm font-black text-[var(--foreground)]">ATS MATCH SCORE</div>
                  <div className="text-xs font-bold uppercase mt-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 inline-block">Excellent Standing</div>
                </div>
              </div>
              <div className="md:col-span-8 space-y-6">
                {['Critical Keywords', 'Quantifiable Impact', 'Formatting Compliance', 'Leadership Signals'].map((item, i) => (
                  <div key={item}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-bold text-[var(--foreground)]">{item}</span>
                      <span className="font-black text-[var(--primary)]">{[92, 85, 88, 82][i]}%</span>
                    </div>
                    <div className="h-3 bg-[var(--muted)] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ width: `${[92, 85, 88, 82][i]}%`, background: 'var(--primary)' }}
                      />
                    </div>
                  </div>
                ))}
                <div className="pt-4 p-4 rounded-2xl border border-dashed border-[var(--border)] bg-white/50">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                      <Zap size={16} className="text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[var(--foreground)]">AI INSIGHT</p>
                      <p className="text-xs text-[var(--muted-foreground)] mt-1">Strong action verbs detected. Increase keyword density for "Cloud Architecture" to reach 95% match.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Marquee Section */}
      <section className="py-10 border-y border-[var(--border)] overflow-hidden flex opacity-85 hover:opacity-100 transition-opacity duration-500 group" style={{ background: 'var(--primary)' }}>
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] cursor-default">
          {[...Array(4)].map((_, arrayIndex) => (
            <div key={arrayIndex} className="flex shrink-0 items-center justify-around">
               {features.map((f, i) => (
                 <div key={`${arrayIndex}-${i}`} className="flex items-center gap-4 text-[var(--primary-foreground)] font-bold text-base md:text-lg tracking-widest uppercase px-16">
                    <f.icon size={24} />
                    <span className="whitespace-nowrap">{f.title}</span>
                 </div>
               ))}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 px-4 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 stagger-children">
            <h2 className="text-4xl md:text-5xl font-black text-[var(--foreground)] mb-6 tracking-tight">
              A Complete <span style={{ color: 'var(--primary)' }}>Career OS</span>
            </h2>
            <p className="text-[var(--muted-foreground)] text-lg max-w-2xl mx-auto font-medium">
              We've built the most comprehensive toolkit for modern job seekers, powered by state-of-the-art AI models.
            </p>
          </div>
          <div className="flex flex-col gap-8 relative max-w-4xl mx-auto">
            {features.map((feature, i) => (
              <div 
                key={feature.title} 
                className="sticky pt-4"
                style={{ top: `calc(100px + ${i * 24}px)`, zIndex: i }}
              >
                <div className="card-hover card p-10 md:p-14 bg-white border border-[var(--border)] group flex flex-col md:flex-row gap-10 items-center justify-between shadow-2xl transition-all duration-500 origin-top">
                  <div className="flex-1">
                     <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform group-hover:rotate-6 group-hover:scale-110" 
                          style={{ background: 'color-mix(in srgb, var(--primary) 10%, var(--muted))' }}>
                       <feature.icon size={32} style={{ color: 'var(--primary)' }} />
                     </div>
                     <h3 className="text-3xl font-black text-[var(--foreground)] mb-4">{feature.title}</h3>
                     <p className="text-[var(--muted-foreground)] text-lg leading-relaxed font-medium mb-8 max-w-lg">{feature.desc}</p>
                     
                     <div className="flex flex-col gap-3 mb-8">
                       {feature.bullets.map((bullet, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle size={18} className="text-emerald-500 shrink-0" />
                            <span className="text-sm font-bold text-[var(--foreground)]">{bullet}</span>
                          </div>
                       ))}
                     </div>

                     <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--primary)' }}>
                       Explore Module <ArrowRight size={16} />
                     </div>
                  </div>
                  
                  {/* Right side visual block */}
                  <div className="w-full md:w-72 shrink-0 bg-[var(--background)] rounded-3xl p-6 border border-[var(--border)] shadow-inner flex flex-col items-center justify-center min-h-[250px] transition-transform duration-500 group-hover:scale-105">
                     <div className="text-center">
                        <div className="text-sm font-black text-[var(--muted-foreground)] uppercase tracking-widest mb-4">Highlight</div>
                        <div className="text-2xl font-black text-[var(--foreground)] leading-tight">{feature.stat}</div>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 px-4 bg-white/40 border-y border-[var(--border)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black text-[var(--foreground)] mb-4 tracking-tight">
                Trusted by <span style={{ color: 'var(--primary)' }}>Ambitious</span> Professionals
              </h2>
              <p className="text-[var(--muted-foreground)] font-medium">Join 10,000+ users who have transformed their career search with AI.</p>
            </div>
            <div className="flex gap-2">
               <div className="px-4 py-2 rounded-full border border-[var(--border)] bg-white text-sm font-bold shadow-sm">4.9/5 Rating</div>
               <div className="px-4 py-2 rounded-full border border-[var(--border)] bg-white text-sm font-bold shadow-sm">24/7 Support</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="card p-8 bg-white border-[var(--border)] relative shadow-sm">
                <div className="absolute top-8 right-8 opacity-10">
                   <MessageSquare size={40} style={{ color: 'var(--primary)' }} />
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-[var(--foreground)] font-medium italic leading-relaxed mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-[var(--border)]">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-sm" style={{ background: 'var(--primary)' }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-black text-[var(--foreground)] text-sm">{t.name}</p>
                    <p className="text-[var(--muted-foreground)] text-xs font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--primary) 15%, transparent) 0%, transparent 70%)` }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-[var(--foreground)] mb-8 tracking-tight leading-tight">
            Ready to Build Your <br />
            <span style={{ color: 'var(--primary)' }}>Professional Future?</span>
          </h2>
          <p className="text-[var(--muted-foreground)] text-xl mb-12 max-w-2xl mx-auto font-medium">
            Take the first step today. It only takes 30 seconds to upload your resume and see where you stand.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
             <Link to="/register" className="btn-primary text-xl py-5 px-12 inline-flex items-center gap-3 shadow-2xl shadow-[var(--primary)]/30 transition-transform hover:scale-105 active:scale-95">
                Get Started Now <Rocket size={24} />
             </Link>
          </div>
          <p className="mt-8 text-sm font-bold uppercase tracking-widest text-[var(--muted-foreground)] flex items-center justify-center gap-3">
             <Shield size={16} /> Data is Encrypted & Private
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[var(--border)] pt-20 pb-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative group/logo">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md transition-transform group-hover/logo:scale-110" style={{ background: 'var(--primary)' }}>
                  <LogoIcon size={24} className="text-white" />
                </div>
              </div>
              <span className="font-black text-2xl tracking-tighter text-[var(--foreground)] flex items-baseline">
                Resume<span style={{ color: 'var(--primary)', fontStyle: 'italic', fontWeight: 900, fontSize: '26px', padding: '0 1px' }}>X</span>pert<span style={{ color: 'var(--muted-foreground)', fontWeight: 600, fontSize: '14px', marginLeft: '4px' }}>AI</span>
              </span>
            </div>
            <p className="text-sm text-[var(--muted-foreground)] font-medium leading-relaxed">
              Empowering job seekers with enterprise-grade AI tools to accelerate their career growth and land dream roles.
            </p>
          </div>
          <div>
            <h4 className="font-black text-[var(--foreground)] uppercase text-xs tracking-widest mb-6">Product</h4>
            <ul className="space-y-4 text-sm font-medium text-[var(--muted-foreground)]">
              <li><a href="#" className="hover:text-[var(--primary)] transition-colors">ATS Analyzer</a></li>
              <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Resume Builder</a></li>
              <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Job Finder</a></li>
              <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Interview Prep</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-[var(--foreground)] uppercase text-xs tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-[var(--muted-foreground)]">
              <li><a href="#" className="hover:text-[var(--primary)] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Contact Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-[var(--foreground)] uppercase text-xs tracking-widest mb-6">Trust</h4>
            <ul className="space-y-4 text-sm font-medium text-[var(--muted-foreground)]">
              <li className="flex items-center gap-2"><Globe size={14} /> Available Worldwide</li>
              <li className="flex items-center gap-2"><Shield size={14} /> SOC2 Compliant</li>
              <li className="flex items-center gap-2"><Zap size={14} /> Real-time Sync</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-[var(--border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold text-[var(--muted-foreground)] uppercase tracking-widest">
            © 2025 ResumeXpert AI. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
             {['Twitter', 'LinkedIn', 'GitHub'].map(social => (
               <a key={social} href="#" className="text-xs font-bold text-[var(--muted-foreground)] hover:text-[var(--primary)] uppercase tracking-widest transition-colors">{social}</a>
             ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;


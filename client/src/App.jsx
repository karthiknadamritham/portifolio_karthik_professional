import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Github,
  ExternalLink,
  Linkedin,
  Mail,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
  Download,
  ChevronRight,
  ChevronDown,
  Menu,
  Quote,
  X,
  Moon,
  Sun,
  Star,
  Binary,
  Box,
  Database,
  Terminal as TerminalIcon,
  Network,
  Lightbulb,
  Users,
  Crown,
  RefreshCw,
  Layers,
  MessageSquare,
  Send,
  Phone,
  MessageCircle,
  Globe,
  Home,
  ZoomIn,
  ZoomOut,
  Maximize2,
  ArrowLeft,
  ArrowRight,
  FileText,
  ImageIcon,
} from "lucide-react";

// ─── ScrambleText component ──────────────────────────────────────────────────
const ScrambleText = ({ text, className = "" }) => {
  const [displayed, setDisplayed] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const scramble = () => {
    let iter = 0;
    const interval = setInterval(() => {
      setDisplayed(
        text
          .split("")
          .map((char, i) =>
            i < iter ? char : chars[Math.floor(Math.random() * chars.length)],
          )
          .join(""),
      );
      if (iter >= text.length) clearInterval(interval);
      iter += 0.5;
    }, 30);
  };
  return (
    <span
      className={`relative inline-flex items-baseline ${className}`}
      onMouseEnter={scramble}
    >
      <span className="invisible pointer-events-none select-none whitespace-pre">
        {text}
      </span>
      <span className="absolute inset-0 whitespace-pre">{displayed}</span>
    </span>
  );
};

// ─── CustomCursor component ───────────────────────────────────────────────────
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      const el = document.elementFromPoint(e.clientX, e.clientY);
      setIsPointer(
        el &&
          (el.tagName === "A" ||
            el.tagName === "BUTTON" ||
            el.closest("a") ||
            el.closest("button") ||
            window.getComputedStyle(el).cursor === "pointer"),
      );
    };
    const onLeave = () => setIsVisible(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!isVisible) return null;
  return (
    <>
      <div
        style={{
          position: "fixed",
          left: position.x - 4,
          top: position.y - 4,
          width: 8,
          height: 8,
          background: "#f5c6a5",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "transform 0.1s ease",
        }}
      />
      <div
        style={{
          position: "fixed",
          left: position.x - 20,
          top: position.y - 20,
          width: 40,
          height: 40,
          border: "1.5px solid rgba(245,198,165,0.5)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          transition:
            "left 0.08s ease, top 0.08s ease, transform 0.2s ease, width 0.2s ease, height 0.2s ease",
          transform: isPointer ? "scale(1.5)" : "scale(1)",
        }}
      />
    </>
  );
};

// --- Certificate data ---
const CERTS = [
  {
    title: "Introduction to Dark Web and Cryptocurrency",
    issuer: "Udemy",
    date: "2025",
    tags: ["Cybersecurity", "Blockchain"],
    image: "https://drive.google.com/thumbnail?id=1py-o6pYpvsUQc8xZ71aQBbmSyBbuqlku&sz=w800",
    link: "https://drive.google.com/file/d/1py-o6pYpvsUQc8xZ71aQBbmSyBbuqlku/view?usp=drive_link",
  },
  {
    title: "Foundation to Cybersecurity",
    issuer: "Google",
    date: "2025",
    tags: ["Security", "Basics"],
    image: "https://drive.google.com/thumbnail?id=1qGihtJJnu65r8wdTnRr_Kic5-HIkWNlm&sz=w800",
    link: "https://drive.google.com/file/d/1qGihtJJnu65r8wdTnRr_Kic5-HIkWNlm/view?usp=drive_link",
  },
  {
    title: "Play It Safe: Manage Security Risks",
    issuer: "Google",
    date: "2025",
    tags: ["Risk Management", "Security"],
    image: "https://drive.google.com/thumbnail?id=1jOazEN8HETqNxUeWBRL-O9yNBaA844oo&sz=w800",
    link: "https://drive.google.com/file/d/1jOazEN8HETqNxUeWBRL-O9yNBaA844oo/view?usp=drive_link",
  },
  {
    title: "Agile Scrum",
    issuer: "CertiProf",
    date: "2025",
    tags: ["Agile", "Management"],
    image: "https://drive.google.com/thumbnail?id=1RNCSNhcbzskb1HbmhL9LN79J7hpSCcJK&sz=w800",
    link: "https://drive.google.com/file/d/1RNCSNhcbzskb1HbmhL9LN79J7hpSCcJK/view?usp=drive_link",
  },
  {
    title: "Angular",
    issuer: "Udemy",
    date: "2025",
    tags: ["Frontend", "Framework"],
    image: "https://drive.google.com/thumbnail?id=1FoLUE-YvxRUZeglK4iDSAesTM7eI6xyS&sz=w800",
    link: "https://drive.google.com/file/d/1FoLUE-YvxRUZeglK4iDSAesTM7eI6xyS/view?usp=drive_link",
  },
  {
    title: "CSS3",
    issuer: "Udemy",
    date: "2025",
    tags: ["Frontend", "Design"],
    image: "https://drive.google.com/thumbnail?id=13AdZt0BaMdcG6U2iPcp2AZtYS0MNNAxD&sz=w800",
    link: "https://drive.google.com/file/d/13AdZt0BaMdcG6U2iPcp2AZtYS0MNNAxD/view?usp=drive_link",
  },
  {
    title: "HTML5",
    issuer: "Udemy",
    date: "2025",
    tags: ["Frontend", "Development"],
    image: "https://drive.google.com/thumbnail?id=1XmVUi5K_fWHJQmkkRnBEX3eU8GvbSwXc&sz=w800",
    link: "https://drive.google.com/file/d/1XmVUi5K_fWHJQmkkRnBEX3eU8GvbSwXc/view?usp=drive_link",
  },
  {
    title: "JavaScript",
    issuer: "Udemy",
    date: "2025",
    tags: ["Logic", "Programming"],
    image: "https://drive.google.com/thumbnail?id=1hyPxq17ns3Km-fcuLg1MlYyV3tJZKKHn&sz=w800",
    link: "https://drive.google.com/file/d/1hyPxq17ns3Km-fcuLg1MlYyV3tJZKKHn/view?usp=drive_link",
  },
  {
    title: "Responsive Web Page using Bootstrap 4",
    issuer: "Udemy",
    date: "2025",
    tags: ["Bootstrap", "Responsive"],
    image: "https://drive.google.com/thumbnail?id=1hUqpt7B_-rNHhp2RFcH7oYn-cU-VAU5G&sz=w800",
    link: "https://drive.google.com/file/d/1hUqpt7B_-rNHhp2RFcH7oYn-cU-VAU5G/view?usp=drive_link",
  },
  {
    title: "Twitter Bootstrap",
    issuer: "Udemy",
    date: "2025",
    tags: ["CSS", "Framework"],
    image: "https://drive.google.com/thumbnail?id=1c9fMpWVwyxvMe09AxMoui_YjNz2C0kUl&sz=w800",
    link: "https://drive.google.com/file/d/1c9fMpWVwyxvMe09AxMoui_YjNz2C0kUl/view?usp=drive_link",
  },
  {
    title: "TypeScript",
    issuer: "Udemy",
    date: "2025",
    tags: ["Frontend", "Type Safety"],
    image: "https://drive.google.com/thumbnail?id=1kPliX1F-uK36OMRHUGo4YCtNRTaJMUpI&sz=w800",
    link: "https://drive.google.com/file/d/1kPliX1F-uK36OMRHUGo4YCtNRTaJMUpI/view?usp=drive_link",
  },
  {
    title: "User Experience",
    issuer: "Google",
    date: "2025",
    tags: ["UX", "Design"],
    image: "https://drive.google.com/thumbnail?id=1lkGEEESHZC5yNj9m6tWGxnIxtnEoPQ3l&sz=w800",
    link: "https://drive.google.com/file/d/1lkGEEESHZC5yNj9m6tWGxnIxtnEoPQ3l/view?usp=drive_link",
  },
  {
    title: "Website Creation",
    issuer: "Udemy",
    date: "2025",
    tags: ["Web", "Design"],
    image: "https://drive.google.com/thumbnail?id=19oQe3BgzwgnJsuoxoKTYZCuGBBAKKEY_&sz=w800",
    link: "https://drive.google.com/file/d/19oQe3BgzwgnJsuoxoKTYZCuGBBAKKEY_/view?usp=drive_link",
  },
  {
    title: "Build Generative AI Apps and Solutions with No-Code Tools",
    issuer: "Udemy",
    date: "2025",
    tags: ["AI", "No-Code"],
    image: "https://drive.google.com/thumbnail?id=12u5wZowPncANUAtdmyvDMzBuV6FpVSQR&sz=w800",
    link: "https://drive.google.com/file/d/12u5wZowPncANUAtdmyvDMzBuV6FpVSQR/view?usp=drive_link",
  },
  {
    title: "Build Generative AI App",
    issuer: "Infosys",
    date: "2025",
    tags: ["AI", "Automation"],
    image: "https://drive.google.com/thumbnail?id=1231nuio_WzpePnBiumyGS9Bw5M0Su8Sm&sz=w800",
    link: "https://drive.google.com/file/d/1231nuio_WzpePnBiumyGS9Bw5M0Su8Sm/view?usp=drive_link",
  },
  {
    title: "ChatGPT Made Easy",
    issuer: "Udemy",
    date: "2025",
    tags: ["AI", "ChatGPT"],
    image: "https://drive.google.com/thumbnail?id=1l99vz7ooGMCqRJ6UFpQZPWxKjP5RA9oc&sz=w800",
    link: "https://drive.google.com/file/d/1l99vz7ooGMCqRJ6UFpQZPWxKjP5RA9oc/view?usp=drive_link",
  },
  {
    title: "ChatGPT-4 Prompt Engineering",
    issuer: "Infosys",
    date: "2025",
    tags: ["Prompting", "AI"],
    image: "https://drive.google.com/thumbnail?id=1QlMuKz6PECHaQZUxufQngfn-qEcZ5t5o&sz=w800",
    link: "https://drive.google.com/file/d/1QlMuKz6PECHaQZUxufQngfn-qEcZ5t5o/view?usp=drive_link",
  },
  {
    title: "Computational Theory Language Principle & Finite Automata Theory",
    issuer: "NPTEL",
    date: "2024",
    tags: ["CS Theory", "Core"],
    image: "https://drive.google.com/thumbnail?id=1WIofoMsb7HDAtPwdjQ27DHK0NqTnp1bL&sz=w800",
    link: "https://drive.google.com/file/d/1WIofoMsb7HDAtPwdjQ27DHK0NqTnp1bL/view?usp=drive_link",
  },
  {
    title: "Master Generative AI",
    issuer: "Udemy",
    date: "2025",
    tags: ["AI", "Creative"],
    image: "https://drive.google.com/thumbnail?id=1vZ9sODcloQwzysxnUCWQ67IJ-W9DzSES&sz=w800",
    link: "https://drive.google.com/file/d/1vZ9sODcloQwzysxnUCWQ67IJ-W9DzSES/view?usp=drive_link",
  },
  {
    title: "C# Certificate",
    issuer: "SoloLearn",
    date: "2025",
    tags: ["C#", "Programming"],
    image: "https://drive.google.com/thumbnail?id=1EJpOj5Xq1eUM61j2g2jKLJV7j6mWs4VU&sz=w800",
    link: "https://drive.google.com/file/d/1EJpOj5Xq1eUM61j2g2jKLJV7j6mWs4VU/view?usp=drive_link",
  },
  {
    title: "C++ Certificate",
    issuer: "SoloLearn",
    date: "2025",
    tags: ["C++", "Programming"],
    image: "https://drive.google.com/thumbnail?id=1uPtgBp0V_j79-aK1CeANUJd4NZKXMoQf&sz=w800",
    link: "https://drive.google.com/file/d/1uPtgBp0V_j79-aK1CeANUJd4NZKXMoQf/view?usp=drive_link",
  },
  {
    title: "DSA Certificate",
    issuer: "SoloLearn",
    date: "2025",
    tags: ["DSA", "Logic"],
    image: "https://drive.google.com/thumbnail?id=1SB205OansAIczxrTr8IkQq_XglQOBrfS&sz=w800",
    link: "https://drive.google.com/file/d/1SB205OansAIczxrTr8IkQq_XglQOBrfS/view?usp=drive_link",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "2025",
    tags: ["Cloud", "AWS/Azure"],
    image: "https://drive.google.com/thumbnail?id=1rcimZMcGP4ZpVouCD7wHjWChaLzdrbly&sz=w800",
    link: "https://drive.google.com/file/d/1rcimZMcGP4ZpVouCD7wHjWChaLzdrbly/view?usp=drive_link",
  },
  {
    title: "Digital Systems: From Logic Gates to Processors",
    issuer: "Coursera",
    date: "2024",
    tags: ["Digital Electronics", "Hardware"],
    image: "https://drive.google.com/thumbnail?id=1U8HdvpwJAgNUj7tPypXgGZCK9WaVK-U2&sz=w800",
    link: "https://drive.google.com/file/d/1U8HdvpwJAgNUj7tPypXgGZCK9WaVK-U2/view?usp=drive_link",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    date: "2024",
    tags: ["Networking", "IT Support"],
    image: "https://drive.google.com/thumbnail?id=1bq-iXRxzMb_x7xoLS6Ec9c4kcV0pJbIw&sz=w800",
    link: "https://drive.google.com/file/d/1bq-iXRxzMb_x7xoLS6Ec9c4kcV0pJbIw/view?usp=drive_link",
  },
  {
    title: "Red Hat System Administration I",
    issuer: "Red Hat",
    date: "2025",
    tags: ["Linux", "SysAdmin"],
    image: "https://drive.google.com/thumbnail?id=1AmTRk2Th-r7rPZmeqbEllgBTjn9qdr8X&sz=w800",
    link: "https://drive.google.com/file/d/1AmTRk2Th-r7rPZmeqbEllgBTjn9qdr8X/view?usp=drive_link",
  },
  {
    title: "Red Hat System Administration II",
    issuer: "Red Hat",
    date: "2025",
    tags: ["Linux", "Advanced SysAdmin"],
    image: "https://drive.google.com/thumbnail?id=1l7JEX6Z_1aQ-VPiTcd4VH8gfDJir0v8S&sz=w800",
    link: "https://drive.google.com/file/d/1l7JEX6Z_1aQ-VPiTcd4VH8gfDJir0v8S/view?usp=drive_link",
  },
];

// ─── CertificatesSection component ───────────────────────────────────────────
const CertificatesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState("scattered");
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);

  const availableDomains = Array.from(new Set(CERTS.map(c => c.tags[0] || "Other")));

  const advance = () => setActiveIndex((prev) => (prev + 1) % CERTS.length);

  // Scatter function distributes the inactive cards across the viewport natively
  const getCardStyle = (index) => {
    const diff = (index - activeIndex + CERTS.length) % CERTS.length;
    if (diff === 0)
      return {
        zIndex: 50,
        scale: 1,
        rotate: 0,
        y: 0,
        x: 0,
        opacity: 1,
        blur: 0,
        glow: true,
        width: "clamp(280px, 30vw, 380px)",
      };

    // Calculate a stable pseudorandom scattered position based on the absolute index
    const seedX = Math.sin(index * 12.9898 + 78.233);
    const seedY = Math.cos(index * 4.1414 + 1.234);
    const seedR = Math.sin(index * 3.1415 + 9.999);
    const seedS = Math.cos(index * 1.4142 + 5.555);

    // Spread across viewport
    const scatterX = seedX * 600; 
    const scatterY = seedY * 400; 
    
    // Push outwards if too close to center
    const dist = Math.sqrt(scatterX * scatterX + scatterY * scatterY);
    let finalX = scatterX;
    let finalY = scatterY;
    if (dist < 200) {
       finalX = (finalX / dist) * 250;
       finalY = (finalY / dist) * 250;
    }

    return {
      zIndex: 10,
      scale: 0.4 + Math.abs(seedS) * 0.4, 
      rotate: seedR * 45,
      y: finalY,
      x: finalX,
      opacity: 0.15 + Math.abs(seedX) * 0.35,
      blur: 2 + Math.abs(seedY) * 6,
      glow: false,
      width: "380px",
    };
  };

  return (
    <section
      id="certificates"
      className="relative py-28 px-4 md:px-20 min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #0d0d1a 50%, #110808 100%)",
      }}
    >
      {/* Faded watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[12vw] font-black text-white/[0.03] tracking-[0.3em] uppercase whitespace-nowrap">
          CERTIFIED
        </span>
      </div>
      {/* Ambient glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(245,198,165,0.05)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-[80px] pointer-events-none"
        style={{ background: "rgba(245,198,165,0.03)" }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <p
              className="text-xs font-black tracking-[0.4em] uppercase mb-4"
              style={{ color: "#f5c6a5" }}
            >
              Academic Milestones
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 uppercase">
              Certificates 
              <br />
              <span className="italic text-themeColor">&</span> Achievements
            </h2>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed font-medium">
              A record of technical expertise and specialized knowledge acquired
              through professional training and academic programs.
            </p>
          </motion.div>

          {/* View Toggle */}
          <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-xl relative z-[100] pointer-events-auto">
            <button
              onClick={() => setViewMode("scattered")}
              className={`px-6 py-3 rounded-xl text-sm font-black tracking-widest uppercase transition-all duration-300 ${
                viewMode === "scattered"
                  ? "bg-[#f5c6a5] text-black shadow-lg shadow-[#f5c6a5]/20"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Interactive
            </button>
            <button
              onClick={() => setViewMode("sorted")}
              className={`px-6 py-3 rounded-xl text-sm font-black tracking-widest uppercase transition-all duration-300 ${
                viewMode === "sorted"
                  ? "bg-[#f5c6a5] text-black shadow-lg shadow-[#f5c6a5]/20"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Sorted View
            </button>
          </div>
        </div>

        {/* Dynamic Display Area */}
        {viewMode === "scattered" ? (
          <div className="flex flex-col items-center mb-16 w-full">
            <div
              className="relative flex items-center justify-center w-full pointer-events-none"
              style={{ minHeight: "600px" }}
            >
              <AnimatePresence mode="popLayout">
                {CERTS.map((cert, index) => {
                  const s = getCardStyle(index);
                  return (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{
                        scale: s.scale,
                        rotate: s.rotate,
                        y: s.y,
                        x: s.x,
                        opacity: s.opacity,
                        filter: `blur(${s.blur}px)`,
                      }}
                      transition={{ type: "spring", stiffness: 75, damping: 16 }}
                      onClick={advance}
                      style={{
                        zIndex: s.zIndex,
                        position: "absolute",
                        width: "100%",
                        maxWidth: s.width,
                      }}
                      className="cursor-pointer pointer-events-auto"
                    >
                      {s.glow && (
                        <div
                          className="absolute -inset-1 rounded-3xl blur-2xl opacity-50 pointer-events-none"
                          style={{
                            background:
                              "linear-gradient(135deg,#f5c6a5,transparent)",
                          }}
                        />
                      )}
                      <div
                        className="relative rounded-[2rem] border transition-all duration-500 overflow-hidden flex flex-col"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          backdropFilter: "blur(32px)",
                          borderColor: s.glow
                            ? "rgba(245,198,165,0.4)"
                            : "rgba(255,255,255,0.08)",
                          boxShadow: s.glow
                            ? "0 48px 96px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)"
                            : "0 8px 32px rgba(0,0,0,0.4)",
                          height: s.glow ? "520px" : "380px",
                          transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                        }}
                      >
                        {/* Certificate Image Preview */}
                        {cert.image && (
                          <div className="relative w-full overflow-hidden" style={{ height: s.glow ? "340px" : "180px", transition: "height 0.6s ease" }}>
                            <img
                              src={cert.image}
                              alt={cert.title}
                              className="w-full h-full object-cover object-center"
                              style={{ filter: s.glow ? "none" : "brightness(0.3) blur(2px)" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                            
                            {/* View Button Overlays */}
                            {s.glow && (
                              <div className="absolute top-6 right-6 flex gap-3">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedCert(cert);
                                  }}
                                  className="w-12 h-12 rounded-2xl bg-black/40 hover:bg-themeColor hover:text-black text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/20 hover:scale-110 shadow-xl group/view"
                                  title="View Certificate"
                                >
                                  <Maximize2 size={20} className="group-hover/view:animate-pulse" />
                                </button>
                                <a
                                  href={cert.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="w-12 h-12 rounded-2xl bg-black/40 hover:bg-white hover:text-black text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/20 hover:scale-110 shadow-xl"
                                  title="Open Original"
                                >
                                  <ExternalLink size={20} />
                                </a>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Content Area - Compressed to bottom */}
                        <div className="p-8 flex-1 flex flex-col justify-end">
                          <div className="mb-4">
                            <span
                              className="text-[10px] font-black tracking-[0.3em] uppercase px-3 py-1.5 rounded-xl border border-[rgba(245,198,165,0.2)] bg-[rgba(245,198,165,0.1)] text-[#f5c6a5] mb-4 inline-block"
                            >
                              {cert.issuer}
                            </span>
                            <h3 className={`font-black text-white leading-tight mb-2 ${s.glow ? "text-3xl" : "text-xl line-clamp-1"}`}>
                              {cert.title}
                            </h3>
                            <p className="text-gray-500 text-sm font-mono tracking-wider">{cert.date}</p>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-8">
                            {cert.tags.map((tag, t) => (
                              <span
                                key={t}
                                className="text-[10px] font-bold px-3 py-1 rounded-lg text-gray-300 bg-white/5 border border-white/10"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {s.glow && (
                            <motion.div 
                              animate={{ 
                                opacity: [0.5, 1, 0.5],
                                scale: [1, 1.02, 1],
                                textShadow: ["0 0 0px #f5c6a5", "0 0 10px #f5c6a5", "0 0 0px #f5c6a5"]
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="flex items-center gap-2 text-[10px] font-black tracking-[0.4em] uppercase text-[#f5c6a5]"
                            >
                              <span>CLICK TO ADVANCE</span>
                              <span className="text-lg leading-none">→</span>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 pointer-events-auto w-full"
          >
            {/* Filters */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-6 border-b border-white/10">
              <h4 className="text-2xl md:text-3xl font-black text-white flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#f5c6a5] animate-pulse" />
                {selectedDomain === "All" && selectedYear === "All" 
                  ? "All Certificates" 
                  : "Filtered Results"}
              </h4>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                <div className="relative w-full sm:w-auto min-w-[140px]">
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full appearance-none bg-white/5 border border-white/10 text-white font-bold px-5 py-3 pr-12 rounded-xl outline-none focus:border-[#f5c6a5] transition-colors cursor-pointer backdrop-blur-md"
                  >
                    <option value="All" className="bg-zinc-900 text-white">All Years</option>
                    {["2026", "2025", "2024", "2023"].map(y => (
                      <option key={y} value={y} className="bg-zinc-900 text-white">{y}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f5c6a5] pointer-events-none" />
                </div>

                <div className="relative w-full sm:w-auto min-w-[200px]">
                  <select
                    value={selectedDomain}
                    onChange={(e) => setSelectedDomain(e.target.value)}
                    className="w-full appearance-none bg-white/5 border border-white/10 text-white font-bold px-5 py-3 pr-12 rounded-xl outline-none focus:border-[#f5c6a5] transition-colors cursor-pointer backdrop-blur-md"
                  >
                    <option value="All" className="bg-zinc-900 text-white">All Domains</option>
                    {availableDomains.map(d => (
                      <option key={d} value={d} className="bg-zinc-900 text-white">{d}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f5c6a5] pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Compact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
               {CERTS.filter(c => {
                 const matchDomain = selectedDomain === "All" || (c.tags[0] || "Other") === selectedDomain;
                 const matchYear = selectedYear === "All" || c.date.includes(selectedYear);
                 return matchDomain && matchYear;
               }).map((cert, cIndex) => (
                    <div
                      key={`${cert.title}-${cIndex}`}
                      className="relative rounded-2xl border transition-all duration-300 hover:-translate-y-1 group hover:shadow-[0_8px_30px_rgba(245,198,165,0.08)] overflow-hidden"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        borderColor: "rgba(255,255,255,0.05)",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#f5c6a5]/0 to-[#f5c6a5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                      {cert.image && (
                        <div className="relative w-full h-32 overflow-hidden">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                          <button
                             onClick={(e) => {
                               e.stopPropagation();
                               setSelectedCert(cert);
                             }}
                             className="absolute top-2 right-2 p-2 rounded-lg bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md"
                          >
                            <Maximize2 size={14} />
                          </button>
                        </div>
                      )}
                      <div className="relative z-10 flex flex-col p-4">
                        <div className="flex justify-between items-start mb-3">
                          <span className="text-[10px] font-black tracking-widest uppercase px-2 py-1 rounded bg-white/5 text-[#f5c6a5] border border-white/5 mix-blend-screen">
                            {cert.tags[0] || "Other"}
                          </span>
                          <span className="text-gray-500 text-[10px] font-mono">{cert.date.split(" ")[0]}</span>
                        </div>
                        <h3 className="text-base font-bold text-white mb-2 leading-snug line-clamp-2">
                          {cert.title}
                        </h3>
                        <p className="text-xs text-gray-400 mb-3 mt-auto">{cert.issuer}</p>
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                          {cert.tags.slice(1).map((tag, t) => (
                            <span
                              key={t}
                              className="text-[9px] font-bold px-2 py-0.5 rounded text-gray-400 bg-black/40 border border-white/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                ))}
            </div>
          </motion.div>
        )}

        {/* Certificate Preview Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[150] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
              onClick={() => setSelectedCert(null)}
            >
              <div className="absolute top-8 right-8 z-[160] flex gap-4">
                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-4 rounded-full bg-white/5 hover:bg-themeColor hover:text-black text-white transition-all backdrop-blur-md"
                  >
                    <ExternalLink size={24} />
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-4 rounded-full bg-themeColor text-black hover:bg-white hover:scale-110 transition-all shadow-lg"
                  >
                    <X size={24} />
                  </button>
              </div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-5xl w-full flex flex-col gap-6"
              >
                <div className="relative group overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-auto max-h-[75vh] object-contain bg-black/40"
                  />
                </div>
                
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
                  <div>
                    <span className="text-[#f5c6a5] text-xs font-black tracking-[0.4em] uppercase mb-2 block">
                      {selectedCert.issuer}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                      {selectedCert.title}
                    </h2>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                     <p className="text-gray-500 font-mono mb-2">{selectedCert.date}</p>
                     <div className="flex gap-2">
                        {selectedCert.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300">
                            {tag}
                          </span>
                        ))}
                     </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Achievement card — full width at the bottom */}
        <motion.div
          whileHover={{ scale: 1.01, y: -4 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="relative rounded-3xl p-10 overflow-hidden w-full"
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(245,198,165,0.2)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-72 h-48 rounded-full blur-3xl -mr-24 -mt-16 pointer-events-none"
            style={{ background: "rgba(245,198,165,0.06)" }}
          />
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <p
                className="text-xs font-black tracking-[0.35em] uppercase mb-3"
                style={{ color: "#f5c6a5" }}
              >
                ★ Top Achievement
              </p>
              <p className="text-3xl md:text-4xl font-black text-white mb-2">
                LeetCode
              </p>
              <p className="text-gray-400 font-medium mb-6">
                Consistently solving complex algorithmic challenges and ranking
                among the top global competitive programmers.
              </p>
              <a
                href="https://leetcode.com/u/44440000/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-themeColor hover:text-black transition-all group/lc"
              >
                <span>View LeetCode Profile</span>
                <ExternalLink size={16} className="group-hover/lc:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-4xl font-black text-white">150+</p>
                <p className="text-[10px] font-black tracking-widest uppercase text-gray-500">
                  Problems Solved
                </p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center bg-themeColor/10"
                style={{ border: "1px solid rgba(245,198,165,0.2)" }}
              >
                <Star size={32} className="text-themeColor" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── FallingTechIcons component ───────────────────────────────────────────────
const TECH_ICONS_BG = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
];

const FallingTechIcons = () => {
  const items = Array.from({ length: 20 }).map((_, i) => {
    const icon = TECH_ICONS_BG[i % TECH_ICONS_BG.length];
    const left = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = 8 + Math.random() * 12;
    const size = 30 + Math.random() * 40;
    const opacity = 0.05 + Math.random() * 0.1;
    return { id: i, icon, left, delay, duration, size, opacity };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {items.map((item) => (
        <motion.img
          key={item.id}
          src={item.icon}
          alt="tech-icon"
          initial={{ y: -100, x: 0, rotate: 0 }}
          animate={{
            y: ["-10vh", "110vh"],
            x: [0, Math.random() > 0.5 ? 50 : -50, 0],
            rotate: [0, 360],
          }}
          transition={{
            y: {
              duration: item.duration,
              repeat: Infinity,
              ease: "linear",
              delay: item.delay,
            },
            x: {
              duration: item.duration / 2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            },
            rotate: {
              duration: item.duration * 1.5,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          style={{
            position: "absolute",
            left: `${item.left}%`,
            width: item.size,
            height: item.size,
            opacity: item.opacity,
          }}
        />
      ))}
    </div>
  );
};

function App() {
  const expRef = useRef(null);
  const { scrollYProgress: expScrollY } = useScroll({
    target: expRef,
    offset: ["start center", "end center"],
  });
  const expLineHeight = useTransform(expScrollY, [0, 1], ["0%", "100%"]);

  const [hoveredEdu, setHoveredEdu] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [imageZoom, setImageZoom] = useState(1);

  const [ratings, setRatings] = useState({});
  const [hoverRatings, setHoverRatings] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [attachment, setAttachment] = useState(null);
  const [isDispatching, setIsDispatching] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsDispatching(true);
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("subject", formData.subject);
    data.append("message", formData.message);
    if (attachment) {
      data.append("attachment", attachment);
    }
    try {
      // Use dynamic URL logic so it works on Vercel or localhost flawlessly
      const apiUrl = import.meta.env.VITE_API_URL 
        ? `${import.meta.env.VITE_API_URL}/api/contact`
        : "http://localhost:5000/api/contact";
        
      const res = await fetch(apiUrl, {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      if (result.success) {
        alert("Message dispatched successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setAttachment(null);
      } else {
        alert("Failed to dispatch: " + result.message);
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred during dispatch.");
    } finally {
      setIsDispatching(false);
    }
  };

  // Scroll to top on mount + Disable scroll restoration
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past the top a bit
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const [currentRotation, setCurrentRotation] = useState(0);
  const [resultText, setResultText] = useState("");

  // The spin logic from original script.js
  const spin = () => {
    // Randomly select a sector (0, 1, 2)
    const sector = Math.floor(Math.random() * 3);
    // Each sector is 120deg, add extra spins for effect
    const extraSpins = 3 * 360;
    const rotation = extraSpins + sector * 120 + 60; // +60 to center the sector at the top

    setCurrentRotation((prev) => prev + rotation);

    // Show result after animation
    setTimeout(() => {
      let text = "";
      if (sector === 0) text = "Higher Secondary";
      if (sector === 1) text = "Senior Secondary";
      if (sector === 2) text = "College";
      setResultText(text);
    }, 1000);
  };

  return (
    <>
      <CustomCursor />
      <div>
        <nav
          className={`fixed z-50 animate-fade-in-down transition-all duration-500 ease-in-out ${
            isScrolled
              ? "top-6 left-0 right-0 mx-auto w-fit rounded-full px-8 py-1.5 bg-[#fafafa]/70 dark:bg-black/70 backdrop-blur-md shadow-2xl shadow-black/10 dark:shadow-themeColor/5 border border-gray-200/50 dark:border-white/10 flex items-center justify-center"
              : "top-0 left-0 w-full py-3 bg-[#fafafa] dark:bg-black shadow-sm dark:shadow-none flex items-center justify-between px-4 md:px-10"
          }`}
        >
          <div
            className={`relative w-full flex items-center justify-center ${isScrolled ? "" : "px-4 md:px-10"}`}
          >
            {!isScrolled && (
              <div className="absolute left-4 md:left-10">
                <a href="#home" className="flex items-center gap-2 group relative z-50">
                  <img
                    src="/karthi.png"
                    alt="Karthi"
                    className="h-10 md:h-14 w-auto object-contain transition-all duration-500 group-hover:scale-[3] group-hover:translate-y-20 group-hover:drop-shadow-[0_0_15px_rgba(245,198,165,0.4)]"
                  />
                </a>
              </div>
            )}
            <ul className="flex flex-wrap justify-center gap-2 md:gap-3 text-sm md:text-base lg:text-lg font-bold items-center">
              <li>
                <a
                  href="#home"
                  className="px-4 py-2 rounded-sm transition-all duration-300 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  <ScrambleText text="HOME" />
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="px-4 py-2 rounded-sm transition-all duration-300 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  <ScrambleText text="ABOUT" />
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="px-4 py-2 rounded-sm transition-all duration-300 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  <ScrambleText text="SKILLS" />
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="px-4 py-2 rounded-sm transition-all duration-300 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  <ScrambleText text="EXPERIENCE" />
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="px-4 py-2 rounded-sm transition-all duration-300 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  <ScrambleText text="PROJECTS" />
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="px-4 py-2 rounded-sm transition-all duration-300 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  <ScrambleText text="EDUCATION" />
                </a>
              </li>
              <li>
                <a
                  href="#certificates"
                  className="px-4 py-2 rounded-sm transition-all duration-300 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  <ScrambleText text="CERTIFICATES" />
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  className="px-4 py-2 rounded-sm transition-all duration-300 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  <ScrambleText text="RESUME" />
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="px-5 rounded-full bg-themeColor text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-themeColor/40 ml-2 whitespace-nowrap"
                >
                  <ScrambleText text="LET'S WORK" />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Section */}
        <motion.main
          id="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col md:flex-row items-center md:items-end justify-center min-h-screen px-4 md:px-20 w-full bg-[#fafafa] dark:bg-black transition-colors duration-300 pt-10"
        >
          {/* Theme Toggle - Top Right Corner of Hero Section */}
          <div className="absolute top-24 right-4 md:top-24 md:right-10 z-50">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors focus:outline-none ${isDarkMode ? "bg-themeColor" : "bg-gray-300 shadow-inner"}`}
              aria-label="Toggle Theme"
            >
              <span
                className={`inline-flex items-center justify-center h-6 w-6 transform rounded-full bg-white transition-transform ${
                  isDarkMode ? "translate-x-9" : "translate-x-1"
                }`}
              >
                {isDarkMode ? (
                  <Moon className="w-3.5 h-3.5 text-themeColor" />
                ) : (
                  <Sun className="w-3.5 h-3.5 text-yellow-500" />
                )}
              </span>
            </button>
          </div>

          {/* Introduction Text */}
          <section className="text-center md:text-left max-w-3xl flex-1 -mt-10 md:mb-20 z-10 order-2 md:order-2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            >
              Hey! I am <br className="hidden md:block" />
              <ScrambleText text="Karthik S N" className="text-themeColor" />
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full max-w-4xl overflow-hidden mb-8"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
              }}
            >
              <div
                className="flex shrink-0 w-max animate-marquee"
                style={{ animationDuration: "15s" }}
              >
                {[
                  "Full Stack Web Developer",
                  "Software Engineer",
                  "DevOps Engineer",
                  "UI/UX Designer",
                  "Cloud Architecture",
                  "Full Stack Web Developer",
                  "Software Engineer",
                  "DevOps Engineer",
                  "UI/UX Designer",
                  "Cloud Architecture",
                ].map((role, idx) => (
                  <div key={idx} className="flex items-center gap-6 px-4">
                    <h2 className="text-xl sm:text-2xl lg:text-2xl font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap m-0">
                      {role}
                    </h2>
                    <div className="w-2.5 h-2.5 rounded-full bg-themeColor flex-shrink-0 opacity-80 shadow-[0_0_8px_var(--skin)]" />
                  </div>
                ))}
              </div>
            </motion.div>
            {/* Available for Work Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/5 dark:bg-green-500/10 border border-green-500/20 rounded-md mb-8 hover:bg-green-500/15 transition-colors cursor-default"
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-[10px] sm:text-xs font-black text-green-700 dark:text-green-400 uppercase tracking-[0.2em]">
                Available for Work
              </span>
            </motion.div>
            <br></br>
            <br></br>
            <motion.blockquote
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl mt-6 italic border-l-4 pl-4 text-gray-600 dark:text-gray-400"
            >
              "Learn daily, revise and practice regularly or risk
              <br className="hidden sm:block" />
              forgetting what once was yours."
            </motion.blockquote>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-4 text-right text-base font-light dark:text-gray-400 pr-10"
            >
              -- Karthik S N
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-themeColor text-black font-semibold rounded-full hover:bg-orange-300 transition-colors shadow-lg hover:shadow-themeColor/50"
              >
                View Work
              </a>
              <button
                onClick={() => setIsDownloadModalOpen(true)}
                className="px-8 py-3 outline outline-2 outline-themeColor text-themeColor font-semibold rounded-full hover:bg-themeColor hover:text-black transition-colors"
              >
                Download CV
              </button>
            </motion.div>

            {/* Social Icons Below Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-8 flex items-center gap-6 justify-center md:justify-start"
            >
              <a
                href="https://github.com/karthiknadamritham"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-gray-400 hover:text-themeColor hover:border-themeColor/50 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/karthiknadamritham"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-gray-400 hover:text-themeColor hover:border-themeColor/50 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:karthiksn20112004@gmail.com"
                className="p-3 rounded-xl bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-gray-400 hover:text-themeColor hover:border-themeColor/50 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                title="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://wa.me/918921869818"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-gray-400 hover:text-[#25D366] hover:border-[#25D366]/50 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                title="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </motion.div>
          </section>

          {/* Profile Image Space */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            className="flex-1 flex justify-center order-1 md:order-1 relative h-full items-end"
          >
            {/* Adding a glowing background effect behind the image */}
            <div className="relative flex justify-center items-center">
              {/* Glow */}
              <div
                className="absolute inset-0 
    bg-[#f5c6a5]/80 dark:bg-[#f5c6a5]/20 
    blur-[120px] rounded-full 
    w-[750px] h-[750px] 
    m-auto top-1/2 left-1/2 
    -translate-x-1/2 -translate-y-1/4 
    z-0 transition-opacity duration-500"
              ></div>

              {/* Image */}
              <img
                src="/myself.jpg"
                alt="Myself"
                id="pict"
                className="w-[350px] md:w-[700px] lg:w-[900px] object-cover relative z-10 hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </motion.div>
        </motion.main>
      </div>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 md:px-20 bg-white dark:bg-black relative z-10 flex flex-col justify-center border-t border-gray-100 dark:border-zinc-800"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto w-full text-left"
        >
          <p className="text-xs font-black tracking-[0.4em] uppercase mb-4 text-themeColor">
            Developer Behind The Code
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-black dark:text-white leading-tight mb-12 flex justify-start flex-wrap items-baseline gap-x-[0.2em]">
            <span>About</span>
            <ScrambleText text="Me" className="text-themeColor" />
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 text-left items-stretch w-full mx-auto">
            {/* Left Column: Text Content */}
            <div className="lg:col-span-3 relative rounded-3xl p-8 md:p-12 bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-xl overflow-hidden group h-full flex flex-col justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-themeColor/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <Quote className="w-12 h-12 text-gray-200 dark:text-zinc-800 mb-6 relative z-10" />
              
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 relative z-10">
                I'm a passionate <span className="text-black dark:text-white font-bold">Software Engineer</span> and Full Stack Developer focused on building scalable systems, responsive web architectures, and seamless user experiences. My work sits at the intersection of elegant design and engineering rigor — from robust REST APIs to pixel-perfect frontends for production-grade reliability.
              </p>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed relative z-10">
                With a specialized focus on modern web ecosystems including <span className="text-themeColor font-bold">React, Node.js, and Cloud Infrastructure</span>, I thrive in fast-paced environments where complex problem-solving meets tangible business value. Beyond writing clean, maintainable code, I am deeply committed to continuous integration, system optimization, and leading architectural decisions that transform ambitious concepts into resilient digital products.
              </p>
            </div>

            {/* Right Column: Interactive Portrait & Abilities Reveal (3D Flip Card) */}
            <div 
              className="lg:col-span-2 relative w-full h-full min-h-[450px] group cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              <div 
                className="relative w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-2xl rounded-3xl group-hover:[transform:scale(1.04)_rotateY(180deg)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                
                {/* Front Side: Portrait */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-gray-100 dark:border-zinc-800 bg-black"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img
                    src="/Karthi_face.png"
                    alt="My Portrait"
                    className="w-full h-full object-contain object-top pt-4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
                  
                  {/* Tooltip hint to hover */}
                  <div className="absolute bottom-8 left-8 z-20 flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <div className="relative w-4 h-4 flex items-center justify-center">
                        <div className="absolute inset-0 bg-themeColor rounded-full animate-ping opacity-75"></div>
                        <div className="relative w-2 h-2 bg-themeColor rounded-full"></div>
                      </div>
                      <span className="text-white text-sm md:text-base font-bold tracking-widest uppercase shadow-black drop-shadow-lg">Hover to Flip</span>
                    </div>
                  </div>
                </div>

                {/* Back Side: Abilities */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-themeColor/30 bg-zinc-900 flex flex-col justify-center p-6 md:p-8"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  {/* Top Stats Section */}
                  <div className="flex justify-between items-center text-center pb-4 border-b border-zinc-800">
                    <div>
                      <h4 className="text-2xl md:text-3xl font-black text-themeColor mb-1">400+</h4>
                      <p className="text-[9px] md:text-[10px] text-blue-400 font-medium tracking-wide">Problems Solved</p>
                    </div>
                    <div>
                      <h4 className="text-2xl md:text-3xl font-black text-themeColor mb-1">5</h4>
                      <p className="text-[9px] md:text-[10px] text-blue-400 font-medium tracking-wide">Projects</p>
                    </div>
                    <div>
                      <h4 className="text-2xl md:text-3xl font-black text-themeColor mb-1">10+</h4>
                      <p className="text-[9px] md:text-[10px] text-blue-400 font-medium tracking-wide">Certifications</p>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="flex flex-col mt-4 space-y-3">
                    <div className="flex justify-between items-center border-b border-zinc-800/80 pb-2">
                      <span className="text-gray-400 text-[10px] md:text-[11px] tracking-wide">Current Pursuit</span>
                      <span className="text-white font-bold text-[10px] md:text-xs text-right">Computer Science & Engineering</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-zinc-800/80 pb-2">
                      <span className="text-gray-400 text-[10px] md:text-[11px] tracking-wide">Specialisation</span>
                      <span className="text-white font-bold text-[10px] md:text-xs text-right">Full-Stack Web Development</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-zinc-800/80 pb-2">
                      <span className="text-gray-400 text-[10px] md:text-[11px] tracking-wide">Primary Languages</span>
                      <span className="text-white font-bold text-[10px] md:text-xs text-right">JavaScript, React, Node.js, C++</span>
                    </div>
                  </div>

                  {/* Abilities Bars */}
                  <div className="mt-4 pt-3 border-t border-zinc-800">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                      {[
                        { name: "Coding", percent: 90 }, { name: "Designing", percent: 85 },
                        { name: "Architecture", percent: 80 }, { name: "Algorithms", percent: 95 },
                        { name: "UI/UX", percent: 90 }, { name: "Cloud", percent: 75 }
                      ].map((skill, index) => (
                        <div key={index} className="w-full">
                          <div className="flex justify-between mb-1">
                            <span className="text-[9px] font-bold text-gray-300 uppercase tracking-wider">{skill.name}</span>
                          </div>
                          <div className="w-full bg-zinc-800 rounded-full h-1 overflow-hidden shadow-inner">
                            <div
                              className="bg-themeColor h-full rounded-full shadow-[0_0_10px_var(--skin)] transition-all duration-1000 ease-out"
                              style={{ width: `${skill.percent}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 md:px-20 mb bg-[#fafafa] dark:bg-zinc-900 min-h-screen flex flex-col justify-center transition-colors duration-300 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto w-full mb-8"
        >
          <p className="text-xs font-black tracking-[0.4em] uppercase mb-4 text-themeColor">
            Technical Arsenal
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-black dark:text-white leading-tight mb-6 flex flex-wrap items-baseline gap-x-[0.2em]">
            <span>My</span>
            <ScrambleText text="Skills" className="text-themeColor" />
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md leading-relaxed">
            A comprehensive overview of my technical capabilities and
            proficiency across various digital disciplines.
          </p>
        </motion.div>

        {/* Categories Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto w-full bg-white dark:bg-black rounded-3xl shadow-xl dark:shadow-none border border-gray-100 dark:border-zinc-800 overflow-hidden divide-y divide-gray-100 dark:divide-zinc-800 lg:divide-y-0">
          {/* Row 1, Col 1: Languages */}
          <div className="flex flex-col lg:border-r  border-gray-100 dark:border-zinc-800">
            {[
              {
                title: "Languages",
                skills: [
                  {
                    name: "C++",
                    icon: (
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                        alt="C++"
                        className="w-8 h-8 object-contain"
                      />
                    ),
                  },
                  {
                    name: "JavaScript",
                    icon: (
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                        alt="JavaScript"
                        className="w-8 h-8 object-contain"
                      />
                    ),
                  },
                  {
                    name: "C",
                    icon: (
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
                        alt="C"
                        className="w-8 h-8 object-contain"
                      />
                    ),
                  },
                  {
                    name: "PHP",
                    icon: (
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                        alt="PHP"
                        className="w-8 h-8 object-contain"
                      />
                    ),
                  },
                  {
                    name: "Python",
                    icon: (
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                        alt="Python"
                        className="w-8 h-8 object-contain"
                      />
                    ),
                  },
                ],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4 px-8 py-4 group/card"
              >
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-1">
                    {category.title}
                  </h3>
                  <div className="h-px w-full bg-gray-200 dark:bg-zinc-700" />
                </div>
                <div
                  className="flex overflow-hidden w-full"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                    maskImage:
                      "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                  }}
                >
                  <div className="flex shrink-0 gap-6 animate-marquee pr-4">
                    {[...category.skills, ...category.skills].map(
                      (skill, sIndex) => (
                        <span
                          key={sIndex}
                          className="flex flex-col items-center justify-center gap-3 px-5 py-4 bg-[#fafafa] dark:bg-zinc-900 text-gray-800 dark:text-gray-300 rounded-2xl text-sm font-semibold hover:bg-themeColor hover:text-black dark:hover:bg-themeColor dark:hover:text-black transition-colors shrink-0 min-w-[120px]"
                        >
                          <div className="w-8 h-8 flex items-center justify-center scale-90 md:scale-100">
                            {skill.icon}
                          </div>
                          {skill.name}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 1, Col 2: Core CS Skills */}
          <div className="flex flex-col lg:border-b border-gray-100 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/30">
            {[
              {
                title: "Core CS Skills",
                skills: [
                  {
                    name: "DSA",
                    icon: <Binary size={32} className="text-themeColor" />,
                  },
                  {
                    name: "OOPs",
                    icon: <Box size={32} className="text-themeColor" />,
                  },
                  {
                    name: "DBMS",
                    icon: <Database size={32} className="text-themeColor" />,
                  },
                  {
                    name: "Operating Systems",
                    icon: (
                      <TerminalIcon size={32} className="text-themeColor" />
                    ),
                  },
                  {
                    name: "Computer Networks",
                    icon: <Network size={32} className="text-themeColor" />,
                  },
                ],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4 px-8 py-4 group/card"
              >
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-1">
                    {category.title}
                  </h3>
                  <div className="h-px w-full bg-gray-200 dark:bg-zinc-700" />
                </div>
                <div
                  className="flex overflow-hidden w-full"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                    maskImage:
                      "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                  }}
                >
                  <div className="flex shrink-0 gap-6 animate-marquee pr-4">
                    {[...category.skills, ...category.skills].map(
                      (skill, sIndex) => (
                        <span
                          key={sIndex}
                          className="flex flex-col items-center justify-center gap-3 px-5 py-4 bg-[#fafafa] dark:bg-zinc-900 text-gray-800 dark:text-gray-300 rounded-2xl text-sm font-semibold hover:bg-themeColor hover:text-black dark:hover:bg-themeColor dark:hover:text-black transition-colors shrink-0 min-w-[120px]"
                        >
                          <div className="w-8 h-8 flex items-center justify-center scale-90 md:scale-100">
                            {skill.icon}
                          </div>
                          {skill.name}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2, Col 1: Frameworks & Libraries */}
          <div className="flex flex-col lg:border-r border-gray-100 dark:border-zinc-800">
            {[
              {
                title: "Frameworks & Libraries",
                skills: [
                  {
                    name: "React",
                    icon: (
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                        alt="React"
                        className="w-8 h-8 object-contain"
                      />
                    ),
                  },
                  {
                    name: "NodeJS",
                    icon: (
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                        alt="NodeJS"
                        className="w-8 h-8 object-contain"
                      />
                    ),
                  },
                  {
                    name: "Tailwind CSS",
                    icon: (
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                        alt="Tailwind CSS"
                        className="w-8 h-8 object-contain"
                      />
                    ),
                  },
                  {
                    name: "Bootstrap",
                    icon: (
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                        alt="Bootstrap"
                        className="w-8 h-8 object-contain"
                      />
                    ),
                  },
                  {
                    name: "HTML/CSS",
                    icon: (
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                        alt="HTML5"
                        className="w-8 h-8 object-contain"
                      />
                    ),
                  },
                ],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4 px-8 py-4 group/card"
              >
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-1">
                    {category.title}
                  </h3>
                  <div className="h-px w-full bg-gray-200 dark:bg-zinc-700" />
                </div>
                <div
                  className="flex overflow-hidden w-full"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                    maskImage:
                      "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                  }}
                >
                  <div className="flex shrink-0 gap-6 animate-marquee pr-4">
                    {[...category.skills, ...category.skills].map(
                      (skill, sIndex) => (
                        <span
                          key={sIndex}
                          className="flex flex-col items-center justify-center gap-3 px-5 py-4 bg-[#fafafa] dark:bg-zinc-900 text-gray-800 dark:text-gray-300 rounded-2xl text-sm font-semibold hover:bg-themeColor hover:text-black dark:hover:bg-themeColor dark:hover:text-black transition-colors shrink-0 min-w-[120px]"
                        >
                          <div className="w-8 h-8 flex items-center justify-center scale-90 md:scale-100">
                            {skill.icon}
                          </div>
                          {skill.name}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2, Col 2: Soft Skills */}
          <div className="flex flex-col bg-gray-50/50 dark:bg-zinc-900/30">
            {[
              {
                title: "Soft Skills",
                skills: [
                  {
                    name: "Problem Solving",
                    icon: <Lightbulb size={32} className="text-themeColor" />,
                  },
                  {
                    name: "Team Player",
                    icon: <Users size={32} className="text-themeColor" />,
                  },
                  {
                    name: "Leadership",
                    icon: <Crown size={32} className="text-themeColor" />,
                  },
                  {
                    name: "Adaptability",
                    icon: <RefreshCw size={32} className="text-themeColor" />,
                  },
                  {
                    name: "Multitasking",
                    icon: <Layers size={32} className="text-themeColor" />,
                  },
                ],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4 px-8 py-4 group/card"
              >
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-1">
                    {category.title}
                  </h3>
                  <div className="h-px w-full bg-gray-200 dark:bg-zinc-700" />
                </div>
                <div
                  className="flex overflow-hidden w-full"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                    maskImage:
                      "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                  }}
                >
                  <div className="flex shrink-0 gap-6 animate-marquee pr-4">
                    {[...category.skills, ...category.skills].map(
                      (skill, sIndex) => (
                        <span
                          key={sIndex}
                          className="flex flex-col items-center justify-center gap-3 px-5 py-4 bg-[#fafafa] dark:bg-zinc-900 text-gray-800 dark:text-gray-300 rounded-2xl text-sm font-semibold hover:bg-themeColor hover:text-black dark:hover:bg-themeColor dark:hover:text-black transition-colors shrink-0 min-w-[120px]"
                        >
                          <div className="w-8 h-8 flex items-center justify-center scale-90 md:scale-100">
                            {skill.icon}
                          </div>
                          {skill.name}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 3, Center Span: Tools & Platforms */}
          <div className="lg:col-span-2 flex flex-col bg-white dark:bg-black border-t border-gray-100 dark:border-zinc-800">
            {[
              {
                title: "Tools & Platforms",
                skills: [
                  {
                    name: "MySQL",
                    icon: (
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                        alt="MySQL"
                        className="w-8 h-8 object-contain"
                      />
                    ),
                  },
                  {
                    name: "MongoDB",
                    icon: (
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                        alt="MongoDB"
                        className="w-8 h-8 object-contain"
                      />
                    ),
                  },
                  {
                    name: "Git",
                    icon: (
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                        alt="Git"
                        className="w-8 h-8 object-contain"
                      />
                    ),
                  },
                  {
                    name: "GitHub",
                    icon: (
                      <Github
                        size={32}
                        className="text-black dark:text-white"
                      />
                    ),
                  },
                  {
                    name: "Postman",
                    icon: (
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                        alt="Postman"
                        className="w-8 h-8 object-contain"
                      />
                    ),
                  },
                  {
                    name: "Linux",
                    icon: (
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
                        alt="Linux"
                        className="w-8 h-8 object-contain"
                      />
                    ),
                  },
                ],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col gap-4 px-8 py-4 group/card items-center text-center"
              >
                <div className="w-full">
                  <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-1">
                    {category.title}
                  </h3>
                  <div className="h-px w-full bg-gray-200 dark:bg-zinc-700" />
                </div>
                <div
                  className="flex overflow-hidden w-full "
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                    maskImage:
                      "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                  }}
                >
                  <div className="flex shrink-0 gap-6 animate-marquee pr-4">
                    {[...category.skills, ...category.skills].map(
                      (skill, sIndex) => (
                        <span
                          key={sIndex}
                          className="flex flex-col items-center justify-center gap-3 px-5 py-4 bg-[#fafafa] dark:bg-zinc-900 text-gray-800 dark:text-gray-300 rounded-2xl text-sm font-semibold hover:bg-themeColor hover:text-black dark:hover:bg-themeColor dark:hover:text-black transition-colors shrink-0 min-w-[120px]"
                        >
                          <div className="w-8 h-8 flex items-center justify-center scale-90 md:scale-100">
                            {skill.icon}
                          </div>
                          {skill.name}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-16 px-4 md:px-20 bg-[#fafafa] dark:bg-black min-h-screen flex flex-col justify-center transition-colors duration-300 relative z-10 overflow-hidden"
      >
        <FallingTechIcons />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto w-full mb-16"
        >
          <p className="text-xs font-black tracking-[0.4em] uppercase mb-4 text-themeColor">
            Professional Journey
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-black dark:text-white leading-tight mb-6">
            Work
            <br />
            <ScrambleText text="Experience" className="text-themeColor" />
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md leading-relaxed">
            A detailed timeline of my professional roles and the impactful
            projects I've contributed to.
          </p>
        </motion.div>

        <div ref={expRef} className="max-w-4xl mx-auto w-full relative">
          <div className="relative ml-4 md:ml-0 py-8">
            {/* Glowing Timeline Vertical Spine */}
            <div className="absolute left-[-1px] md:left-1/2 top-0 bottom-0 w-[2px] bg-themeColor/10 md:-translate-x-1/2 z-0 hidden md:block"></div>
            <motion.div
              style={{ height: expLineHeight }}
              className="absolute left-[-1px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-transparent via-themeColor to-themeColor md:-translate-x-1/2 shadow-[0_0_8px_var(--skin)] z-0"
            ></motion.div>

            {/* Internship 1 (Current) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    staggerChildren: 0.2,
                    ease: [0.25, 1, 0.5, 1],
                  },
                },
              }}
              className="relative mb-12 flex flex-col md:flex-row items-center justify-between w-full z-10"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-8px] md:left-1/2 md:-ml-[8px] top-0 md:top-6 w-4 h-4 bg-themeColor rounded-full shadow-lg shadow-themeColor/50 z-20">
                <div className="absolute inset-0 bg-themeColor rounded-full animate-ping opacity-75"></div>
              </div>

              <div className="md:w-[45%] md:text-right mb-4 md:mb-0">
                <div className="bg-[#fafafa] dark:bg-zinc-900 p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-themeColor/80 transition-all duration-300 group shadow-xl hover:shadow-themeColor/20 relative">
                  <span className="inline-block px-3 py-1 bg-themeColor text-black text-[10px] font-black rounded-lg uppercase tracking-tighter mb-4 animate-pulse">
                    Current Role
                  </span>
                  <h3 className="text-3xl font-bold text-black dark:text-white mb-2 group-hover:text-themeColor transition-colors">
                    Virtual Intern (Batch 13)
                  </h3>
                  <h4 className="text-lg text-gray-600 dark:text-gray-400 font-medium font-saira">
                    Infosys Springboard |{" "}
                    <span className="text-themeColor font-bold">
                      Feb 2026 - Present
                    </span>
                  </h4>

                  <div className="flex md:justify-end mt-6">
                    <a 
                      href="https://infyspringboard.us.onwingspan.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#fafafa] dark:bg-zinc-800 border border-themeColor/30 text-black dark:text-white text-sm font-bold rounded-xl hover:bg-themeColor hover:text-black hover:border-themeColor transition-all duration-300 group/link shadow-md shadow-themeColor/5 whitespace-nowrap"
                    >
                      <span>Company Details</span>
                      <ExternalLink size={16} className="text-gray-400 group-hover/link:text-black transition-colors shrink-0" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:w-[45%]">
                <div className="bg-[#fafafa] dark:bg-zinc-900 p-6 rounded-2xl border border-solid border-themeColor/30 dark:border-zinc-700 relative overflow-hidden group hover:border-themeColor/80 transition-all shadow-xl hover:shadow-themeColor/10">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                    <span className="text-6xl font-black text-themeColor">
                      01
                    </span>
                  </div>
                  <ul className="text-left text-gray-700 dark:text-gray-300 space-y-4 relative z-10">
                    <li className="flex gap-3">
                      <ChevronRight className="text-themeColor w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">
                        Spearheading the building of a professional{" "}
                        <b>Kanban Flow</b> application using <b>Angular</b> and{" "}
                        <b>TypeScript</b>.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <ChevronRight className="text-themeColor w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">
                        Collaborating in a high-performance team environment
                        using <b>Git</b> and <b>GitHub</b> for version control.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <ChevronRight className="text-themeColor w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">
                        Managing end-to-end development functions and workflow
                        orchestration within <b>VS Code</b>.
                      </span>
                    </li>
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {[
                      "Angular",
                      "TypeScript",
                      "Kanban",
                      "Git",
                      "Clean Code",
                    ].map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-black px-4 py-2 bg-themeColor/10 text-themeColor border border-themeColor/20 rounded-xl uppercase tracking-widest hover:bg-themeColor hover:text-black transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Internship 2 (Previous) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    staggerChildren: 0.2,
                    ease: [0.25, 1, 0.5, 1],
                  },
                },
              }}
              className="relative flex flex-col md:flex-row-reverse items-center justify-between w-full z-10"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-8px] md:left-1/2 md:-ml-[8px] top-0 md:top-6 w-4 h-4 bg-themeColor rounded-full shadow-lg shadow-themeColor/50 z-20">
                <div className="absolute inset-0 bg-themeColor rounded-full animate-ping opacity-75"></div>
              </div>

              <div className="md:w-[45%] md:text-left mb-4 md:mb-0">
                <div className="bg-[#fafafa] dark:bg-zinc-900 p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-themeColor/80 transition-all duration-300 group shadow-xl hover:shadow-themeColor/20 relative">
                  <h3 className="text-3xl font-bold text-black dark:text-white mb-2 group-hover:text-themeColor transition-colors">
                    Flutter Intern
                  </h3>
                  <h4 className="text-lg text-gray-600 dark:text-gray-400 font-medium font-saira">
                    Login2 IT Solutions |{" "}
                    <span className="text-themeColor font-bold">
                      June 2025 - July 2025
                    </span>
                  </h4>
                  
                  <div className="flex items-center gap-3 mt-6">
                    <a 
                      href="https://drive.google.com/file/d/1Tpmk2OC5HExUsV3hwiSWo5z2blMOkwHG/view?usp=drive_link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#fafafa] dark:bg-zinc-800 border border-themeColor/30 text-black dark:text-white text-sm font-bold rounded-xl hover:bg-themeColor hover:text-black hover:border-themeColor transition-all duration-300 group/link shadow-md shadow-themeColor/5 whitespace-nowrap"
                    >
                      <span>View Certificate</span>
                      <ExternalLink size={16} className="text-gray-400 group-hover/link:text-black transition-colors shrink-0" />
                    </a>
                    
                    <a 
                      href="https://www.login2itsolutions.com/about.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#fafafa] dark:bg-zinc-800 border border-themeColor/30 text-black dark:text-white text-sm font-bold rounded-xl hover:bg-themeColor hover:text-black hover:border-themeColor transition-all duration-300 group/link shadow-md shadow-themeColor/5 whitespace-nowrap"
                    >
                      <span>Company Details</span>
                      <ExternalLink size={16} className="text-gray-400 group-hover/link:text-black transition-colors shrink-0" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:w-[45%]">
                <div className="bg-[#fafafa] dark:bg-zinc-900 p-6 rounded-2xl border border-solid border-themeColor/30 dark:border-zinc-700 relative overflow-hidden group hover:border-themeColor/80 transition-all shadow-xl hover:shadow-themeColor/10">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                    <span className="text-6xl font-black text-themeColor">
                      02
                    </span>
                  </div>
                  <ul className="text-left text-gray-700 dark:text-gray-300 space-y-4">
                    <li className="flex gap-3">
                      <ChevronRight className="text-themeColor w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">
                        Spearheaded the design and implementation of a custom
                        <b>Widget Library</b> ensuring UI consistency across
                        multiple modules.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <ChevronRight className="text-themeColor w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">
                        Optimized app performance by refactoring heavy
                        computation logic into <b>Isolates</b>, reducing UI junk
                        by ~30%.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <ChevronRight className="text-themeColor w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">
                        Integrated <b>Firebase Authentication</b> and{" "}
                        <b>Firestore</b>
                        for real-time data sync and state persistence.
                      </span>
                    </li>
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {["Flutter", "Dart", "Performance", "UI/UX"].map(
                      (tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-black px-4 py-2 bg-themeColor/10 text-themeColor border border-themeColor/20 rounded-xl uppercase tracking-widest hover:bg-themeColor hover:text-black transition-colors"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Projects Section â€” Fan Card Carousel */}
      <section
        id="projects"
        className="py-20 px-4 md:px-20 bg-[#fafafa] dark:bg-zinc-900 min-h-screen flex flex-col justify-center transition-colors duration-300 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto w-full mb-16"
        >
          <p className="text-xs font-black tracking-[0.4em] uppercase mb-4 text-themeColor">
            Creative Works
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-black dark:text-white leading-tight mb-6">
            Featured
            <br />
            <ScrambleText text="Projects" className="text-themeColor" />
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md leading-relaxed">
            A curated selection of my most significant developments, showcasing
            innovation and technical depth.
          </p>
        </motion.div>

        {/* Fan Card Row */}
        <div className="w-full">
          <div
            className="flex items-end justify-start gap-8 md:gap-12 overflow-x-auto pb-20 px-10 md:px-[15vw] scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[
              {
                title: "AUTOCARE",
                subtitle: "Workshop Management System",
                desc: "Full-stack system to digitize automotive workflows into a centralized management platform.",
                tags: ["PHP", "MySQL", "Bootstrap", "JS"],
                link: "https://github.com/karthiknadamritham/AUTOCARE_workshopmanagementsystem",
                date: "Jan 2025 - Mar 2025",
                bg: "linear-gradient(160deg, #1a0a00 0%, #3d1f00 50%, #5c3010 100%)",
              },
              {
                title: "AI SPEECH",
                subtitle: "Word Pronunciation Engine",
                desc: "Intelligent pronunciation assessment with AI-powered speech recognition and TTS.",
                tags: ["Python", "Flask", "gTTS", "AI"],
                link: "https://github.com/karthiknadamritham/AI_WORD_PRONUNCIATION",
                date: "Jan 2025 - Mar 2025",
                bg: "linear-gradient(160deg, #000d1a 0%, #002040 50%, #003060 100%)",
              },
              {
                title: "KANBAN FLOW",
                subtitle: "Project Management App",
                desc: "Professional Kanban board with real-time drag-and-drop and team collaboration features.",
                tags: ["Angular", "TypeScript", "Firebase"],
                link: "https://github.com/karthiknadamritham/kanban_flow_Infosys_internship",
                date: "Feb 2026 - Present",
                bg: "linear-gradient(160deg, #001a0d 0%, #003320 50%, #004d30 100%)",
              },
              {
                title: "PORTFOLIO",
                subtitle: "Personal Portfolio Site",
                desc: "Premium dark-mode portfolio with glassmorphism, framer-motion animations, and AI cursor.",
                tags: ["React", "Tailwind", "Framer"],
                link: "https://github.com/karthiknadamritham",
                date: "Mar 2025 - Present",
                bg: "linear-gradient(160deg, #0f0020 0%, #25004d 50%, #3d0080 100%)",
              },
              {
                title: "CHOOSEEASY",
                subtitle: "Smart Career Guidance",
                desc: "A comprehensive career platform using psychometric assessments and extensive databases for personalized recommendations.",
                tags: ["React", "Tailwind", "Node.js", "MongoDB"],
                link: "https://github.com/karthiknadamritham/chooseeasy-website-5thsem",
                date: "January 2025",
                bg: "linear-gradient(160deg, #001a33 0%, #003366 50%, #004d99 100%)",
              },
            ].map((project, i, arr) => {
              const mid = Math.floor(arr.length / 2);
              const dist = i - mid;
              const rotate = dist * 4;
              const translateY = Math.abs(dist) * 20;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{
                    scale: 1.07,
                    rotate: 0,
                    y: -30,
                    zIndex: 50,
                    transition: { type: "spring", stiffness: 200, damping: 16 },
                  }}
                  className="group relative flex-shrink-0 cursor-pointer"
                  style={{
                    rotate: `${rotate}deg`,
                    translateY: `${translateY}px`,
                    zIndex: 10 - Math.abs(dist),
                    transformOrigin: "bottom center",
                  }}
                >
                  {/* Card shell */}
                  <div
                    className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 border border-white/10"
                    style={{
                      width: "clamp(190px, 21vw, 290px)",
                      height: "clamp(380px, 52vh, 530px)",
                    }}
                  >
                    {/* Grayscale bg layer (default) */}
                    <div
                      className="absolute inset-0 transition-all duration-700 group-hover:opacity-0"
                      style={{
                        background: project.bg,
                        filter: "grayscale(1) brightness(0.5)",
                      }}
                    />
                    {/* Color bg layer (on hover) */}
                    <div
                      className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100"
                      style={{
                        background: project.bg,
                        filter: "grayscale(0) brightness(0.85)",
                      }}
                    />

                    {/* Top header */}
                    <div className="absolute top-0 left-0 right-0 p-5 z-20">
                      <p className="text-[10px] font-black tracking-[0.35em] uppercase text-white/40 group-hover:text-white/75 transition-colors duration-500">
                        ///
                      </p>
                      <p className="text-[11px] text-white/45 group-hover:text-white/80 transition-colors duration-500 mt-1 leading-snug line-clamp-3 max-w-[72%]">
                        {project.desc}
                      </p>
                    </div>

                    {/* Vertical rotated title */}
                    <div className="absolute inset-y-0 left-0 flex items-end z-20 pb-24 pl-4">
                      <h3
                        className="font-black tracking-widest uppercase transition-all duration-500 text-white/60 group-hover:text-white group-hover:[text-shadow:0_0_30px_rgba(255,255,255,0.25)]"
                        style={{
                          writingMode: "vertical-rl",
                          textOrientation: "mixed",
                          transform: "rotate(180deg)",
                          fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)",
                        }}
                      >
                        {project.title}
                      </h3>
                    </div>

                    {/* Bottom info bar */}
                    <div
                      className="absolute bottom-0 left-0 right-0 z-20 p-5"
                      style={{
                        background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)",
                      }}
                    >
                      <p className="text-[9px] font-black tracking-widest uppercase text-white/45 group-hover:text-white/75 transition-colors duration-500 mb-2">
                        {project.date}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {project.tags.slice(0, 2).map((tag, t) => (
                            <span
                              key={t}
                              className="text-[8px] font-bold px-2 py-0.5 rounded border border-white/10 bg-white/5 text-white/45 group-hover:border-white/35 group-hover:text-white/85 transition-all duration-500"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5 text-white/45 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-500 hover:scale-110 shrink-0"
                        >
                          <Github size={13} />
                        </a>
                      </div>
                    </div>

                    {/* White corner fold top-right */}
                    <div
                      className="absolute top-0 right-0 z-30"
                      style={{
                        width: "44px",
                        height: "44px",
                        background: "#fafafa",
                        clipPath: "polygon(100% 0, 100% 100%, 0 0)",
                      }}
                    />
                    {/* White spine on right edge */}
                    <div
                      className="absolute top-0 right-0 bottom-0 z-10 rounded-r-2xl"
                      style={{
                        width: "36px",
                        background: "#fafafa",
                      }}
                    />
                  </div>

                  {/* Subtitle fades in under card on hover */}
                  <p className="text-center text-[9px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mt-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {project.subtitle}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-20 px-4 md:px-20 bg-[#fafafa] dark:bg-black min-h-screen flex flex-col justify-center transition-colors duration-300 relative z-10 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto w-full mb-16"
        >
          <p className="text-xs font-black tracking-[0.4em] uppercase mb-4 text-themeColor">
            Academic Background
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-black dark:text-white leading-tight mb-6">
            My
            <br />
            <ScrambleText text="Education" className="text-themeColor" />
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md leading-relaxed">
            The foundational learning experiences that shaped my understanding
            of computer science and software engineering.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto w-full relative">
          {/* Education List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-6">
              {[
                {
                  id: "BTech",
                  degree: "Bachelor of Technology - Computer Science",
                  school: "Lovely Professional University, Punjab",
                  year: "Since August 2023",
                  score: "CGPA: 7.36",
                  desc: "Specializing in Software Engineering & Core CS fundamentals.",
                  image: "/Lpu_cam.png",
                  hoverText: "Currently at LPU"
                },
                {
                  id: "Intermediate",
                  degree: "Intermediate",
                  school: "Mother Teresa Memorial Central School, Kerala",
                  year: "2021 - 2023",
                  score: "Percentage: 83%",
                  desc: "Focused on Physics, Chemistry, and Mathematics.",
                  image: "/MTM.png",
                  hoverText: "MTM Campus View"
                },
                {
                  id: "Matriculation",
                  degree: "Matriculation",
                  school: "National Central School, Kerala",
                  year: "2020 - 2021",
                  score: "Percentage: 85%",
                  desc: "Completed foundation schooling with distinction.",
                  image: "/NCS.jpeg",
                  hoverText: "NCS Campus View"
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  onMouseEnter={() => setHoveredEdu(item.id)}
                  onMouseLeave={() => setHoveredEdu(null)}
                  layout
                  transition={{
                    layout: { type: "spring", stiffness: 200, damping: 25 },
                    opacity: { duration: 0.3 },
                  }}
                  className={`p-8 rounded-3xl border group cursor-none relative overflow-hidden transition-colors duration-500 ${
                    hoveredEdu === item.id
                      ? "bg-themeColor/10 border-themeColor shadow-2xl shadow-themeColor/20"
                      : "bg-[#fafafa] dark:bg-zinc-900 border-gray-100 dark:border-zinc-800"
                  }`}
                >
                  <div className="flex flex-col xl:flex-row items-center gap-8">
                    {/* Content Box */}
                    <motion.div
                      layout
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                      }}
                      className={`flex-1 w-full ${hoveredEdu === item.id && item.image ? "xl:max-w-[50%]" : "w-full"}`}
                    >
                      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                        <div>
                          <h4 className="text-2xl font-bold text-black dark:text-white group-hover:text-themeColor transition-colors">
                            {item.degree}
                          </h4>
                          <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
                            {item.school}
                          </p>
                        </div>
                        <span className="text-sm font-bold px-4 py-2 bg-themeColor text-black rounded-xl uppercase tracking-wider shrink-0">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-gray-500 dark:text-gray-500 text-lg italic mb-6">
                        {item.desc}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400 text-sm uppercase font-bold tracking-widest">
                            Result:
                          </span>
                          <span className="text-2xl font-black text-themeColor">
                            {item.score}
                          </span>
                        </div>
                        {item.image && (
                          <span className="text-[10px] text-gray-400 group-hover:text-themeColor transition-colors uppercase font-bold tracking-[0.2em] hidden xl:block animate-pulse">
                            {hoveredEdu === item.id
                              ? item.hoverText || "Preview"
                              : "Hover for Preview"}
                          </span>
                        )}
                      </div>
                    </motion.div>

                    {/* Inline Image Reveal (Dynamic) */}
                    {item.image && (
                      <AnimatePresence>
                        {hoveredEdu === item.id && (
                          <motion.div
                            initial={{ opacity: 0, x: 20, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 20, scale: 0.95 }}
                            transition={{
                              type: "spring",
                              stiffness: 260,
                              damping: 20,
                              opacity: { duration: 0.2 },
                            }}
                            className="hidden xl:block flex-1 w-full"
                          >
                            <div className="relative group/img">
                              <div className="absolute -inset-2 bg-themeColor/20 blur-xl rounded-2xl"></div>
                              <img
                                src={item.image}
                                alt={item.school}
                                className="w-full h-[250px] object-cover rounded-2xl border-2 border-themeColor shadow-lg relative z-10"
                              />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificates & Achievements Section */}
      <CertificatesSection />

      {/* Resume Section */}
      <section
        id="resume"
        className="py-20 px-4 md:px-20 bg-[#fafafa] dark:bg-black min-h-screen flex flex-col justify-center transition-colors duration-300 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto w-full mb-16"
        >
          <p className="text-xs font-black tracking-[0.4em] uppercase mb-4 text-themeColor">
            Professional Document
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-black dark:text-white leading-tight mb-6">
            My&nbsp;
            <ScrambleText text="Resume" className="text-themeColor" />
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md leading-relaxed">
            Take a comprehensive look at my professional journey, aggregated
            skills, and formal qualifications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto w-full relative rounded-3xl overflow-hidden border border-gray-200 dark:border-zinc-800 shadow-2xl bg-white dark:bg-zinc-900"
          style={{ height: "600px" }}
        >
          {/* PDF Embed showing top half */}
          <div className="w-full h-[1200px] overflow-hidden">
            <object
              data="/General CV 12307508.pdf#toolbar=0&navpanes=0&scrollbar=0"
              type="application/pdf"
              className="w-full h-full pointer-events-none"
            >
              <p className="p-10 text-center dark:text-white">
                Your browser does not support PDFs. Please download it below.
              </p>
            </object>
          </div>

          {/* Translucent Glass Overlay */}
          <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent backdrop-blur-sm flex flex-col items-center justify-end pb-12 px-6">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-8 text-center drop-shadow-md">
              Want to read the full details?
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4 w-full">
              <a
                href="/General CV 12307508.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-zinc-900 border border-themeColor text-themeColor font-bold hover:bg-themeColor hover:text-black hover:scale-105 transition-all shadow-lg"
              >
                <FileText size={20} />
                View PDF
              </a>
              <a
                href="/General CV 12307508.pdf"
                download="Karthik_SN_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-themeColor text-black font-bold hover:bg-white hover:scale-105 transition-all shadow-lg shadow-themeColor/30"
              >
                <Download size={20} />
                Download PDF
              </a>
              <button
                onClick={() => {
                  setImageZoom(1);
                  setIsImageModalOpen(true);
                }}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold hover:scale-105 transition-all shadow-lg"
              >
                <ImageIcon size={20} />
                View Image
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer / Contact (New Design) */}
      <footer
        id="contact"
        className="py-20 px-4 md:px-20 bg-[#fafafa] dark:bg-[#0a0a0a] transition-colors duration-300 relative z-10 w-full font-sans border-t border-gray-200 dark:border-zinc-900"
      >
        <div className="max-w-6xl mx-auto w-full flex flex-col gap-16">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div className="max-w-2xl">
              <h2 className="text-6xl md:text-8xl font-black text-black dark:text-white leading-[1.0] tracking-tighter mb-6">
                Let's Build <br />
                <span className="italic text-themeColor">Something</span> <br />
                Together.
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-lg mt-8">
                Combining surgical precision with electric creativity to
                transform digital ideas into premium cinematic experiences.
              </p>
            </div>
            <div className="shrink-0 mb-4 md:mb-0">
              <div className="w-32 h-32 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-themeColor/20 shadow-xl">
                <img
                  src="/myself.jpg"
                  alt="Karthik S N"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full mt-4">
            {/* Left Huge Card */}
            <div className="md:col-span-7 bg-[#fafafa] dark:bg-[#141414] rounded-[2rem] p-8 md:p-12 border border-gray-100 dark:border-zinc-800/50 shadow-xl dark:shadow-none flex flex-col justify-between group">
              <form onSubmit={handleContactSubmit} className="flex flex-col gap-6 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                      Full Designation <span className="text-themeColor">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-transparent border border-gray-300 dark:border-zinc-700/50 p-4 rounded-xl text-black dark:text-white outline-none focus:border-themeColor transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                      Electronic Mail <span className="text-themeColor">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="jane@company.io"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-transparent border border-gray-300 dark:border-zinc-700/50 p-4 rounded-xl text-black dark:text-white outline-none focus:border-themeColor transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                    Subject of Discourse <span className="text-themeColor">*</span>
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-transparent border border-gray-300 dark:border-zinc-700/50 p-4 rounded-xl text-black dark:text-white outline-none focus:border-themeColor transition-all appearance-none"
                  >
                    <option value="" disabled className="dark:bg-zinc-900">Select a subject...</option>
                    <option value="Freelance Project" className="dark:bg-zinc-900">Freelance Project</option>
                    <option value="Collaboration" className="dark:bg-zinc-900">Collaboration</option>
                    <option value="Other Inquiry" className="dark:bg-zinc-900">Other Inquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                    Message <span className="text-themeColor">*</span>
                  </label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Describe your proposition, vision, or context..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-transparent border border-gray-300 dark:border-zinc-700/50 p-4 rounded-xl text-black dark:text-white outline-none focus:border-themeColor transition-all resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                    Attach File (Optional)
                  </label>
                  <input
                    type="file"
                    onChange={(e) => setAttachment(e.target.files[0])}
                    className="text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-themeColor/10 file:text-themeColor hover:file:bg-themeColor/20 transition-all cursor-pointer"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isDispatching}
                  className="w-full mt-2 flex items-center justify-center gap-2 bg-themeColor hover:bg-white text-black font-bold text-lg py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-themeColor/20 disabled:opacity-50 group/btn hover:scale-[1.02]"
                >
                  <span className="flex items-center gap-2">
                    {isDispatching ? "Dispatching..." : "Dispatch Message"}
                    <Send size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </span>
                </button>
              </form>
            </div>

            {/* Right Cards */}
            <div className="md:col-span-5 flex flex-col gap-6">
              <a
                href="https://linkedin.com/in/karthiknadamritham"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fafafa] dark:bg-[#141414] rounded-[2rem] p-8 border border-gray-100 dark:border-zinc-800/50 shadow-xl dark:shadow-none flex items-center justify-between group hover:border-themeColor/50 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-zinc-800/80 text-black dark:text-white flex items-center justify-center group-hover:bg-themeColor group-hover:text-black transition-colors">
                    <Linkedin size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-black dark:text-white">
                      LinkedIn
                    </h4>
                    <p className="text-gray-500 text-sm font-medium mt-1">
                      Professional Network
                    </p>
                  </div>
                </div>
                <ExternalLink
                  size={20}
                  className="text-gray-400 group-hover:text-themeColor transition-colors"
                />
              </a>

              <a
                href="https://github.com/karthiknadamritham"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fafafa] dark:bg-[#141414] rounded-[2rem] p-8 border border-gray-100 dark:border-zinc-800/50 shadow-xl dark:shadow-none flex items-center justify-between group hover:border-themeColor/50 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-zinc-800/80 text-black dark:text-white flex items-center justify-center group-hover:bg-themeColor group-hover:text-black transition-colors">
                    <Github size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-black dark:text-white">
                      GitHub
                    </h4>
                    <p className="text-gray-500 text-sm font-medium mt-1">
                      Source Code & Labs
                    </p>
                  </div>
                </div>
                <ExternalLink
                  size={20}
                  className="text-gray-400 group-hover:text-themeColor transition-colors"
                />
              </a>

              <div className="bg-[#fafafa] dark:bg-[#141414] rounded-[2rem] p-8 border border-gray-100 dark:border-zinc-800/50 shadow-xl dark:shadow-none flex items-center gap-6 flex-1 hover:border-themeColor/50 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-zinc-800/80 text-black dark:text-white flex items-center justify-center shrink-0">
                  <span className="relative flex h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-themeColor opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-themeColor"></span>
                  </span>
                </div>
                <div>
                  <span className="text-xs font-black tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-2 block">
                    Currently curating from
                  </span>
                  <h4 className="text-2xl font-bold text-black dark:text-white">
                    Kerala, IN
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Review Section */}
          <div className="flex flex-col items-center justify-center py-16 mt-8">
            <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-10 text-center tracking-tight">
              Give a Review for my{" "}
              <span className="italic text-themeColor">Work</span>.
            </h3>
            <div className="flex flex-row justify-between md:justify-center items-center gap-4 w-full max-w-6xl mx-auto overflow-x-auto pb-6 scrollbar-hide px-4">
              {["Work", "Coding", "Architecture", "Design"].map((topic, i) => {
                const currentRating = ratings[topic] || 0;
                const currentHover = hoverRatings[topic] || 0;
                
                return (
                  <div
                    key={i}
                    className="px-4 md:px-6 py-6 text-black dark:text-white font-black flex flex-col items-center gap-4 group flex-1 min-w-[200px] md:min-w-[220px] cursor-default transition-all duration-300 transform hover:-translate-y-2"
                    onMouseLeave={() => setHoverRatings({ ...hoverRatings, [topic]: 0 })}
                  >
                    <div className="flex items-center gap-2 text-xl md:text-2xl tracking-wide uppercase whitespace-nowrap">
                      <span>{topic}</span>
                    </div>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((starValue) => (
                        <Star 
                          key={starValue} 
                          size={32} 
                          onClick={() => setRatings({ ...ratings, [topic]: starValue })}
                          onMouseEnter={() => setHoverRatings({ ...hoverRatings, [topic]: starValue })}
                          className={`cursor-pointer transition-all duration-300 filter drop-shadow hover:scale-125 ${
                            starValue <= (currentHover || currentRating) 
                              ? "text-yellow-400 fill-yellow-400" 
                              : "text-gray-300 dark:text-zinc-700 fill-transparent"
                          }`} 
                        />
                      ))}
                    </div>
                    {currentRating > 0 && (
                      <span className="text-sm font-bold text-themeColor animate-fade-in-up mt-2">
                        Thanks for rating!
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-zinc-800 to-transparent my-4" />

          {/* Bottom Footer */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left pb-4">
            <div>
              <h2 className="text-2xl font-black text-black dark:text-white tracking-widest uppercase mb-2">
                Karthik S N
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 tracking-[0.2em] font-bold uppercase">
                Precision. Creativity. Motion.
              </p>
            </div>

            <div className="flex gap-10 text-sm font-black tracking-widest uppercase text-gray-800 dark:text-gray-400">
              <a
                href="https://linkedin.com/in/karthiknadamritham"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-themeColor transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/karthiknadamritham"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-themeColor transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:karthiksn20112004@gmail.com"
                className="hover:text-themeColor transition-colors"
              >
                Email
              </a>
            </div>

            <div className="text-xs text-gray-400 dark:text-gray-600 tracking-[0.1em] font-medium uppercase">
              &copy; {new Date().getFullYear()} Karthik S N. All Rights
              Reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* CV Image Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            {/* Modal Controls */}
            <div className="absolute top-6 right-6 flex items-center gap-4 z-50">
              <button
                onClick={() =>
                  setImageZoom((prev) => Math.max(0.5, prev - 0.25))
                }
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all"
                aria-label="Zoom Out"
              >
                <ZoomOut size={24} />
              </button>
              <button
                onClick={() => setImageZoom(1)}
                className="px-4 py-2 rounded-full font-bold bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all"
              >
                {Math.round(imageZoom * 100)}%
              </button>
              <button
                onClick={() => setImageZoom((prev) => Math.min(3, prev + 0.25))}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all"
                aria-label="Zoom In"
              >
                <ZoomIn size={24} />
              </button>
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="p-3 ml-4 rounded-full bg-themeColor text-black hover:bg-white hover:scale-110 transition-all shadow-lg"
                aria-label="Close Modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Draggable/Zoomable Image */}
            <motion.div
              className="w-full h-full flex items-center justify-center overflow-hidden"
              onClick={() => setIsImageModalOpen(false)} // Close when clicking backdrop
            >
              <motion.img
                src="/GeneralCV.jpg"
                alt="Resume"
                drag
                dragConstraints={{
                  left: -1000,
                  right: 1000,
                  top: -1000,
                  bottom: 1000,
                }} // Allow dragging when zoomed
                onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
                animate={{ scale: imageZoom }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl cursor-grab active:cursor-grabbing"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Download CV Selection Modal */}
      <AnimatePresence>
        {isDownloadModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setIsDownloadModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#fafafa] dark:bg-zinc-900 w-full max-w-2xl rounded-[2.5rem] border border-gray-100 dark:border-zinc-800 shadow-2xl relative overflow-hidden p-8 md:p-12"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsDownloadModalOpen(false)}
                className="absolute top-6 right-6 p-3 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400 hover:bg-themeColor hover:text-black transition-all"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-10">
                <span className="text-xs font-black tracking-[0.4em] uppercase text-themeColor mb-4 block">
                  Get My Resume
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-4">
                  Select <span className="italic text-themeColor">Format</span>
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  Which version would you like to download?
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* PDF Option */}
                <a
                  href="/General CV 12307508.pdf"
                  download
                  className="group relative bg-white dark:bg-zinc-800/50 p-8 rounded-3xl border border-gray-100 dark:border-zinc-800 hover:border-themeColor transition-all duration-500 flex flex-col items-center text-center shadow-lg hover:shadow-themeColor/20"
                >
                  <div className="w-20 h-20 rounded-2xl bg-themeColor/10 text-themeColor flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <FileText size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                    Professional PDF
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    Best for printing and formal applications.
                  </p>
                  <div className="mt-auto px-6 py-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-black dark:text-white font-bold text-sm group-hover:bg-themeColor group-hover:text-black transition-colors">
                    Download PDF
                  </div>
                </a>

                {/* Image Option */}
                <a
                  href="/GeneralCV.jpg"
                  download
                  className="group relative bg-white dark:bg-zinc-800/50 p-8 rounded-3xl border border-gray-100 dark:border-zinc-800 hover:border-themeColor transition-all duration-500 flex flex-col items-center text-center shadow-lg hover:shadow-themeColor/20"
                >
                  <div className="w-20 h-20 rounded-2xl bg-themeColor/10 text-themeColor flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <ImageIcon size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                    High-Res Image
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    Quick preview and easy social sharing.
                  </p>
                  <div className="mt-auto px-6 py-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-black dark:text-white font-bold text-sm group-hover:bg-themeColor group-hover:text-black transition-colors">
                    Download JPG
                  </div>
                </a>
              </div>

              {/* Bottom Decoration */}
              <div className="mt-12 pt-8 border-t border-gray-100 dark:border-zinc-800 text-center">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                  Designed by Karthik S N &bull; 2026
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;

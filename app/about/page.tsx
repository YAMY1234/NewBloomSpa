"use client";

import { motion } from "framer-motion";
import { Heart, Award, Users, Sparkles, Target, Eye, Star, MapPin, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

// Bilingual text helper
interface BilingualText {
  en: string;
  zh: string;
}

// About page content
const content = {
  hero: {
    title: { en: "About Us", zh: "关于我们" },
    subtitle: { 
      en: "A brand new wellness destination in Round Lake, IL - bringing professional massage and spa services to our community", 
      zh: "伊利诺伊州 Round Lake 全新的健康放松目的地 - 为社区带来专业的按摩和水疗服务" 
    }
  },
  story: {
    title: { en: "Our Story", zh: "我们的故事" },
    p1: { 
      en: "NewBloom Spa was founded in January 2026, born from a passion for wellness and a desire to bring high-quality spa services to the Round Lake community in Illinois. Our founders recognized the need for a peaceful retreat where locals could escape the stresses of daily life.", 
      zh: "NewBloom Spa 于 2026 年 1 月创立，源于对健康的热爱以及为伊利诺伊州 Round Lake 社区带来高品质水疗服务的愿望。我们的创始人深知当地居民需要一个宁静的放松场所，让人们能够远离日常生活的压力。" 
    },
    p2: { 
      en: "Though we are newly established, our team brings years of professional experience and expertise. We've carefully designed our space to create a warm, inviting atmosphere where every client feels welcomed and valued from the moment they walk through our doors.", 
      zh: "虽然我们是新开业的，但我们的团队拥有多年的专业经验和技术。我们精心设计了空间，营造温馨宜人的氛围，让每一位客户从踏入我们大门的那一刻起就感受到欢迎和重视。" 
    },
    p3: { 
      en: "At NewBloom Spa, we believe everyone deserves moments of tranquility and self-care. We're committed to providing exceptional service with professional techniques, premium products, and genuine care. Join us as we grow and bloom together with our community.", 
      zh: "在 NewBloom Spa，我们相信每个人都值得拥有宁静和自我关爱的时光。我们致力于以专业的技术、优质的产品和真诚的关怀提供卓越的服务。欢迎与我们一起成长，与社区共同绽放。" 
    }
  },
  vision: {
    title: { en: "Our Vision", zh: "我们的愿景" },
    description: { 
      en: "To become the most trusted wellness destination in the Round Lake area, where every client can find their perfect moment of relaxation and rejuvenation. We aspire to be a cornerstone of health and well-being in our community.", 
      zh: "成为 Round Lake 地区最受信赖的健康放松目的地，让每一位客户都能找到完美的放松和焕新时光。我们立志成为社区健康与福祉的基石。" 
    }
  },
  mission: {
    title: { en: "Our Mission", zh: "我们的使命" },
    description: { 
      en: "To provide professional, personalized spa services in a serene environment, helping our clients achieve balance, relaxation, and renewed energy. We treat every visit as an opportunity to make a positive impact on someone's well-being.", 
      zh: "在宁静的环境中提供专业、个性化的水疗服务，帮助客户实现身心平衡、放松和活力焕发。我们将每一次到访都视为对他人健康产生积极影响的机会。" 
    }
  },
  values: {
    title: { en: "Our Values", zh: "我们的价值观" },
    subtitle: { en: "These core values guide everything we do", zh: "这些核心价值观指引着我们的每一项服务" },
    items: [
      {
        icon: Heart,
        title: { en: "Heartfelt Service", zh: "用心服务" },
        description: { 
          en: "Every interaction is filled with genuine care and attention. We treat each client like family.", 
          zh: "每一次互动都充满真诚的关怀和用心。我们把每位客户都当作家人。" 
        }
      },
      {
        icon: Award,
        title: { en: "Professional Excellence", zh: "专业卓越" },
        description: { 
          en: "Our skilled therapists bring years of training and experience to deliver outstanding results.", 
          zh: "我们技艺精湛的理疗师拥有多年的培训和经验，提供卓越的服务效果。" 
        }
      },
      {
        icon: Sparkles,
        title: { en: "Premium Quality", zh: "优质品质" },
        description: { 
          en: "We use only high-quality products and maintain the highest standards of cleanliness and comfort.", 
          zh: "我们只使用高品质产品，并保持最高标准的清洁和舒适度。" 
        }
      },
      {
        icon: Users,
        title: { en: "Community Focus", zh: "服务社区" },
        description: { 
          en: "We're proud to serve Round Lake and surrounding areas, building lasting relationships with our neighbors.", 
          zh: "我们很荣幸为 Round Lake 及周边地区服务，与邻里建立持久的友好关系。" 
        }
      }
    ]
  },
  team: {
    title: { en: "Meet Our Team", zh: "认识我们的团队" },
    subtitle: { en: "Skilled professionals dedicated to your wellness", zh: "专注于您健康的专业人士" },
    experience: { en: "experience", zh: "经验" },
    specialty: { en: "Specialties:", zh: "擅长领域：" },
    members: [
      {
        name: "Cindy",
        role: { en: "Founder & Lead Therapist", zh: "创始人 & 首席理疗师" },
        experience: { en: "10+ years", zh: "10年以上" },
        specialty: { en: "Full Body Massage, Signature Relief Therapy", zh: "全身按摩、招牌舒缓疗法" },
        description: { 
          en: "With over a decade of experience, Cindy founded NewBloom Spa to bring professional wellness services to Round Lake. Her expertise in therapeutic massage helps clients achieve deep relaxation and relief.", 
          zh: "Cindy 拥有超过十年的经验，创立 NewBloom Spa 是为了将专业的健康服务带到 Round Lake。她在理疗按摩方面的专业技术帮助客户实现深度放松和舒缓。" 
        }
      },
      {
        name: "Annie",
        role: { en: "Senior Massage Therapist", zh: "高级按摩理疗师" },
        experience: { en: "8 years", zh: "8年" },
        specialty: { en: "Therapeutic Massage, Lymphatic Drainage", zh: "理疗按摩、淋巴引流" },
        description: { 
          en: "Annie specializes in therapeutic techniques that target problem areas and promote overall wellness. Her gentle yet effective approach leaves clients feeling renewed and energized.", 
          zh: "Annie 专注于针对问题部位的理疗技术，促进整体健康。她温和而有效的方法让客户感到焕然一新、精力充沛。" 
        }
      },
      {
        name: "Jenny",
        role: { en: "Spa Therapist", zh: "水疗理疗师" },
        experience: { en: "6 years", zh: "6年" },
        specialty: { en: "Facial Care, Foot Therapy, Relaxation Massage", zh: "面部护理、足部疗法、放松按摩" },
        description: { 
          en: "Jenny brings warmth and skill to every treatment. Her attention to detail and caring nature ensure each client receives a personalized, memorable spa experience.", 
          zh: "Jenny 为每一次护理带来温暖和技巧。她对细节的关注和体贴的性格确保每位客户都能获得个性化、难忘的水疗体验。" 
        }
      }
    ]
  },
  stats: {
    newBusiness: { en: "New in 2026", zh: "2026年新开业" },
    location: { en: "Round Lake, IL", zh: "伊利诺伊州 Round Lake" },
    therapists: { en: "Expert Therapists", zh: "专业理疗师" },
    commitment: { en: "100% Committed", zh: "100% 用心" }
  },
  testimonials: {
    title: { en: "What Our Clients Say", zh: "客户评价" },
    subtitle: { en: "We're building our reputation one happy client at a time", zh: "我们正在一步步建立口碑" },
    items: [
      {
        name: "Michelle K.",
        rating: 5,
        comment: { 
          en: "Just discovered this gem in Round Lake! The environment is so peaceful and Cindy's massage was exactly what I needed. Will definitely be back!", 
          zh: "刚刚在 Round Lake 发现了这个宝藏！环境非常宁静，Cindy 的按摩正是我需要的。一定会再来！" 
        }
      },
      {
        name: "David L.",
        rating: 5,
        comment: { 
          en: "Great new spa in the area! Professional service, clean facility, and the staff is so friendly. Highly recommend the couples massage!", 
          zh: "这个地区很棒的新水疗店！专业的服务，干净的环境，员工非常友好。强烈推荐双人按摩！" 
        }
      },
      {
        name: "Sarah T.",
        rating: 5,
        comment: { 
          en: "Finally a quality spa close to home! Annie's therapeutic massage helped my back pain so much. The whole experience was wonderful.", 
          zh: "终于在家附近有了一家高品质的水疗店！Annie 的理疗按摩对我的背痛帮助很大。整个体验都很棒。" 
        }
      }
    ]
  }
};

export default function AboutPage() {
  const { language } = useLanguage();
  const lang = language as 'en' | 'zh';

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary-100 via-sage-50 to-primary-50">
        <div className="absolute inset-0 bg-[url('/images/head4.jpg')] bg-cover bg-center opacity-20" />
        
        <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium"
            >
              <Calendar className="w-4 h-4" />
              {lang === 'en' ? 'Proudly serving since January 2026' : '自2026年1月起为您服务'}
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900">
              {content.hero.title[lang]}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {content.hero.subtitle[lang]}
            </p>
            <div className="flex items-center justify-center gap-2 text-primary-600">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">1829 S Cedar Lake Rd, Round Lake, IL 60073</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square rounded-2xl bg-[url('/images/body.jpg')] bg-cover bg-center shadow-2xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-700 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                {lang === 'en' ? 'Fresh Start in 2026' : '2026年全新开始'}
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
                {content.story.title[lang]}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>{content.story.p1[lang]}</p>
                <p>{content.story.p2[lang]}</p>
                <p>{content.story.p3[lang]}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gradient-to-br from-sage-50 to-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-10 shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                {content.vision.title[lang]}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {content.vision.description[lang]}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-10 shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-sage-600 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                {content.mission.title[lang]}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {content.mission.description[lang]}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
            >
              {content.values.title[lang]}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              {content.values.subtitle[lang]}
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {content.values.items.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-600 to-sage-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                  {value.title[lang]}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description[lang]}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gradient-to-br from-sage-50 to-primary-50">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
            >
              {content.team.title[lang]}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              {content.team.subtitle[lang]}
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {content.team.members.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-square bg-gradient-to-br from-primary-200 to-sage-200 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-white/80 flex items-center justify-center">
                    <span className="text-5xl font-serif font-bold text-primary-600">
                      {member.name[0]}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">
                    {member.role[lang]}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Award className="w-4 h-4 mr-2" />
                    {member.experience[lang]} {content.team.experience[lang]}
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">{content.team.specialty[lang]}</p>
                    <p className="text-sm text-gray-600">{member.specialty[lang]}</p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.description[lang]}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-sage-600 to-sage-800 text-white">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-4 gap-12"
          >
            {[
              { icon: Calendar, number: "2026", label: content.stats.newBusiness[lang] },
              { icon: MapPin, number: "IL", label: content.stats.location[lang] },
              { icon: Users, number: "3", label: content.stats.therapists[lang] },
              { icon: Heart, number: "100%", label: content.stats.commitment[lang] }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-sage-200" />
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-xl text-sage-100">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
            >
              {content.testimonials.title[lang]}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              {content.testimonials.subtitle[lang]}
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {content.testimonials.items.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-sage-50 to-primary-50 rounded-2xl p-8 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.comment[lang]}&rdquo;
                </p>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

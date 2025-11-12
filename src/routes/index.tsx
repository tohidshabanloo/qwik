import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import "./resume.css";

interface WorkExperience {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
  projects?: string[];
}

interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description: string[];
  projects?: string[];
}

const aboutMe = {
  title: "در مورد من",
  content:
    "یک طراح فریلنسر فرانت اند با بیش از 11 سال تجربه هستم. کار من این است که برای افراد شگفت انگیز در سرتاسر جهان کدنویسی می کنم. من کارم را دوست دارم و علاقه مند هستم تا با افراد جدید کار کنم چون آدم های جدید تجربیات جدید هستند.",
};

const workExperiences: WorkExperience[] = [
  {
    company: "شرکت شهر فرودگاهی امام خمینی",
    position: "پیاده سازی و نگهداری سامانه های درون سازمانی",
    period: "۱۴۰2 - تاکنون",
    location: "فرودگاه امام خمینی",
    description: [
      "ادغام دیتابیس های درون سازمانی و پیاده سازی در قالب فرانت اند (با استفاده از Nextjs و Nodejs)",
      "نگهداری وبسایت فرودگاه",
    ],
    projects: [
      "تسک منیجر هوشمند",
      "دایرکتوری کلاینت ها بر اساس شبکه",
      "گزارش گیری روزانه در قالب Word",
    ],
  },
  {
    company: "شرکت مپصا",
    position: "دوره بوت کمپ برنامه نویسی",
    period: "۱۴۰۰ - ۱۴۰2",
    location: "تهران",
    description: [
      "طراحی و پیاده سازی پروژه های تیمی، راه اندازی وبسایت های فروشگاهی با فریمورک next.js و کتابخانه react.js",
    ],
    projects: ["raikart", "bebinkharid", "Kafka", "Natasun", "ZKdiet"],
  },
  {
    company: "نیونیل و آلتون",
    position: "تولید محتوای آنلاین",
    period: "۱۳۹۸ - ۱۴۰۰",
    location: "تهران",
    description: [
      "خلق محتوای آنلاین برای فروشگاه زنجیره ای نیونیل و آلتون اُپتیک در قالب فیلم تبلیغاتی، عکس صنعتی و راه اندازی وبسایت فروشگاهی.",
    ],
    projects: ["newnil", "altonoptic"],
  },
  {
    company: "فریلنسر",
    position: "طراحی سایت و سئو",
    period: "۱۳۹۴ - ۱۳۹۸",
    location: "تهران",
    description: [
      "انجام پروژه در قالب پکیج طراحی سایت با استفاده از وردپرس و پرستاشاپ، همینطور بهینه سازی (سئو)برای کسب و کارهای اینترنتی و فروشگاه های فیزیکی نظیر آرایشگاه دیپلمات، املاک ایرانیان و شرکت ناتاسان",
    ],
    projects: ["diplomat", "AmlakIranian", "Natasun"],
  },
  {
    company: "شرکت رهنمون (ایران سئو)",
    position: "کارشناس سئو",
    period: "۱۳۹۲ - ۱۳۹۴",
    location: "تهران",
    description: [
      "کارشناس امور سئو زیر نظر مهدی رودکی، ایجاد محتوای متنی برای بهینه سازی سایت، ایجاد بلاگ و وبسایت های فروشگاهی با سیستم مدیریت محتوای وردپرس برای وبسایت هایی نظیر کهکشان نور و سحر اس ام اس",
    ],
    projects: ["kahkeshan", "saharsms"],
  },
];

const educations: Education[] = [
  {
    institution: "بوت کمپ مپصا",
    degree: "دوره جاوا اسکریپت و ریکت",
    period: "۱۴۰۰ - ۱۴۰۱",
    location: "تهران",
    description: [
      "۱۶۰ ساعت برنامه نویسی فرانت اند با زبان جاوااسکریپت، فریمورک next.js و کتابخانه react.js، انجام پروژه های تیمی برای راه اندازی وبسایت های فروشگاهی با استفاده از tailwind، redux و کار با api.",
    ],
    projects: ["raikart", "bebinkharid", "Kafka", "Natasun", "کهکشان نور"],
  },
  {
    institution: "کهکشان نور",
    degree: "دوره کامل مهندسی شبکه",
    period: "۱۳۹۲ - ۱۳۹۴",
    location: "تهران",
    description: [
      "گذراندن سه دوره network+ ، mcsa و ccna طی ۳۰۰ ساعت و و کانفیگ شبکه به روی سیستم های اداری.",
    ],
    projects: ["cdigit"],
  },
  {
    institution: "دانشگاه باراجین",
    degree: "کارشناسی سخت افزار کامپیوتر",
    period: "۱۳۹۰ - ۱۳۹۴",
    location: "قزوین",
    description: [
      "گذراندن رشته مهندسی کامپیوتر، سخت افزار، در مقطع کارشناسی در دانشگاه آزاد واحد قزوین، باراجین.",
    ],
  },
];

export default component$(() => {
  return (
    <div class="resume-container">
      <header class="resume-header">
        <h1 class="resume-title">رزومه</h1>
      </header>

      <section class="resume-section">
        <h2 class="section-title">{aboutMe.title}</h2>
        <p class="about-content">{aboutMe.content}</p>
      </section>

      <section class="resume-section">
        <h2 class="section-title">تجربیات کاری</h2>
        <p class="section-subtitle">از سال ۱۳۹۲ تاکنون</p>
        <div class="experience-list">
          {workExperiences.map((exp, index) => (
            <div key={index} class="experience-item">
              <div class="experience-header">
                <h3 class="company-name">{exp.company}</h3>
                <div class="experience-meta">
                  <span class="position">{exp.position}</span>
                  <span class="period">{exp.period}</span>
                  <span class="location">{exp.location}</span>
                </div>
              </div>
              <ul class="description-list">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              {exp.projects && exp.projects.length > 0 && (
                <div class="projects-section">
                  <h4 class="projects-title">نمونه کارها</h4>
                  <ul class="projects-list">
                    {exp.projects.map((project, i) => (
                      <li key={i} class="project-item">
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section class="resume-section">
        <h2 class="section-title">تحصیلات</h2>
        <p class="section-subtitle">از سال ۱۳۹۰ تاکنون</p>
        <div class="education-list">
          {educations.map((edu, index) => (
            <div key={index} class="education-item">
              <div class="education-header">
                <h3 class="institution-name">{edu.institution}</h3>
                <div class="education-meta">
                  <span class="degree">{edu.degree}</span>
                  <span class="period">{edu.period}</span>
                  <span class="location">{edu.location}</span>
                </div>
              </div>
              <ul class="description-list">
                {edu.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              {edu.projects && edu.projects.length > 0 && (
                <div class="projects-section">
                  <h4 class="projects-title">نمونه کارها</h4>
                  <ul class="projects-list">
                    {edu.projects.map((project, i) => (
                      <li key={i} class="project-item">
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <footer class="resume-footer">
        <p>&copy; {new Date().getFullYear()} - تمامی حقوق محفوظ است</p>
      </footer>
    </div>
  );
});

export const head: DocumentHead = {
  title: "رزومه - طراح فریلنسر فرانت اند",
  meta: [
    {
      name: "description",
      content:
        "رزومه یک طراح فریلنسر فرانت اند با بیش از 11 سال تجربه در طراحی و توسعه وبسایت، سئو و برنامه نویسی با React.js و Next.js",
    },
    {
      name: "keywords",
      content:
        "رزومه، طراح فرانت اند، فریلنسر، React.js، Next.js، سئو، طراحی وبسایت، برنامه نویسی",
    },
    {
      name: "author",
      content: "Frontend Developer",
    },
    {
      property: "og:title",
      content: "رزومه - طراح فریلنسر فرانت اند",
    },
    {
      property: "og:description",
      content:
        "رزومه یک طراح فریلنسر فرانت اند با بیش از 11 سال تجربه در طراحی و توسعه وبسایت",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:locale",
      content: "fa_IR",
    },
    {
      name: "twitter:card",
      content: "summary",
    },
    {
      name: "twitter:title",
      content: "رزومه - طراح فریلنسر فرانت اند",
    },
    {
      name: "twitter:description",
      content:
        "رزومه یک طراح فریلنسر فرانت اند با بیش از 11 سال تجربه در طراحی و توسعه وبسایت",
    },
    {
      name: "language",
      content: "Persian",
    },
    {
      name: "geo.region",
      content: "IR",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://yourdomain.com/",
    },
  ],
};

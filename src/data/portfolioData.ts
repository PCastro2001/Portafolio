export interface ProjectType {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  title: string;
  prefix: string;
  skills: string[];
}

export interface ExperienceType {
  role: string;
  company: string;
  focus: string;
  timeline: string;
}

export interface PortfolioData {
  owner: string;
  role: string;
  meta: {
    status: string;
    location: string;
    specialization: string;
    kernel: string;
    uptime: string;
  };
  hero: {
    systemHeader: string;
    intro: string;
    ctas: {
      primary: { text: string; link: string };
      secondary: { text: string; link: string };
    };
  };
  experience: ExperienceType;
  projects: ProjectType[];
  skillsTerminal: {
    categories: SkillCategory[];
    transversales: string[];
  };
  contact: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export const portfolioData: PortfolioData = {
  owner: "Pablo Castro",
  role: "Ingeniero en Informática | Especialista en Desarrollo de Software",
  meta: {
    status: "ACTIVE_IN_PRODUCTION",
    location: "SANTIAGO, CHILE (CL)",
    specialization: "SOFTWARE_DEVELOPMENT_&_OPTIMIZATION",
    kernel: "NEXT_NODE_V15_CORE",
    uptime: "99.998%",
  },
  hero: {
    systemHeader: "[SISTEMA INICIADO]",
    intro: "Hola, soy Pablo Castro. Ingeniero en Informática enfocado en Desarrollo de Software y Optimización de Sistemas. Utilizo arquitectura avanzada e Inteligencia Artificial para resolver problemáticas sociales e inmobiliarias del mundo real.",
    ctas: {
      primary: {
        text: "[ Ver Proyectos ]",
        link: "#proyectos",
      },
      secondary: {
        text: "[ Canales de Red ]",
        link: "#contacto",
      },
    },
  },
  experience: {
    role: "Desarrollador e Integrador de Software Independiente",
    company: "Agencia de Publicidad y Servicios Web",
    timeline: "FREELANCE // OPERATIVO",
    focus: "Despliegue de plataformas web responsivas, optimización de tiempos de carga en producción, automatización de flujos de trabajo e integración de bases de datos para clientes de la agencia. Demuestra competencia directa en el ciclo de vida del desarrollo y entrega continua."
  },
  projects: [
    {
      id: "subsimatch",
      title: "SubsiMatch",
      tagline: "Simulador Inteligente de Adquisición de Viviendas",
      problem: "La postulación a subsidios y créditos en Chile presenta una enorme asimetría de información: referencias circulares en el cálculo del subsidio DS1, restricciones de dividendo bancario según renta (25%-33%) y topes variables según la geografía en el subsidio DS19.",
      solution: "Un consultor automatizado que aplica Ingeniería Inversa Financiera. El usuario ingresa su sueldo y el sistema calcula su \"techo inmobiliario\". Evalúa puntajes de corte históricos del MINVU y genera planes de acción predictivos calculando la brecha de ahorro necesaria.",
      technologies: [
        "Next.js 15 (React App Router)",
        "TypeScript (Tipado Estricto)",
        "Tailwind CSS (Diseño Responsivo)",
        "Mindicador.cl API (UF en tiempo real)",
        "Netlify CI/CD Pipeline"
      ],
      liveUrl: "https://subsimatch.netlify.app/",
      githubUrl: "https://github.com/Pcastro2001",
    },
    {
      id: "rigbuilder-ai",
      title: "RigBuilder AI",
      tagline: "Optimizador de Presupuesto y Hardware PC",
      problem: "El mercado de componentes de hardware es volátil y confuso. Los usuarios suelen comprar piezas incompatibles (ej. procesadores y placas con sockets distintos) o generan cuellos de botella (bottlenecks) masivos por malas combinaciones, perdiendo dinero.",
      solution: "Una aplicación interactiva que calcula presupuestos óptimos en tiempo real. Integra una matriz de compatibilidad lógica que valida que cada componente seleccionado funcione perfectamente con el resto, optimizando el rendimiento por cada peso invertido.",
      technologies: [
        "Next.js / React (Manejo de Estados Anidados)",
        "Python / Django (Motor de Recomendación Algorítmica)",
        "Oracle SQL (Base de Datos Relacional de Componentes y Precios)"
      ],
      githubUrl: "https://github.com/Pcastro2001",
    },
    {
      id: "edupath",
      title: "EduPath",
      tagline: "Consultor de Accesibilidad Universitaria (Ex-Ranking)",
      problem: "La postulación a la educación superior tras la PAES genera un colapso de tiempo y ansiedad. Las familias no logran cruzar eficientemente sus puntajes, los requisitos de ponderación, las sedes geográficas y los beneficios estatales (como la Gratuidad).",
      solution: "Un sistema de analítica de datos abiertos que democratiza la información educativa. El estudiante ingresa sus puntajes estimados y el sistema optimiza sus opciones, mostrando las carreras y universidades viables de forma transparente, sin sesgos de prestigio, enfocándose en la optimización de la postulación.",
      technologies: [
        "Python (Procesamiento y Limpieza de Datos)",
        "Java / Spring Boot (API Rest Segura y Robusta)",
        "Angular / React (Paneles Visuales de Datos)"
      ],
      githubUrl: "https://github.com/Pcastro2001",
    }
  ],
  skillsTerminal: {
    categories: [
      {
        title: "🚀 ENTERPRISE & BACKEND",
        prefix: "#",
        skills: ["Java (Spring Boot)", "C++", "SQL (Oracle)", "PostgreSQL"]
      },
      {
        title: "⚡ AGILE & INTELLIGENCE",
        prefix: "$",
        skills: ["Python (Django)", "Integración de IA", "Optimización", "Machine Learning"]
      },
      {
        title: "🎨 MODERN INTERFACES",
        prefix: ">",
        skills: ["Next.js / React", "Angular", "TypeScript / JS", "Tailwind CSS"]
      }
    ],
    transversales: ["Microservicios", "DevOps (CI/CD)", "Ciberseguridad"]
  },
  contact: {
    github: "https://github.com/Pcastro2001",
    linkedin: "https://www.linkedin.com/in/pablo-castro-fuentes-076b85227/",
    email: "pcastrof022001@gmail.com"
  }
};

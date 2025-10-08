import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        products: "Products",
        features: "Features",
        pricing: "Pricing",
        about: "About",
      },
      hero: {
        badge: "Revolutionary AI Platform • Made for Indian Agriculture 🇮🇳",
        title: "Transform Your Farming Future",
        subtitle: "Harness the power of artificial intelligence to optimize crop yields, predict weather patterns, and revolutionize your agricultural practices with BioBloom's cutting-edge solutions designed specifically for Indian farmers.",
        cta: "Start Your AI Journey",
        watchDemo: "Watch Demo",
        stats: {
          support: "AI Support",
          supportValue: "24/7",
          yield: "Yield Increase",
          yieldValue: "45%",
          organic: "Organic Certified",
          organicValue: "100%",
        }
      },
      aiSection: {
        title: "Revolutionary AI for Indian Agriculture",
        subtitle: "Experience the future of farming with our cutting-edge artificial intelligence designed specifically for Indian soil, climate, and farming practices. From crop prediction to pest management, our AI learns from millions of data points to give you precise, actionable insights.",
        smartCrop: {
          title: "Smart Crop Intelligence",
          description: "Our AI analyzes soil conditions, weather patterns, and historical data to recommend the perfect crops for your land. Increase yields by up to 45% with data-driven crop selection and rotation strategies."
        },
        monitoring: {
          title: "Real-Time Monitoring",
          description: "Get instant alerts about pest threats, disease outbreaks, and optimal harvesting times. Our AI monitors satellite imagery and weather data 24/7 to protect your investment."
        },
        analytics: {
          title: "Predictive Analytics",
          description: "Forecast market prices, predict weather impacts, and plan your farming calendar with AI-powered insights. Make informed decisions that maximize profitability and minimize risks."
        }
      },
      products: {
        badge: "AI-Powered",
        title: "AI-Powered Solutions",
        subtitle: "Discover our comprehensive suite of intelligent farming tools designed to maximize your agricultural productivity and sustainability.",
        rotation: {
          title: "Smart Crop Rotation",
          description: "AI-driven crop rotation recommendations based on soil health and climate data.",
          features: ["Soil health optimization", "Seasonal crop recommendations", "Yield prediction analytics"],
          cta: "Learn More"
        },
        waste: {
          title: "Waste Converter",
          description: "Transform agricultural waste into valuable compost and organic fertilizers.",
          features: ["Organic waste processing", "Compost optimization", "Revenue stream creation"],
          cta: "Learn More"
        },
        pest: {
          title: "Pest Predictor",
          description: "Predict and prevent pest infestations with advanced AI algorithms.",
          features: ["Early pest detection", "Organic treatment plans", "Custom fertilizer recommendations"],
          cta: "Learn More"
        },
        vet: {
          title: "Vet Helper",
          description: "AI-powered livestock health monitoring and disease prevention.",
          features: ["Health monitoring", "Disease prevention", "Treatment recommendations"],
          cta: "Learn More"
        },
        blockchain: {
          title: "Blockchain Supply Chain",
          description: "Transparent and secure supply chain management for agricultural products.",
          features: ["Supply chain transparency", "Quality certification", "Direct market access"],
          cta: "Learn More"
        },
        dashboard: {
          title: "AI Hub Dashboard",
          description: "Unified platform for all your AI-powered farming needs.",
          features: ["Unified dashboard", "Predictive analytics", "Multi-language support"],
          cta: "Learn More"
        },
        exploreAll: "Explore All Products"
      },
      whyChoose: {
        title: "Why Choose BioBloom?",
        subtitle: "Our platform is built with Indian farmers in mind, offering features that truly matter for your success.",
        language: {
          title: "Multi-Language Support",
          description: "Available in Hindi and Kannada with more languages coming soon. Get support in your native language."
        },
        organic: {
          title: "100% Organic Focus",
          description: "All our recommendations and solutions promote organic farming practices, ensuring sustainable and healthy agricultural production."
        },
        farmer: {
          title: "Farmer-Centric Design",
          description: "Built by farmers, for farmers. Every feature is designed based on real feedback from Indian agricultural communities."
        }
      },
      auth: {
        logout: "Logout",
        signIn: "Sign In",
      },
      home: {
        welcome: "Welcome",
        subtitle: "Your personalized dashboard for AI-powered agriculture",
        dashboard: {
          title: "Dashboard",
          description: "View your farm analytics and insights"
        },
        crops: {
          title: "My Crops",
          description: "Manage your crop rotation and predictions"
        },
        insights: {
          title: "AI Insights",
          description: "Get personalized farming recommendations"
        }
      },
      cta: {
        title: "Ready to Transform Your Farming?",
        subtitle: "Join thousands of farmers who are already experiencing the benefits of AI-powered agriculture. Start your journey today with a free trial.",
        getStarted: "Get Started Free",
        contactSales: "Contact Sales",
        features: ["Free 30-day trial", "No credit card required", "24/7 support in Hindi"]
      },
      footer: {
        tagline: "Empowering Indian farmers with AI-powered agricultural solutions for a sustainable future.",
        company: "Company",
        aboutUs: "About Us",
        careers: "Careers",
        contact: "Contact",
        products: "Products",
        resources: "Resources",
        blog: "Blog",
        documentation: "Documentation",
        support: "Support",
        legal: "Legal",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        rights: "All rights reserved.",
      }
    }
  },
  hi: {
    translation: {
      nav: {
        products: "उत्पाद",
        features: "विशेषताएं",
        pricing: "मूल्य निर्धारण",
        about: "हमारे बारे में",
      },
      hero: {
        badge: "क्रांतिकारी एआई प्लेटफॉर्म • भारतीय कृषि के लिए बनाया गया 🇮🇳",
        title: "अपने खेती के भविष्य को बदलें",
        subtitle: "कृत्रिम बुद्धिमत्ता की शक्ति का उपयोग करके फसल की पैदावार को अनुकूलित करें, मौसम के पैटर्न की भविष्यवाणी करें, और भारतीय किसानों के लिए विशेष रूप से डिज़ाइन किए गए BioBloom के अत्याधुनिक समाधानों के साथ अपनी कृषि पद्धतियों में क्रांति लाएं।",
        cta: "अपनी एआई यात्रा शुरू करें",
        watchDemo: "डेमो देखें",
        stats: {
          support: "एआई सपोर्ट",
          supportValue: "24/7",
          yield: "पैदावार वृद्धि",
          yieldValue: "45%",
          organic: "ऑर्गेनिक प्रमाणित",
          organicValue: "100%",
        }
      },
      aiSection: {
        title: "भारतीय कृषि के लिए क्रांतिकारी एआई",
        subtitle: "भारतीय मिट्टी, जलवायु और खेती की प्रथाओं के लिए विशेष रूप से डिज़ाइन की गई हमारी अत्याधुनिक कृत्रिम बुद्धिमत्ता के साथ खेती के भविष्य का अनुभव करें। फसल की भविष्यवाणी से लेकर कीट प्रबंधन तक, हमारा एआई आपको सटीक, कार्रवाई योग्य जानकारी देने के लिए लाखों डेटा पॉइंट्स से सीखता है।",
        smartCrop: {
          title: "स्मार्ट फसल बुद्धिमत्ता",
          description: "हमारा एआई मिट्टी की स्थिति, मौसम के पैटर्न और ऐतिहासिक डेटा का विश्लेषण करके आपकी जमीन के लिए सही फसलों की सिफारिश करता है। डेटा-संचालित फसल चयन और रोटेशन रणनीतियों के साथ पैदावार में 45% तक की वृद्धि करें।"
        },
        monitoring: {
          title: "रियल-टाइम निगरानी",
          description: "कीट खतरों, बीमारी के प्रकोप और इष्टतम कटाई के समय के बारे में तुरंत अलर्ट प्राप्त करें। हमारा एआई आपके निवेश की सुरक्षा के लिए 24/7 उपग्रह इमेजरी और मौसम डेटा की निगरानी करता है।"
        },
        analytics: {
          title: "भविष्यवाणी विश्लेषण",
          description: "बाजार की कीमतों का पूर्वानुमान लगाएं, मौसम के प्रभावों की भविष्यवाणी करें, और एआई-संचालित अंतर्दृष्टि के साथ अपने खेती कैलेंडर की योजना बनाएं। सूचित निर्णय लें जो लाभप्रदता को अधिकतम करते हैं और जोखिम को कम करते हैं।"
        }
      },
      products: {
        badge: "एआई-संचालित",
        title: "एआई-संचालित समाधान",
        subtitle: "अपनी कृषि उत्पादकता और स्थिरता को अधिकतम करने के लिए डिज़ाइन किए गए बुद्धिमान खेती उपकरणों के हमारे व्यापक सूट की खोज करें।",
        rotation: {
          title: "स्मार्ट फसल चक्र",
          description: "मिट्टी के स्वास्थ्य और जलवायु डेटा के आधार पर एआई-संचालित फसल चक्र सिफारिशें।",
          features: ["मिट्टी स्वास्थ्य अनुकूलन", "मौसमी फसल सिफारिशें", "पैदावार भविष्यवाणी विश्लेषण"],
          cta: "और जानें"
        },
        waste: {
          title: "कचरा परिवर्तक",
          description: "कृषि कचरे को मूल्यवान खाद और जैविक उर्वरकों में बदलें।",
          features: ["जैविक कचरा प्रसंस्करण", "खाद अनुकूलन", "राजस्व धारा निर्माण"],
          cta: "और जानें"
        },
        pest: {
          title: "कीट भविष्यवक्ता",
          description: "उन्नत एआई एल्गोरिदम के साथ कीट संक्रमण की भविष्यवाणी करें और रोकें।",
          features: ["प्रारंभिक कीट पहचान", "जैविक उपचार योजनाएं", "कस्टम उर्वरक सिफारिशें"],
          cta: "और जानें"
        },
        vet: {
          title: "पशु चिकित्सक सहायक",
          description: "एआई-संचालित पशुधन स्वास्थ्य निगरानी और रोग रोकथाम।",
          features: ["स्वास्थ्य निगरानी", "रोग रोकथाम", "उपचार सिफारिशें"],
          cta: "और जानें"
        },
        blockchain: {
          title: "ब्लॉकचेन आपूर्ति श्रृंखला",
          description: "कृषि उत्पादों के लिए पारदर्शी और सुरक्षित आपूर्ति श्रृंखला प्रबंधन।",
          features: ["आपूर्ति श्रृंखला पारदर्शिता", "गुणवत्ता प्रमाणन", "प्रत्यक्ष बाजार पहुंच"],
          cta: "और जानें"
        },
        dashboard: {
          title: "एआई हब डैशबोर्ड",
          description: "आपकी सभी एआई-संचालित खेती की जरूरतों के लिए एकीकृत मंच।",
          features: ["एकीकृत डैशबोर्ड", "भविष्यवाणी विश्लेषण", "बहु-भाषा समर्थन"],
          cta: "और जानें"
        },
        exploreAll: "सभी उत्पाद देखें"
      },
      whyChoose: {
        title: "BioBloom क्यों चुनें?",
        subtitle: "हमारा मंच भारतीय किसानों को ध्यान में रखकर बनाया गया है, जो आपकी सफलता के लिए वास्तव में महत्वपूर्ण सुविधाएं प्रदान करता है।",
        language: {
          title: "बहु-भाषा समर्थन",
          description: "हिंदी और कन्नड़ में उपलब्ध है, जल्द ही और भाषाएं आ रही हैं। अपनी मातृभाषा में सहायता प्राप्त करें।"
        },
        organic: {
          title: "100% जैविक फोकस",
          description: "हमारी सभी सिफारिशें और समाधान जैविक खेती प्रथाओं को बढ़ावा देते हैं, जो टिकाऊ और स्वस्थ कृषि उत्पादन सुनिश्चित करते हैं।"
        },
        farmer: {
          title: "किसान-केंद्रित डिज़ाइन",
          description: "किसानों द्वारा, किसानों के लिए बनाया गया। हर सुविधा भारतीय कृषि समुदायों से वास्तविक प्रतिक्रिया के आधार पर डिज़ाइन की गई है।"
        }
      },
      auth: {
        logout: "लॉग आउट",
        signIn: "साइन इन करें",
      },
      home: {
        welcome: "स्वागत है",
        subtitle: "एआई-संचालित कृषि के लिए आपका व्यक्तिगत डैशबोर्ड",
        dashboard: {
          title: "डैशबोर्ड",
          description: "अपने खेत के विश्लेषण और अंतर्दृष्टि देखें"
        },
        crops: {
          title: "मेरी फसलें",
          description: "अपने फसल चक्र और भविष्यवाणियों का प्रबंधन करें"
        },
        insights: {
          title: "एआई अंतर्दृष्टि",
          description: "व्यक्तिगत खेती सिफारिशें प्राप्त करें"
        }
      },
      cta: {
        title: "अपनी खेती को बदलने के लिए तैयार हैं?",
        subtitle: "हजारों किसानों में शामिल हों जो पहले से ही एआई-संचालित कृषि के लाभों का अनुभव कर रहे हैं। आज ही मुफ्त परीक्षण के साथ अपनी यात्रा शुरू करें।",
        getStarted: "मुफ्त में शुरू करें",
        contactSales: "बिक्री से संपर्क करें",
        features: ["30 दिन का मुफ्त परीक्षण", "क्रेडिट कार्ड की आवश्यकता नहीं", "हिंदी में 24/7 सहायता"]
      },
      footer: {
        tagline: "स्थायी भविष्य के लिए एआई-संचालित कृषि समाधानों के साथ भारतीय किसानों को सशक्त बनाना।",
        company: "कंपनी",
        aboutUs: "हमारे बारे में",
        careers: "करियर",
        contact: "संपर्क",
        products: "उत्पाद",
        resources: "संसाधन",
        blog: "ब्लॉग",
        documentation: "दस्तावेज़ीकरण",
        support: "सहायता",
        legal: "कानूनी",
        privacy: "गोपनीयता नीति",
        terms: "सेवा की शर्तें",
        rights: "सर्वाधिकार सुरक्षित।",
      }
    }
  },
  kn: {
    translation: {
      nav: {
        products: "ಉತ್ಪನ್ನಗಳು",
        features: "ವೈಶಿಷ್ಟ್ಯಗಳು",
        pricing: "ಬೆಲೆ ನಿಗಧಿ",
        about: "ನಮ್ಮ ಬಗ್ಗೆ",
      },
      hero: {
        badge: "ಕ್ರಾಂತಿಕಾರಿ AI ವೇದಿಕೆ • ಭಾರತೀಯ ಕೃಷಿಗಾಗಿ ತಯಾರಿಸಲಾಗಿದೆ 🇮🇳",
        title: "ನಿಮ್ಮ ಕೃಷಿ ಭವಿಷ್ಯವನ್ನು ಪರಿವರ್ತಿಸಿ",
        subtitle: "ಭಾರತೀಯ ರೈತರಿಗಾಗಿ ವಿಶೇಷವಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ BioBloom ನ ಅತ್ಯಾಧುನಿక ಪರಿಹಾರಗಳೊಂದಿಗೆ ಬೆಳೆ ಇಳುವರಿಯನ್ನು ಅನುಕೂಲಗೊಳಿಸಲು, ಹವಾಮಾನ ಮಾದರಿಗಳನ್ನು ಮುನ್ಸೂಚಿಸಲು ಮತ್ತು ನಿಮ್ಮ ಕೃಷಿ ಪದ್ಧತಿಗಳಲ್ಲಿ ಕ್ರಾಂತಿ ಮಾಡಲು ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆಯ ಶಕ್ತಿಯನ್ನು ಬಳಸಿಕೊಳ್ಳಿ.",
        cta: "ನಿಮ್ಮ AI ಪ್ರಯಾಣ ಪ್ರಾರಂಭಿಸಿ",
        watchDemo: "ಡೆಮೊ ನೋಡಿ",
        stats: {
          support: "AI ಬೆಂಬಲ",
          supportValue: "24/7",
          yield: "ಇಳುವರಿ ಹೆಚ್ಚಳ",
          yieldValue: "45%",
          organic: "ಸಾವಯವ ಪ್ರಮಾಣಿತ",
          organicValue: "100%",
        }
      },
      aiSection: {
        title: "ಭಾರತೀಯ ಕೃಷಿಗಾಗಿ ಕ್ರಾಂತಿಕಾರಿ AI",
        subtitle: "ಭಾರತೀಯ ಮಣ್ಣು, ಹವಾಮಾನ ಮತ್ತು ಕೃಷಿ ಪದ್ಧತಿಗಳಿಗೆ ವಿಶೇಷವಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ನಮ್ಮ ಅತ್ಯಾಧುನಿಕ ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆಯೊಂದಿಗೆ ಕೃಷಿಯ ಭವಿಷ್ಯವನ್ನು ಅನುಭವಿಸಿ. ಬೆಳೆ ಮುನ್ಸೂಚನೆಯಿಂದ ಕೀಟ ನಿರ್ವಹಣೆಯವರೆಗೆ, ನಮ್ಮ AI ನಿಮಗೆ ನಿಖರವಾದ, ಕ್ರಿಯಾಶೀಲ ಒಳನೋಟಗಳನ್ನು ನೀಡಲು ಲಕ್ಷಾಂತರ ಡೇಟಾ ಪಾಯಿಂಟ್‌ಗಳಿಂದ ಕಲಿಯುತ್ತದೆ.",
        smartCrop: {
          title: "ಸ್ಮಾರ್ಟ್ ಬೆಳೆ ಬುದ್ಧಿವಂತಿಕೆ",
          description: "ನಮ್ಮ AI ಮಣ್ಣಿನ ಸ್ಥಿತಿ, ಹವಾಮಾನ ಮಾದರಿಗಳು ಮತ್ತು ಐತಿಹಾಸಿಕ ಡೇಟಾವನ್ನು ವಿಶ್ಲೇಷಿಸಿ ನಿಮ್ಮ ಭೂಮಿಗೆ ಸೂಕ್ತ ಬೆಳೆಗಳನ್ನು ಶಿಫಾರಸು ಮಾಡುತ್ತದೆ. ಡೇಟಾ-ಚಾಲಿತ ಬೆಳೆ ಆಯ್ಕೆ ಮತ್ತು ತಿರುಗುವಿಕೆ ತಂತ್ರಗಳೊಂದಿಗೆ 45% ವರೆಗೆ ಇಳುವರಿಯನ್ನು ಹೆಚ್ಚಿಸಿ."
        },
        monitoring: {
          title: "ನೈಜ-ಸಮಯ ಮೇಲ್ವಿಚಾರಣೆ",
          description: "ಕೀಟ ಬೆದರಿಕೆಗಳು, ರೋಗ ಏಕಾಏಕಿ ಮತ್ತು ಅತ್ಯುತ್ತಮ ಕೊಯ್ಲು ಸಮಯದ ಬಗ್ಗೆ ತಕ್ಷಣ ಎಚ್ಚರಿಕೆಗಳನ್ನು ಪಡೆಯಿರಿ. ನಿಮ್ಮ ಹೂಡಿಕೆಯನ್ನು ರಕ್ಷಿಸಲು ನಮ್ಮ AI 24/7 ಉಪಗ್ರಹ ಚಿತ್ರಣ ಮತ್ತು ಹವಾಮಾನ ಡೇಟಾವನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡುತ್ತದೆ."
        },
        analytics: {
          title: "ಭವಿಷ್ಯ ವಿಶ್ಲೇಷಣೆ",
          description: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳನ್ನು ಮುನ್ಸೂಚಿಸಿ, ಹವಾಮಾನ ಪರಿಣಾಮಗಳನ್ನು ಮುನ್ಸೂಚಿಸಿ ಮತ್ತು AI-ಚಾಲಿತ ಒಳನೋಟಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಕೃಷಿ ಕ್ಯಾಲೆಂಡರ್ ಅನ್ನು ಯೋಜಿಸಿ. ಲಾಭದಾಯಕತೆಯನ್ನು ಹೆಚ್ಚಿಸುವ ಮತ್ತು ಅಪಾಯಗಳನ್ನು ಕಡಿಮೆ ಮಾಡುವ ತಿಳುವಳಿಕೆ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ."
        }
      },
      products: {
        badge: "AI-ಚಾಲಿತ",
        title: "AI-ಚಾಲಿತ ಪರಿಹಾರಗಳು",
        subtitle: "ನಿಮ್ಮ ಕೃಷಿ ಉತ್ಪಾದಕತೆ ಮತ್ತು ಸಮರ್ಥತೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಬುದ್ಧಿವಂತ ಕೃಷಿ ಉಪಕರಣಗಳ ನಮ್ಮ ಸಮಗ್ರ ಸೂಟ್ ಅನ್ನು ಅನ್ವೇಷಿಸಿ.",
        rotation: {
          title: "ಸ್ಮಾರ್ಟ್ ಬೆಳೆ ತಿರುಗುವಿಕೆ",
          description: "ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಮತ್ತು ಹವಾಮಾನ ಡೇಟಾವನ್ನು ಆಧರಿಸಿ AI-ಚಾಲಿತ ಬೆಳೆ ತಿರುಗುವಿಕೆ ಶಿಫಾರಸುಗಳು.",
          features: ["ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಅನುಕೂಲತೆ", "ಋತುಮಾನದ ಬೆಳೆ ಶಿಫಾರಸುಗಳು", "ಇಳುವರಿ ಮುನ್ಸೂಚನೆ ವಿಶ್ಲೇಷಣೆ"],
          cta: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ"
        },
        waste: {
          title: "ತ್ಯಾಜ್ಯ ಪರಿವರ್ತಕ",
          description: "ಕೃಷಿ ತ್ಯಾಜ್ಯವನ್ನು ಮೌಲ್ಯಯುತ ಗೊಬ್ಬರ ಮತ್ತು ಸಾವಯವ ರಸಗೊಬ್ಬರಗಳಾಗಿ ಪರಿವರ್ತಿಸಿ.",
          features: ["ಸಾವಯವ ತ್ಯಾಜ್ಯ ಸಂಸ್ಕರಣೆ", "ಗೊಬ್ಬರ ಅನುಕೂಲತೆ", "ಆದಾಯ ಸ್ರೋತ ಸೃಷ್ಟಿ"],
          cta: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ"
        },
        pest: {
          title: "ಕೀಟ ಮುನ್ಸೂಚಕ",
          description: "ಸುಧಾರಿತ AI ಅಲ್ಗಾರಿದಮ್‌ಗಳೊಂದಿಗೆ ಕೀಟ ಆಕ್ರಮಣಗಳನ್ನು ಮುನ್ಸೂಚಿಸಿ ಮತ್ತು ತಡೆಯಿರಿ.",
          features: ["ಆರಂಭಿಕ ಕೀಟ ಪತ್ತೆ", "ಸಾವಯವ ಚಿಕಿತ್ಸಾ ಯೋಜನೆಗಳು", "ಕಸ್ಟಮ್ ರಸಗೊಬ್ಬರ ಶಿಫಾರಸುಗಳು"],
          cta: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ"
        },
        vet: {
          title: "ಪಶುವೈದ್ಯ ಸಹಾಯಕ",
          description: "AI-ಚಾಲಿತ ಪಶುಸಂಪತ್ತು ಆರೋಗ್ಯ ಮೇಲ್ವಿಚಾರಣೆ ಮತ್ತು ರೋಗ ನಿವಾರಣೆ.",
          features: ["ಆರೋಗ್ಯ ಮೇಲ್ವಿಚಾರಣೆ", "ರೋಗ ನಿವಾರಣೆ", "ಚಿಕಿತ್ಸಾ ಶಿಫಾರಸುಗಳು"],
          cta: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ"
        },
        blockchain: {
          title: "ಬ್ಲಾಕ್‌ಚೈನ್ ಪೂರೈಕೆ ಸರಪಳಿ",
          description: "ಕೃಷಿ ಉತ್ಪನ್ನಗಳಿಗಾಗಿ ಪಾರದರ್ಶಕ ಮತ್ತು ಸುರಕ್ಷಿತ ಪೂರೈಕೆ ಸರಪಳಿ ನಿರ್ವಹಣೆ.",
          features: ["ಪೂರೈಕೆ ಸರಪಳಿ ಪಾರದರ್ಶಕತೆ", "ಗುಣಮಟ್ಟ ಪ್ರಮಾಣೀಕರಣ", "ನೇರ ಮಾರುಕಟ್ಟೆ ಪ್ರವೇಶ"],
          cta: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ"
        },
        dashboard: {
          title: "AI ಹಬ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
          description: "ನಿಮ್ಮ ಎಲ್ಲಾ AI-ಚಾಲಿತ ಕೃಷಿ ಅಗತ್ಯಗಳಿಗಾಗಿ ಏಕೀಕೃತ ವೇದಿಕೆ.",
          features: ["ಏಕೀಕೃತ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", "ಭವಿಷ್ಯ ವಿಶ್ಲೇಷಣೆ", "ಬಹು-ಭಾಷಾ ಬೆಂಬಲ"],
          cta: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ"
        },
        exploreAll: "ಎಲ್ಲಾ ಉತ್ಪನ್ನಗಳನ್ನು ಅನ್ವೇಷಿಸಿ"
      },
      whyChoose: {
        title: "BioBloom ಅನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡಬೇಕು?",
        subtitle: "ನಮ್ಮ ವೇದಿಕೆಯನ್ನು ಭಾರತೀಯ ರೈತರನ್ನು ಮನಸ್ಸಿನಲ್ಲಿಟ್ಟುಕೊಂಡು ನಿರ್ಮಿಸಲಾಗಿದೆ, ನಿಮ್ಮ ಯಶಸ್ಸಿಗೆ ನಿಜವಾಗಿಯೂ ಮುಖ್ಯವಾದ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ನೀಡುತ್ತದೆ.",
        language: {
          title: "ಬಹು-ಭಾಷಾ ಬೆಂಬಲ",
          description: "ಹಿಂದಿ ಮತ್ತು ಕನ್ನಡದಲ್ಲಿ ಲಭ್ಯವಿದೆ, ಶೀಘ್ರದಲ್ಲೇ ಹೆಚ್ಚಿನ ಭಾಷೆಗಳು ಬರುತ್ತಿವೆ. ನಿಮ್ಮ ಸ್ಥಳೀಯ ಭಾಷೆಯಲ್ಲಿ ಬೆಂಬಲ ಪಡೆಯಿರಿ."
        },
        organic: {
          title: "100% ಸಾವಯವ ಗಮನ",
          description: "ನಮ್ಮ ಎಲ್ಲಾ ಶಿಫಾರಸುಗಳು ಮತ್ತು ಪರಿಹಾರಗಳು ಸಾವಯವ ಕೃಷಿ ಪದ್ಧತಿಗಳನ್ನು ಉತ್ತೇಜಿಸುತ್ತವೆ, ಸಮರ್ಥನೀಯ ಮತ್ತು ಆರೋಗ್ಯಕರ ಕೃಷಿ ಉತ್ಪಾದನೆಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತವೆ."
        },
        farmer: {
          title: "ರೈತ-ಕೇಂದ್ರಿತ ವಿನ್ಯಾಸ",
          description: "ರೈತರಿಂದ, ರೈತರಿಗಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ. ಪ್ರತಿಯೊಂದು ವೈಶಿಷ್ಟ್ಯವನ್ನು ಭಾರತೀಯ ಕೃಷಿ ಸಮುದಾಯಗಳ ನಿಜವಾದ ಪ್ರತಿಕ್ರಿಯೆಯ ಆಧಾರದ ಮೇಲೆ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ."
        }
      },
      auth: {
        logout: "ಲಾಗ್ ಔಟ್",
        signIn: "ಸೈನ್ ಇನ್ ಮಾಡಿ",
      },
      home: {
        welcome: "ಸ್ವಾಗತ",
        subtitle: "AI-ಚಾಲಿತ ಕೃಷಿಗಾಗಿ ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        dashboard: {
          title: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
          description: "ನಿಮ್ಮ ಕೃಷಿ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಒಳನೋಟಗಳನ್ನು ವೀಕ್ಷಿಸಿ"
        },
        crops: {
          title: "ನನ್ನ ಬೆಳೆಗಳು",
          description: "ನಿಮ್ಮ ಬೆಳೆ ತಿರುಗುವಿಕೆ ಮತ್ತು ಮುನ್ಸೂಚನೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ"
        },
        insights: {
          title: "AI ಒಳನೋಟಗಳು",
          description: "ವೈಯಕ್ತಿಕ ಕೃಷಿ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ"
        }
      },
      cta: {
        title: "ನಿಮ್ಮ ಕೃಷಿಯನ್ನು ಪರಿವರ್ತಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?",
        subtitle: "ಈಗಾಗಲೇ AI-ಚಾಲಿತ ಕೃಷಿಯ ಲಾಭಗಳನ್ನು ಅನುಭವಿಸುತ್ತಿರುವ ಸಾವಿರಾರು ರೈತರೊಂದಿಗೆ ಸೇರಿ. ಇಂದೇ ಉಚಿತ ಪ್ರಯೋಗದೊಂದಿಗೆ ನಿಮ್ಮ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಿ.",
        getStarted: "ಉಚಿತವಾಗಿ ಪ್ರಾರಂಭಿಸಿ",
        contactSales: "ಮಾರಾಟವನ್ನು ಸಂಪರ್ಕಿಸಿ",
        features: ["30 ದಿನಗಳ ಉಚಿತ ಪ್ರಯೋಗ", "ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಅಗತ್ಯವಿಲ್ಲ", "ಹಿಂದಿಯಲ್ಲಿ 24/7 ಬೆಂಬಲ"]
      },
      footer: {
        tagline: "ಸಮರ್ಥನೀಯ ಭವಿಷ್ಯಕ್ಕಾಗಿ AI-ಚಾಲಿತ ಕೃಷಿ ಪರಿಹಾರಗಳೊಂದಿಗೆ ಭಾರತೀಯ ರೈತರನ್ನು ಸಬಲೀಕರಿಸುವುದು.",
        company: "ಕಂಪನಿ",
        aboutUs: "ನಮ್ಮ ಬಗ್ಗೆ",
        careers: "ವೃತ್ತಿ",
        contact: "ಸಂಪರ್ಕ",
        products: "ಉತ್ಪನ್ನಗಳು",
        resources: "ಸಂಪನ್ಮೂಲಗಳು",
        blog: "ಬ್ಲಾಗ್",
        documentation: "ದಸ್ತಾವೇಜೀಕರಣ",
        support: "ಬೆಂಬಲ",
        legal: "ಕಾನೂನು",
        privacy: "ಗೌಪ್ಯತೆ ನೀತಿ",
        terms: "ಸೇವಾ ನಿಯಮಗಳು",
        rights: "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

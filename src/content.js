// All site copy, Arabic + English.
// Only verified company facts are stated: founded 2008, Egypt, flexible PU foam + mattresses,
// German Hennecke foaming machine, foam produced in multiple colors, contact email.
// Do not add capacities, certifications, phone numbers or addresses until the company confirms them.

export const EMAIL = 'mohamed.sobhy@cityfoameg.com';
export const FOUNDED = 2008;
export const PHONE = '16298'; // hotline
export const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('إنشاص المنطقة الصناعية التاسعة بساتين الإسماعيلية')}`;

const nav = {
  ar: [
    ['top', 'الرئيسية'],
    ['about', 'من نحن'],
    ['products', 'المنتجات'],
    ['manufacturing', 'التصنيع'],
    ['quality', 'الجودة'],
    ['applications', 'التطبيقات'],
    ['contact', 'تواصل معنا']
  ],
  en: [
    ['top', 'Home'],
    ['about', 'About Us'],
    ['products', 'Products'],
    ['manufacturing', 'Manufacturing'],
    ['quality', 'Quality'],
    ['applications', 'Applications'],
    ['contact', 'Contact Us']
  ]
};

export const CONTENT = {
  ar: {
    dir: 'rtl',
    title: 'سيتي فوم | City Foam — تصنيع الإسفنج البولي يوريثان المرن منذ 2008',
    skip: 'تخطي إلى المحتوى',
    nav: nav.ar,
    langSwitch: 'EN',
    langLabel: 'Switch to English',
    menu: 'القائمة',
    close: 'إغلاق',
    intro: { tagline: 'إسفنج بولي يوريثان مرن · منذ 2008', enter: 'اضغط على الإسفنج للدخول', skip: 'تخطي' },
    hero: {
      eyebrow: 'تصنيع الإسفنج البولي يوريثان المرن · مصر · منذ 2008',
      lines: ['هندسة الراحة.', 'قوة للصناعة.'],
      sub: 'تقدّم سيتي فوم حلولًا متقدمة في تصنيع الإسفنج، تقوم على الخبرة والتكنولوجيا والالتزام الدائم بالجودة.',
      cta1: 'استكشف منتجاتنا',
      cta2: 'تعرّف على سيتي فوم',
      facts: ['تأسست 2008 · مصر', 'تكنولوجيا صب ألمانية Hennecke', 'بلوكات · شيتات · مراتب'],
      scroll: 'مرّر للأسفل',
      pause: 'إيقاف الفيديو',
      play: 'تشغيل الفيديو'
    },
    about: {
      eyebrow: 'من نحن',
      title: ['خبرة نبني عليها.', 'وجودة تقودنا.'],
      lead: 'منذ عام 2008 وسيتي فوم تصنّع الإسفنج البولي يوريثان المرن في مصر.',
      body: [
        'بدأنا بالتزام واضح: إسفنج يُعتمد عليه في كل طلبية. ومع السنين تحوّل هذا الالتزام إلى منظومة إنتاج متكاملة، من خزانات الخامات إلى خط الصب إلى ساحة البلوكات.',
        'اليوم نورّد بلوكات الإسفنج والشيتات المقطّعة والمراتب لمصانع وشركاء يحتاجون جودة ثابتة لا تتغير من طلبية لأخرى.'
      ],
      stats: [
        { value: 2008, label: 'سنة التأسيس', from: 1990 },
        { value: 'years', label: 'عامًا من الخبرة', suffix: '+' },
        { value: 6, label: 'ألوان إسفنج على الأقل في ساحتنا', suffix: '+' }
      ],
      caption: 'ساحة بلوكات الإسفنج — سيتي فوم'
    },
    products: {
      eyebrow: 'المنتجات',
      title: ['منتجات تُصنع', 'للصناعة.'],
      lead: 'ثلاث فئات أساسية، تُنتج كلها من إسفنجنا. المواصفات الدقيقة تُحدّد حسب كل طلب.',
      specLabel: 'المواصفات',
      appsLabel: 'الاستخدامات',
      cta: 'اطلب التفاصيل',
      items: [
        {
          key: 'blocks',
          name: 'بلوكات الإسفنج البولي يوريثان المرن',
          desc: 'بلوكات إسفنج كبيرة تُصب على خط الإنتاج المستمر، بكثافات وألوان متعددة.',
          apps: ['مصانع المراتب', 'مصانع الأثاث', 'ورش التقطيع والتحويل'],
          specs: [['الشكل', 'بلوكات كاملة'], ['الكثافة', 'حسب الطلب'], ['اللون', 'ألوان متعددة']],
          img: 'media/gallery/yard-aisle.jpg'
        },
        {
          key: 'sheets',
          name: 'شيتات وتقطيع حسب المقاس',
          desc: 'نقطّع البلوكات إلى شيتات بالسُمك المطلوب، وبالمقاسات التي يحددها العميل.',
          apps: ['التنجيد', 'طبقات المراتب', 'المساند والوسائد'],
          specs: [['السُمك', 'حسب الطلب'], ['المقاس', 'حسب مواصفات العميل'], ['الكثافة', 'حسب الطلب']],
          img: 'media/gallery/yard-wall.jpg'
        },
        {
          key: 'mattresses',
          name: 'المراتب',
          desc: 'مراتب مصنوعة من إسفنج سيتي فوم، للبيوت والفنادق والموزعين.',
          apps: ['البيوت', 'الفنادق', 'تجار ومعارض الأثاث'],
          specs: [['المقاسات', 'حسب الطلب'], ['الخامة', 'إسفنج سيتي فوم'], ['التوريد', 'أفراد وجملة']],
          img: 'img/products/medical.jpg'
        }
      ]
    },
    manufacturing: {
      eyebrow: 'التصنيع',
      title: ['من الخامة', 'إلى البلوك.'],
      lead: 'خط إنتاج متكامل داخل مصنعنا. مرّر لترى المراحل.',
      steps: [
        { n: '01', title: 'الخامات', text: 'يُخزَّن البوليول والأيزوسيانات في خزانات مخصصة، وتنتقل إلى خط الإنتاج عبر شبكة مواسير مغلقة.' },
        { n: '02', title: 'القياس والخلط', text: 'تقيس ماكينة الصب الألمانية Hennecke المكوّنات والإضافات بدقة، وتخلطها في رأس الخلط قبل صبّها على الخط المتحرك.' },
        { n: '03', title: 'التمدد والتسوية', text: 'يتمدد الخليط على السير ويتحول إلى بلوك إسفنج متصل، ثم يُقطّع إلى بلوكات تُترك لتستوي.' },
        { n: '04', title: 'التقطيع والتجهيز', text: 'بعد التسوية تُقطّع البلوكات إلى شيتات ومقاسات حسب طلب كل عميل.' }
      ],
      badge: 'تكنولوجيا ألمانية — Hennecke',
      hennecke: {
        title: 'قلب خط الإنتاج: Hennecke',
        text: 'نعتمد على ماكينة صب من Hennecke الألمانية لقياس المكوّنات وخلطها بدقة. هذه الدقة هي ما يجعل اللون والكثافة ثابتين من بلوك لآخر.'
      },
      note: 'رسوم توضيحية لمراحل الإنتاج'
    },
    quality: {
      eyebrow: 'الجودة والتكنولوجيا',
      title: ['الجودة جزء', 'من كل مرحلة.'],
      lead: 'الجودة عندنا لا تبدأ عند الفحص النهائي، بل من لحظة دخول الخامات.',
      pillars: [
        { title: 'خامات تحت السيطرة', text: 'تُخزَّن المكوّنات في خزانات مخصصة وتُنقل عبر خطوط مغلقة حتى رأس الخلط.' },
        { title: 'قياس دقيق', text: 'نظام القياس في ماكينة Hennecke يحافظ على نسب الخلط ثابتة بين بلوك وآخر.' },
        { title: 'ثبات الخامة', text: 'الكثافة واللون يُضبطان عند رأس الخلط، فلا يُترك شيء للصدفة.' },
        { title: 'مطابق للمواصفات', text: 'تُقطّع الشيتات والمقاسات وفق الأبعاد المتفق عليها مع كل عميل.' }
      ],
      scan: 'قوام إسفنج حقيقي من إنتاجنا'
    },
    applications: {
      eyebrow: 'القطاعات والتطبيقات',
      title: ['إسفنج يدخل', 'في كل ما يريح.'],
      ticker: ['مصانع المراتب', 'الأثاث والتنجيد', 'المفروشات', 'الفنادق'],
      items: [
        { title: 'تصنيع المراتب', text: 'بلوكات وشيتات لطبقات المراتب.', media: 'media/gallery/yard-red.jpg', type: 'img' },
        { title: 'الأثاث والتنجيد', text: 'إسفنج للأنتريهات والكنب والكراسي.', media: 'media/sewing', type: 'video' },
        { title: 'المفروشات والبيوت', text: 'مراتب لراحة كل أفراد الأسرة.', media: 'media/homes', type: 'video' },
        { title: 'الفنادق', text: 'مراتب متينة للاستخدام اليومي المكثف.', media: 'media/hotels', type: 'video' }
      ]
    },
    why: {
      eyebrow: 'لماذا سيتي فوم',
      title: ['شريك تصنيع', 'تعتمد عليه.'],
      items: [
        { title: 'خبرة منذ 2008', text: 'سنوات طويلة في تصنيع الإسفنج المرن داخل السوق المصري.' },
        { title: 'تكنولوجيا ألمانية', text: 'ماكينة صب Hennecke لقياس وخلط دقيق.' },
        { title: 'إنتاج متكامل', text: 'من خزانات الخامات حتى البلوك والتقطيع، داخل مصنعنا.' },
        { title: 'ألوان وكثافات متعددة', text: 'نُنتج حسب احتياج كل عميل وكل استخدام.' },
        { title: 'علاقة مباشرة', text: 'تتعامل مع المصنع مباشرة، من عرض السعر حتى التسليم.' },
        { title: 'تطوير مستمر', text: 'نطوّر عملياتنا باستمرار لنرفع الجودة ونقلل الهالك.' }
      ]
    },
    gallery: {
      eyebrow: 'المعرض',
      title: ['داخل', 'سيتي فوم.'],
      items: [
        ['media/gallery/yard-magenta.jpg', 'ساحة البلوكات'],
        ['media/gallery/pour.jpg', 'الصب على الخط'],
        ['media/gallery/yard-green.jpg', 'بلوكات بألوان مختلفة'],
        ['media/gallery/tanks.jpg', 'خزانات البوليول'],
        ['media/gallery/tex-red.jpg', 'قوام الإسفنج عن قرب'],
        ['media/gallery/yard-aisle.jpg', 'ممرات التخزين'],
        ['media/gallery/line.jpg', 'خط الإنتاج والأوناش'],
        ['media/gallery/tex-magenta.jpg', 'إسفنج موف'],
        ['media/gallery/yard-red.jpg', 'بلوكات جاهزة للتقطيع']
      ]
    },
    contact: {
      eyebrow: 'تواصل معنا',
      title: ['لنبدأ', 'طلبك القادم.'],
      lead: 'للاستفسارات التجارية وعروض الأسعار وطلبات الجملة، راسلنا وسيعود إليك فريقنا.',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الخط الساخن',
      locationLabel: 'العنوان',
      location: 'إنشاص، المنطقة الصناعية التاسعة، بساتين الإسماعيلية، مصر',
      map: 'افتح على الخريطة',
      businessLabel: 'الاستفسارات التجارية',
      business: 'بلوكات · شيتات · مراتب · طلبات خاصة',
      form: {
        name: 'الاسم',
        company: 'الشركة',
        phone: 'رقم الهاتف',
        email: 'البريد الإلكتروني',
        type: 'نوع الطلب',
        types: ['بلوكات الإسفنج', 'شيتات وتقطيع', 'مراتب', 'استفسار آخر'],
        message: 'رسالتك',
        messagePh: 'اكتب تفاصيل طلبك: المنتج، الكثافة، المقاسات، الكمية…',
        send: 'إرسال الطلب',
        note: 'عند الإرسال سيُفتح تطبيق البريد لديك والرسالة جاهزة.',
        subject: 'طلب من موقع سيتي فوم',
        sent: 'جارٍ فتح تطبيق البريد… إن لم يُفتح، راسلنا مباشرة على'
      }
    },
    footer: {
      desc: 'سيتي فوم — شركة مصرية لتصنيع الإسفنج البولي يوريثان المرن والمراتب منذ 2008.',
      navTitle: 'الموقع',
      productsTitle: 'المنتجات',
      contactTitle: 'تواصل',
      rights: 'جميع الحقوق محفوظة.',
      replay: 'شاهد المقدمة'
    }
  },

  en: {
    dir: 'ltr',
    title: 'City Foam | Flexible Polyurethane Foam Manufacturer in Egypt since 2008',
    skip: 'Skip to content',
    nav: nav.en,
    langSwitch: 'ع',
    langLabel: 'التحويل إلى العربية',
    menu: 'Menu',
    close: 'Close',
    intro: { tagline: 'Flexible polyurethane foam · Since 2008', enter: 'Tap the foam to enter', skip: 'Skip' },
    hero: {
      eyebrow: 'Flexible polyurethane foam · Egypt · Since 2008',
      lines: ['Engineering comfort.', 'Powering industry.'],
      sub: 'City Foam delivers advanced foam manufacturing solutions through experience, technology, and a commitment to quality.',
      cta1: 'Explore our products',
      cta2: 'Discover City Foam',
      facts: ['Est. 2008 · Egypt', 'German Hennecke foaming technology', 'Blocks · Sheets · Mattresses'],
      scroll: 'Scroll',
      pause: 'Pause video',
      play: 'Play video'
    },
    about: {
      eyebrow: 'About City Foam',
      title: ['Built on experience.', 'Driven by quality.'],
      lead: 'Since 2008, City Foam has been manufacturing flexible polyurethane foam in Egypt.',
      body: [
        'We started with a clear commitment: foam you can rely on, order after order. Over the years that commitment became a complete production operation, from raw-material tanks to the foaming line to our block yard.',
        'Today we supply foam blocks, cut sheets and mattresses to manufacturers and partners who need consistent quality from one order to the next.'
      ],
      stats: [
        { value: 2008, label: 'Founded', from: 1990 },
        { value: 'years', label: 'Years of experience', suffix: '+' },
        { value: 6, label: 'Foam colors in our yard, at least', suffix: '+' }
      ],
      caption: 'Foam block yard — City Foam'
    },
    products: {
      eyebrow: 'Products',
      title: ['Made for', 'industry.'],
      lead: 'Three core categories, all made from our own foam. Exact specifications are set per order.',
      specLabel: 'Specifications',
      appsLabel: 'Applications',
      cta: 'Request details',
      items: [
        {
          key: 'blocks',
          name: 'Flexible PU Foam Blocks',
          desc: 'Large-format foam blocks poured on our continuous foaming line, in multiple densities and colors.',
          apps: ['Mattress manufacturers', 'Furniture factories', 'Foam converters'],
          specs: [['Format', 'Full blocks'], ['Density', 'On request'], ['Color', 'Multiple colors']],
          img: 'media/gallery/yard-aisle.jpg'
        },
        {
          key: 'sheets',
          name: 'Foam Sheets & Cut-to-Size',
          desc: 'Blocks sliced into sheets of the thickness you need and cut to the dimensions you specify.',
          apps: ['Upholstery', 'Mattress layers', 'Cushions & seating'],
          specs: [['Thickness', 'On request'], ['Dimensions', 'To customer spec'], ['Density', 'On request']],
          img: 'media/gallery/yard-wall.jpg'
        },
        {
          key: 'mattresses',
          name: 'Mattresses',
          desc: 'Mattresses made with City Foam foam, for homes, hotels and distributors.',
          apps: ['Homes', 'Hotels', 'Furniture retailers'],
          specs: [['Sizes', 'On request'], ['Core', 'City Foam foam'], ['Supply', 'Retail & wholesale']],
          img: 'img/products/medical.jpg'
        }
      ]
    },
    manufacturing: {
      eyebrow: 'Manufacturing',
      title: ['From raw material', 'to foam block.'],
      lead: 'A complete production line inside our factory. Scroll through the process.',
      steps: [
        { n: '01', title: 'Raw materials', text: 'Polyol and isocyanate are stored in dedicated bulk tanks and fed to the line through closed pipework.' },
        { n: '02', title: 'Metering & mixing', text: 'Our German Hennecke machine meters the components and additives precisely and mixes them in the head before pouring onto the moving line.' },
        { n: '03', title: 'Foaming & curing', text: 'The mix rises on the conveyor into a continuous foam block, which is cut into blocks and left to cure.' },
        { n: '04', title: 'Cutting & processing', text: 'Cured blocks are cut into sheets and sizes to each customer’s order.' }
      ],
      badge: 'German technology — Hennecke',
      hennecke: {
        title: 'The heart of the line: Hennecke',
        text: 'We rely on a German Hennecke foaming machine to meter and mix components precisely. That precision is what keeps color and density consistent from block to block.'
      },
      note: 'Illustrations of the production stages'
    },
    quality: {
      eyebrow: 'Quality & Technology',
      title: ['Quality is built', 'into every process.'],
      lead: 'For us, quality doesn’t start at final inspection. It starts the moment raw materials arrive.',
      pillars: [
        { title: 'Controlled raw materials', text: 'Components are stored in dedicated tanks and moved through closed lines to the mixing head.' },
        { title: 'Precise metering', text: 'Hennecke metering keeps the mix ratio consistent from block to block.' },
        { title: 'Material consistency', text: 'Density and color are set at the mixing head, not left to chance.' },
        { title: 'Cut to specification', text: 'Sheets and sizes are cut to the dimensions agreed with each customer.' }
      ],
      scan: 'Real foam texture from our production'
    },
    applications: {
      eyebrow: 'Industries & Applications',
      title: ['Foam inside', 'everyday comfort.'],
      ticker: ['Mattress manufacturing', 'Furniture & upholstery', 'Bedding', 'Hospitality'],
      items: [
        { title: 'Mattress manufacturing', text: 'Blocks and sheets for mattress layers.', media: 'media/gallery/yard-red.jpg', type: 'img' },
        { title: 'Furniture & upholstery', text: 'Foam for sofas, couches and seating.', media: 'media/sewing', type: 'video' },
        { title: 'Bedding & home', text: 'Mattresses for the whole family.', media: 'media/homes', type: 'video' },
        { title: 'Hospitality', text: 'Durable mattresses for daily, intensive use.', media: 'media/hotels', type: 'video' }
      ]
    },
    why: {
      eyebrow: 'Why City Foam',
      title: ['A manufacturing partner', 'you can rely on.'],
      items: [
        { title: 'Experience since 2008', text: 'Many years manufacturing flexible foam for the Egyptian market.' },
        { title: 'German technology', text: 'A Hennecke foaming machine for precise metering and mixing.' },
        { title: 'Integrated production', text: 'From raw-material tanks to block and cutting, under one roof.' },
        { title: 'Colors & densities', text: 'Produced to match each customer and each application.' },
        { title: 'Direct relationship', text: 'Deal with the factory directly, from quote to delivery.' },
        { title: 'Continuous improvement', text: 'We keep refining our processes to raise quality and cut waste.' }
      ]
    },
    gallery: {
      eyebrow: 'Gallery',
      title: ['Inside', 'City Foam.'],
      items: [
        ['media/gallery/yard-magenta.jpg', 'The block yard'],
        ['media/gallery/pour.jpg', 'Pouring on the line'],
        ['media/gallery/yard-green.jpg', 'Blocks in many colors'],
        ['media/gallery/tanks.jpg', 'Polyol tanks'],
        ['media/gallery/tex-red.jpg', 'Foam texture, up close'],
        ['media/gallery/yard-aisle.jpg', 'Storage aisles'],
        ['media/gallery/line.jpg', 'Production line & cranes'],
        ['media/gallery/tex-magenta.jpg', 'Mauve foam'],
        ['media/gallery/yard-red.jpg', 'Blocks ready for cutting']
      ]
    },
    contact: {
      eyebrow: 'Contact Us',
      title: ['Let’s start', 'your next order.'],
      lead: 'For business inquiries, quotations and wholesale orders, write to us and our team will get back to you.',
      emailLabel: 'Email',
      phoneLabel: 'Hotline',
      locationLabel: 'Address',
      location: 'Industrial Zone 9, Basateen El Ismailia, Inshas, Egypt',
      map: 'Open in Google Maps',
      businessLabel: 'Business inquiries',
      business: 'Blocks · Sheets · Mattresses · Custom orders',
      form: {
        name: 'Name',
        company: 'Company',
        phone: 'Phone',
        email: 'Email',
        type: 'Inquiry type',
        types: ['Foam blocks', 'Sheets & cutting', 'Mattresses', 'Other inquiry'],
        message: 'Message',
        messagePh: 'Tell us what you need: product, density, dimensions, quantity…',
        send: 'Send inquiry',
        note: 'Sending opens your email app with the message ready to go.',
        subject: 'Inquiry from the City Foam website',
        sent: 'Opening your email app… If nothing opened, email us directly at'
      }
    },
    footer: {
      desc: 'City Foam — an Egyptian manufacturer of flexible polyurethane foam and mattresses since 2008.',
      navTitle: 'Site',
      productsTitle: 'Products',
      contactTitle: 'Contact',
      rights: 'All rights reserved.',
      replay: 'Replay intro'
    }
  }
};

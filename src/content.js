// All site copy, Arabic + English.
// Only verified company facts are stated: founded 2008, Egypt, flexible PU foam + mattresses,
// German Hennecke foaming machine (since 2013), foam produced in multiple colors, contact email,
// and the history/founder facts from the group's company profile (El Salam City start, fire, rebuild in
// Belbeis-Sharqia, first automatic cutter 2009, founder Sobhy Bayoumi, sister brand Wonderland).
// Do not add capacities, certifications, phone numbers or addresses until the company confirms them.

export const EMAIL = 'mohamed.sobhy@cityfoameg.com';
export const FOUNDED = 2008;
export const WONDERLAND_URL = 'https://wonderlandhomecollection.com';

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
      scroll: 'مرّر للأسفل'
    },
    about: {
      eyebrow: 'من نحن',
      title: ['خبرة نبني عليها.', 'وجودة تقودنا.'],
      lead: 'منذ عام 2008 وسيتي فوم تصنّع الإسفنج البولي يوريثان المرن في مصر.',
      body: [
        'بدأت القصة في مدينة السلام باستثمار قدره 360,000 جنيه، وماكينات يدوية، وطموح كبير. وعندما دمّر حريق مصنعنا الأول، أعدنا البناء في بلبيس بالشرقية، ووسّعنا عملياتنا، وحوّلنا الأزمة إلى نجاح.',
        'اليوم نعمل بماكينة صب ألمانية من Hennecke، ونورّد بلوكات الإسفنج والشيتات المقطّعة والمراتب لمصانع وشركاء يحتاجون جودة ثابتة لا تتغير من طلبية لأخرى.'
      ],
      stats: [
        { value: 2008, label: 'سنة التأسيس', from: 1990 },
        { value: 'years', label: 'عامًا من الخبرة', suffix: '+' },
        { value: 6, label: 'ألوان إسفنج على الأقل في ساحتنا', suffix: '+' }
      ],
      caption: 'ساحة بلوكات الإسفنج — سيتي فوم'
    },
    history: {
      eyebrow: 'تاريخنا',
      title: ['من مدينة السلام', 'إلى بلبيس.'],
      items: [
        { year: '2008', title: 'البداية', text: 'بدأنا بحلم واستثمار قدره 360,000 جنيه في مدينة السلام، بماكينات يدوية وطموح كبير. ورغم أن حريقًا دمّر مصنعنا الأول، أعدنا البناء في بلبيس بالشرقية ووسّعنا عملياتنا.' },
        { year: '2009', title: 'التحوّل للأتمتة', text: 'استثمرنا في أول ماكينة تقطيع إسفنج أوتوماتيكية، لدقة وكفاءة أعلى وجودة أكثر ثباتًا.' },
        { year: '2013', title: 'تكنولوجيا متقدمة', text: 'خطوة كبيرة: ماكينة Hennecke الألمانية. وبحسب الشركة، أصبحنا من ثلاثة مصانع فقط في مصر تمتلكها.' },
        { year: '2021', title: 'رؤية أوسع', text: 'التزامنا بالجودة والابتكار قادنا إلى تنويع خطوط منتجاتنا.' },
        { year: '2024', title: 'Wonderland للمفروشات', text: 'أطلقنا عبر براند Wonderland مجموعة كاملة من مفروشات البيت: ملايات، ألحفة، بطاطين، وواقيات مراتب.' }
      ]
    },
    founder: {
      eyebrow: 'المؤسس',
      name: 'أ. صبحي بيومي',
      role: 'المؤسس والرئيس التنفيذي',
      body: [
        'بنى صبحي بيومي الشركة من الصفر، مدفوعًا بشغف حقيقي بجودة الصنعة والابتكار في صناعة الإسفنج والمراتب. بدأت رحلته في عالم الأعمال في سن الرابعة عشرة، ويمتلك اليوم خبرة تتجاوز ثلاثة عقود.',
        'يُعرف بقراراته الحاسمة والمدروسة، وبقدرته على الإنصات لفريقه وعملائه، وهو ما بنى داخل الشركة ثقافة قائمة على الثقة والتعاون. ورغم التحديات الكثيرة، ظل التطوير المستمر أساس فلسفته في القيادة.'
      ],
      stat: 'عامًا من الخبرة',
      statValue: 30
    },
    group: {
      eyebrow: 'من نفس المجموعة',
      name: 'Wonderland',
      text: 'براند المراتب ومفروشات البيت التابع لمجموعتنا: ملايات، ألحفة، بطاطين، وواقيات مراتب.',
      cta: 'زيارة موقع Wonderland'
    },
    products: {
      eyebrow: 'المنتجات',
      title: ['منتجات تُصنع', 'للصناعة.'],
      lead: 'ثلاث فئات أساسية، تُنتج كلها من إسفنجنا. المواصفات الدقيقة تُحدّد حسب كل طلب.',
      specLabel: 'المواصفات',
      appsLabel: 'الاستخدامات',
      cta: 'اطلب التفاصيل',
      illustrative: 'صورة توضيحية',
      items: [
        {
          key: 'blocks',
          name: 'بلوكات الإسفنج البولي يوريثان المرن',
          desc: 'بلوكات إسفنج كبيرة تُصب على خط الإنتاج المستمر، بكثافات وألوان متعددة.',
          apps: ['مصانع المراتب', 'مصانع الأثاث', 'ورش التقطيع والتحويل'],
          specs: [['الشكل', 'بلوكات كاملة'], ['الكثافة', 'حسب الطلب'], ['اللون', 'ألوان متعددة']],
          img: 'media/ai/blocks'
        },
        {
          key: 'sheets',
          name: 'شيتات وتقطيع حسب المقاس',
          desc: 'نقطّع البلوكات إلى شيتات بالسُمك المطلوب، وبالمقاسات التي يحددها العميل.',
          apps: ['التنجيد', 'طبقات المراتب', 'المساند والوسائد'],
          specs: [['السُمك', 'حسب الطلب'], ['المقاس', 'حسب مواصفات العميل'], ['الكثافة', 'حسب الطلب']],
          img: 'media/ai/sheets'
        },
        {
          key: 'mattresses',
          name: 'المراتب',
          desc: 'مراتب مصنوعة من إسفنج سيتي فوم، للبيوت والفنادق والموزعين.',
          apps: ['البيوت', 'الفنادق', 'تجار ومعارض الأثاث'],
          specs: [['المقاسات', 'حسب الطلب'], ['الخامة', 'إسفنج سيتي فوم'], ['التوريد', 'أفراد وجملة']],
          img: 'media/ai/mattress'
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
      note: 'رسوم توضيحية لمراحل الإنتاج',
      banner: { alt: 'خط إنتاج إسفنج بولي يوريثان مستمر', caption: 'صورة توضيحية لخط صب الإسفنج المستمر' }
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
        { title: 'تكنولوجيا ألمانية', text: 'ماكينة صب Hennecke منذ 2013 لقياس وخلط دقيق.' },
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
      locationLabel: 'الموقع',
      location: 'بلبيس، الشرقية، مصر',
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
        subject: 'طلب من موقع سيتي فوم'
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
      scroll: 'Scroll'
    },
    about: {
      eyebrow: 'About City Foam',
      title: ['Built on experience.', 'Driven by quality.'],
      lead: 'Since 2008, City Foam has been manufacturing flexible polyurethane foam in Egypt.',
      body: [
        'It started in El Salam City with a 360,000 EGP investment, manual machines and big ambition. When a fire destroyed our first factory, we rebuilt in Belbeis, Sharqia, expanded our operations and turned adversity into success.',
        'Today we run a German Hennecke foaming machine and supply foam blocks, cut sheets and mattresses to manufacturers and partners who need consistent quality from one order to the next.'
      ],
      stats: [
        { value: 2008, label: 'Founded', from: 1990 },
        { value: 'years', label: 'Years of experience', suffix: '+' },
        { value: 6, label: 'Foam colors in our yard, at least', suffix: '+' }
      ],
      caption: 'Foam block yard — City Foam'
    },
    history: {
      eyebrow: 'Our history',
      title: ['From El Salam City', 'to Belbeis.'],
      items: [
        { year: '2008', title: 'The beginning', text: 'We started with a dream and a 360,000 EGP investment in El Salam City, with manual machines and big ambition. Despite a fire destroying our first factory, we rebuilt in Belbeis, Sharqia and expanded our operations.' },
        { year: '2009', title: 'Embracing automation', text: 'We invested in our first automatic foam-cutting machine for greater precision, efficiency and consistency.' },
        { year: '2013', title: 'Cutting-edge technology', text: 'A giant leap: the German Hennecke system. According to the company, this made us one of only three factories in Egypt to have it.' },
        { year: '2021', title: 'Expanding our vision', text: 'Our commitment to quality and innovation led us to diversify our product line.' },
        { year: '2024', title: 'Wonderland home bedding', text: 'Through the Wonderland brand we introduced a full range of home bedding: bed sheets, duvets, blankets and mattress protectors.' }
      ]
    },
    founder: {
      eyebrow: 'Our founder',
      name: 'Mr. Sobhy Bayoumi',
      role: 'Founder & CEO',
      body: [
        'Sobhy Bayoumi built the company from the ground up, driven by a real passion for craftsmanship and innovation in foam and mattress manufacturing. His journey in business began at the age of 14, and today he brings more than three decades of experience.',
        'Known for decisive, well-calculated leadership and for listening closely to his team and customers, he has built a culture of trust and collaboration. Through every challenge, continuous improvement has remained the cornerstone of his leadership.'
      ],
      stat: 'Years of experience',
      statValue: 30
    },
    group: {
      eyebrow: 'Part of the same group',
      name: 'Wonderland',
      text: 'Our group’s mattress and home-bedding brand: bed sheets, duvets, blankets and mattress protectors.',
      cta: 'Visit Wonderland'
    },
    products: {
      eyebrow: 'Products',
      title: ['Made for', 'industry.'],
      lead: 'Three core categories, all made from our own foam. Exact specifications are set per order.',
      specLabel: 'Specifications',
      appsLabel: 'Applications',
      cta: 'Request details',
      illustrative: 'Illustrative image',
      items: [
        {
          key: 'blocks',
          name: 'Flexible PU Foam Blocks',
          desc: 'Large-format foam blocks poured on our continuous foaming line, in multiple densities and colors.',
          apps: ['Mattress manufacturers', 'Furniture factories', 'Foam converters'],
          specs: [['Format', 'Full blocks'], ['Density', 'On request'], ['Color', 'Multiple colors']],
          img: 'media/ai/blocks'
        },
        {
          key: 'sheets',
          name: 'Foam Sheets & Cut-to-Size',
          desc: 'Blocks sliced into sheets of the thickness you need and cut to the dimensions you specify.',
          apps: ['Upholstery', 'Mattress layers', 'Cushions & seating'],
          specs: [['Thickness', 'On request'], ['Dimensions', 'To customer spec'], ['Density', 'On request']],
          img: 'media/ai/sheets'
        },
        {
          key: 'mattresses',
          name: 'Mattresses',
          desc: 'Mattresses made with City Foam foam, for homes, hotels and distributors.',
          apps: ['Homes', 'Hotels', 'Furniture retailers'],
          specs: [['Sizes', 'On request'], ['Core', 'City Foam foam'], ['Supply', 'Retail & wholesale']],
          img: 'media/ai/mattress'
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
      note: 'Illustrations of the production stages',
      banner: { alt: 'Continuous polyurethane foam production line', caption: 'Illustrative image of a continuous slabstock foaming line' }
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
        { title: 'German technology', text: 'A Hennecke foaming machine since 2013 for precise metering and mixing.' },
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
      locationLabel: 'Location',
      location: 'Belbeis, Sharqia, Egypt',
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
        subject: 'Inquiry from the City Foam website'
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

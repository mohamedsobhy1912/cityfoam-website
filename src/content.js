// All site copy, Arabic + English.
// Only verified company facts are stated: founded 2008, Egypt, flexible PU foam + mattresses,
// German Hennecke foaming machine, foam produced in multiple colors, contact email,
// hotline 16298, address in Inshas (Industrial Zone 9, Basateen El Ismailia).
// Do not add capacities, certifications or social links until the company confirms them.

export const EMAIL = 'mohamed.sobhy@cityfoameg.com';
export const FOUNDED = 2008;
export const PHONE = '16298'; // hotline
export const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('إنشاص المنطقة الصناعية التاسعة بساتين الإسماعيلية')}`;

// Real foam textures from the factory yard, shown as the colour range.
export const SWATCHES = ['pink', 'red', 'magenta', 'blue', 'orange', 'green'];

export const CONTENT = {
  ar: {
    dir: 'rtl',
    title: 'سيتي فوم | City Foam — مصنع إسفنج بولي يوريثان مرن في مصر منذ 2008',
    skip: 'تخطي إلى المحتوى',
    nav: [
      ['products', 'المنتجات'],
      ['factory', 'المصنع'],
      ['uses', 'الاستخدامات'],
      ['about', 'من نحن'],
      ['contact', 'تواصل معنا']
    ],
    langSwitch: 'English',
    langLabel: 'Switch to English',
    menu: 'القائمة',
    close: 'إغلاق القائمة',
    callShort: 'اتصل',
    hero: {
      title: 'إسفنج بولي يوريثان مرن، بالكثافة واللون الذي يحتاجه مصنعك.',
      sub: 'نصنع بلوكات الإسفنج ونقطّعها شيتات بالمقاس، ونصنع المراتب، في مصنعنا بإنشاص منذ 2008.',
      quote: 'اطلب عرض سعر',
      call: 'اتصل على 16298',
      facts: [
        ['منذ', '2008'],
        ['ماكينة الصب', 'Hennecke الألمانية'],
        ['المصنع', 'إنشاص، مصر']
      ],
      alt: 'بلوكات إسفنج ملونة في ساحة مصنع سيتي فوم',
      pause: 'إيقاف الفيديو',
      play: 'تشغيل الفيديو'
    },
    colors: {
      word: 'إسفنج',
      title: 'ننتج الإسفنج بألوان متعددة',
      text: 'صور حقيقية من ساحة البلوكات. اذكر اللون الذي تريده في طلبك.',
      names: { pink: 'وردي', red: 'أحمر', magenta: 'موف', blue: 'أزرق', orange: 'برتقالي', green: 'أخضر' }
    },
    products: {
      title: 'ما ننتجه',
      lead: 'ثلاث فئات، كلها من إسفنج نصبّه بأنفسنا. الكثافة والمقاسات تُحدَّد مع كل طلب.',
      specLabel: 'المواصفات',
      usesLabel: 'يُستخدم في',
      cta: 'اطلب سعر',
      items: [
        {
          key: 'blocks',
          name: 'بلوكات الإسفنج المرن',
          desc: 'بلوكات كبيرة تُصب على خط الإنتاج المستمر، بكثافات وألوان متعددة.',
          uses: ['مصانع المراتب', 'مصانع الأثاث', 'ورش التقطيع'],
          specs: [['الشكل', 'بلوكات كاملة'], ['الكثافة', 'حسب الطلب'], ['اللون', 'ألوان متعددة']],
          img: 'media/gallery/yard-aisle.jpg',
          alt: 'ممر بين صفوف بلوكات الإسفنج الملونة'
        },
        {
          key: 'sheets',
          name: 'شيتات وتقطيع بالمقاس',
          desc: 'نقطّع البلوكات شيتات بالسُمك المطلوب، وبالأبعاد التي يحددها العميل.',
          uses: ['التنجيد', 'طبقات المراتب', 'المساند والوسائد'],
          specs: [['السُمك', 'حسب الطلب'], ['المقاس', 'حسب مواصفات العميل'], ['الكثافة', 'حسب الطلب']],
          img: 'media/gallery/yard-wall.jpg',
          alt: 'جدار من بلوكات الإسفنج الحمراء والزرقاء والصفراء'
        },
        {
          key: 'mattresses',
          name: 'المراتب',
          desc: 'مراتب من إسفنج سيتي فوم، للبيوت والفنادق والموزعين.',
          uses: ['البيوت', 'الفنادق', 'معارض الأثاث'],
          specs: [['المقاسات', 'حسب الطلب'], ['الخامة', 'إسفنج سيتي فوم'], ['البيع', 'أفراد وجملة']],
          img: 'img/products/medical.jpg',
          alt: 'مرتبة في غرفة نوم'
        }
      ]
    },
    factory: {
      title: 'من الخزان إلى البلوك',
      lead: 'كل مراحل الإنتاج داخل مصنعنا.',
      steps: [
        { title: 'الخامات', text: 'يُخزَّن البوليول والأيزوسيانات في خزانات مخصصة، وتنتقل إلى الخط عبر مواسير مغلقة.', img: 'media/gallery/tanks.jpg', alt: 'خزانات البوليول' },
        { title: 'القياس والخلط', text: 'تقيس ماكينة Hennecke المكوّنات بدقة وتخلطها في رأس الخلط، ثم تصبّها على الخط المتحرك.', img: 'media/gallery/pour.jpg', alt: 'صب خليط الإسفنج على الخط' },
        { title: 'التمدد والتسوية', text: 'يتمدد الخليط على السير إلى بلوك متصل، يُقطّع بلوكات تُترك حتى تستوي.', img: 'media/gallery/line.jpg', alt: 'خط الإنتاج والأوناش' },
        { title: 'التقطيع والتجهيز', text: 'تُقطّع البلوكات شيتات ومقاسات حسب طلب كل عميل.', img: 'media/gallery/yard-green.jpg', alt: 'بلوكات إسفنج جاهزة للتقطيع' }
      ],
      hennecke: {
        title: 'لماذا Hennecke مهمة لك',
        text: 'ماكينة الصب الألمانية تقيس نسب الخلط بدقة، فتبقى الكثافة واللون ثابتين من بلوك لآخر ومن طلبية لأخرى.'
      }
    },
    uses: {
      title: 'أين يُستخدم إسفنجنا',
      items: [
        { title: 'مصانع المراتب', text: 'بلوكات وشيتات لطبقات المراتب.', media: 'media/gallery/yard-red.jpg', type: 'img' },
        { title: 'الأثاث والتنجيد', text: 'إسفنج للأنتريهات والكنب والكراسي.', media: 'media/sewing', type: 'video' },
        { title: 'البيوت', text: 'مراتب لكل أفراد الأسرة.', media: 'media/homes', type: 'video' },
        { title: 'الفنادق', text: 'مراتب تتحمل الاستخدام اليومي.', media: 'media/hotels', type: 'video' }
      ]
    },
    about: {
      title: 'مصنع مصري للإسفنج منذ 2008',
      body: [
        'بدأت سيتي فوم بهدف واضح: إسفنج يُعتمد عليه في كل طلبية. ومع السنين صار لدينا خط إنتاج متكامل، من خزانات الخامات إلى خط الصب إلى ساحة البلوكات.',
        'نورّد اليوم البلوكات والشيتات والمراتب لمصانع وتجار يحتاجون جودة ثابتة من طلبية لأخرى.'
      ],
      stats: [
        { value: 'years', label: 'عامًا من الخبرة' },
        { value: '6+', label: 'ألوان في ساحتنا' },
        { value: '4', label: 'مراحل إنتاج داخل مصنعنا' }
      ],
      whyTitle: 'لماذا يتعامل معنا العملاء',
      why: [
        { title: 'تتعامل مع المصنع مباشرة', text: 'من عرض السعر حتى التسليم، بلا وسطاء.' },
        { title: 'إنتاج متكامل', text: 'من الخامة إلى البلوك والتقطيع تحت سقف واحد.' },
        { title: 'حسب احتياجك', text: 'الكثافة واللون والمقاس تُحدَّد مع كل طلب.' },
        { title: 'جودة ثابتة', text: 'قياس دقيق للخلطة يعني نتيجة واحدة كل مرة.' }
      ],
      img: 'media/gallery/yard-magenta.jpg',
      alt: 'بلوكات إسفنج موف في ساحة المصنع'
    },
    contact: {
      title: 'اطلب عرض سعر',
      lead: 'اتصل بنا أو أرسل تفاصيل طلبك، ويرد عليك فريق المبيعات.',
      phoneLabel: 'الخط الساخن',
      emailLabel: 'البريد الإلكتروني',
      locationLabel: 'العنوان',
      location: 'إنشاص، المنطقة الصناعية التاسعة، بساتين الإسماعيلية، مصر',
      map: 'افتح على الخريطة',
      form: {
        name: 'الاسم',
        company: 'الشركة',
        phone: 'رقم الهاتف',
        email: 'البريد الإلكتروني',
        type: 'المنتج',
        types: ['بلوكات', 'شيتات وتقطيع', 'مراتب', 'استفسار آخر'],
        message: 'تفاصيل الطلب',
        messagePh: 'الكثافة، المقاسات، اللون، الكمية…',
        send: 'أرسل الطلب',
        note: 'سيُفتح تطبيق البريد لديك والرسالة جاهزة للإرسال.',
        subject: 'طلب عرض سعر من موقع سيتي فوم',
        sent: 'جارٍ فتح تطبيق البريد… إن لم يُفتح، راسلنا مباشرة على'
      }
    },
    footer: {
      desc: 'سيتي فوم، مصنع مصري للإسفنج البولي يوريثان المرن والمراتب منذ 2008.',
      productsTitle: 'المنتجات',
      contactTitle: 'تواصل',
      rights: 'جميع الحقوق محفوظة.'
    }
  },

  en: {
    dir: 'ltr',
    title: 'City Foam | Flexible Polyurethane Foam Manufacturer in Egypt since 2008',
    skip: 'Skip to content',
    nav: [
      ['products', 'Products'],
      ['factory', 'Factory'],
      ['uses', 'Uses'],
      ['about', 'About'],
      ['contact', 'Contact']
    ],
    langSwitch: 'العربية',
    langLabel: 'التحويل إلى العربية',
    menu: 'Menu',
    close: 'Close menu',
    callShort: 'Call',
    hero: {
      title: 'Flexible polyurethane foam in the density and colour your factory needs.',
      sub: 'We pour foam blocks, cut them into sheets to size, and make mattresses at our factory in Inshas, Egypt, since 2008.',
      quote: 'Request a quote',
      call: 'Call 16298',
      facts: [
        ['Since', '2008'],
        ['Foaming machine', 'Hennecke, Germany'],
        ['Factory', 'Inshas, Egypt']
      ],
      alt: 'Coloured foam blocks in the City Foam factory yard',
      pause: 'Pause video',
      play: 'Play video'
    },
    colors: {
      word: 'FOAM',
      title: 'We produce foam in many colours',
      text: 'Real photos from our block yard. Name the colour you need in your order.',
      names: { pink: 'Pink', red: 'Red', magenta: 'Magenta', blue: 'Blue', orange: 'Orange', green: 'Green' }
    },
    products: {
      title: 'What we make',
      lead: 'Three product lines, all from foam we pour ourselves. Density and sizes are set with each order.',
      specLabel: 'Specifications',
      usesLabel: 'Used in',
      cta: 'Request a price',
      items: [
        {
          key: 'blocks',
          name: 'Flexible foam blocks',
          desc: 'Large blocks poured on our continuous foaming line, in multiple densities and colours.',
          uses: ['Mattress factories', 'Furniture factories', 'Cutting workshops'],
          specs: [['Form', 'Full blocks'], ['Density', 'To order'], ['Colour', 'Multiple colours']],
          img: 'media/gallery/yard-aisle.jpg',
          alt: 'An aisle between rows of coloured foam blocks'
        },
        {
          key: 'sheets',
          name: 'Sheets & cut-to-size',
          desc: 'Blocks sliced into sheets of the thickness you need, cut to the dimensions you specify.',
          uses: ['Upholstery', 'Mattress layers', 'Cushions & pillows'],
          specs: [['Thickness', 'To order'], ['Size', 'To your specification'], ['Density', 'To order']],
          img: 'media/gallery/yard-wall.jpg',
          alt: 'A wall of red, blue and yellow foam blocks'
        },
        {
          key: 'mattresses',
          name: 'Mattresses',
          desc: 'Mattresses made from City Foam foam, for homes, hotels and distributors.',
          uses: ['Homes', 'Hotels', 'Furniture showrooms'],
          specs: [['Sizes', 'To order'], ['Material', 'City Foam foam'], ['Sales', 'Retail & wholesale']],
          img: 'img/products/medical.jpg',
          alt: 'A mattress in a bedroom'
        }
      ]
    },
    factory: {
      title: 'From tank to foam block',
      lead: 'Every production step happens inside our factory.',
      steps: [
        { title: 'Raw materials', text: 'Polyol and isocyanate are stored in dedicated tanks and fed to the line through closed pipework.', img: 'media/gallery/tanks.jpg', alt: 'Polyol storage tanks' },
        { title: 'Metering & mixing', text: 'Our Hennecke machine meters the components precisely, mixes them in the head and pours onto the moving line.', img: 'media/gallery/pour.jpg', alt: 'Foam mix being poured on the line' },
        { title: 'Foaming & curing', text: 'The mix rises on the conveyor into a continuous block, which is cut into blocks and left to cure.', img: 'media/gallery/line.jpg', alt: 'The production line and cranes' },
        { title: 'Cutting & processing', text: 'Cured blocks are cut into sheets and sizes to each customer’s order.', img: 'media/gallery/yard-green.jpg', alt: 'Foam blocks ready for cutting' }
      ],
      hennecke: {
        title: 'Why Hennecke matters to you',
        text: 'Our German foaming machine meters the mix precisely, so density and colour stay the same from block to block and order to order.'
      }
    },
    uses: {
      title: 'Where our foam goes',
      items: [
        { title: 'Mattress factories', text: 'Blocks and sheets for mattress layers.', media: 'media/gallery/yard-red.jpg', type: 'img' },
        { title: 'Furniture & upholstery', text: 'Foam for sofas, couches and seating.', media: 'media/sewing', type: 'video' },
        { title: 'Homes', text: 'Mattresses for the whole family.', media: 'media/homes', type: 'video' },
        { title: 'Hotels', text: 'Mattresses built for daily use.', media: 'media/hotels', type: 'video' }
      ]
    },
    about: {
      title: 'An Egyptian foam factory since 2008',
      body: [
        'City Foam started with a clear aim: foam you can rely on, order after order. Over the years that became a complete production line, from raw-material tanks to the foaming line to our block yard.',
        'Today we supply blocks, sheets and mattresses to manufacturers and traders who need the same quality every time they order.'
      ],
      stats: [
        { value: 'years', label: 'years of experience' },
        { value: '6+', label: 'colours in our yard' },
        { value: '4', label: 'production steps in-house' }
      ],
      whyTitle: 'Why customers work with us',
      why: [
        { title: 'Deal with the factory', text: 'From quote to delivery, with no middlemen.' },
        { title: 'Integrated production', text: 'Raw material to block to cutting, under one roof.' },
        { title: 'Made to your order', text: 'Density, colour and size are set with each order.' },
        { title: 'Consistent quality', text: 'Precise metering means the same result every time.' }
      ],
      img: 'media/gallery/yard-magenta.jpg',
      alt: 'Magenta foam blocks in the factory yard'
    },
    contact: {
      title: 'Request a quote',
      lead: 'Call us or send the details of your order, and our sales team will get back to you.',
      phoneLabel: 'Hotline',
      emailLabel: 'Email',
      locationLabel: 'Address',
      location: 'Industrial Zone 9, Basateen El Ismailia, Inshas, Egypt',
      map: 'Open in Google Maps',
      form: {
        name: 'Name',
        company: 'Company',
        phone: 'Phone',
        email: 'Email',
        type: 'Product',
        types: ['Blocks', 'Sheets & cutting', 'Mattresses', 'Something else'],
        message: 'Order details',
        messagePh: 'Density, sizes, colour, quantity…',
        send: 'Send request',
        note: 'Your email app opens with the message ready to send.',
        subject: 'Quote request from the City Foam website',
        sent: 'Opening your email app… If nothing opened, email us directly at'
      }
    },
    footer: {
      desc: 'City Foam, an Egyptian manufacturer of flexible polyurethane foam and mattresses since 2008.',
      productsTitle: 'Products',
      contactTitle: 'Contact',
      rights: 'All rights reserved.'
    }
  }
};

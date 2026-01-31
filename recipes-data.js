const RECIPES_DATA = [
    // SUHOOR (50)
    {
        category: 'breakfast',
        name_en: "Ful Medames",
        name_ar: "فول مدمس",
        desc_en: "Slow-cooked fava beans with olive oil and cumin.",
        desc_ar: "فول مدمس مطهو ببطء بالزيت والكمون.",
        instr_en: ["Heat fava beans in a pot.", "Mash them slightly with a fork.", "Add olive oil, cumin, and lemon juice.", "Serve with fresh bread and vegetables."],
        instr_ar: ["سخن الفول في قدر.", "اهرسه قليلاً بالشوكة.", "أضف زيت الزيتون والكمون وعصير الليمون.", "قدمه مع الخبز الطازج والخضروات."]
    },
    {
        category: 'breakfast',
        name_en: "Shakshuka",
        name_ar: "شكشوكة",
        desc_en: "Poached eggs in tomato and bell pepper sauce.",
        desc_ar: "بيض مسلوق في صلصة الطماطم والفلفل.",
        instr_en: ["Sauté onions and peppers until soft.", "Add tomatoes and stew until thick.", "Make wells and crack eggs inside.", "Cover and cook until egg whites are set."],
        instr_ar: ["شوح البصل والفلفل حتى يذبل.", "أضف الطماطم واتركها تتسبك.", "اصنع فجوات وضع البيض داخلها.", "غطِ المقلاة حتى ينضج بياض البيض."]
    },
    {
        category: 'breakfast',
        name_en: "Labneh with Za'atar",
        name_ar: "لبنة بالزعتر",
        desc_en: "Creamy yogurt cheese topped with olive oil and za'atar.",
        desc_ar: "لبنة كريمية بزيت الزيتون والزعتر الأصلي.",
        instr_en: ["Spread labneh on a plate.", "Drizzle generously with olive oil.", "Sprinkle za'atar over the top.", "Serve with pita or cucumber sticks."],
        instr_ar: ["افرد اللبنة في طبق.", "صب زيت الزيتون بوفرة.", "رش الزعتر فوقها.", "قدمها مع خبز البيتا أو أصابع الخيار."]
    },
    {
        category: 'breakfast',
        name_en: "Date & PB Oats",
        name_ar: "شوفان بالتمر والفول السوداني",
        desc_en: "Overnight oats with chopped dates for energy.",
        desc_ar: "شوفان مشبع مع التمر وزبدة الفول السوداني.",
        instr_en: ["Mix oats with milk or water.", "Stir in chopped dates and peanut butter.", "Let soak overnight or cook on stove.", "Top with nuts before serving."],
        instr_ar: ["اخلط الشوفان مع الحليب أو الماء.", "أضف التمر المقطع وزبدة الفول السوداني.", "اتركه منقوعاً أو اطبخه على النار.", "زينه بالمكسرات قبل التقديم."]
    },
    {
        category: 'breakfast',
        name_en: "Honey Greek Yogurt",
        name_ar: "زبادي يوناني بالعسل",
        desc_en: "Thick yogurt with honey and walnuts.",
        desc_ar: "زبادي سميك مع العسل والجوز المقرمش.",
        instr_en: ["Place yogurt in a bowl.", "Drizzle with raw honey.", "Add crushed walnuts and cinnamon.", "Serve cold for a refreshing Suhoor."],
        instr_ar: ["ضع الزبادي في وعاء.", "صب عليه العسل الطبيعي.", "أضف الجوز المجروش والقرفة.", "قدمه بارداً لسحور منعش."]
    },
    {
        category: 'breakfast',
        name_en: "Cheese Manakish",
        name_ar: "مناقيش جبنة",
        desc_en: "Warm flatbread topped with melted Akkawi cheese.",
        desc_ar: "خبز دافئ مغطى بجبنة العكاوي الذائبة.",
        instr_en: ["Prepare or use store-bought dough.", "Top with desalted Akkawi or Mozzarella.", "Bake in hot oven until golden.", "Serve warm with tea."],
        instr_ar: ["حضر العجين أو استخدم الجاهز.", "ضع جبنة العكاوي أو الموزاريلا.", "اخبزها في فرن ساخن حتى تتحمر.", "قدمها دافئة مع الشاي."]
    },
    {
        category: 'breakfast',
        name_en: "Classic Hummus Toast",
        name_ar: "توست الحمص الكلاسيكي",
        desc_en: "Hummus spread on rye bread with cucumber slices.",
        desc_ar: "حمص على خبز الراي مع شرائح الخيار.",
        instr_en: ["Toast whole grain bread.", "Spread a thick layer of hummus.", "Top with cucumber and a dash of paprika.", "Drizzle with olive oil."],
        instr_ar: ["حمص خبز الحبوب الكاملة.", "ادهن طبقة سميكة من الحمص.", "ضع الخيار ورشة بابريكا.", "صب القليل من زيت الزيتون."]
    },
    {
        category: 'breakfast',
        name_en: "Egg White Omelet",
        name_ar: "أومليت بياض البيض",
        desc_en: "Light omelet with spinach and mushrooms.",
        desc_ar: "أومليت خفيف مع السبانخ والمشروم.",
        instr_en: ["Whisk egg whites with salt/pepper.", "Sauté mushrooms and spinach.", "Pour eggs over veggies and cook through.", "Fold and serve immediately."],
        instr_ar: ["اخفق بياض البيض مع الملح والفلفل.", "شوح المشروم والسبانخ.", "صب البيض فوق الخضار واطبخه.", "اطوه وقدمه فوراً."]
    },
    {
        category: 'breakfast',
        name_en: "Chia Seed Pudding",
        name_ar: "بودينج بذور الشيا",
        desc_en: "Chia seeds soaked in coconut milk with mango.",
        desc_ar: "بذور الشيا بحليب جوز الهند والمانجو.",
        instr_en: ["Combine chia seeds and milk.", "Shake well and refrigerate overnight.", "Top with fresh mango chunks.", "Add a drop of honey if desired."],
        instr_ar: ["اخلط بذور الشيا مع الحليب.", "رجه جيداً واتركه في الثلاجة.", "زينه بقطع المانجو الطازجة.", "أضف القليل من العسل حسب الرغبة."]
    },
    {
        category: 'breakfast',
        name_en: "Arabic Omelet (Ejjeh)",
        name_ar: "عجة بيض عربية",
        desc_en: "Egg pancake with fresh herbs and onions.",
        desc_ar: "فطيرة بيض بالأعشاب الطازجة والبصل.",
        instr_en: ["Mix eggs with parsley, onion, and flour.", "Season with allspice and salt.", "Fry small portions in olive oil.", "Serve with tomatoes and olives."],
        instr_ar: ["اخلط البيض مع البقدونس والبصل والدقيق.", "تبله بالبهارات والملح.", "اقله في زيت الزيتون على شكل أقراص.", "قدمه مع الطماطم والزيتون."]
    },
    {
        category: 'breakfast',
        name_en: "Baked Apple & Cinnamon",
        name_ar: "تفاح مشوي بالقرفة",
        desc_en: "Warm apple slices with a hint of honey.",
        desc_ar: "شرائح تفاح دافئة مع القليل من العسل.",
        instr_en: ["Slice apples and remove core.", "Sprinkle with cinnamon and honey.", "Bake at 180°C for 15 minutes.", "Serve warm with yogurt."],
        instr_ar: ["قطع التفاح وأزل اللب.", "رشه بالقرفة والعسل.", "اخبزه على حرارة 180 لـ 15 دقيقة.", "قدمه دافئاً مع الزبادي."]
    },
    {
        category: 'breakfast',
        name_en: "Date Nut Bars",
        name_ar: "ألواح التمر والمكسرات",
        desc_en: "Homemade energy bars with dates and almonds.",
        desc_ar: "ألواح طاقة منزلية بالتمر واللوز.",
        instr_en: ["Process dates and nuts until sticky.", "Press into a square pan.", "Chill for 2 hours.", "Cut into bars for a quick Suhoor."],
        instr_ar: ["اطحن التمر والمكسرات حتى تتماسك.", "افردها في صينية مربعة.", "بردها لمدة ساعتين.", "قطعها على شكل أصابع."]
    },
    {
        category: 'breakfast',
        name_en: "Hard Boiled Egg & Tea",
        name_ar: "بيض شاي",
        desc_en: "The simplest traditional Suhoor.",
        desc_ar: "أبسط سحور تقليدي: بيض مسلوق وشاي.",
        instr_en: ["Boil eggs for 9 minutes.", "Cool in cold water and peel.", "Brew a strong pot of black tea.", "Serve with bread and labneh."],
        instr_ar: ["اسلق البيض لمدة 9 دقائق.", "برده في ماء بارد وقشره.", "حضر إبريق شاي أسود ثقيل.", "قدمه مع الخبز واللبنة."]
    },

    // IFTAR (50)
    {
        category: 'lunch',
        name_en: "Lamb Mansaf",
        name_ar: "منسف لحم",
        desc_en: "Jordon's national dish with jameed and rice.",
        desc_ar: "طبق الأردن الوطني بالجميد والأرز.",
        instr_en: ["Boil lamb with spices until tender.", "Dissolve jameed and add to lamb broth.", "Cook rice with turmeric.", "Layer bread, rice, lamb, and nuts."],
        instr_ar: ["اسلق اللحم مع البهارات حتى ينضج.", "ذوب الجميد وأضفه لمرق اللحم.", "اطبخ الأرز مع الكركم.", "ضع الخبز ثم الأرز ثم اللحم والمكسرات."]
    },
    {
        category: 'lunch',
        name_en: "Chicken Maqluba",
        name_ar: "مقلوبة دجاج",
        desc_en: "Upside-down rice with chicken and eggplant.",
        desc_ar: "أرز مقلوب مع الدجاج والباذنجان.",
        instr_en: ["Fry eggplant and chicken pieces.", "Layer chicken, veggies, and rice in pot.", "Add spiced broth and simmer.", "Flip onto a tray and serve."],
        instr_ar: ["اقلِ الباذنجان وقطع الدجاج.", "رتب الدجاج والخضار والأرز في القدر.", "أضف المرق المتبل واتركه ينضج.", "اقلب القدر في صينية وقدمه."]
    },
    {
        category: 'lunch',
        name_en: "Egyptian Koshary",
        name_ar: "كشري مصري",
        desc_en: "Rice, pasta, and lentils with tomato sauce.",
        desc_ar: "أرز ومكرونة وعدس مع صلصة طماطم.",
        instr_en: ["Cook rice, pasta, and lentils separately.", "Make a spicy tomato vinegar sauce.", "Layer lentils over rice and pasta.", "Top with chickpeas and fried onions."],
        instr_ar: ["اطبخ الأرز والمكرونة والعدس منفصلين.", "حضر صلصة الطماطم والخل الحارة.", "ضع العدس فوق الأرز والمكرونة.", "زينه بالحمص والبصل المقلي."]
    },
    {
        category: 'lunch',
        name_en: "Chicken Musakhan",
        name_ar: "مسخن دجاج",
        desc_en: "Palestinian chicken with sumac and onions.",
        desc_ar: "دجاج فلسطيني بالسماق والبصل.",
        instr_en: ["Sauté onions in lots of olive oil.", "Add sumac and roasted chicken.", "Place onions on Taboon bread.", "Top with chicken and toasted pine nuts."],
        instr_ar: ["شوح البصل بالكثير من زيت الزيتون.", "أضف السماق والدجاج المحمر.", "ضع البصل على خبز الطابون.", "أضف الدجاج والصنوبر المحمص."]
    },
    {
        category: 'lunch',
        name_en: "Kousa Mahshi",
        name_ar: "كوسا محشي",
        desc_en: "Zucchini stuffed with rice and minced meat.",
        desc_ar: "كوسا محشوة بالأرز واللحم المفروم.",
        instr_en: ["Core zucchini and prepare rice/meat filling.", "Stuff zucchini halfway.", "Boil in tomato broth for 45 minutes.", "Serve hot with yogurt."],
        instr_ar: ["احفر الكوسا وحضر حشوة الأرز واللحم.", "احشِ الكوسا لمنتصفها.", "اطبخها في مرق طماطم لـ 45 دقيقة.", "قدمها ساخنة مع الزبادي."]
    },
    {
        category: 'lunch',
        name_en: "Sayadieh Fish",
        name_ar: "صيادية سمك",
        desc_en: "Spiced fish served with brown onion rice.",
        desc_ar: "سمك متبل يقدم مع أرز البصل البني.",
        instr_en: ["Fry onions until dark brown.", "Boil onions in water to make brown broth.", "Cook rice in the broth.", "Fry fish and serve over the rice."],
        instr_ar: ["اقلِ البصل حتى يصبح بنياً غامقاً.", "اغلِ البصل في الماء لعمل مرق بني.", "اطبخ الأرز في هذا المرق.", "اقلِ السمك وقدمه فوق الأرز."]
    },
    {
        category: 'lunch',
        name_en: "Cheese Kunafa",
        name_ar: "كنافة بالجبن",
        desc_en: "Classic Nabulsi kunafa with rose syrup.",
        desc_ar: "كنافة نابلسية بالجبن والقطر.",
        instr_en: ["Layer kunafa dough in a pan.", "Top with sweet Nabulsi or Mozzarella.", "Bake until golden and cheese melts.", "Pour cold syrup and top with pistachios."],
        instr_ar: ["ضع طبقة من عجينة الكنافة.", "أضف جبنة نابلسية حلوة أو موزاريلا.", "اخبزها حتى تتحمر وتذوب الجبنة.", "صب القطر البارد وزينها بالفستق."]
    }
    // ... Additional recipes will be added in next step to avoid file size limits
];

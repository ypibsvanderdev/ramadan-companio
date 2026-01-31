const RECIPES_DATA = [
    // SUHOOR (50)
    {
        category: 'breakfast',
        name_en: "Ful Medames (Traditional Egyptian Fava Beans)",
        name_ar: "فول مدمس مصري أصلي",
        desc_en: "A protein-rich, slow-cooked fava bean dish, flavored with olive oil, cumin, and lemon for long-lasting energy.",
        desc_ar: "طبق فول مدمس غني بالبروتين، متبل بزيت الزيتون والكمون والليمون ليمدك بالطاقة طوال فترة الصيام.",
        instr_en: [
            "Start by heating 2 cups of slow-cooked or canned fava beans in a small pot over medium heat until steaming.",
            "Using a fork or a potato masher, gently crush about half of the beans to create a creamy texture while leaving some whole.",
            "Stir in 1 teaspoon of ground cumin, salt to taste, and a generous squeeze of fresh lemon juice.",
            "Pour the beans into a shallow bowl and create a well in the center using a spoon.",
            "Pour 2-3 tablespoons of extra virgin olive oil into the well and garnish with chopped parsley, tomatoes, and sliced radishes.",
            "Serve warm with fresh whole wheat pita bread and a side of olives for a complete traditional Suhoor."
        ],
        instr_ar: [
            "ابدأ بتسخين كوبين من الفول المدمس (المطبوخ مسبقاً أو المعلب) في قدر صغير على نار متوسطة حتى يتصاعد البخار.",
            "باستخدام شوكة أو هراسة، اهرس نصف كمية الفول تقريباً للحصول على قوام كريمي مع ترك بعض الحبات كما هي.",
            "أضف ملعقة صغيرة من الكمون المطحون، والملح حسب الرغبة، وعصرة سخية من الليمون الطازج وقلب جيداً.",
            "اسكب الفول في طبق تقديم واسع واصنع فجوة في المنتصف باستخدام ملعقة.",
            "صب 2-3 ملاعق كبيرة من زيت الزيتون البكر الممتاز في الفجوة وزين الطبق بالبقدونس المفروم والطماطم والفجل.",
            "قدمه ساخناً مع خبز القمح الكامل الطازج وطبق جانبي من الزيتون لسحور تقليدي متكامل."
        ]
    },
    {
        category: 'breakfast',
        name_en: "Authentic Shakshuka (Eggs in Spiced Tomato Sauce)",
        name_ar: "شكشوكة منزلية متبلة",
        desc_en: "A vibrant North African dish of poached eggs in a rich, spicy tomato and bell pepper sauce.",
        desc_ar: "طبق شمال أفريقي شهير يتكون من بيض مسلوق داخل صلصة غنية وحارة من الطماطم والفلفل الحلو.",
        instr_en: [
            "Heat 2 tablespoons of olive oil in a large skillet and sauté one finely chopped onion and 2 crushed garlic cloves until translucent.",
            "Add one diced red bell pepper and cook for 5 minutes until soft. Stir in 1 teaspoon of paprika, 1/2 teaspoon of cumin, and a pinch of chili flakes.",
            "Add 4 large diced tomatoes or a can of crushed tomatoes. Simmer for 10-15 minutes until the sauce thickens and smells fragrant.",
            "Use a large spoon to make 4 to 6 small 'wells' in the simmering sauce.",
            "Carefully crack one egg into each well. Season each egg with a pinch of salt and pepper.",
            "Cover the skillet with a lid and cook on low heat for 5-8 minutes until the egg whites are fully set but the yolks are still runny.",
            "Garnish with fresh coriander or parsley and serve directly from the skillet with crusty bread."
        ],
        instr_ar: [
            "سخن ملعقتين كبيرتين من زيت الزيتون في مقلاة واسعة وشوح بصلة مفرومة ناعماً وفصين ثوم مهروسين حتى يذبلا.",
            "أضف حبة فلفل أحمر مقطعة مكعبات واطبخها لمدة 5 دقائق، ثم أضف ملعقة صغيرة بابريكا، ونصف ملعقة كمون، ورشة شطة.",
            "أضف 4 حبات طماطم مقطعة أو علبة طماطم مهروسة، واترك الخليط يغلي على نار هادئة لـ 10-15 دقيقة حتى تتسبك الصلصة.",
            "باستخدام ملعقة كبيرة، اصنع من 4 إلى 6 فجوات صغيرة في الصلصة المسبكة.",
            "اكسر بيضة واحدة بعناية داخل كل فجوة، وتبل كل بيضة برشة ملح وفلفل أسود.",
            "غطِ المقلاة واتركها على نار هادئة لمدة 5-8 دقائق حتى ينضج بياض البيض ويبقى الصفار سائلاً قليلاً.",
            "زينها بالكزبرة أو البقدونس الطازج وقدمها مباشرة في المقلاة مع الخبز المحمص."
        ]
    },
    {
        category: 'breakfast',
        name_en: "Lamb Mansaf (Jordanian National Dish)",
        name_ar: "منسف لحم بلدي",
        desc_en: "The ultimate celebratory dish: tender lamb cooked in a distinctively tangy fermented yogurt (Jameed) sauce, served over turmeric rice.",
        desc_ar: "الأكلة الوطنية للأردن: لحم هبر مطبوخ في صلصة الجميد الحامضة والمميزة، يقدم فوق طبقة من الأرز الأصفر والخبز.",
        instr_en: [
            "Place 1kg of large lamb chunks in a large pot with water, onions, cinnamon sticks, and bay leaves. Bring to a boil and skim the foam.",
            "Cover and simmer for 1 hour. Meanwhile, crush and dissolve 250g of Jameed stones in warm water (or use liquid jameed).",
            "Strain the lamb broth, add clarified jameed to the lamb, and continue cooking for another 45-60 minutes until the meat is falling off the bone.",
            "Wash and soak short-grain rice, then cook it in water with 1 tablespoon of turmeric and salt until fluffy.",
            "On a giant serving tray, layer pieces of Shrak (thin flatbread) and soak them with a ladle of the hot Jameed sauce.",
            "Spread the turmeric rice evenly over the bread, then arrange the tender lamb pieces on top.",
            "Garnish with a generous amount of toasted pine nuts and almond slivers, and serve extra Jameed sauce on the side for pouring."
        ],
        instr_ar: [
            "ضع كيلوغرام من قطع اللحم في قدر كبير مع الماء والبصل وعيدان القرفة وورق الغار، واتركه يغلي مع إزالة الرغوة.",
            "غطِ القدر واتركه ينضج لـ 60 دقيقة. في هذه الأثناء، ذوب 250 جرام من الجميد الكروي في ماء دافئ أو استخدم الجميد السائل.",
            "صفِ مرق اللحم من المنكهات، ثم أضف الجميد المصفى إلى اللحم واستكمل الطبخ لـ 45-60 دقيقة أخرى حتى ينضج اللحم تماماً.",
            "اغسل الأرز صنوايت وانقعه، ثم اطبخه في الماء مع ملعقة كبيرة من الكركم والملح حتى ينضج.",
            "في صينية تقديم كبيرة (سدر)، ضع أرغفة خبز الشراك واشربها بملعقة كبيرة من مرق الجميد الساخن.",
            "افرد الأرز الأصفر بالتساوي فوق الخبز، ثم رتب قطع اللحم الناضجة في المنتصف.",
            "زين المنسف بكمية وفيرة من الصنوبر واللوز المحمص، وقدم مرق الجميد الإضافي في أوعية جانبية للتشريب."
        ]
    },
    {
        category: 'dessert',
        name_en: "Cheese Kunafa (Nabulsi Style)",
        name_ar: "كنافة نابلسية بالجبنة",
        desc_en: "Classic warm dessert featuring shredded filo dough and gooey melted cheese, soaked in orange blossom syrup.",
        desc_ar: "حلوى دافئة شهيرة تتكون من عجينة الكنافة المقرمشة والجبنة الذائبة، مشربة بقطر الزهر العطري.",
        instr_en: [
            "Prepare the syrup (Attar) by boiling 2 cups sugar and 1 cup water for 10 min, then add a squeeze of lemon and orange blossom water. Let cool.",
            "Shred 500g of Kunafa dough (Khashna or Na'ama) and mix thoroughly with 200g of melted ghee (Samneh) until every strand is coated.",
            "Firmly press 3/4 of the dough into the bottom of a round baking pan, creating a smooth, even base.",
            "Spread 500g of desalted Nabulsi cheese (or a mix of Akawi and Mozzarella) over the dough, leaving a small gap at the edges to prevent burning.",
            "Top with the remaining dough and press lightly. Bake in a preheated oven at 190°C for 25-30 minutes until the bottom is dark golden.",
            "Immediately flip the pan onto a serving tray. While piping hot, pour the room-temperature syrup over the entire surface.",
            "Decorate with crushed pistachios and serve while the cheese is still warm and stretchy."
        ],
        instr_ar: [
            "حضر القطر بغلي كوبين سكر مع كوب ماء لـ 10 دقائق، ثم أضف عصرة ليمون وماء زهر واتركه يبرد تماماً.",
            "فتت 500 جرام من عجينة الكنافة واخلطها جيداً مع 200 جرام سمن مذاب حتى تتشرب العجينة السمن بالكامل.",
            "اضغط 3/4 كمية العجينة في قاع صينية دائرية جيداً للحصول على قاعدة متماسكة.",
            "وزع 500 جرام من الجبنة النابلسية (المحلاة مسبقاً) أو مزيج عكاوي وموزاريلا فوق العجينة مع ترك مسافة عند الأطراف.",
            "ضع باقي العجينة فوق الجبن واضغط بخفة، ثم اخبزها في فرن محمى على 190 درجة لـ 25-30 دقيقة حتى تتحمر الجوانب.",
            "اقلب الصينية مباشرة في طبق التقديم، وصب القطر البارد فوق الكنافة وهي ساخنة جداً.",
            "زينها بالفستق الحلبي المطحون وقدمها فوراً وهي ساخنة لضمان تمطط الجبنة."
        ]
    }
];

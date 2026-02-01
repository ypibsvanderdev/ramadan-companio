const RECIPES_DATA = [
    {
        "category": "suhoor",
        "name_en": "Foul Medames",
        "name_ar": "فول مدمس",
        "desc_en": "Traditional fava beans dish",
        "desc_ar": "طبق الفول التقليدي",
        "ingr_en": [
            "Fava beans",
            "Olive oil",
            "Cumin",
            "Lemon"
        ],
        "ingr_ar": [
            "فول",
            "زيت زيتون",
            "كمون",
            "ليمون"
        ],
        "instr_en": [
            "Warm and season."
        ],
        "instr_ar": [
            "سخن وتبل."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Labneh Plate",
        "name_ar": "طبق لبنة",
        "desc_en": "Creamy strained yogurt",
        "desc_ar": "لبنة كريمية",
        "ingr_en": [
            "Labneh",
            "Olive oil",
            "Za'atar"
        ],
        "ingr_ar": [
            "لبنة",
            "زيت زيتون",
            "زعتر"
        ],
        "instr_en": [
            "Drizzle oil and serve."
        ],
        "instr_ar": [
            "رش الزيت وقدم."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Eggs with Tomatoes",
        "name_ar": "بيض بالطماطم",
        "desc_en": "Scrambled eggs with tomato",
        "desc_ar": "بيض مع طماطم",
        "ingr_en": [
            "Eggs",
            "Tomato",
            "Onion"
        ],
        "ingr_ar": [
            "بيض",
            "طماطم",
            "بصل"
        ],
        "instr_en": [
            "Scramble eggs with tomatoes."
        ],
        "instr_ar": [
            "اقلي البيض مع الطماطم."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Cheese Sandwich",
        "name_ar": "ساندويش جبنة",
        "desc_en": "Simple cheese sandwich",
        "desc_ar": "ساندويش جبنة بسيط",
        "ingr_en": [
            "Bread",
            "Cheese",
            "Cucumber"
        ],
        "ingr_ar": [
            "خبز",
            "جبنة",
            "خيار"
        ],
        "instr_en": [
            "Assemble ingredients."
        ],
        "instr_ar": [
            "جمع المكونات."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Yogurt with Honey",
        "name_ar": "زبادي بالعسل",
        "desc_en": "Sweet yogurt bowl",
        "desc_ar": "زبادي حلو",
        "ingr_en": [
            "Yogurt",
            "Honey",
            "Nuts"
        ],
        "ingr_ar": [
            "زبادي",
            "عسل",
            "مكسرات"
        ],
        "instr_en": [
            "Mix yogurt with honey."
        ],
        "instr_ar": [
            "اخلط الزبادي بالعسل."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Oatmeal with Dates",
        "name_ar": "شوفان بالتمر",
        "desc_en": "Healthy oatmeal",
        "desc_ar": "شوفان صحي",
        "ingr_en": [
            "Oats",
            "Milk",
            "Dates"
        ],
        "ingr_ar": [
            "شوفان",
            "حليب",
            "تمر"
        ],
        "instr_en": [
            "Cook oats, add dates."
        ],
        "instr_ar": [
            "اطبخ الشوفان وأضف التمر."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Boiled Eggs",
        "name_ar": "بيض مسلوق",
        "desc_en": "Simple boiled eggs",
        "desc_ar": "بيض مسلوق بسيط",
        "ingr_en": [
            "Eggs",
            "Salt"
        ],
        "ingr_ar": [
            "بيض",
            "ملح"
        ],
        "instr_en": [
            "Boil eggs 10 minutes."
        ],
        "instr_ar": [
            "اسلق البيض ١٠ دقائق."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Peanut Butter Toast",
        "name_ar": "توست بزبدة الفول السوداني",
        "desc_en": "Energy toast",
        "desc_ar": "توست طاقة",
        "ingr_en": [
            "Bread",
            "Peanut butter"
        ],
        "ingr_ar": [
            "خبز",
            "زبدة فول سوداني"
        ],
        "instr_en": [
            "Toast and spread."
        ],
        "instr_ar": [
            "حمص وادهن."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Tuna Salad",
        "name_ar": "سلطة تونة",
        "desc_en": "Protein-rich salad",
        "desc_ar": "سلطة غنية بالبروتين",
        "ingr_en": [
            "Tuna",
            "Vegetables",
            "Lemon"
        ],
        "ingr_ar": [
            "تونة",
            "خضار",
            "ليمون"
        ],
        "instr_en": [
            "Mix all ingredients."
        ],
        "instr_ar": [
            "اخلط المكونات."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Manakish Zaatar",
        "name_ar": "مناقيش زعتر",
        "desc_en": "Zaatar flatbread",
        "desc_ar": "خبز بالزعتر",
        "ingr_en": [
            "Dough",
            "Za'atar",
            "Olive oil"
        ],
        "ingr_ar": [
            "عجينة",
            "زعتر",
            "زيت زيتون"
        ],
        "instr_en": [
            "Bake with za'atar topping."
        ],
        "instr_ar": [
            "اخبز مع الزعتر."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Banana Smoothie",
        "name_ar": "سموذي موز",
        "desc_en": "Creamy banana drink",
        "desc_ar": "مشروب موز كريمي",
        "ingr_en": [
            "Banana",
            "Milk",
            "Honey"
        ],
        "ingr_ar": [
            "موز",
            "حليب",
            "عسل"
        ],
        "instr_en": [
            "Blend all together."
        ],
        "instr_ar": [
            "اخلط الكل."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Milk and Dates",
        "name_ar": "حليب وتمر",
        "desc_en": "Traditional suhoor",
        "desc_ar": "سحور تقليدي",
        "ingr_en": [
            "Milk",
            "Dates"
        ],
        "ingr_ar": [
            "حليب",
            "تمر"
        ],
        "instr_en": [
            "Serve cold."
        ],
        "instr_ar": [
            "قدم بارداً."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Cottage Cheese Bowl",
        "name_ar": "طبق جبنة قريش",
        "desc_en": "Light cheese bowl",
        "desc_ar": "طبق جبنة خفيف",
        "ingr_en": [
            "Cottage cheese",
            "Cucumber",
            "Tomato"
        ],
        "ingr_ar": [
            "جبنة قريش",
            "خيار",
            "طماطم"
        ],
        "instr_en": [
            "Mix together."
        ],
        "instr_ar": [
            "اخلط معاً."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Omelet",
        "name_ar": "أومليت",
        "desc_en": "Classic egg omelet",
        "desc_ar": "أومليت بيض كلاسيكي",
        "ingr_en": [
            "Eggs",
            "Butter",
            "Salt"
        ],
        "ingr_ar": [
            "بيض",
            "زبدة",
            "ملح"
        ],
        "instr_en": [
            "Fry eggs in butter."
        ],
        "instr_ar": [
            "اقلي البيض بالزبدة."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Avocado Sandwich",
        "name_ar": "ساندويش أفوكادو",
        "desc_en": "Healthy avocado toast",
        "desc_ar": "توست أفوكادو صحي",
        "ingr_en": [
            "Avocado",
            "Bread",
            "Salt"
        ],
        "ingr_ar": [
            "أفوكادو",
            "خبز",
            "ملح"
        ],
        "instr_en": [
            "Mash and spread."
        ],
        "instr_ar": [
            "اهرس وادهن."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Yogurt with Fruit",
        "name_ar": "زبادي بالفواكه",
        "desc_en": "Fruity yogurt",
        "desc_ar": "زبادي بالفاكهة",
        "ingr_en": [
            "Yogurt",
            "Mixed fruits"
        ],
        "ingr_ar": [
            "زبادي",
            "فواكه مشكلة"
        ],
        "instr_en": [
            "Mix and serve."
        ],
        "instr_ar": [
            "اخلط وقدم."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Lentil Soup",
        "name_ar": "شوربة عدس",
        "desc_en": "Warm lentil soup",
        "desc_ar": "شوربة عدس دافئة",
        "ingr_en": [
            "Lentils",
            "Onion",
            "Cumin"
        ],
        "ingr_ar": [
            "عدس",
            "بصل",
            "كمون"
        ],
        "instr_en": [
            "Warm and serve."
        ],
        "instr_ar": [
            "سخن وقدم."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Cheese Fatayer",
        "name_ar": "فطائر جبنة",
        "desc_en": "Cheese pastries",
        "desc_ar": "فطائر بالجبنة",
        "ingr_en": [
            "Dough",
            "Cheese"
        ],
        "ingr_ar": [
            "عجينة",
            "جبنة"
        ],
        "instr_en": [
            "Bake until golden."
        ],
        "instr_ar": [
            "اخبز حتى يذهب."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Apple Oats",
        "name_ar": "شوفان بالتفاح",
        "desc_en": "Healthy apple oats",
        "desc_ar": "شوفان صحي بالتفاح",
        "ingr_en": [
            "Oats",
            "Apple",
            "Cinnamon"
        ],
        "ingr_ar": [
            "شوفان",
            "تفاح",
            "قرفة"
        ],
        "instr_en": [
            "Cook with apple."
        ],
        "instr_ar": [
            "اطبخ مع التفاح."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Egg Sandwich",
        "name_ar": "ساندويش بيض",
        "desc_en": "Simple egg sandwich",
        "desc_ar": "ساندويش بيض بسيط",
        "ingr_en": [
            "Eggs",
            "Bread",
            "Mayonnaise"
        ],
        "ingr_ar": [
            "بيض",
            "خبز",
            "مايونيز"
        ],
        "instr_en": [
            "Assemble sandwich."
        ],
        "instr_ar": [
            "جمع الساندويش."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Hummus Wrap",
        "name_ar": "لفة حمص",
        "desc_en": "Hummus wrap",
        "desc_ar": "لفة بالحمص",
        "ingr_en": [
            "Hummus",
            "Bread",
            "Vegetables"
        ],
        "ingr_ar": [
            "حمص",
            "خبز",
            "خضار"
        ],
        "instr_en": [
            "Wrap and serve."
        ],
        "instr_ar": [
            "لف وقدم."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Date Energy Balls",
        "name_ar": "كرات طاقة بالتمر",
        "desc_en": "Energy date balls",
        "desc_ar": "كرات تمر للطاقة",
        "ingr_en": [
            "Dates",
            "Nuts",
            "Coconut"
        ],
        "ingr_ar": [
            "تمر",
            "مكسرات",
            "جوز هند"
        ],
        "instr_en": [
            "Roll into balls."
        ],
        "instr_ar": [
            "شكل كرات."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Milk Porridge",
        "name_ar": "عصيدة حليب",
        "desc_en": "Warm milk porridge",
        "desc_ar": "عصيدة حليب دافئة",
        "ingr_en": [
            "Milk",
            "Flour",
            "Sugar"
        ],
        "ingr_ar": [
            "حليب",
            "طحين",
            "سكر"
        ],
        "instr_en": [
            "Cook until thick."
        ],
        "instr_ar": [
            "اطبخ حتى يثخن."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Peanut Smoothie",
        "name_ar": "سموذي فول سوداني",
        "desc_en": "Protein smoothie",
        "desc_ar": "سموذي بروتين",
        "ingr_en": [
            "Peanut butter",
            "Milk",
            "Banana"
        ],
        "ingr_ar": [
            "زبدة فول سوداني",
            "حليب",
            "موز"
        ],
        "instr_en": [
            "Blend together."
        ],
        "instr_ar": [
            "اخلط معاً."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Yogurt Drink",
        "name_ar": "شراب زبادي",
        "desc_en": "Refreshing yogurt drink",
        "desc_ar": "مشروب زبادي منعش",
        "ingr_en": [
            "Yogurt",
            "Water",
            "Salt"
        ],
        "ingr_ar": [
            "زبادي",
            "ماء",
            "ملح"
        ],
        "instr_en": [
            "Blend and chill."
        ],
        "instr_ar": [
            "اخلط وبرد."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Toast with Honey",
        "name_ar": "توست بالعسل",
        "desc_en": "Sweet honey toast",
        "desc_ar": "توست حلو بالعسل",
        "ingr_en": [
            "Bread",
            "Honey",
            "Butter"
        ],
        "ingr_ar": [
            "خبز",
            "عسل",
            "زبدة"
        ],
        "instr_en": [
            "Toast and drizzle."
        ],
        "instr_ar": [
            "حمص ورش."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Chickpea Salad",
        "name_ar": "سلطة حمص",
        "desc_en": "Healthy chickpea salad",
        "desc_ar": "سلطة حمص صحية",
        "ingr_en": [
            "Chickpeas",
            "Vegetables",
            "Lemon"
        ],
        "ingr_ar": [
            "حمص",
            "خضار",
            "ليمون"
        ],
        "instr_en": [
            "Mix all ingredients."
        ],
        "instr_ar": [
            "اخلط المكونات."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Cheese Omelet",
        "name_ar": "أومليت جبنة",
        "desc_en": "Cheesy omelet",
        "desc_ar": "أومليت بالجبنة",
        "ingr_en": [
            "Eggs",
            "Cheese",
            "Butter"
        ],
        "ingr_ar": [
            "بيض",
            "جبنة",
            "زبدة"
        ],
        "instr_en": [
            "Cook with cheese."
        ],
        "instr_ar": [
            "اطبخ مع الجبنة."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Banana Toast",
        "name_ar": "توست موز",
        "desc_en": "Banana topped toast",
        "desc_ar": "توست بالموز",
        "ingr_en": [
            "Bread",
            "Banana",
            "Honey"
        ],
        "ingr_ar": [
            "خبز",
            "موز",
            "عسل"
        ],
        "instr_en": [
            "Mash and spread."
        ],
        "instr_ar": [
            "اهرس وادهن."
        ]
    },
    {
        "category": "suhoor",
        "name_en": "Nuts & Milk",
        "name_ar": "مكسرات وحليب",
        "desc_en": "Nuts with cold milk",
        "desc_ar": "مكسرات مع حليب بارد",
        "ingr_en": [
            "Mixed nuts",
            "Milk"
        ],
        "ingr_ar": [
            "مكسرات مشكلة",
            "حليب"
        ],
        "instr_en": [
            "Serve together."
        ],
        "instr_ar": [
            "قدم معاً."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Lentil Soup",
        "name_ar": "شوربة عدس",
        "desc_en": "Classic lentil soup",
        "desc_ar": "شوربة عدس كلاسيكية",
        "ingr_en": [
            "Lentils",
            "Onion",
            "Cumin"
        ],
        "ingr_ar": [
            "عدس",
            "بصل",
            "كمون"
        ],
        "instr_en": [
            "Boil lentils, blend, season."
        ],
        "instr_ar": [
            "اسلق العدس واخلط وتبل."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Sambousek",
        "name_ar": "سمبوسك",
        "desc_en": "Meat filled pastry",
        "desc_ar": "معجنات باللحم",
        "ingr_en": [
            "Dough",
            "Meat",
            "Onion"
        ],
        "ingr_ar": [
            "عجينة",
            "لحم",
            "بصل"
        ],
        "instr_en": [
            "Fill and fry."
        ],
        "instr_ar": [
            "احشِ واقلي."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Stuffed Grape Leaves",
        "name_ar": "ورق عنب",
        "desc_en": "Rice stuffed leaves",
        "desc_ar": "ورق عنب محشي",
        "ingr_en": [
            "Grape leaves",
            "Rice",
            "Spices"
        ],
        "ingr_ar": [
            "ورق عنب",
            "رز",
            "بهارات"
        ],
        "instr_en": [
            "Roll and simmer."
        ],
        "instr_ar": [
            "لف واطبخ."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Chicken Shawarma",
        "name_ar": "شاورما دجاج",
        "desc_en": "Spiced grilled chicken",
        "desc_ar": "دجاج مشوي متبل",
        "ingr_en": [
            "Chicken",
            "Spices",
            "Garlic"
        ],
        "ingr_ar": [
            "دجاج",
            "بهارات",
            "ثوم"
        ],
        "instr_en": [
            "Marinate and grill."
        ],
        "instr_ar": [
            "تبل واشوي."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Falafel",
        "name_ar": "فلافل",
        "desc_en": "Crispy chickpea fritters",
        "desc_ar": "فلافل مقرمشة",
        "ingr_en": [
            "Chickpeas",
            "Herbs",
            "Spices"
        ],
        "ingr_ar": [
            "حمص",
            "أعشاب",
            "بهارات"
        ],
        "instr_en": [
            "Blend and fry."
        ],
        "instr_ar": [
            "اخلط واقلي."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Fattoush",
        "name_ar": "فتوش",
        "desc_en": "Lebanese bread salad",
        "desc_ar": "سلطة خبز لبنانية",
        "ingr_en": [
            "Vegetables",
            "Pita",
            "Sumac"
        ],
        "ingr_ar": [
            "خضار",
            "خبز",
            "سماق"
        ],
        "instr_en": [
            "Toss with dressing."
        ],
        "instr_ar": [
            "اخلط مع الصلصة."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Dates & Milk",
        "name_ar": "تمر وحليب",
        "desc_en": "Traditional iftar starter",
        "desc_ar": "بداية إفطار تقليدية",
        "ingr_en": [
            "Dates",
            "Milk"
        ],
        "ingr_ar": [
            "تمر",
            "حليب"
        ],
        "instr_en": [
            "Serve together."
        ],
        "instr_ar": [
            "قدم معاً."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Meat Samosa",
        "name_ar": "سمبوسة لحم",
        "desc_en": "Fried meat pastry",
        "desc_ar": "معجنات لحم مقلية",
        "ingr_en": [
            "Minced beef",
            "Dough",
            "Spices"
        ],
        "ingr_ar": [
            "لحم مفروم",
            "عجينة",
            "بهارات"
        ],
        "instr_en": [
            "Fry filled pastry."
        ],
        "instr_ar": [
            "اقلي المعجنات المحشية."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Vegetable Soup",
        "name_ar": "شوربة خضار",
        "desc_en": "Mixed vegetable soup",
        "desc_ar": "شوربة خضار مشكلة",
        "ingr_en": [
            "Mixed vegetables",
            "Broth"
        ],
        "ingr_ar": [
            "خضار مشكلة",
            "مرق"
        ],
        "instr_en": [
            "Boil and season."
        ],
        "instr_ar": [
            "اسلق وتبل."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Hummus",
        "name_ar": "حمص",
        "desc_en": "Creamy chickpea dip",
        "desc_ar": "حمص كريمي",
        "ingr_en": [
            "Chickpeas",
            "Tahini",
            "Lemon"
        ],
        "ingr_ar": [
            "حمص",
            "طحينة",
            "ليمون"
        ],
        "instr_en": [
            "Blend smooth."
        ],
        "instr_ar": [
            "اخلط ناعم."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Baba Ghanoush",
        "name_ar": "بابا غنوج",
        "desc_en": "Smoky eggplant dip",
        "desc_ar": "بابا غنوج مدخن",
        "ingr_en": [
            "Eggplant",
            "Tahini",
            "Garlic"
        ],
        "ingr_ar": [
            "باذنجان",
            "طحينة",
            "ثوم"
        ],
        "instr_en": [
            "Roast and mash."
        ],
        "instr_ar": [
            "اشوي واهرس."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Cheese Rolls",
        "name_ar": "لفائف جبنة",
        "desc_en": "Crispy cheese rolls",
        "desc_ar": "لفائف جبنة مقرمشة",
        "ingr_en": [
            "Cheese",
            "Phyllo",
            "Butter"
        ],
        "ingr_ar": [
            "جبنة",
            "جلاش",
            "زبدة"
        ],
        "instr_en": [
            "Roll and fry."
        ],
        "instr_ar": [
            "لف واقلي."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Spinach Fatayer",
        "name_ar": "فطائر سبانخ",
        "desc_en": "Spinach triangles",
        "desc_ar": "مثلثات سبانخ",
        "ingr_en": [
            "Spinach",
            "Dough",
            "Onion"
        ],
        "ingr_ar": [
            "سبانخ",
            "عجينة",
            "بصل"
        ],
        "instr_en": [
            "Bake triangles."
        ],
        "instr_ar": [
            "اخبز المثلثات."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Chicken Soup",
        "name_ar": "شوربة دجاج",
        "desc_en": "Hearty chicken soup",
        "desc_ar": "شوربة دجاج دسمة",
        "ingr_en": [
            "Chicken",
            "Vegetables",
            "Noodles"
        ],
        "ingr_ar": [
            "دجاج",
            "خضار",
            "شعيرية"
        ],
        "instr_en": [
            "Simmer until done."
        ],
        "instr_ar": [
            "اطبخ حتى ينضج."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Kibbeh Balls",
        "name_ar": "كبة",
        "desc_en": "Fried meat balls",
        "desc_ar": "كرات لحم مقلية",
        "ingr_en": [
            "Bulgur",
            "Meat",
            "Spices"
        ],
        "ingr_ar": [
            "برغل",
            "لحم",
            "بهارات"
        ],
        "instr_en": [
            "Shape and fry."
        ],
        "instr_ar": [
            "شكل واقلي."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Fried Cauliflower",
        "name_ar": "قرنبيط مقلي",
        "desc_en": "Crispy cauliflower",
        "desc_ar": "قرنبيط مقرمش",
        "ingr_en": [
            "Cauliflower",
            "Oil",
            "Salt"
        ],
        "ingr_ar": [
            "قرنبيط",
            "زيت",
            "ملح"
        ],
        "instr_en": [
            "Fry until golden."
        ],
        "instr_ar": [
            "اقلي حتى يذهب."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Yogurt Salad",
        "name_ar": "سلطة زبادي",
        "desc_en": "Cool yogurt salad",
        "desc_ar": "سلطة زبادي باردة",
        "ingr_en": [
            "Yogurt",
            "Cucumber",
            "Mint"
        ],
        "ingr_ar": [
            "زبادي",
            "خيار",
            "نعناع"
        ],
        "instr_en": [
            "Mix together."
        ],
        "instr_ar": [
            "اخلط معاً."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Lentil Patties",
        "name_ar": "أقراص عدس",
        "desc_en": "Fried lentil patties",
        "desc_ar": "أقراص عدس مقلية",
        "ingr_en": [
            "Lentils",
            "Onion",
            "Spices"
        ],
        "ingr_ar": [
            "عدس",
            "بصل",
            "بهارات"
        ],
        "instr_en": [
            "Shape and fry."
        ],
        "instr_ar": [
            "شكل واقلي."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Tomato Soup",
        "name_ar": "شوربة طماطم",
        "desc_en": "Fresh tomato soup",
        "desc_ar": "شوربة طماطم طازجة",
        "ingr_en": [
            "Tomatoes",
            "Onion",
            "Basil"
        ],
        "ingr_ar": [
            "طماطم",
            "بصل",
            "ريحان"
        ],
        "instr_en": [
            "Cook and blend."
        ],
        "instr_ar": [
            "اطبخ واخلط."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Fried Potatoes",
        "name_ar": "بطاطس مقلية",
        "desc_en": "Crispy fried potatoes",
        "desc_ar": "بطاطس مقلية مقرمشة",
        "ingr_en": [
            "Potatoes",
            "Oil",
            "Salt"
        ],
        "ingr_ar": [
            "بطاطس",
            "زيت",
            "ملح"
        ],
        "instr_en": [
            "Fry and season."
        ],
        "instr_ar": [
            "اقلي وتبل."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Meat Pastries",
        "name_ar": "معجنات لحم",
        "desc_en": "Baked meat pastries",
        "desc_ar": "معجنات لحم مخبوزة",
        "ingr_en": [
            "Dough",
            "Meat",
            "Onion"
        ],
        "ingr_ar": [
            "عجينة",
            "لحم",
            "بصل"
        ],
        "instr_en": [
            "Bake until golden."
        ],
        "instr_ar": [
            "اخبز حتى يذهب."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Eggplant Fatteh",
        "name_ar": "فتة باذنجان",
        "desc_en": "Layered eggplant dish",
        "desc_ar": "طبق باذنجان طبقات",
        "ingr_en": [
            "Eggplant",
            "Yogurt",
            "Bread"
        ],
        "ingr_ar": [
            "باذنجان",
            "زبادي",
            "خبز"
        ],
        "instr_en": [
            "Layer and serve."
        ],
        "instr_ar": [
            "رتب وقدم."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Fried Cheese",
        "name_ar": "جبنة مقلية",
        "desc_en": "Fried halloumi",
        "desc_ar": "حلوم مقلي",
        "ingr_en": [
            "Halloumi",
            "Oil"
        ],
        "ingr_ar": [
            "حلوم",
            "زيت"
        ],
        "instr_en": [
            "Fry slices."
        ],
        "instr_ar": [
            "اقلي الشرائح."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Chicken Spring Rolls",
        "name_ar": "سبرنغ رول دجاج",
        "desc_en": "Crispy chicken rolls",
        "desc_ar": "لفائف دجاج مقرمشة",
        "ingr_en": [
            "Chicken",
            "Wrapper",
            "Vegetables"
        ],
        "ingr_ar": [
            "دجاج",
            "رقائق",
            "خضار"
        ],
        "instr_en": [
            "Roll and fry."
        ],
        "instr_ar": [
            "لف واقلي."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Rice with Vermicelli",
        "name_ar": "رز بالشعيرية",
        "desc_en": "Classic Arabic rice",
        "desc_ar": "رز عربي كلاسيكي",
        "ingr_en": [
            "Rice",
            "Vermicelli",
            "Butter"
        ],
        "ingr_ar": [
            "رز",
            "شعيرية",
            "زبدة"
        ],
        "instr_en": [
            "Cook together."
        ],
        "instr_ar": [
            "اطبخ معاً."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Spiced Olives",
        "name_ar": "زيتون متبل",
        "desc_en": "Marinated olives",
        "desc_ar": "زيتون مخلل",
        "ingr_en": [
            "Olives",
            "Garlic",
            "Herbs"
        ],
        "ingr_ar": [
            "زيتون",
            "ثوم",
            "أعشاب"
        ],
        "instr_en": [
            "Marinate overnight."
        ],
        "instr_ar": [
            "خلل ليلة."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Lentil Salad",
        "name_ar": "سلطة عدس",
        "desc_en": "Cold lentil salad",
        "desc_ar": "سلطة عدس باردة",
        "ingr_en": [
            "Lentils",
            "Vegetables",
            "Lemon"
        ],
        "ingr_ar": [
            "عدس",
            "خضار",
            "ليمون"
        ],
        "instr_en": [
            "Mix all."
        ],
        "instr_ar": [
            "اخلط الكل."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Vegetable Patties",
        "name_ar": "أقراص خضار",
        "desc_en": "Fried veggie patties",
        "desc_ar": "أقراص خضار مقلية",
        "ingr_en": [
            "Mixed veggies",
            "Flour",
            "Spices"
        ],
        "ingr_ar": [
            "خضار مشكلة",
            "طحين",
            "بهارات"
        ],
        "instr_en": [
            "Fry until done."
        ],
        "instr_ar": [
            "اقلي حتى ينضج."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Cheese Sambousek",
        "name_ar": "سمبوسك جبنة",
        "desc_en": "Cheese filled pastry",
        "desc_ar": "معجنات بالجبنة",
        "ingr_en": [
            "Cheese",
            "Dough"
        ],
        "ingr_ar": [
            "جبنة",
            "عجينة"
        ],
        "instr_en": [
            "Fill and fry."
        ],
        "instr_ar": [
            "احشِ واقلي."
        ]
    },
    {
        "category": "iftar",
        "name_en": "Date Smoothie",
        "name_ar": "سموذي تمر",
        "desc_en": "Sweet date smoothie",
        "desc_ar": "سموذي تمر حلو",
        "ingr_en": [
            "Dates",
            "Milk",
            "Ice"
        ],
        "ingr_ar": [
            "تمر",
            "حليب",
            "ثلج"
        ],
        "instr_en": [
            "Blend all."
        ],
        "instr_ar": [
            "اخلط الكل."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Chicken Kabsa",
        "name_ar": "كبسة دجاج",
        "desc_en": "Spiced chicken rice",
        "desc_ar": "رز بالدجاج المتبل",
        "ingr_en": [
            "Chicken",
            "Rice",
            "Spices"
        ],
        "ingr_ar": [
            "دجاج",
            "رز",
            "بهارات"
        ],
        "instr_en": [
            "Cook spiced rice with chicken."
        ],
        "instr_ar": [
            "اطبخ الرز المتبل مع الدجاج."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Lamb Mandi",
        "name_ar": "مندي لحم",
        "desc_en": "Slow cooked lamb",
        "desc_ar": "لحم مطبوخ ببطء",
        "ingr_en": [
            "Lamb",
            "Rice",
            "Spices"
        ],
        "ingr_ar": [
            "لحم",
            "رز",
            "بهارات"
        ],
        "instr_en": [
            "Slow cook lamb."
        ],
        "instr_ar": [
            "اطبخ اللحم ببطء."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Maqluba",
        "name_ar": "مقلوبة",
        "desc_en": "Upside down rice",
        "desc_ar": "رز مقلوب",
        "ingr_en": [
            "Rice",
            "Chicken",
            "Eggplant"
        ],
        "ingr_ar": [
            "رز",
            "دجاج",
            "باذنجان"
        ],
        "instr_en": [
            "Layer and flip."
        ],
        "instr_ar": [
            "رتب واقلب."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Molokhia",
        "name_ar": "ملوخية",
        "desc_en": "Jute leaf stew",
        "desc_ar": "يخنة ملوخية",
        "ingr_en": [
            "Molokhia leaves",
            "Chicken",
            "Garlic"
        ],
        "ingr_ar": [
            "ملوخية",
            "دجاج",
            "ثوم"
        ],
        "instr_en": [
            "Simmer with garlic."
        ],
        "instr_ar": [
            "اطبخ مع الثوم."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Stuffed Zucchini",
        "name_ar": "كوسا محشي",
        "desc_en": "Rice stuffed zucchini",
        "desc_ar": "كوسا محشية رز",
        "ingr_en": [
            "Zucchini",
            "Rice",
            "Meat"
        ],
        "ingr_ar": [
            "كوسا",
            "رز",
            "لحم"
        ],
        "instr_en": [
            "Stuff and cook."
        ],
        "instr_ar": [
            "احشِ واطبخ."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Okra Stew",
        "name_ar": "بامية",
        "desc_en": "Okra tomato stew",
        "desc_ar": "يخنة بامية بالطماطم",
        "ingr_en": [
            "Okra",
            "Tomato",
            "Meat"
        ],
        "ingr_ar": [
            "بامية",
            "طماطم",
            "لحم"
        ],
        "instr_en": [
            "Simmer until done."
        ],
        "instr_ar": [
            "اطبخ حتى ينضج."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Chicken Biryani",
        "name_ar": "برياني دجاج",
        "desc_en": "Layered spiced rice",
        "desc_ar": "رز متبل طبقات",
        "ingr_en": [
            "Rice",
            "Chicken",
            "Spices"
        ],
        "ingr_ar": [
            "رز",
            "دجاج",
            "بهارات"
        ],
        "instr_en": [
            "Layer and cook."
        ],
        "instr_ar": [
            "رتب واطبخ."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Beef Kofta",
        "name_ar": "كفتة لحم",
        "desc_en": "Grilled meat skewers",
        "desc_ar": "أسياخ لحم مشوية",
        "ingr_en": [
            "Ground beef",
            "Onion",
            "Spices"
        ],
        "ingr_ar": [
            "لحم مفروم",
            "بصل",
            "بهارات"
        ],
        "instr_en": [
            "Grill on skewers."
        ],
        "instr_ar": [
            "اشوي على أسياخ."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Fish Sayadiya",
        "name_ar": "صيادية سمك",
        "desc_en": "Fish with rice",
        "desc_ar": "سمك مع رز",
        "ingr_en": [
            "Fish",
            "Rice",
            "Onion"
        ],
        "ingr_ar": [
            "سمك",
            "رز",
            "بصل"
        ],
        "instr_en": [
            "Cook together."
        ],
        "instr_ar": [
            "اطبخ معاً."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Shawarma Plate",
        "name_ar": "صحن شاورما",
        "desc_en": "Shawarma with sides",
        "desc_ar": "شاورما مع مقبلات",
        "ingr_en": [
            "Meat",
            "Bread",
            "Pickles"
        ],
        "ingr_ar": [
            "لحم",
            "خبز",
            "مخللات"
        ],
        "instr_en": [
            "Grill and serve."
        ],
        "instr_ar": [
            "اشوي وقدم."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Spinach Stew",
        "name_ar": "يخنة سبانخ",
        "desc_en": "Spinach meat stew",
        "desc_ar": "يخنة سبانخ ولحم",
        "ingr_en": [
            "Spinach",
            "Meat",
            "Onion"
        ],
        "ingr_ar": [
            "سبانخ",
            "لحم",
            "بصل"
        ],
        "instr_en": [
            "Cook until done."
        ],
        "instr_ar": [
            "اطبخ حتى ينضج."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Grilled Chicken",
        "name_ar": "دجاج مشوي",
        "desc_en": "Marinated grilled chicken",
        "desc_ar": "دجاج مشوي متبل",
        "ingr_en": [
            "Chicken",
            "Lemon",
            "Garlic"
        ],
        "ingr_ar": [
            "دجاج",
            "ليمون",
            "ثوم"
        ],
        "instr_en": [
            "Grill until done."
        ],
        "instr_ar": [
            "اشوي حتى ينضج."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Stuffed Peppers",
        "name_ar": "فلفل محشي",
        "desc_en": "Rice stuffed peppers",
        "desc_ar": "فلفل محشي رز",
        "ingr_en": [
            "Bell peppers",
            "Rice",
            "Meat"
        ],
        "ingr_ar": [
            "فلفل",
            "رز",
            "لحم"
        ],
        "instr_en": [
            "Stuff and bake."
        ],
        "instr_ar": [
            "احشِ واخبز."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Chicken Freekeh",
        "name_ar": "فريكة بالدجاج",
        "desc_en": "Smoked wheat with chicken",
        "desc_ar": "قمح مدخن مع دجاج",
        "ingr_en": [
            "Freekeh",
            "Chicken",
            "Spices"
        ],
        "ingr_ar": [
            "فريكة",
            "دجاج",
            "بهارات"
        ],
        "instr_en": [
            "Cook together."
        ],
        "instr_ar": [
            "اطبخ معاً."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Meat Stew",
        "name_ar": "يخنة لحم",
        "desc_en": "Hearty meat stew",
        "desc_ar": "يخنة لحم دسمة",
        "ingr_en": [
            "Beef",
            "Vegetables",
            "Broth"
        ],
        "ingr_ar": [
            "لحم",
            "خضار",
            "مرق"
        ],
        "instr_en": [
            "Simmer slowly."
        ],
        "instr_ar": [
            "اطبخ ببطء."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Eggplant Moussaka",
        "name_ar": "مسقعة",
        "desc_en": "Baked eggplant dish",
        "desc_ar": "طبق باذنجان مخبوز",
        "ingr_en": [
            "Eggplant",
            "Meat",
            "Tomato"
        ],
        "ingr_ar": [
            "باذنجان",
            "لحم",
            "طماطم"
        ],
        "instr_en": [
            "Bake until golden."
        ],
        "instr_ar": [
            "اخبز حتى يذهب."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Lentil Mujadara",
        "name_ar": "مجدرة",
        "desc_en": "Lentils with rice",
        "desc_ar": "عدس مع رز",
        "ingr_en": [
            "Lentils",
            "Rice",
            "Onion"
        ],
        "ingr_ar": [
            "عدس",
            "رز",
            "بصل"
        ],
        "instr_en": [
            "Cook with rice."
        ],
        "instr_ar": [
            "اطبخ مع الرز."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Chicken Curry",
        "name_ar": "كاري دجاج",
        "desc_en": "Spiced chicken curry",
        "desc_ar": "كاري دجاج متبل",
        "ingr_en": [
            "Chicken",
            "Curry",
            "Coconut milk"
        ],
        "ingr_ar": [
            "دجاج",
            "كاري",
            "حليب جوز هند"
        ],
        "instr_en": [
            "Simmer in sauce."
        ],
        "instr_ar": [
            "اطبخ في الصلصة."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Rice & Beans",
        "name_ar": "رز وفاصوليا",
        "desc_en": "Rice with beans",
        "desc_ar": "رز مع فاصوليا",
        "ingr_en": [
            "Rice",
            "Beans",
            "Tomato"
        ],
        "ingr_ar": [
            "رز",
            "فاصوليا",
            "طماطم"
        ],
        "instr_en": [
            "Cook together."
        ],
        "instr_ar": [
            "اطبخ معاً."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Grilled Fish",
        "name_ar": "سمك مشوي",
        "desc_en": "Seasoned grilled fish",
        "desc_ar": "سمك مشوي متبل",
        "ingr_en": [
            "Fish",
            "Lemon",
            "Herbs"
        ],
        "ingr_ar": [
            "سمك",
            "ليمون",
            "أعشاب"
        ],
        "instr_en": [
            "Grill until done."
        ],
        "instr_ar": [
            "اشوي حتى ينضج."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Vegetable Stew",
        "name_ar": "يخنة خضار",
        "desc_en": "Mixed veggie stew",
        "desc_ar": "يخنة خضار مشكلة",
        "ingr_en": [
            "Vegetables",
            "Tomato",
            "Broth"
        ],
        "ingr_ar": [
            "خضار",
            "طماطم",
            "مرق"
        ],
        "instr_en": [
            "Simmer slowly."
        ],
        "instr_ar": [
            "اطبخ ببطء."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Lamb Chops",
        "name_ar": "ريش غنم",
        "desc_en": "Grilled lamb chops",
        "desc_ar": "ريش غنم مشوية",
        "ingr_en": [
            "Lamb chops",
            "Rosemary",
            "Garlic"
        ],
        "ingr_ar": [
            "ريش غنم",
            "روزماري",
            "ثوم"
        ],
        "instr_en": [
            "Grill to preference."
        ],
        "instr_ar": [
            "اشوي حسب الرغبة."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Chicken Pasta",
        "name_ar": "باستا دجاج",
        "desc_en": "Creamy chicken pasta",
        "desc_ar": "باستا دجاج كريمية",
        "ingr_en": [
            "Pasta",
            "Chicken",
            "Cream"
        ],
        "ingr_ar": [
            "باستا",
            "دجاج",
            "كريمة"
        ],
        "instr_en": [
            "Cook and mix."
        ],
        "instr_ar": [
            "اطبخ واخلط."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Beef Stir Fry",
        "name_ar": "لحم مقلي",
        "desc_en": "Quick beef stir fry",
        "desc_ar": "لحم مقلي سريع",
        "ingr_en": [
            "Beef",
            "Vegetables",
            "Soy sauce"
        ],
        "ingr_ar": [
            "لحم",
            "خضار",
            "صوص صويا"
        ],
        "instr_en": [
            "Fry quickly."
        ],
        "instr_ar": [
            "اقلي بسرعة."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Stuffed Eggplant",
        "name_ar": "باذنجان محشي",
        "desc_en": "Meat stuffed eggplant",
        "desc_ar": "باذنجان محشي لحم",
        "ingr_en": [
            "Eggplant",
            "Meat",
            "Rice"
        ],
        "ingr_ar": [
            "باذنجان",
            "لحم",
            "رز"
        ],
        "instr_en": [
            "Stuff and bake."
        ],
        "instr_ar": [
            "احشِ واخبز."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Chicken Soup",
        "name_ar": "شوربة دجاج",
        "desc_en": "Comforting chicken soup",
        "desc_ar": "شوربة دجاج مريحة",
        "ingr_en": [
            "Chicken",
            "Vegetables",
            "Noodles"
        ],
        "ingr_ar": [
            "دجاج",
            "خضار",
            "شعيرية"
        ],
        "instr_en": [
            "Simmer gently."
        ],
        "instr_ar": [
            "اطبخ برفق."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Rice Pilaf",
        "name_ar": "رز بيلاف",
        "desc_en": "Buttery rice pilaf",
        "desc_ar": "رز بالزبدة",
        "ingr_en": [
            "Rice",
            "Butter",
            "Broth"
        ],
        "ingr_ar": [
            "رز",
            "زبدة",
            "مرق"
        ],
        "instr_en": [
            "Cook until fluffy."
        ],
        "instr_ar": [
            "اطبخ حتى ينتفخ."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Baked Chicken",
        "name_ar": "دجاج مخبوز",
        "desc_en": "Oven baked chicken",
        "desc_ar": "دجاج مخبوز بالفرن",
        "ingr_en": [
            "Chicken",
            "Potatoes",
            "Spices"
        ],
        "ingr_ar": [
            "دجاج",
            "بطاطس",
            "بهارات"
        ],
        "instr_en": [
            "Bake until done."
        ],
        "instr_ar": [
            "اخبز حتى ينضج."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Minced Meat Skillet",
        "name_ar": "صاج لحم مفروم",
        "desc_en": "Pan fried minced meat",
        "desc_ar": "لحم مفروم بالصاج",
        "ingr_en": [
            "Minced meat",
            "Onion",
            "Spices"
        ],
        "ingr_ar": [
            "لحم مفروم",
            "بصل",
            "بهارات"
        ],
        "instr_en": [
            "Fry in skillet."
        ],
        "instr_ar": [
            "اقلي بالصاج."
        ]
    },
    {
        "category": "dinner",
        "name_en": "Vegetable Rice",
        "name_ar": "رز بالخضار",
        "desc_en": "Mixed vegetable rice",
        "desc_ar": "رز بالخضار المشكلة",
        "ingr_en": [
            "Rice",
            "Mixed vegetables",
            "Butter"
        ],
        "ingr_ar": [
            "رز",
            "خضار مشكلة",
            "زبدة"
        ],
        "instr_en": [
            "Cook together."
        ],
        "instr_ar": [
            "اطبخ معاً."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Kunafa with Cheese",
        "name_ar": "كنافة بالجبن",
        "desc_en": "Sweet cheese pastry",
        "desc_ar": "حلوى جبن",
        "ingr_en": [
            "Kunafa dough",
            "Mozzarella",
            "Sugar syrup"
        ],
        "ingr_ar": [
            "عجينة كنافة",
            "موزاريلا",
            "قطر"
        ],
        "instr_en": [
            "Bake at 180°C for 30 min, add syrup."
        ],
        "instr_ar": [
            "اخبز ١٨٠ درجة ٣٠ دقيقة وأضف القطر."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Qatayef with Cream",
        "name_ar": "قطايف بالقشطة",
        "desc_en": "Cream filled pancakes",
        "desc_ar": "فطائر بالقشطة",
        "ingr_en": [
            "Qatayef",
            "Ashta cream",
            "Syrup"
        ],
        "ingr_ar": [
            "قطايف",
            "قشطة",
            "قطر"
        ],
        "instr_en": [
            "Fill, fry, drizzle syrup."
        ],
        "instr_ar": [
            "احشِ واقلي ورش القطر."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Basbousa",
        "name_ar": "بسبوسة",
        "desc_en": "Semolina cake",
        "desc_ar": "كيكة سميد",
        "ingr_en": [
            "Semolina",
            "Yogurt",
            "Sugar",
            "Syrup"
        ],
        "ingr_ar": [
            "سميد",
            "زبادي",
            "سكر",
            "قطر"
        ],
        "instr_en": [
            "Bake 35 min, add syrup."
        ],
        "instr_ar": [
            "اخبز ٣٥ دقيقة وأضف القطر."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Muhallabia",
        "name_ar": "مهلبية",
        "desc_en": "Milk pudding",
        "desc_ar": "بودينج حليب",
        "ingr_en": [
            "Milk",
            "Cornstarch",
            "Sugar",
            "Rose water"
        ],
        "ingr_ar": [
            "حليب",
            "نشا",
            "سكر",
            "ماء ورد"
        ],
        "instr_en": [
            "Cook until thick, chill."
        ],
        "instr_ar": [
            "اطبخ حتى يثخن وبرد."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Rice Pudding",
        "name_ar": "أرز بالحليب",
        "desc_en": "Creamy rice pudding",
        "desc_ar": "أرز بالحليب كريمي",
        "ingr_en": [
            "Rice",
            "Milk",
            "Sugar",
            "Cinnamon"
        ],
        "ingr_ar": [
            "رز",
            "حليب",
            "سكر",
            "قرفة"
        ],
        "instr_en": [
            "Simmer until creamy."
        ],
        "instr_ar": [
            "اطبخ حتى يصبح كريمي."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Date Maamoul",
        "name_ar": "معمول تمر",
        "desc_en": "Date filled cookies",
        "desc_ar": "كعك بالتمر",
        "ingr_en": [
            "Semolina",
            "Butter",
            "Dates"
        ],
        "ingr_ar": [
            "سميد",
            "زبدة",
            "تمر"
        ],
        "instr_en": [
            "Fill and bake 20 min."
        ],
        "instr_ar": [
            "احشِ واخبز ٢٠ دقيقة."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Baklava",
        "name_ar": "بقلاوة",
        "desc_en": "Layered nut pastry",
        "desc_ar": "حلوى مكسرات طبقات",
        "ingr_en": [
            "Phyllo",
            "Nuts",
            "Butter",
            "Syrup"
        ],
        "ingr_ar": [
            "جلاش",
            "مكسرات",
            "زبدة",
            "قطر"
        ],
        "instr_en": [
            "Bake 45 min, add syrup."
        ],
        "instr_ar": [
            "اخبز ٤٥ دقيقة وأضف القطر."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Halawa",
        "name_ar": "حلاوة طحينية",
        "desc_en": "Tahini sweet",
        "desc_ar": "حلوى طحينية",
        "ingr_en": [
            "Tahini",
            "Sugar",
            "Milk powder"
        ],
        "ingr_ar": [
            "طحينة",
            "سكر",
            "حليب بودرة"
        ],
        "instr_en": [
            "Mix and set."
        ],
        "instr_ar": [
            "اخلط واتركه يتماسك."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Zalabia",
        "name_ar": "زلابية",
        "desc_en": "Fried dough in syrup",
        "desc_ar": "عجين مقلي بالقطر",
        "ingr_en": [
            "Flour",
            "Yeast",
            "Sugar",
            "Syrup"
        ],
        "ingr_ar": [
            "طحين",
            "خميرة",
            "سكر",
            "قطر"
        ],
        "instr_en": [
            "Fry and soak in syrup."
        ],
        "instr_ar": [
            "اقلي وانقع بالقطر."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Umm Ali",
        "name_ar": "أم علي",
        "desc_en": "Bread pudding",
        "desc_ar": "بودينج خبز",
        "ingr_en": [
            "Puff pastry",
            "Milk",
            "Nuts",
            "Sugar"
        ],
        "ingr_ar": [
            "باف باستري",
            "حليب",
            "مكسرات",
            "سكر"
        ],
        "instr_en": [
            "Bake with milk and nuts."
        ],
        "instr_ar": [
            "اخبز مع الحليب والمكسرات."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Semolina Coconut Cake",
        "name_ar": "كيكة سميد وجوز هند",
        "desc_en": "Coconut semolina cake",
        "desc_ar": "كيكة سميد جوز هند",
        "ingr_en": [
            "Semolina",
            "Coconut",
            "Yogurt",
            "Syrup"
        ],
        "ingr_ar": [
            "سميد",
            "جوز هند",
            "زبادي",
            "قطر"
        ],
        "instr_en": [
            "Mix, bake, add syrup."
        ],
        "instr_ar": [
            "اخلط واخبز وأضف القطر."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Arabic Jelly",
        "name_ar": "جيلي عربي",
        "desc_en": "Flavored jelly cups",
        "desc_ar": "أكواب جيلي",
        "ingr_en": [
            "Gelatin",
            "Sugar",
            "Water",
            "Flavor"
        ],
        "ingr_ar": [
            "جيلاتين",
            "سكر",
            "ماء",
            "نكهة"
        ],
        "instr_en": [
            "Dissolve and chill."
        ],
        "instr_ar": [
            "ذوب وبرد."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Date Balls",
        "name_ar": "كرات التمر",
        "desc_en": "No-bake date balls",
        "desc_ar": "كرات تمر بدون خبز",
        "ingr_en": [
            "Dates",
            "Nuts",
            "Coconut"
        ],
        "ingr_ar": [
            "تمر",
            "مكسرات",
            "جوز هند"
        ],
        "instr_en": [
            "Blend, roll, coat."
        ],
        "instr_ar": [
            "اخلط وشكل وغطي."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Carrot Halawa",
        "name_ar": "حلاوة جزر",
        "desc_en": "Sweet carrot dessert",
        "desc_ar": "حلوى جزر",
        "ingr_en": [
            "Carrots",
            "Sugar",
            "Milk",
            "Cardamom"
        ],
        "ingr_ar": [
            "جزر",
            "سكر",
            "حليب",
            "هيل"
        ],
        "instr_en": [
            "Cook until thick."
        ],
        "instr_ar": [
            "اطبخ حتى يثخن."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Pistachio Kunafa",
        "name_ar": "كنافة بالفستق",
        "desc_en": "Kunafa with pistachios",
        "desc_ar": "كنافة فستق",
        "ingr_en": [
            "Kunafa",
            "Pistachios",
            "Syrup"
        ],
        "ingr_ar": [
            "كنافة",
            "فستق",
            "قطر"
        ],
        "instr_en": [
            "Bake and top with pistachios."
        ],
        "instr_ar": [
            "اخبز وزين بالفستق."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Cream Baklava Rolls",
        "name_ar": "لفائف بقلاوة",
        "desc_en": "Rolled baklava with cream",
        "desc_ar": "بقلاوة ملفوفة بالقشطة",
        "ingr_en": [
            "Phyllo",
            "Cream",
            "Syrup"
        ],
        "ingr_ar": [
            "جلاش",
            "قشطة",
            "قطر"
        ],
        "instr_en": [
            "Roll, bake, soak."
        ],
        "instr_ar": [
            "لف واخبز وانقع."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Milk Cake",
        "name_ar": "كيكة الحليب",
        "desc_en": "Tres leches style",
        "desc_ar": "كيكة ثلاث حليب",
        "ingr_en": [
            "Flour",
            "Milk",
            "Sugar",
            "Cream"
        ],
        "ingr_ar": [
            "طحين",
            "حليب",
            "سكر",
            "كريمة"
        ],
        "instr_en": [
            "Bake and soak with milk."
        ],
        "instr_ar": [
            "اخبز وانقع بالحليب."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Arabic Donuts",
        "name_ar": "لقيمات",
        "desc_en": "Fried dough balls",
        "desc_ar": "كرات عجين مقلية",
        "ingr_en": [
            "Flour",
            "Yeast",
            "Syrup"
        ],
        "ingr_ar": [
            "طحين",
            "خميرة",
            "قطر"
        ],
        "instr_en": [
            "Fry and coat with syrup."
        ],
        "instr_ar": [
            "اقلي وغطي بالقطر."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Chocolate Basbousa",
        "name_ar": "بسبوسة شوكولاتة",
        "desc_en": "Chocolate semolina cake",
        "desc_ar": "بسبوسة بالشوكولاتة",
        "ingr_en": [
            "Semolina",
            "Cocoa",
            "Syrup"
        ],
        "ingr_ar": [
            "سميد",
            "كاكاو",
            "قطر"
        ],
        "instr_en": [
            "Bake and add syrup."
        ],
        "instr_ar": [
            "اخبز وأضف القطر."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Banana Pudding",
        "name_ar": "بودينج موز",
        "desc_en": "Creamy banana pudding",
        "desc_ar": "بودينج موز كريمي",
        "ingr_en": [
            "Milk",
            "Banana",
            "Starch",
            "Sugar"
        ],
        "ingr_ar": [
            "حليب",
            "موز",
            "نشا",
            "سكر"
        ],
        "instr_en": [
            "Blend and cook until thick."
        ],
        "instr_ar": [
            "اخلط واطبخ حتى يثخن."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Date Pudding",
        "name_ar": "بودينج تمر",
        "desc_en": "Sweet date pudding",
        "desc_ar": "بودينج تمر حلو",
        "ingr_en": [
            "Dates",
            "Milk",
            "Cream"
        ],
        "ingr_ar": [
            "تمر",
            "حليب",
            "كريمة"
        ],
        "instr_en": [
            "Cook and blend, chill."
        ],
        "instr_ar": [
            "اطبخ واخلط وبرد."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Orange Cake",
        "name_ar": "كيكة برتقال",
        "desc_en": "Fresh orange cake",
        "desc_ar": "كيكة برتقال طازجة",
        "ingr_en": [
            "Flour",
            "Orange juice",
            "Sugar"
        ],
        "ingr_ar": [
            "طحين",
            "عصير برتقال",
            "سكر"
        ],
        "instr_en": [
            "Bake and glaze."
        ],
        "instr_ar": [
            "اخبز وزين."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Coconut Rolls",
        "name_ar": "لفائف جوز هند",
        "desc_en": "Sweet coconut rolls",
        "desc_ar": "لفائف جوز هند حلوة",
        "ingr_en": [
            "Coconut",
            "Condensed milk"
        ],
        "ingr_ar": [
            "جوز هند",
            "حليب مكثف"
        ],
        "instr_en": [
            "Roll and chill."
        ],
        "instr_ar": [
            "لف وبرد."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Almond Cake",
        "name_ar": "كيكة لوز",
        "desc_en": "Flourless almond cake",
        "desc_ar": "كيكة لوز بدون طحين",
        "ingr_en": [
            "Almond flour",
            "Eggs",
            "Sugar"
        ],
        "ingr_ar": [
            "دقيق لوز",
            "بيض",
            "سكر"
        ],
        "instr_en": [
            "Bake 30 minutes."
        ],
        "instr_ar": [
            "اخبز ٣٠ دقيقة."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Rose Milk Dessert",
        "name_ar": "حلى الورد بالحليب",
        "desc_en": "Rose flavored milk dessert",
        "desc_ar": "حلى حليب بالورد",
        "ingr_en": [
            "Milk",
            "Rose syrup",
            "Starch"
        ],
        "ingr_ar": [
            "حليب",
            "شراب ورد",
            "نشا"
        ],
        "instr_en": [
            "Cook and chill."
        ],
        "instr_ar": [
            "اطبخ وبرد."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Sesame Candy",
        "name_ar": "حلاوة سمسم",
        "desc_en": "Crunchy sesame candy",
        "desc_ar": "حلوى سمسم مقرمشة",
        "ingr_en": [
            "Sesame",
            "Honey",
            "Sugar"
        ],
        "ingr_ar": [
            "سمسم",
            "عسل",
            "سكر"
        ],
        "instr_en": [
            "Toast and mix."
        ],
        "instr_ar": [
            "حمص واخلط."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Honey Balls",
        "name_ar": "كرات العسل",
        "desc_en": "Fried honey balls",
        "desc_ar": "كرات عسل مقلية",
        "ingr_en": [
            "Flour",
            "Honey",
            "Oil"
        ],
        "ingr_ar": [
            "طحين",
            "عسل",
            "زيت"
        ],
        "instr_en": [
            "Fry and drizzle honey."
        ],
        "instr_ar": [
            "اقلي ورش العسل."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Cream Tart",
        "name_ar": "تارت كريمة",
        "desc_en": "Sweet cream tart",
        "desc_ar": "تارت كريمة حلوة",
        "ingr_en": [
            "Flour",
            "Butter",
            "Cream",
            "Sugar"
        ],
        "ingr_ar": [
            "طحين",
            "زبدة",
            "كريمة",
            "سكر"
        ],
        "instr_en": [
            "Bake base, fill with cream."
        ],
        "instr_ar": [
            "اخبز القاعدة واحشِ بالكريمة."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Date Cheesecake",
        "name_ar": "تشيزكيك تمر",
        "desc_en": "Date flavored cheesecake",
        "desc_ar": "تشيزكيك بالتمر",
        "ingr_en": [
            "Dates",
            "Cream cheese",
            "Biscuits"
        ],
        "ingr_ar": [
            "تمر",
            "جبنة كريمية",
            "بسكويت"
        ],
        "instr_en": [
            "Mix and chill."
        ],
        "instr_ar": [
            "اخلط وبرد."
        ]
    },
    {
        "category": "dessert",
        "name_en": "Arabic Ice Cream",
        "name_ar": "بوظة عربية",
        "desc_en": "Stretchy Arabic ice cream",
        "desc_ar": "بوظة عربية مطاطية",
        "ingr_en": [
            "Milk",
            "Sugar",
            "Mastic",
            "Salep"
        ],
        "ingr_ar": [
            "حليب",
            "سكر",
            "مستكة",
            "سحلب"
        ],
        "instr_en": [
            "Freeze while stirring."
        ],
        "instr_ar": [
            "جمد مع التحريك."
        ]
    }
];

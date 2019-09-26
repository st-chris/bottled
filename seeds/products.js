const Product = require('../models/Product');

const products = [
  {
    title: 'Pale to blonde',
    routeName: 'pale-blonde',
    items: [
      {
        id: 3,
        name: 'Berliner Weisse With Yuzu - B-Sides',
        tagline: 'Japanese Citrus Berliner Weisse.',
        description:
          'Japanese citrus fruit intensifies the sour nature of this German classic.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 4.2,
        ibu: 8,
        ebc: 8,
        food_pairing: ['Smoked chicken wings', 'Miso ramen', 'Yuzu cheesecake']
      },
      {
        id: 25,
        name: 'Bad Pixie',
        tagline: 'Spiced Wheat Beer.',
        description:
          '2008 Prototype beer, a 4.7% wheat ale with crushed juniper berries and citrus peel.',
        image_url: 'https://images.punkapi.com/v2/25.png',
        abv: 4.7,
        ibu: 45,
        ebc: 8,
        food_pairing: [
          'Poached sole fillet with capers',
          'Summer fruit salad',
          'Banana split'
        ]
      },
      {
        id: 84,
        name: 'Baby Saison - B-Sides',
        tagline: 'Trial Baby Saison.',
        description:
          'A hark back to the origins of Saison; slight spice and earthy notes with highlights of lemon and pepper make a beer that could quench the thirst of any seasonal worker.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 3.6,
        ibu: 9,
        ebc: 2,
        food_pairing: [
          'Pork chop with rosemary chips',
          'Steak tartare',
          'Belgian waffles'
        ]
      },
      {
        id: 112,
        name: 'Vote Sepp',
        tagline: 'Witbier With Hibiscus.',
        description:
          'Vote Sepp is a single hop wheat beer brewed to a session strength, with hibiscus flower, which gives it an impressively vibrant shade of pink. What Vote Sepp lacks in complexity, it more than makes up for in a perfect balance of tartness, bitterness and body.',
        image_url: 'https://images.punkapi.com/v2/112.png',
        abv: 3.6,
        ibu: 20,
        ebc: 8,
        food_pairing: [
          'Crab roll sushi with strawberries',
          'Artichoke hearts and chicken melt',
          'Caprese salad (mozzarella, tomato, basil, black pepper and sea salt)'
        ]
      },
      {
        id: 115,
        name: 'Melon And Cucumber IPA - B-Sides',
        tagline: 'Fresh Melon IPA.',
        description:
          'A Pilot Brew with 200Kg of fresh melon and 5Kg fresh cucumber added after fermentation to produce the perfect summer refreshment.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 6,
        ibu: 50,
        ebc: 8,
        food_pairing: [
          'Beef carpaccio',
          'Chilled beetroot soup',
          'Korean watermelon salad'
        ]
      },
      {
        id: 142,
        name: 'Orange Blossom - B-Sides',
        tagline: 'Citrus Wheat Braggot.',
        description:
          'Orange blossom honey braggot. A floral easy drinker with a hint of citrus.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 3.8,
        ibu: 20,
        ebc: 6,
        food_pairing: [
          'Soy and honey glazed mackerel',
          'Moroccan spice lamb shanks',
          'Baklava'
        ]
      },
      {
        id: 153,
        name: 'Hoppy Saison - B-Sides',
        tagline: 'Hop Yeast Synergy.',
        description: 'Hoppy citrus and tropical fruit Saison.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 6.4,
        ibu: 40,
        ebc: 8,
        food_pairing: ['Pad Thai', 'Paella', 'Smoked dry-cured venison sausage']
      },
      {
        id: 221,
        name: 'Blitz Series',
        tagline: 'Fruit Infused Berlinerweisse.',
        description:
          'We are bringing back our Blitz Series to 2016. Every Blitz we brew is different, due to the spontaneous souring process, and each version has a great blend of all the different flavours we look for in a Berlinerwiesse.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 3.2,
        ibu: 8,
        ebc: 8,
        food_pairing: [
          'Cheese boards',
          'Sashimi sushi',
          'French fries dressed in good oil and salt',
          'Mac and Cheese'
        ]
      },
      {
        id: 237,
        name: 'Honey And Lemon Blitz',
        tagline: 'Honey & Lemon Infused Berliner Weisse.',
        description:
          'Honey & Lemon Blitz sees tart Berliner Weisse character multiplied by lemony acidity; light bready malt and a hint of warming honey hold this back from the brink of palate- destroying sourness.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 3.2,
        ibu: null,
        ebc: 8,
        food_pairing: [
          'Herb-Crusted Baked Cod',
          'Berry and Cream Meringue',
          'Lemon Drizzle Cake'
        ]
      },
      {
        id: 240,
        name: 'Blitz Saison',
        tagline: 'Lemon & coriander Berliner Weisse',
        description:
          'Belgium meets Berlin – incredible saison character with a bright and vibrant sour edge.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 3.2,
        ibu: 8,
        ebc: 7,
        food_pairing: [
          'Taleggio and Spinach Tart',
          'Chicken Adobo',
          'Crème Caramel'
        ]
      },
      {
        id: 243,
        name: 'Gin Blitz',
        tagline: 'Botanical Berliner Weisse',
        description:
          'Our Blitz series sees us brew up low abv, super tart Berliner Weisse, and generally infuse them with bags of sour fruit flavour – but this batch uses gin botanicals instead.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 3.2,
        ibu: 8,
        ebc: 8,
        food_pairing: ['Game Terrine with Pickles', 'Fish Tacos', 'Peach Melba']
      },
      {
        id: 250,
        name: 'Small Batch: Rye IPA',
        tagline: 'Rye India Pale Ale.',
        description:
          'A 7.2% rye IPA loaded with grapefruit notes, pithy citrus, and huge resinous bitterness, with rye character. The Centennial and Columbus flavours are amplified by the spicy, dry rye.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 7.2,
        ibu: 100,
        ebc: 8,
        food_pairing: [
          'Salmon Fishcakes with Rocket Salad',
          "Baked Goat's Cheese",
          'Classic Victoria Sponge'
        ]
      },
      {
        id: 263,
        name: 'Small Batch: Mandarina Lager',
        tagline: 'Pithy Pale Pilsner.',
        description:
          'A bitter pils-style lager which is packed with aromas of citrus and a dry, refreshing biscuit malt backbone. Light floral notes add to the complexity.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 5.3,
        ibu: 40,
        ebc: 7,
        food_pairing: [
          'Green Thai Curry',
          'Fish Tacos',
          "Goat's Cheese Salad With Walnuts, Radish And Blood Orange"
        ]
      },
      {
        id: 266,
        name: 'Small Batch: Lemon Meringue Pie',
        tagline: 'Experimental Dessert Beer.',
        description:
          'Brewed to a concept voted on at Craft Beer Rising, this one-off beer is an experimental brew which emulates the flavour of lemon meringue pie.',
        image_url: null,
        abv: 6.5,
        ibu: 5,
        ebc: 7,
        food_pairing: ['Lemon Tart']
      },
      {
        id: 272,
        name: 'Small Batch: Spelt & Honey Saison',
        tagline: 'Honey & Spelt Saison',
        description:
          'A pilot kit Small Batch, experimenting with weizen yeast, honey and spelt.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 5.2,
        ibu: 22,
        ebc: 8,
        food_pairing: ['Pancakes', 'Honey Mustard Chicken', 'Crème Brûlée']
      },
      {
        id: 275,
        name: 'Sidewalk Shark',
        tagline: 'Citrus-Infused German Sour.',
        description:
          'A citrus-infused gose - a traditional German sour wheat beer brewed with salt, in this case with the addition of kaffir lime leaf and lemon peel.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 5.2,
        ibu: 22,
        ebc: 7,
        food_pairing: ['Grilled Halibut', 'Pickled Herrings', 'Moules Frites']
      },
      {
        id: 299,
        name: 'Raspberry Popsicle Parade',
        tagline: 'Raspberry Berliner Weisse.',
        description:
          'A draft-only kettle-soured raspberry ale, brewed to just 0.5% ABV, using our knowledge from brewing both Blitz and Nanny State. Aromas of fresh raspberry juice, soft red berries, and a blast of lemon zest, with a juicy palate encompassing zingy acidity and the smooth velvety note of oats, rounding out this low-ABV juicebox.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 0.5,
        ibu: 8,
        ebc: 8,
        food_pairing: [
          "Walnut and goat's cheese salad with pomegranate dressing",
          'Cranachan pudding',
          'Panna cotta'
        ]
      },
      {
        id: 301,
        name: 'Small Batch: Dry-hopped Pilsner',
        tagline: 'Dry-hopped lager.',
        description:
          "A BrewDog bar exclusive draft lager, brewed with Weihenstephan's lager yeast, and dry-hopped with the contemporary German variety Saphir; this lager has been lightly centrifuged and packaged at just under 28 days in tank.",
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 4.7,
        ibu: 37,
        ebc: 5,
        food_pairing: [
          'Grilled salmon tacos',
          'Chicken and pesto pasta',
          'Ham and mustard crisps'
        ]
      },
      {
        id: 325,
        name: 'Zipcode',
        tagline: 'Pilsner.',
        description:
          'A new 5% Pilsner, that feaures in Fanzine, our new subscription model.',
        image_url: null,
        abv: 5,
        ibu: 37,
        ebc: 5,
        food_pairing: ["Goat's cheese salad", 'Pesto pasta', 'Lemon cookies']
      }
    ]
  },
  {
    title: 'Blonde to yellow',
    routeName: 'blonde-yellow',
    items: [
      {
        id: 5,
        name: 'Avery Brown Dredge',
        tagline: "Bloggers' Imperial Pilsner.",
        description:
          'An Imperial Pilsner in collaboration with beer writers. Tradition. Homage. Revolution. We wanted to showcase the awesome backbone of the Czech brewing tradition, the noble Saaz hop, and also tip our hats to the modern beers that rock our world, and the people who make them.',
        image_url: 'https://images.punkapi.com/v2/5.png',
        abv: 7.2,
        ibu: 59,
        ebc: 10,
        food_pairing: [
          'Vietnamese squid salad',
          'Chargrilled corn on the cob with paprika butter',
          'Strawberry and rhubarb pie'
        ]
      },
      {
        id: 43,
        name: 'American Wheat',
        tagline: 'Hoppy American Wheat.',
        description:
          'A luscious blend of peach, blood orange and banana to make a suitably refreshing beverage that happily straddles the Atlantic.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 4.5,
        ibu: 17,
        ebc: 10,
        food_pairing: [
          'Strawberry and citrus salad',
          'Fish corn tacos with pomegranate salsa',
          'Summer berry fruit parfait'
        ]
      },
      {
        id: 67,
        name: 'Hunter Foundation Pale Ale',
        tagline: 'American Pale Ale.',
        description:
          "This straight-up US style pale ale uses some of our favourite hops against a toasty malt base. We brewed this with Sir Tom Hunter at our Fraserburgh brewery - to add a charitable element to your own version, feel free to share this citrusy pale ale with your friends. Or don't, it's your choice.",
        image_url: 'https://images.punkapi.com/v2/67.png',
        abv: 5.4,
        ibu: 35,
        ebc: 11.5,
        food_pairing: [
          'Monterey Jack stuffed grilled jalepenos',
          'Barbecue corn and steak fajita seasoned wrap',
          'Cinnamon & white chocolate churro'
        ]
      },
      {
        id: 93,
        name: 'Mango Gose - B-Sides',
        tagline: 'Hoppy Mango Gose.',
        description:
          'Kettle soured hoppy mango gose. A delicate balance of sweet, juicy mango, sour lime and salinity.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 6.4,
        ibu: 40,
        ebc: 10,
        food_pairing: ['Okra fries', 'Sea bass ceviche', 'Sea salt fudge']
      },
      {
        id: 151,
        name: 'Rhubarb Saison - B-Sides',
        tagline: 'Spiced Rhubarb Saison.',
        description: 'Spiced peppercorn and rhubarb Saison.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 6.4,
        ibu: 25,
        ebc: 10,
        food_pairing: [
          'Lamb cutlets with cucumber raita',
          'Pigeon pea dal',
          'Set vanilla custard'
        ]
      },
      {
        id: 154,
        name: 'No Label',
        tagline: 'Dry Hopped Kölsch.',
        description:
          'No Label is a postmodern, postgender non-binary brew; the world’s first beer made with transgender hops. Brewed with whole hop bines that have spontaneously changed from female to male, no label goes its own way. No Label balances a light, biscuity dryness from the malt base with delicate hints of fruity esters gifted by the fermentation. Finally, dry- hopping adds a layer of new world tropical & pine flavours that add a unique twist to this classic Kölsch style beer. All profits from the sales of this beer were donated to LGBTQI+ events organisers Queerest of the Queer.',
        image_url: 'https://images.punkapi.com/v2/154.png',
        abv: 4.5,
        ibu: 25,
        ebc: 10,
        food_pairing: [
          'Strawberry and basil salad with feta',
          'Lemon baked monkfish',
          'Peach cobbler'
        ]
      },
      {
        id: 163,
        name: 'This. Is. Lager',
        tagline: '21st Century Pilsner. Sharp. Robust. Honest.',
        description:
          'Brewed with 100% malt, ten times the hops of most industrial lagers and cold-conditioned for five weeks, this spicy, robust Pilsner is lager reborn. Expect a robust, full-bodied malt character on the front of the tongue, spicy citrus notes as it goes back through the palate and an assertive bitter finish with a lemon and pepper character to round things off.',
        image_url: 'https://images.punkapi.com/v2/163.png',
        abv: 4.7,
        ibu: 37,
        ebc: 10,
        food_pairing: [
          'Mexican ceviche',
          'Blue cheese crumbled over wedges',
          'Gooey lemon bar'
        ]
      },
      {
        id: 172,
        name: 'Single Hop Enigma IPA - B-Sides',
        tagline: 'Enigma Hopped IPA.',
        description:
          'A cheeky play with a new hop on the pilot kit. Expect notes of redcurrant, melon and citrus. An intriguing possibility for the future.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 5,
        ibu: 50,
        ebc: 10,
        food_pairing: [
          'Jalapeño poppers with blue cheese dip',
          'T-bone steak with fried onions',
          'Carrot cake with cream cheese frosting'
        ]
      },
      {
        id: 180,
        name: 'Doodlebug',
        tagline: 'Hoppy Sub-Session Pale Ale.',
        description:
          'Doodlebug is our fusion of low strength and enormously high tropical hop levels – think a mashup of Hop Fiction and How to Disappear Completely, and you’re almost there. Clocking in at 2.8% ABV, Doodlebug is keg-only and is packed with Amarillo, Chinook and Mosaic; letting fly a hoppy buzzbomb at sub-session-strength.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 2.5,
        ibu: 35,
        ebc: 10,
        food_pairing: [
          'Lightly curried spiced chickpea dip',
          'Fried calamari with a mild sauce',
          'Lemon sherbet cookies'
        ]
      },
      {
        id: 193,
        name: 'Blitz Berliner Weisse',
        tagline: 'Berliner Fruit Beer.',
        description:
          'Our sour recipe for all fruit Blitz beers uses a process called kettle souring. In this we steep a bag of malt in the wort to allow the bacteria to grow in it.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 3,
        ibu: 8,
        ebc: 9,
        food_pairing: [
          'Grilled salmon with a light lemon sauce',
          'Lobster bisque',
          'Cheesecake with raspberry (or peach/passion fruit) sauce'
        ]
      },
      {
        id: 271,
        name: 'Small Batch: Cranachan Cream Ale',
        tagline: 'Raspberry Cream Ale.',
        description:
          'A cream ale, brewed with raspberry and milk sugars, balancing sweet and tart summer berry with soft bitterness and a full bodied smooth mouthfeel.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 6.5,
        ibu: 8,
        ebc: 10,
        food_pairing: [
          'Gingerbread Man',
          'Feta And Tomato Salad With Balsamic Dressing',
          'Raspberry Parfait'
        ]
      },
      {
        id: 280,
        name: 'Make Earth Great Again',
        tagline: 'Cloudberry Saison.',
        description:
          'In protest against the potential withdrawal of the USA from the Paris agreement, we brewed a saison (which ferments at high temperatures) with melted ice caps (glacier water) and cloudberries (an Arctic berry).',
        image_url: null,
        abv: 7.5,
        ibu: 35,
        ebc: 9,
        food_pairing: [
          'Oysters With a Chilli And Dill Sauce',
          'Raspberry Souffle'
        ]
      },
      {
        id: 311,
        name: 'Sonic Boom',
        tagline: 'New German Hop IPA.',
        description:
          'Welcome aboard our experimental range of tuned IPAs. Buckle up for an explosive sensory bombardment. Tropical fruit and resinous pine are primed. The first wave of pineapple, melon and mango quickly accelerate into a afterburner of candied citrus fruit and sweet caramel. Sonic Boom - IPA turning at the speed of sound.',
        image_url: null,
        abv: 6.5,
        ibu: 60,
        ebc: 11,
        food_pairing: [
          'Spicy Thai peanut satay',
          'Pizza with chili flakes',
          'Lemon tart'
        ]
      },
      {
        id: 324,
        name: 'Fools Gold Dortmunder Lager',
        tagline: 'Lager.',
        description:
          'A new 5.6% Dortmunder Lager, that featues in Fanzine, our new subscription model.',
        image_url: null,
        abv: 5.6,
        ibu: 32,
        ebc: 11,
        food_pairing: [
          'Seafood salad',
          'Sweet and sour pork',
          'Lemon drizzle cake'
        ]
      }
    ]
  },
  {
    title: 'Gold',
    routeName: 'gold',
    items: [
      {
        id: 2,
        name: 'Trashy Blonde',
        tagline: "You Know You Shouldn't",
        description:
          'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.',
        image_url: 'https://images.punkapi.com/v2/2.png',
        abv: 4.1,
        ibu: 41.5,
        ebc: 15,
        food_pairing: [
          'Fresh crab with lemon',
          'Garlic butter dipping sauce',
          'Goats cheese salad',
          'Creamy lemon bar doused in powdered sugar'
        ]
      },
      {
        id: 6,
        name: 'Electric India',
        tagline: 'Vibrant Hoppy Saison.',
        description:
          'Re-brewed as a spring seasonal, this beer – which appeared originally as an Equity Punk shareholder creation – retains its trademark spicy, fruity edge. A perfect blend of Belgian Saison and US IPA, crushed peppercorns and heather honey are also added to produce a genuinely unique beer.',
        image_url: 'https://images.punkapi.com/v2/6.png',
        abv: 5.2,
        ibu: 38,
        ebc: 15,
        food_pairing: [
          'Mussels with a garlic and herb sauce',
          'Crab melt sandwich',
          'Shortbread cookies'
        ]
      },
      {
        id: 8,
        name: 'Fake Lager',
        tagline: 'Bohemian Pilsner.',
        description:
          'Fake is the new black. Fake is where it is at. Fake Art, fake brands, fake breasts, and fake lager. We want to play our part in the ugly fallout from the Lager Dream. Say hello to Fake Lager – a zesty, floral 21st century faux masterpiece with added BrewDog bitterness.',
        image_url: 'https://images.punkapi.com/v2/8.png',
        abv: 4.7,
        ibu: 40,
        ebc: 12,
        food_pairing: [
          'Fried crab cakes with avocado salsa',
          'Spicy shredded pork roll with hot dipping sauce',
          'Key lime pie'
        ]
      },
      {
        id: 23,
        name: 'Storm',
        tagline: 'Islay Whisky Aged IPA.',
        description:
          'Dark and powerful Islay magic infuses this tropical sensation of an IPA. Using the original Punk IPA as a base, we boosted the ABV to 8% giving it some extra backbone to stand up to the peated smoke imported directly from Islay.',
        image_url: 'https://images.punkapi.com/v2/23.png',
        abv: 8,
        ibu: 60,
        ebc: 12,
        food_pairing: ['Oysters', 'Hickory smoked ham', 'Rocky Road']
      },
      {
        id: 28,
        name: 'HBC 369',
        tagline: 'Single Hop India Pale Ale – 2012.',
        description:
          'HBC 369 brings rich fruity flavours with the tiniest layer of candy coating on top. HBC 369 (the hop) can bring notes of blueberries, pear, and possibly even sweet potato. HBC 369 (the beer) was balanced, with just one hop providing a complex aroma, and a dry bitterness.',
        image_url: 'https://images.punkapi.com/v2/28.png',
        abv: 6.7,
        ibu: 67,
        ebc: 19,
        food_pairing: [
          'Spicy jalapeño & seared steak fajitas',
          'Grilled spicy corn with feta crumbles',
          'Blueberry pie'
        ]
      },
      {
        id: 40,
        name: 'Hello My Name is Vladimir',
        tagline: 'Limonnik Infused Imperial IPA (Not for Gays).',
        description:
          'A Limonnik-infused, triple dry- hopped double IPA. Dry berry tartness and intense citrus hop character meld with a dry bready malt base, boosted by a hint of alcohol warmth. This beer was brewed as a protest against the anti-LGBT legislation in Russia surrounding the Sochi Olympics.',
        image_url: 'https://images.punkapi.com/v2/40.png',
        abv: 8.2,
        ibu: 70,
        ebc: 16,
        food_pairing: [
          'Russian mini pork pies',
          'Beef Stroganoff',
          'Chocolate and fruit cake'
        ]
      },
      {
        id: 44,
        name: 'Dog Wired (w/8 Wired)',
        tagline: 'New Zealand Imperial Pilsner.',
        description:
          'Brewed in collaboration with Soren from New Zealand’s stellar 8-Wired brewery, this is an Imperial Pilsner featuring two of our favourite New Zealand hops: Nelson Sauvin and Motueka. Sitting at a dangerously drinkable 7.1% ABV there’s a touch of Munich malt which gives this beer that little extra caramel biscuit bite to compliment the lip smackingly tropical hops. Expect an all out NZ hoppy riot.',
        image_url: 'https://images.punkapi.com/v2/44.png',
        abv: 7.1,
        ibu: 65,
        ebc: 13,
        food_pairing: [
          'Spiced and blackened cajun chicken',
          'Pork belly vindaloo',
          'Rhubarb pie'
        ]
      },
      {
        id: 51,
        name: 'TM10',
        tagline: 'Liquid Art.',
        description:
          'Brewed for the Tate Modern’s 10th Anniversary. A saison style beer brewed with ginger and orange peel. Very limited batch of 4000 cork and caged bottles with a silk screened label designed by Johanna Basford. Only available at the Tate Modern.',
        image_url: 'https://images.punkapi.com/v2/51.png',
        abv: 5.5,
        ibu: 20,
        ebc: 14,
        food_pairing: [
          'Tom yum soup',
          'Andhra chicken pickle curry',
          'Butterscotch tart'
        ]
      },
      {
        id: 57,
        name: 'Prototype 27',
        tagline: 'Vibrant Smoky Pink IPA.',
        description:
          'Hardcore IPA with raspberries aged in Caol Ila casks. Full-bodied and compelling, the robust malt base provides an initial layer of honey, cinnamon and biscuity malt sweetness. Soon the Scottish berries are in on the act, a dominating tug of war between sweet and tart with an overbearing zest. As the beer slips back across your tongue the hops demand and definitely get your attention. At 100 IBUs the bitterness smashes into the back of your throat as the resinous, spiced orange peel flavours add depth to the berry fruitiness.',
        image_url: 'https://images.punkapi.com/v2/57.png',
        abv: 9.2,
        ibu: 149,
        ebc: 19.5,
        food_pairing: [
          'Strong blue cheese',
          'Cranachan',
          'Chicago style hot links'
        ]
      },
      {
        id: 59,
        name: 'Mandarina Bavaria - IPA Is Dead',
        tagline: 'Single Hop India Pale Ale.',
        description:
          'From the central European plains of Germany, comes something very different. A blast of tangerine and orange, Mandarina Bavaria brings a highly distinctive backbone of flavour. This is down to its parent – Cascade – and a frankly enormous 70% myrcene oil content. If equate Germany solely with earthy, spicy Noble hops, Mandarina Bavaria will make you think again.',
        image_url: 'https://images.punkapi.com/v2/59.png',
        abv: 7.2,
        ibu: 100,
        ebc: 12,
        food_pairing: [
          'Lavender and thyme roast beef',
          'Spicy kung po chicken',
          'Caramel and rose essence cheesecake'
        ]
      },
      {
        id: 61,
        name: 'Magic Stone Dog (w/Magic Rock & Stone Brewing Co.)',
        tagline: 'Session Farmhouse IPA - Stone / Magic Rock Collab.',
        description:
          'A session IPA brewed with a diverse grain bill, hopped with Simcoe and Amarillo and fermented with saison yeast, for an incredible level of depth in a low ABV beer. Spicy, fruity, complex, refreshing and dry.',
        image_url: 'https://images.punkapi.com/v2/61.png',
        abv: 4.6,
        ibu: 30,
        ebc: 15,
        food_pairing: [
          'Halibut with caper brown butter',
          'Creamy gorgonzola and satsuma salad',
          'Spicy Daal with garlic naan bread'
        ]
      },
      {
        id: 63,
        name: 'Sunk Punk',
        tagline: 'Ocean Fermented Lager.',
        description:
          "It's rumoured just a drop can calm the fiercest of storms. A balance of sweet, salt and savoury, citrus, spruce and caramel. Fermented at the bottom of the North Sea, which just so happens to be the perfect temperature for lagers to ferment.",
        image_url: 'https://images.punkapi.com/v2/63.png',
        abv: 7.1,
        ibu: 68,
        ebc: 14,
        food_pairing: [
          'Salt baked cod with lemon and dill butter',
          'Beef, oyster and ale pie',
          'Apple and rosemary tart'
        ]
      },
      {
        id: 64,
        name: 'Sub Hop',
        tagline: 'Hopped-Up Imperial Pilsner.',
        description:
          'Brewed for the opening of our first bar in Italy, BrewDog Firenze. A mega-hoppy Imperial Pilsner, with toasty malt complexity and tropical New World hops.',
        image_url: 'https://images.punkapi.com/v2/64.png',
        abv: 8,
        ibu: 35,
        ebc: 15,
        food_pairing: [
          'Seared lemon and herb salmon',
          'Crab linguine',
          'Almond biscotti'
        ]
      },
      {
        id: 68,
        name: 'Hype',
        tagline: 'New Zealand Pale Ale.',
        description:
          'A perfect pale ale showcase for the tropical profile of New Zealand hops and the intense citrus of US hops.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 4.1,
        ibu: 65,
        ebc: 17,
        food_pairing: [
          'Quince cheese',
          'Shredded chicken and mango salsa taquitos',
          'Poached pear'
        ]
      },
      {
        id: 72,
        name: 'Whisky Sour - B-Sides',
        tagline: 'Pilot Brew - Deconstructed Whisky Sour.',
        description: 'Deconstructed whisky sour, reconstructed as a beer.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 7,
        ibu: 20,
        ebc: 12,
        food_pairing: [
          'Potted fresh & smoked salmon',
          'Spiced nut loaf',
          'Lemon poppyseed donuts'
        ]
      },
      {
        id: 74,
        name: 'Eurotrash',
        tagline: 'Belgian Blonde.',
        description:
          'Trashy Blonde with a Belgian Twist. Clove oil, red apples and a drier mouthfeel set this beer apart from its older sister.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 4.1,
        ibu: 52,
        ebc: 17,
        food_pairing: ['Grilled fish salad', 'Angelfood cake', 'Pad Thai']
      },
      {
        id: 81,
        name: 'India Session Lager - Prototype Challenge',
        tagline: 'Refreshing Hop Fix.',
        description:
          'BrewDog’s level of dry-hop to a beer formed with a baseline of 100% pilsner malt – and at under 4.5% ABV – gives you a style that flirts at the edges of several others. Think aromas of fresh cut grass, nettle, white grape, melon, tangerine - with similar flavours leading to a dry, bitter finish.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 4.4,
        ibu: 35,
        ebc: 12,
        food_pairing: [
          'Tomato and rosemary palmiers',
          'Bratwurst with sauerkraut',
          'Lemon drizzle cake'
        ]
      },
      {
        id: 94,
        name: 'Everday Anarchy',
        tagline: 'White Wine Barrel-Aged Imperial Red Saison.',
        description:
          'This French white wine barrel aged Imperial Saison has a plethora of intertwining flavours. Huge aromas of peach, syrup, tangerine, sherry, toffee and raisin, followed by a dynamic bracing acidity.',
        image_url: 'https://images.punkapi.com/v2/94.png',
        abv: 10.5,
        ibu: 45,
        ebc: 15,
        food_pairing: [
          'Spiced carrot and coriander soup',
          'Spicy chilli king prawns',
          'Orange zest tart'
        ]
      },
      {
        id: 95,
        name: 'Peroxide Punk',
        tagline: 'Zesty Pale Ale.',
        description:
          'A trashy blonde concession for those who felt that our original 6% Punk IPA recipe was too hard hitting. This was also the first time we experimented with dry hopping our beers, giving Peroxide Punk a depth of flavour that belies its modest ABV. Zesty, aromatic and thirst quenching.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 4,
        ibu: 40,
        ebc: 18,
        food_pairing: [
          'Sashimi',
          'Pan roasted poussin with spring veg',
          'Lemon and thyme panna cotta'
        ]
      },
      {
        id: 97,
        name: "Bowman's Beard - B-Sides",
        tagline: 'English Barley Wine.',
        description:
          "Ice-distilled double barley wine brewed by Chris from Stone Brewing Co. (see Sunmaid Stout) and BrewDog's own brewers. As robust, resinous and badass as its eponymic beard.",
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 18.3,
        ibu: 50,
        ebc: 15,
        food_pairing: ['Celery and stilton soup', 'Salted caramel soufflé']
      },
      {
        id: 102,
        name: 'Peach Therapy',
        tagline: 'Tart Belgian Tripple.',
        description:
          '9% abv sour tripel, infused with peach and apricot in collaboration with some of our favourite beer writers Adrian Tierney-Jones, Matt Curtis and Jonny and Brad from The Craft Beer Channel.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 9,
        ibu: 30,
        ebc: 12,
        food_pairing: [
          'Summer salad with pickled veg',
          'Sticky barbecue spare ribs',
          'Blueberry and almond tart'
        ]
      }
    ]
  },
  {
    title: 'Amber',
    routeName: 'amber',
    items: [
      {
        id: 1,
        name: 'Buzz',
        tagline: 'A Real Bitter Experience.',
        description:
          'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 4.5,
        ibu: 60,
        ebc: 20,
        food_pairing: [
          'Spicy chicken tikka masala',
          'Grilled chicken quesadilla',
          'Caramel toffee cake'
        ]
      },
      {
        id: 10,
        name: 'Bramling X',
        tagline: 'Single Hop IPA Series - 2011.',
        description:
          'Good old Bramling Cross is elegant, refined, assured, (boring) and understated. Understated that is unless you hop the living daylights out of a beer with it. This is Bramling Cross re-invented and re-imagined, and shows just what can be done with English hops if you use enough of them. Poor Bramling Cross normally gets lost in a woeful stream of conformist brown ales made by sleepy cask ale brewers. But not anymore. This beer shows that British hops do have some soul, and is a fruity riot of blackberries, pears, and plums. Reminds me of the bramble, apple and ginger jam my grandmother used to make.',
        image_url: 'https://images.punkapi.com/v2/10.png',
        abv: 7.5,
        ibu: 75,
        ebc: 22,
        food_pairing: [
          'Warm blackberry pie',
          'Vinegar doused fish and chips',
          'Aromatic korma curry with lemon and garlic naan'
        ]
      },
      {
        id: 18,
        name: 'Russian Doll – India Pale Ale',
        tagline: 'Nesting Hop Bomb.',
        description:
          'The levels of hops vary throughout the range. We love hops, so all four beers are big, bitter badasses, but by tweaking the amount of each hop used later in the boil and during dry- hopping, we can balance the malty backbone with some unexpected flavours. Simcoe is used in the whirlpool for all four beers, and yet still lends different characters to each',
        image_url: 'https://images.punkapi.com/v2/18.png',
        abv: 6,
        ibu: 70,
        ebc: 25,
        food_pairing: [
          'Spicy chicken skewers',
          'Fish tacos with hot sauce',
          'Lemon pound cake with a ice sugar glaze'
        ]
      },
      {
        id: 20,
        name: 'Rabiator',
        tagline: 'Imperial Wheat Beer',
        description:
          'Imperial Wheat beer / Weizenbock brewed by a homesick German in leather trousers. Think banana bread, bubble gum and David Hasselhoff.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 10.27,
        ibu: 26,
        ebc: 24,
        food_pairing: [
          'Grilled portabello mushroom burger',
          'Chicken sausages with creamy mash',
          'Caramel and banana meringue pie'
        ]
      },
      {
        id: 46,
        name: 'Anarchist Alchemist',
        tagline: 'Triple Hopped Triple Ipa.',
        description:
          'About as far as you can push an IPA; Anarchist Alchemist packs in three times the malt and three of our favourite hops. Nelson Sauvin, Amarillo and Centennial bring a range of flavours, touching on tropical fruit, white grape, tangerine, grapefruit, pine, spiced orange... the list goes on!',
        image_url: 'https://images.punkapi.com/v2/46.png',
        abv: 16.5,
        ibu: 20.5,
        ebc: 20,
        food_pairing: [
          'Blue cheese & onion tart',
          'Goan goat curry',
          'Sugar-poached kumquat rice pudding'
        ]
      },
      {
        id: 49,
        name: 'AB:14',
        tagline: 'Oak-Aged Imperial Weizenbock.',
        description:
          'Think banoffee pie; loads of creamy sweet banana, and sticky warm toffee. This beer is super complex, and one for the sweet-toothed!',
        image_url: 'https://images.punkapi.com/v2/49.png',
        abv: 10,
        ibu: 30,
        ebc: 20,
        food_pairing: [
          'Sweet pork Chinese dumplings',
          'Caramelised onion venison burger',
          'Banoffee pie'
        ]
      },
      {
        id: 62,
        name: 'AB:08',
        tagline: 'Deconstructed Blonde Imperial Stout.',
        description:
          "Flavours and aromas you'd expect from a Stout, but brewed without dark malts. The full mouthfeel comes courtesy of wheat and oats, while smoked malt and the twist additions add the complex flavours normally provided by highly kilned malts.",
        image_url: 'https://images.punkapi.com/v2/62.png',
        abv: 10.43,
        ibu: 65,
        ebc: 23,
        food_pairing: [
          'Caramelised scallops with burnt apple puree',
          'Blackened Cajun chicken',
          'Blondies with chocolate fudge sauce'
        ]
      },
      {
        id: 75,
        name: 'Never Mind The Anabolics',
        tagline: 'Performance-Enhancing India Pale Ale.',
        description:
          'Never Mind the Anabolics, a 6.5% India Pale Ale brewed with copious amounts of performance-enhancing natural ingredients. Brewed to commemorate the 2012 Olympics and its merry marketing bandwagon.',
        image_url: 'https://images.punkapi.com/v2/75.png',
        abv: 6.5,
        ibu: 35,
        ebc: 23,
        food_pairing: [
          'Grilled chicken salad with bacon and avocado',
          'Red pepper houmous and flat bread',
          'Matcha green tea cake'
        ]
      },
      {
        id: 82,
        name: 'Hopped-Up Brown Ale - Prototype Challenge',
        tagline: 'Malt Hop Balance.',
        description:
          'Brown ales are perfect foils for resinous C-Hops, as the piney elements of the latter contrast brilliantly with the sweeter, nutty elements of the malt bill. The best of both worlds.',
        image_url: 'https://images.punkapi.com/v2/82.png',
        abv: 6.3,
        ibu: 85,
        ebc: 24,
        food_pairing: [
          'Butternut squash and sage soup',
          'Roast beef and horseradish sandwich',
          'Fudge'
        ]
      },
      {
        id: 87,
        name: 'Alpha Pop',
        tagline: 'Hoppy Rye Pale Ale.',
        description:
          'A hoppy Rye Ale loaded with an avalanche of citrus and resinous flavours. Columbus, our high-alpha friend, lends a huge pithy citrus blast, with Ahtanum providing a punchy tropical fruit back-up. Brewing with rye adds a spiciness to the speciality malt caramel backbone, giving a warm ginger snap flavour, before slowly the hops, barley and rye combine and build to an orangey, biscuity, almost chocolatey crescendo.',
        image_url: 'https://images.punkapi.com/v2/87.png',
        abv: 4.5,
        ibu: 30,
        ebc: 25,
        food_pairing: [
          'Spicy lamb tikka masala',
          'Spicy beef and Mexican black bean burger',
          'Poached cinnamon apple muffins'
        ]
      },
      {
        id: 91,
        name: 'Dead Pony Club',
        tagline: 'West Coast Kicks. Citrusy. Zesty. Bright.',
        description:
          'Our California style West Coast IPA has light toffee and caramel notes layered on biscuit malt, supporting a huge, fresh citrus aroma, with lemongrass, lime zest, grapefruit peel, alongside some tropical notes, courtesy of some heavy-hitting US hops.',
        image_url: 'https://images.punkapi.com/v2/91.png',
        abv: 3.8,
        ibu: 35,
        ebc: 25,
        food_pairing: ['Baja style fish tacos', 'Jerk chicken', 'Apple crumble']
      },
      {
        id: 100,
        name: 'Elvis Juice V2.0 - Prototype Challenge',
        tagline: 'Citrus Infused IPA.',
        description:
          'Punchy resinous hoppy aromas blast from the glass; light floral and citrus notes riff against huge piney character. Showcasing Citra, Simcoe and Amarillo at their absolute best. A huge dose of grapefruit peel brings swirls of fresh pithy zest, accentuating the dry hops and building on the dry, biscuit malt base.',
        image_url: 'https://images.punkapi.com/v2/100.png',
        abv: 6.5,
        ibu: 60,
        ebc: 25,
        food_pairing: [
          'Mexican ceviche',
          'Coriander and lime green thai curry',
          'Grapefruit souffle'
        ]
      },
      {
        id: 103,
        name: 'Clown King',
        tagline: 'US Style Barley Wine.',
        description:
          'A heavy hitting combination of rich malt flavours and relentless, bitter hops. Aromas of caramel and toasted marshmallow, with raisin and dried fruit, alongside a spicy undercurrent of resin. With toasty malt and sweet dark fruit flavours, and a smooth, chewy mouthfeel, you’ll be lulled into a false sense of security, before the intense pine-sap resin draws out a huge bitter finish.',
        image_url: 'https://images.punkapi.com/v2/103.png',
        abv: 12,
        ibu: 85,
        ebc: 24,
        food_pairing: [
          'Aged Stilton',
          'Flaky pastry beef pie and sweet potato mash',
          'Chocolate pecan praline cake'
        ]
      },
      {
        id: 111,
        name: 'Vagabond Pilsner',
        tagline: 'Hoppy Pilsner.',
        description:
          'Take the thirst-quenching crispness of a German Pilsner and combine it with lemon and honey to produce a rewarding modern twist on a beer classic.',
        image_url: 'https://images.punkapi.com/v2/111.png',
        abv: 4.5,
        ibu: 55,
        ebc: 25,
        food_pairing: [
          'Jamaican jerk chicken',
          'Hot dog with grilled onions and spicy ketchup',
          'Shortbread and raspberry jam thumbprint cookie'
        ]
      },
      {
        id: 117,
        name: 'Hop Rocker',
        tagline: 'Hoppy Aggressive Lager',
        description:
          'The first of our foray into lager beer, Hop Rocker is a high impact, hoppy behemoth made with 100% malt. Since 2007 we have been obsessive about quality, using only the best ingredients to ensure the flavour and craftsmanship of the beer in your glass. Hop Rocker is testament to that. The malt base gives this beer a sweet, balanced complexity while the combination of New Zealand and German hops merges new world tropical juiciness with old world peppery spice.',
        image_url: 'https://images.punkapi.com/v2/117.png',
        abv: 5.5,
        ibu: 40,
        ebc: 25,
        food_pairing: [
          'Cajun spiced chicken wings',
          'Mild cheddar',
          'Lemon tart'
        ]
      },
      {
        id: 136,
        name: '#Mashtag 2014',
        tagline: 'Democratic Imperial Red Ale.',
        description:
          'A slightly psychotic, orange-that- thinks-it’s-a-grapefruit character builds upon and intensifies the hop bitterness, squaring up against the rich sweet malt base. The result is a huge Red Ale with a drinkable quality you’d expect in a beer half this strength.',
        image_url: 'https://images.punkapi.com/v2/136.png',
        abv: 9,
        ibu: 50,
        ebc: 20,
        food_pairing: [
          'Beetroot and blood orange salad',
          'Coriander and mango grilled steak tacos',
          'Orange sherbet ice cream'
        ]
      },
      {
        id: 143,
        name: 'Lizard Bride - Prototype Challenge',
        tagline: 'Fruit Infused Sour IPA.',
        description:
          'Wonderfully tart, bitter, piney and filled with the fruity elements from raspberries, blueberries and sour cherries. Oh, and it’s purple.',
        image_url: 'https://images.punkapi.com/v2/143.png',
        abv: 5.7,
        ibu: 35,
        ebc: 25,
        food_pairing: [
          'Roasted pumpkin and mozzarella',
          'Black forrest gateaux'
        ]
      },
      {
        id: 158,
        name: 'Hello My Name Is Zé (w/ 2Cabeças)',
        tagline: 'Passionfruit IPA - 2Cabecas Collab.',
        description:
          'Punk multiplied by Jack Hammer, divided by passionfruit with some Brazilian spirit factored in too. A well-rounded IPA, with bags of tropical flavour boosted by the addition of passionfruit, which unsurprisingly dominates the aroma of this summery IPA.',
        image_url: 'https://images.punkapi.com/v2/158.png',
        abv: 6.4,
        ibu: 50,
        ebc: 20,
        food_pairing: [
          'Grilled lamb chops with a fruit reduction',
          'Ginger and chilli beef stir fry',
          'Passionfruit soufflé'
        ]
      },
      {
        id: 166,
        name: 'Vagabond Pale ALe - Prototype Challenge',
        tagline: 'Gluten Free Beer. Toffee. Piney. Fruitcake.',
        description:
          'A foundation of caramel malt is buttressed by a raucously resinous bitterness, as the rioting backdrop of citrus and tropical fruit flow in waves from those twin titans of the US – Centennial and Amarillo. And it also happens to be gluten free.',
        image_url: 'https://images.punkapi.com/v2/166.png',
        abv: 4.5,
        ibu: 55,
        ebc: 20,
        food_pairing: [
          'Chinese chicken salad',
          'Lemon grilled halibut',
          'Apple crumble'
        ]
      },
      {
        id: 195,
        name: 'Hello My Name Is Holy Moose',
        tagline: 'Nordic Berry IPA.',
        description:
          'Cloudberry, lingonberry, blueberry and sea buckthorn meld with citrusy hops in an intensely sweet, fruity and floral aroma, with toasty malt notes and tropical fruit bursts. This bitter, resinous IPA follows up with a lemony punch in the mouth - cherry and blueberry sourness takes this pithy pale ale in a new direction before a long, dry finish.',
        image_url: 'https://images.punkapi.com/v2/195.png',
        abv: 5.5,
        ibu: 35,
        ebc: 25,
        food_pairing: ['Warms goats cheese salad', 'Trifle or chocolate cake']
      },
      {
        id: 219,
        name: 'Ship Wreck',
        tagline: 'Redacted Collaboration Ale.',
        description:
          'This mezcal-inspired brew is the shipwrecked remains of a collaboration brewed with former craft brewers Ballast Point. Brewed to encapsulate the flavours of mezcal, this beer smoulders with peaty and light woody notes, as well as intense fruity character.',
        image_url: 'https://images.punkapi.com/v2/219.png',
        abv: 13.8,
        ibu: 60,
        ebc: 25,
        food_pairing: [
          'Shrimp aguachile',
          'Mezcal marinated sirloin steak',
          'Basil panna cotta with strawberries'
        ]
      }
    ]
  },
  {
    title: 'Copper',
    routeName: 'copper',
    items: [
      {
        id: 4,
        name: 'Pilsen Lager',
        tagline: 'Unleash the Yeast Series.',
        description:
          'Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Pilsner yeast ferments with no fruity esters or spicy phenols, although it can add a hint of butterscotch.',
        image_url: 'https://images.punkapi.com/v2/4.png',
        abv: 6.3,
        ibu: 55,
        ebc: 30,
        food_pairing: [
          'Spicy crab cakes',
          'Spicy cucumber and carrot Thai salad',
          'Sweet filled dumplings'
        ]
      },
      {
        id: 15,
        name: 'Mixtape 8',
        tagline:
          'An Epic Fusion Of Old Belgian, American New Wave, And Scotch Whisky.',
        description:
          'This recipe is for the Belgian Tripel base. A blend of two huge oak aged beers – half a hopped up Belgian Tripel, and half a Triple India Pale Ale. Both aged in single grain whisky barrels for two years and blended, each beer brings its own character to the mix. The Belgian Tripel comes loaded with complex spicy, fruity esters, and punchy citrus hop character.',
        image_url: 'https://images.punkapi.com/v2/15.png',
        abv: 14.5,
        ibu: 50,
        ebc: 40,
        food_pairing: [
          'Coriander & chilli crab cakes',
          'Goats cheese salad with walnuts, radish and blood orange',
          'Pistachio cake'
        ]
      },
      {
        id: 21,
        name: 'Vice Bier',
        tagline: 'Hoppy Wheat Bier.',
        description:
          'Our take on the classic German Kristallweizen. A clear German wheat beer, layers of bubblegum and vanilla perfectly balanced with the American and New Zealand hops.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 4.3,
        ibu: 25,
        ebc: 30,
        food_pairing: [
          'Citrus salad with balsamic dressing',
          'Lobster',
          'Ginger and orange cookies'
        ]
      },
      {
        id: 22,
        name: 'Devine Rebel (w/ Mikkeller)',
        tagline: 'Oak-aged Barley Wine.',
        description:
          "Two of Europe's most experimental, boundary-pushing brewers, BrewDog and Mikkeller, combined forces to produce a rebellious beer that combined their respective talents and brewing skills. The 12.5% Barley Wine fermented well, and the champagne yeast drew it ever closer to 12.5%. The beer was brewed with a single hop variety and was going to be partially aged in oak casks.",
        image_url: 'https://images.punkapi.com/v2/22.png',
        abv: 12.5,
        ibu: 100,
        ebc: 36,
        food_pairing: [
          'Stilton on gingerbread biscuits',
          'Pot roasted artichokes',
          'Lamb chops with caramelised figs'
        ]
      },
      {
        id: 30,
        name: 'Dana - IPA Is Dead',
        tagline: 'Single Hop India Pale Ale.',
        description:
          'Hailing from Slovenia, Dana was originally cross bred from the German Hallertau Magnum and native Slovenian varieties. Like any good faux noble hop should, it infuses a rustic, musty spiciness into a toasty beast of a malt base.',
        image_url: 'https://images.punkapi.com/v2/30.png',
        abv: 6.7,
        ibu: 70,
        ebc: 30,
        food_pairing: [
          'Spicy Asian-style noodles',
          'Smokey chipotle beef brisket tostada',
          'Sweet potato pie'
        ]
      },
      {
        id: 31,
        name: 'Nanny State',
        tagline: 'Alcohol Free Hoppy Ale.',
        description:
          'Brewing a full flavoured craft beer at 0.5% is no easy task. Packed with loads of Centennial, Amarillo, Columbus, Cascade and Simcoe hops, dry hopped to the brink and back and sitting at 55 IBUs, Nanny State is a force to be reckoned with. With a backbone of 8 different specialty malts, Nanny State will tantalise your taste buds and leave you yearning for more.',
        image_url: 'https://images.punkapi.com/v2/31.png',
        abv: 0.5,
        ibu: 55,
        ebc: 30,
        food_pairing: ['Earthy mushroom pasta']
      },
      {
        id: 33,
        name: 'Sorachi Ace',
        tagline: 'Single Hop IPA Series - 2011.',
        description:
          'A hop that tastes of bubble gum? Seriously? No, we did not believe it either. But it does! This is one unique, son of a bitch of a hop. Lemony, deep, musty with a smoothness that belies its power. This hop is lemony like a lemon who was angry earlier but is now tired because of all the rage. This hop of Japanese origin is best enjoyed trying to make sushi from your gold fish, or trying to persuade your girlfriend (or boyfriend maybe) to dress up as a Geisha for Valentine’s Day.',
        image_url: 'https://images.punkapi.com/v2/33.png',
        abv: 7.5,
        ibu: 75,
        ebc: 30,
        food_pairing: [
          'Sashimi',
          'Grilled salmon with a herb and citrus infused butter',
          'Basil, lemon and pine nut angel hair pasta with grilled chicken'
        ]
      },
      {
        id: 34,
        name: 'Bourbon Baby',
        tagline: 'Barrel-Aged Scotch Ale.',
        description:
          'Santa Paws Scotch ale aged in bourbon barrels - light, dry and toasty, with vanilla, hints of chocolate and ginger biscuit, and a faint spicy hoppiness.',
        image_url: 'https://images.punkapi.com/v2/34.png',
        abv: 5.8,
        ibu: 35,
        ebc: 44,
        food_pairing: [
          'Blackened cajun beef',
          'Pulled pork',
          "Millionaire's shortbread"
        ]
      },
      {
        id: 37,
        name: 'Zephyr',
        tagline: 'There’s A Storm Brewing.',
        description:
          'A 9.2% Double IPA aged for 21 months in a 1965 Invergordon cask with 30 kg of fresh highland strawberries. This beer is a riot of whisky, caramel and strawberry, all tempered by a toe curling bitterness enducing rapture in all who taste it. Who needs champagne?',
        image_url: 'https://images.punkapi.com/v2/37.png',
        abv: 12.5,
        ibu: 125,
        ebc: 40,
        food_pairing: [
          'Poached eggs and smoked salmon',
          'Salt and pepper squid',
          'Key Lime Pie'
        ]
      },
      {
        id: 38,
        name: 'Belgian Trappist',
        tagline: 'Unleash the Yeast Series.',
        description:
          'Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Abbey style yeasts add distinctive spicy and fruity notes, and dry out the finished beer.',
        image_url: 'https://images.punkapi.com/v2/38.png',
        abv: 6.3,
        ibu: 55,
        ebc: 30,
        food_pairing: [
          'Roast beef with spicy jus',
          'Ginger bread cookies',
          'Orange tart'
        ]
      },
      {
        id: 39,
        name: 'Kohatu - IPA Is Dead',
        tagline: 'Single Hop India Pale Ale.',
        description:
          'As you’d expect from a New Zealand hop variety, Kohatu contributes bags of tropical fruit, but with loads of lime notes, & pineapple hits. Seriously fruity, with sweet, juicy melon and stonefruit notes.',
        image_url: 'https://images.punkapi.com/v2/39.png',
        abv: 7.2,
        ibu: 70,
        ebc: 30,
        food_pairing: [
          'Tuna sushi roll with spicy mayonnaise sauce',
          'Thai green curry',
          'Pineapple upside down cake'
        ]
      },
      {
        id: 42,
        name: 'Hardcore IPA',
        tagline: 'Explicit Imperial Ale. Citrusy. Resinous. Intense.',
        description:
          'Pounding a triple payload of the biggest North American hops humanity has devised, braced by a backbone of caramel malt, this beer is deep, astringent and resinous, pushing to the extremes of lupulin thresholds. There’s nothing inscrutable going on; no mystery in the backstory. It doesn’t seek to be understood. A beer incapable of empathy; only hop overload.',
        image_url: 'https://images.punkapi.com/v2/42.png',
        abv: 9.2,
        ibu: 125,
        ebc: 40,
        food_pairing: [
          'Spicy wings with blue cheese dip',
          'Pan seared scallops with a chilli sauce',
          'Creamy chocolate and caramel cheesecake'
        ]
      },
      {
        id: 48,
        name: 'Goldings - IPA Is Dead',
        tagline: 'Single Hop India Pale Ale.',
        description:
          'This is East Kent Goldings re- invented and re-imagined and shows just what can be done with English hops if you use enough of them. In this amped up Goldings reincarnation expect to be slammed with floral lavender, a fruity riot of blackberries and spiced pears, bubblegum, plums and the illusion of thyme.',
        image_url: 'https://images.punkapi.com/v2/48.png',
        abv: 6.7,
        ibu: 70,
        ebc: 30,
        food_pairing: [
          'Rosemary and thyme marinated venison',
          'Fish and chips',
          'Lavender chocolate chip cookies'
        ]
      },
      {
        id: 53,
        name: 'Baby Dogma',
        tagline: 'Session Scotch Ale.',
        description:
          'A baby Scotch ale with dry and toasty malt flavours and hints of smoke. Toffee, biscuit and fudge abound with a spicy bitterness from the pan-global hops.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 4.5,
        ibu: 35,
        ebc: 40,
        food_pairing: [
          'French onion soup',
          'Braised pheasant',
          'Caramel sauce and hot fudge'
        ]
      },
      {
        id: 55,
        name: 'Amarillo - IPA Is Dead',
        tagline: 'Single Hop India Pale Ale.',
        description:
          'Citrus fruit. Lots of citrus fruit. Think blood orange, orange zest and grapefruit, tangerine and lemon; the fruit is balanced by floral notes in the most classic of new wave IPA hops. Amarillo adds a zesty, pithy character that sits beautifully alongside hints of toffee and honeycomb.',
        image_url: 'https://images.punkapi.com/v2/55.png',
        abv: 7.2,
        ibu: 70,
        ebc: 30,
        food_pairing: [
          'Bratwurst sausage with spicy mustard',
          'Fried American bacon with chilli flakes added to the top',
          'Dark chocolate chip cookies'
        ]
      },
      {
        id: 69,
        name: 'AB:16',
        tagline: 'Coffee-Infused Belgian Quad.',
        description:
          'On the nose, clove and nutmeg, cafe au lait, subtle dark fruit notes, and hints of candied lemon peel. On the palate, smooth & fruity espresso, milk chocolate, and warm brandy-soaked currants are in the middle of a high-class dance-off against the spicy and peppery Belgian character. The overall impression evokes malt loaf or ginger cake.',
        image_url: 'https://images.punkapi.com/v2/69.png',
        abv: 10.6,
        ibu: 55,
        ebc: 30,
        food_pairing: [
          'Roasted duck',
          'Gorgonzola and rye nut bread with smoked honey ham',
          'Raspberry coffee cheesecake'
        ]
      },
      {
        id: 76,
        name: '#Mashtag 2013',
        tagline: 'Democratic American Brown Ale.',
        description:
          'A rich, nutty Brown Ale with a deep, rich malt profile, hopped with a range of citrusy and spicy US varieties. Mellow yet endlessly complex, with enough chocolate and fruit character to balance the bitterness, and a soft oaky roundness.',
        image_url: 'https://images.punkapi.com/v2/76.png',
        abv: 7.5,
        ibu: 50,
        ebc: 40,
        food_pairing: [
          'Roast beef',
          'Roasted butternut squash',
          'Hazelnut brittle'
        ]
      },
      {
        id: 77,
        name: 'Hobo Pop',
        tagline: '2013 Prototype Rye Pale Ale.',
        description:
          'Brewed with mountains of Wheat, Rye, Cara and Crystal malts, fermented with an American ale yeast and bittered with Amarillo & Centennial, this 4.2% beer is what happens if something classy like a European wheat beer goes to live in Vegas. Zingy citrus hops and a punchy bitterness bolster this low ABV pale.',
        image_url: 'https://images.punkapi.com/v2/77.png',
        abv: 4.2,
        ibu: 50,
        ebc: 30,
        food_pairing: [
          'Mozzarella and tomato baked chicken',
          'Spiced shrimp salad',
          'Strawberry cheescake'
        ]
      },
      {
        id: 83,
        name: 'Comet',
        tagline: 'Single Hop India Pale Ale',
        description:
          'A potently bitter hop variety originally grown in the US around 40 years ago, Comet has been newly resurrected - this German version has bold resinous grapefruit flavours, which add a huge fresh hop aroma to this IPA.',
        image_url: 'https://images.punkapi.com/v2/83.png',
        abv: 7.2,
        ibu: 70,
        ebc: 30,
        food_pairing: [
          'Margherita pizza with chili flakes',
          'Spicy Thai peanut satay',
          'Panna cotta with a grapefruit tuile'
        ]
      },
      {
        id: 85,
        name: 'Santa Paws',
        tagline: 'Christmas Scoth Ale.',
        description:
          'A 4.5% decadent scotch ale brewed with Scottish heather honey. A robust malty beer packed with flavour, at a strength you can drink all (Christmas) day long. Santa Paws is our antidote to the chaos of the festive season. All the flavours of Christmas pudding in liquid form.',
        image_url: 'https://images.punkapi.com/v2/85.png',
        abv: 4.5,
        ibu: 35,
        ebc: 44,
        food_pairing: [
          'French onion soup',
          'Braised pheasant',
          'Caramel sauce and hot fudge'
        ]
      }
    ]
  },
  {
    title: 'Dark Copper to Brown',
    routeName: 'copper-brown',
    items: [
      {
        id: 14,
        name: 'Alpha Dog',
        tagline: 'Existential Red Ale.',
        description:
          'A fusion of caramel malt flavours and punchy New Zealand hops. A session beer you can get your teeth into.',
        image_url: 'https://images.punkapi.com/v2/14.png',
        abv: 4.5,
        ibu: 42,
        ebc: 62,
        food_pairing: [
          'Pastrami',
          'Swiss and horseradish sandwich',
          'Sharp cheddar cheese and onion/ raisin chutney',
          'Peanut brittle'
        ]
      },
      {
        id: 17,
        name: 'AB:06',
        tagline: 'Imperial Black IPA.',
        description:
          'Our sixth Abstrakt, this imperial black IPA combined dark malts with a monumental triple dry-hop, using an all-star team of some of our favourite American hops. Roasty and resinous.',
        image_url: 'https://images.punkapi.com/v2/17.png',
        abv: 11.2,
        ibu: 150,
        ebc: 70,
        food_pairing: [
          'Coffee dusted venison loin',
          'Memphis-style beef short ribs',
          'Chocolate orange brownies'
        ]
      },
      {
        id: 26,
        name: 'Skull Candy',
        tagline: 'Pacific Hopped Amber Bitter.',
        description:
          'The first beer that we brewed on our newly commissioned 5000 litre brewhouse in Fraserburgh 2009. A beer with the malt and body of an English bitter, but the heart and soul of vibrant citrus US hops.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 3.5,
        ibu: 33,
        ebc: 50,
        food_pairing: [
          'Haggis bon bons',
          'Rosemary and lemon roast chicken',
          'Oatmeal and cranberry cookies'
        ]
      },
      {
        id: 36,
        name: 'Shipwrecker Circus (w/ Oskar Blues)',
        tagline: 'American Barley Wine - Oskar Blues Collab.',
        description:
          'In collaboration with the awesome Oskar Blues from Colorado, we created this big, twisted 10.5% American style barley wine. Big boozy aromas and a sweet viscosity, packed in with some heavy-hitting C-hops, for an intense bitterness to balance this full-bodied malt monster.',
        image_url: 'https://images.punkapi.com/v2/36.png',
        abv: 10.5,
        ibu: 85,
        ebc: 64,
        food_pairing: ['Stilton', 'Pan seared steak', 'Dark Chocolate Fondant']
      },
      {
        id: 45,
        name: 'The Physics',
        tagline: 'Laid Back Amber Beer.',
        description:
          "A hoppy Amber Ale that won World's Best Amber Beer in the World Beer Awards 2007. Malt and hops are in perfect harmony in this incredibly balanced beer. Biscuity, bitter and packing a surprisingly hoppy punch, this beer ultimately morphed into 5AM Saint.",
        image_url: 'https://images.punkapi.com/v2/45.png',
        abv: 5,
        ibu: 47,
        ebc: 65,
        food_pairing: [
          'Barbecue pulled pork on sourdough bread',
          'Roast turkey with a honey and herb marinade and roasted vegetables',
          'Banana walnut loaf with chocolate chips'
        ]
      },
      {
        id: 54,
        name: 'Albino Squid Assasin',
        tagline: 'Red Rye IPA',
        description:
          'This tentacled terminator packs a punch - ten punches to be precise. Each hop addition adds to the intense layers of depth in this red rye IPA. Toasty caramel & cinder toffee from crystal malts, cacao richness from intensely roasted malt and the spiciness of rye. Zesty pithiness from Citra and the robust resin of Chinook. This small batch exclusive brew is up-front intensity matched with twisted complexity. The can features awesome custom art from Joe Wilson.',
        image_url: 'https://images.punkapi.com/v2/54.png',
        abv: 7.4,
        ibu: 65,
        ebc: 60,
        food_pairing: [
          'Rocket and mozzarella salad with a cracked pepper dressing',
          'Fried halibut with sweet potato fritters',
          'Grapefruit and blood orange tart'
        ]
      },
      {
        id: 60,
        name: 'Dogma',
        tagline: 'Revamped Wee Heavy. Luscious. Malty. Fruity.',
        description:
          'Brewed with over ten different types of malt, and blended together with Scottish heather honey, it is a pantheon to the gods of intricacy and nuance; a beer that celebratesa confluence of ideas. Complex, indulgent and encapsulating, Dogma gives more than a cursory nod to history, to make you ponder the very nature of beer itself.',
        image_url: 'https://images.punkapi.com/v2/60.png',
        abv: 7.5,
        ibu: 30,
        ebc: 46,
        food_pairing: [
          'Mature cheddar with red onion chutney',
          'Honey glazed ham',
          'Chocolate caramel drizzled sponge cake'
        ]
      },
      {
        id: 71,
        name: 'Pale - Russian Doll',
        tagline: 'Nesting Hop Bomb.',
        description:
          'The levels of hops vary throughout the range. We love hops, so all four beers are big, bitter badasses, but by tweaking the amount of each hop used later in the boil and during dry- hopping, we can balance the malty backbone with some unexpected flavours. Simcoe is used in the whirlpool for all four beers, and yet still lends different characters to each.',
        image_url: 'https://images.punkapi.com/v2/71.png',
        abv: 4,
        ibu: 35,
        ebc: 45,
        food_pairing: [
          'Roast chicken with vegetables and wild rice',
          'Fresh pico de gallo with corn tortilla',
          'Carrot cake'
        ]
      },
      {
        id: 79,
        name: 'Hops Kill Nazis',
        tagline: 'Imperial Red Ale.',
        description:
          "5AM Saint's big brother. Dry- hopping with Chinook gave Hops Kill Nazis a full-on, instantly recognisable US hop character - huge resinous aromas (think giant redwood) with a bitter grapefruit edge. The caramel malts bring flavours of toffee and burnt sugar, which gave Hops Kill Nazis a big, complex malt base supporting the intense hopping.",
        image_url: 'https://images.punkapi.com/v2/79.png',
        abv: 7.6,
        ibu: 70,
        ebc: 59,
        food_pairing: [
          'Candied almond and blue cheese rocket salad',
          'Chicken Tikka Madras',
          'Pecan pie'
        ]
      },
      {
        id: 110,
        name: 'Truffle and Chocolate Stout - B-Sides',
        tagline: 'Gastronomic Session Stout.',
        description:
          "Pilot Brew - Truffle & Chocolate Stout. Deep, earthy roast notes make this a gastronome's dream.",
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 5.6,
        ibu: 30,
        ebc: 54,
        food_pairing: [
          'Mushroom pithivier',
          'Roast pheasant with savoy cabbage',
          'Dark chocolate ganache macaroons'
        ]
      },
      {
        id: 113,
        name: 'Hello My Name Is Ingrid',
        tagline: 'Sophisticated Bergmanesque Beer.',
        description:
          'A Double IPA with cloudberries added to the conditioning tank. One thing is certain – this Swedish inspired Double IPA is not as innocent as she first appears. A seductive body of rich malts and a buxom amount of Citra, Nelson Sauvin and Bramling Cross hops have been added to fresh Scandinavian cloudberries to deliver this beer’s tart finish.',
        image_url: 'https://images.punkapi.com/v2/113.png',
        abv: 8.2,
        ibu: 42,
        ebc: 70,
        food_pairing: [
          'Crayfish with a chilli, coriander infused butter dip',
          'Smörgås with cream topping',
          'Cardamom cake with powder sugar and cloudberry jam'
        ]
      },
      {
        id: 123,
        name: 'Candy Kaiser',
        tagline: 'NorDdeutsches Retro Altbier.',
        description:
          'In this northern German style retro altbier, we’ve dialled down the dry-hops to zero, but cranked up the malt to create massive aromas. Toasty, toffee and floral notes duke it out for supremacy in the headspace of your glass. When this all hits your palate, the steely bitterness combines with the rich dry malt and the subtle alcohol warmth in a full throttle attack on your taste buds.',
        image_url: 'https://images.punkapi.com/v2/123.png',
        abv: 5.2,
        ibu: 45,
        ebc: 45,
        food_pairing: [
          'Aged gouda',
          'German bratwurst sausage',
          'Poached pear fritters'
        ]
      },
      {
        id: 132,
        name: '5am Saint',
        tagline: 'Bittersweet Chaos. Malty. Fruity. Bite.',
        description:
          'Out of order and stability comes the rush of the pack. Berry and caramel riding alongside marmalade and chocolate. Spice and toast jostle with lychee and biscuit. The needle flicks to all points of the compass. It drives you towards the horizon, towards the vanishing point. And it keeps going...',
        image_url: 'https://images.punkapi.com/v2/132.png',
        abv: 5,
        ibu: 30,
        ebc: 60,
        food_pairing: [
          'Cheddar cheese melt on crisp rye toast',
          'Moroccan chicken tangine',
          'Cheesecake topped with kiwi'
        ]
      },
      {
        id: 148,
        name: 'AB:02',
        tagline: 'Triple Dry Hopped Imperial Red Ale.',
        description:
          'The second installation in the Abstrakt Concept beer line up. All the benefits of a malty biscuited red ale, layered with tons of hops. We recommend ageing this beer for 6 months. Try one now, and one for later.',
        image_url: 'https://images.punkapi.com/v2/148.png',
        abv: 18,
        ibu: 70,
        ebc: 57,
        food_pairing: [
          'Strong gorgonzola endive salad',
          'Sirloin steak with fresh salad',
          'Cinnamon poached pears'
        ]
      },
      {
        id: 157,
        name: 'Edge',
        tagline: 'Dark Full-Bodied Cask Ale',
        description:
          "Low ABV, high flavour, this beer was brewed to show that a beer can have all the flavour without the drunken affects. Also this beer is one of BrewDog's original brews that made a rare appearance in cask. Spicy, malty biscuit and super drinkable.",
        image_url: 'https://images.punkapi.com/v2/cask.png',
        abv: 2.7,
        ibu: 36,
        ebc: 57,
        food_pairing: [
          'Lamb and root vegetable stew',
          'Warm goats cheese salad',
          'Raisin rum cake'
        ]
      },
      {
        id: 165,
        name: 'Barley Wine - Russian Doll',
        tagline: 'Double India Pale Ale.',
        description:
          'Russian Doll was an experimental set of brews showcasing the effects of varying the amount and ratio of malts in the grist. The barley wine had rich, chewy dark fruit aromas balanced with a spike of zesty hops. Toffee, apricot jam and grapefruit pith, crammed into the head of our little Russian Doll family.',
        image_url: 'https://images.punkapi.com/v2/165.png',
        abv: 10,
        ibu: 80,
        ebc: 65,
        food_pairing: [
          'Stilton tart',
          'Caramelised onion and ham foccacia',
          'Dark fruit crumble'
        ]
      },
      {
        id: 176,
        name: 'Old World India Pale Ale',
        tagline: 'English India Pale Ale.',
        description:
          'This recreated the epic IPAs that were sent on monumental ocean voyages from England to India by sea in the 1800s. Medium bodied with a complex malt profile, backed up with intense bitterness and a woodsy, earthy rich English hop character.',
        image_url: 'https://images.punkapi.com/v2/176.png',
        abv: 7.5,
        ibu: 80,
        ebc: 50,
        food_pairing: [
          'Honey glazed ham with spicy roasted carrots',
          'Mature cheddar with spicy chutney',
          'Peach cobbler'
        ]
      },
      {
        id: 184,
        name: 'Atlantic IPA Ale',
        tagline: 'IPA Of Yesteryear.',
        description:
          'Like IPA historically would have been. Part of this beer was aged on a fishing boat in an oak cask and released as "Atlantic IPA".',
        image_url: 'https://images.punkapi.com/v2/184.png',
        abv: 8,
        ibu: 80,
        ebc: 55,
        food_pairing: [
          'Smoked venison sausage',
          'Very mature Cheddar',
          'Fettucine alfredo'
        ]
      },
      {
        id: 191,
        name: 'Interstellar',
        tagline: '2013 Prototype Red Rye IPA.',
        description:
          'Interstellar is a Red Rye IPA with spicy rye flavours from the malt and with great all-round spicy, fruity and earthy hop aromas from the use of Willamette and Amarillo.',
        image_url: 'https://images.punkapi.com/v2/191.png',
        abv: 6.5,
        ibu: 55,
        ebc: 50,
        food_pairing: [
          'Oak chip smoked salmon',
          'Sticky spicy barbecue ribs',
          'Scottish tablet'
        ]
      },
      {
        id: 205,
        name: 'Shareholder Black IPA 2011',
        tagline: 'Shareholder Black IPA.',
        description:
          'Brewed as part of the shareholder brewday at our Fraserburgh brewery. Massively dry hopped and aged on toasted oak chips, this IPA was a riot of lemon, vanilla and roasted malt.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 7.1,
        ibu: 80,
        ebc: 71,
        food_pairing: ['Classic American cheeseburger', 'Chilli chocolate bars']
      }
    ]
  },
  {
    title: 'Very dark brown, transparent',
    routeName: 'dark-brown',
    items: [
      {
        id: 7,
        name: 'AB:12',
        tagline: 'Imperial Black Belgian Ale.',
        description:
          'An Imperial Black Belgian Ale aged in old Invergordon Scotch whisky barrels with mountains of raspberries, tayberries and blackberries in each cask. Decadent but light and dry, this beer would make a fantastic base for ageing on pretty much any dark fruit - we used raspberries, tayberries and blackberries beause they were local.',
        image_url: 'https://images.punkapi.com/v2/7.png',
        abv: 11.2,
        ibu: 35,
        ebc: 80,
        food_pairing: [
          'Tandoori lamb with pomegranate',
          'Beef Wellington with a red wine jus',
          'Raspberry chocolate torte'
        ]
      },
      {
        id: 9,
        name: 'AB:07',
        tagline: 'Whisky Cask-Aged Scotch Ale.',
        description:
          'Whisky cask-aged imperial scotch ale. Beer perfect for when the rain is coming sideways. Liquorice, plum and raisin temper the warming alcohol, producing a beer capable of holding back the Scottish chill.',
        image_url: 'https://images.punkapi.com/v2/9.png',
        abv: 12.5,
        ibu: 30,
        ebc: 84,
        food_pairing: [
          'Kedgeree',
          'Scotch broth with sourdough bread',
          'Clootie dumpling'
        ]
      },
      {
        id: 27,
        name: 'Dog B',
        tagline: 'Cacao, Coffee Chili Anniversary Stout.',
        description:
          "Our anniversary stout was based on AB:04, one of our most sought after beers ever. This beer is slightly different each year, with subtle variations coming into play purely down to environmental and fermentation factors. What doesn't change is the rich dark chocolate, bitter coffee and chilli warmth of this monumental Stout.",
        image_url: 'https://images.punkapi.com/v2/27.png',
        abv: 15,
        ibu: 90,
        ebc: 100,
        food_pairing: [
          'Blackened cajun beef',
          'Blue cheese',
          'Flourless chocolate cheesecake'
        ]
      },
      {
        id: 29,
        name: '10 Heads High',
        tagline: 'Imperial Red Ale.',
        description:
          '10 Heads High is loosely based on our awesome 2011 Prototype beer Hops Kill Nazis. This is an uncompromising 7.8% Imperial Red Ale loaded high with American Hops. Think of this as an Imperial India Red Ale, or a super-charged version of 5am Saint. Either way this is a seriously good beer!',
        image_url: 'https://images.punkapi.com/v2/29.png',
        abv: 7.8,
        ibu: 70,
        ebc: 90,
        food_pairing: [
          'Arrabiata pasta',
          'Mulled cheddar',
          'Toasted almond cake'
        ]
      },
      {
        id: 47,
        name: 'AB:15',
        tagline: 'Salted Caramel Popcorn Strong Ale.',
        description:
          'A salted caramel popcorn Imperial Ale. Bourbon and Rum barrel aged, this 12.8% ale has complex and twisting flavours. Bitter caramel, wood, smoke, spice, treacle and vanilla are all present and intertwine against a smooth and lightly chewy mouthfeel. The salted caramel popcorn lends subtle hints of a smoky brininess.',
        image_url: 'https://images.punkapi.com/v2/47.png',
        abv: 12.8,
        ibu: 50,
        ebc: 111,
        food_pairing: [
          'Crispy bacon on flat bread',
          'Glazed ham with crackling coating',
          'Popcorn caramel and chocolate cake'
        ]
      },
      {
        id: 50,
        name: 'Lost Dog (w/Lost Abbey)',
        tagline: 'Rum-Aged Imperial Porter - Lost Abbey Collab.',
        description:
          'Our first beer aged in rum casks, Lost Dog saw us brew a collaboration imperial porter with our friends at Lost Abbey. The base beer was packed with toffee, chocolate and roasty notes, balanced with a subtle spicy hop character. The rum casks add a warming, spiced vanilla edge.',
        image_url: 'https://images.punkapi.com/v2/50.png',
        abv: 10,
        ibu: 35,
        ebc: 80,
        food_pairing: [
          'Beef satay skewers',
          'Venison & cranberry pie',
          'Blackberry mocha gateaux'
        ]
      },
      {
        id: 58,
        name: 'Coffee Imperial Stout',
        tagline: 'Beats a Cup of Joe.',
        description:
          'This beer was released as both as "Danish Beerhouse Coffee Imperial Stout" and "BrewDog Coffee Imperial Stout". Deep, dark, roasted flavours make this a perfect Sunday brunch beer.',
        image_url: 'https://images.punkapi.com/v2/58.png',
        abv: 9,
        ibu: 65,
        ebc: 97,
        food_pairing: [
          'Gooey chocolate brownies',
          'Chicken fried steak with cheesy mash',
          'Spicy chicken empanadas'
        ]
      },
      {
        id: 65,
        name: "Bracken's Porter",
        tagline: 'A Tribute To Our Favourite 4 Pawed Friend.',
        description:
          'The beer was named Bracken’s Porter as a tribute to our favourite four pawed friend who sadly passed in 2013. Chocolately, robust, warming, laid back and lots of fun - there are plenty of similarities between the two. Bracken we miss you and we hope you like your beer. Long live the original BrewDog.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 5,
        ibu: 50,
        ebc: 110,
        food_pairing: [
          'Grilled vegetable and chicken teriyaki skewers',
          'Chilli covered burger (Sloppy Joe)',
          'Candied bacon topped chocolate cheesecake'
        ]
      },
      {
        id: 78,
        name: 'AB:18',
        tagline: 'Imperial Brown Ale Aged In Rum Casks.',
        description:
          'AB:18 began life as an Imperial Brown Ale before we bombarded it with Scottish tayberries and Purple raspberries and locked it away in rum barrels for two years, infusing rich dark fruit flavours and oaky warmth into the mix.',
        image_url: 'https://images.punkapi.com/v2/78.png',
        abv: 11.8,
        ibu: 80,
        ebc: 115,
        food_pairing: [
          'Kippers and poached eggs',
          'Slow cooked lamb shoulder with mint sauce',
          'Apple and blackcurrant cobbler'
        ]
      },
      {
        id: 105,
        name: 'Hello My Name Is Beastie',
        tagline: 'Double IPA Brewed with Brambles.',
        description:
          'A Scottish take on Hello My Name is Ingrid with added brambles. Caramel malt provides sweetness to balance the tart berry character, which loses sweetness during fermentation.',
        image_url: 'https://images.punkapi.com/v2/105.png',
        abv: 8.2,
        ibu: 42,
        ebc: 90,
        food_pairing: [
          'Honey glazed ham with pineapple',
          'Spicy wings with blue cheese sauce',
          'Blackberry pie with vanilla ice cream'
        ]
      },
      {
        id: 120,
        name: 'AB:10',
        tagline: 'Imperial Brown Ale Aged In Spanish Red Wine Barrels.',
        description:
          'A decadent, robust and encapsulating Imperial Ale. A rollercoaster of devilish berries, smooth vanilla, toasted marshmallow and wine gums; caramel malt balanced with moderate bitterness and a roasty edge.',
        image_url: 'https://images.punkapi.com/v2/120.png',
        abv: 11.5,
        ibu: 80,
        ebc: 115,
        food_pairing: [
          "Calves' liver with onion relish",
          'Coq au vin',
          "S'mores"
        ]
      },
      {
        id: 138,
        name: 'Dog A',
        tagline: 'Cacao, Coffee, Chili Imperial Anniversary Stout.',
        description:
          "Our anniversary stout was based on AB:04, one of our most sought after beers ever. This beer is slightly different each year, with subtle variations coming into play purely down to environmental and fermentation factors. What doesn't change is the rich dark chocolate, bitter coffee and chili warmth of this monumental stout.",
        image_url: 'https://images.punkapi.com/v2/138.png',
        abv: 15,
        ibu: 90,
        ebc: 100,
        food_pairing: [
          'Blackened cajun beef',
          'Cave-aged cheddar',
          'Flourless chocolate chilli cake'
        ]
      },
      {
        id: 189,
        name: 'AB:11',
        tagline:
          'Black Barley Wine With Ginger, Raspberries, Chipotle Peppers.',
        description:
          'AB:11 is an Imperial Black Barley Wine brewed with ginger, black raspberries and chipotle peppers. A 12.8% rollercoaster of ginger zestiness and chipotle smokiness, all bound together with dark berry tartness and the decadent residual body of a Black Barley Wine.',
        image_url: 'https://images.punkapi.com/v2/189.png',
        abv: 12.8,
        ibu: 70,
        ebc: 79,
        food_pairing: [
          'Steak taquitos with spicy mole sauce',
          'Herb roasted duck with a fruit sauce',
          'Dark chocolate and chilli flourless cake'
        ]
      },
      {
        id: 202,
        name: 'Dog C',
        tagline: 'Cacao, Coffee Chili Anniversary Stout.',
        description:
          "Our anniversary stout was based on AB:04, one of our most sought after beers ever. This beer is slightly different each year, with subtle variations coming into play purely down to environmental and fermentation factors. What doesn't change is the rich dark chocolate, bitter coffee and chilli warmth of this monumental stout.",
        image_url: 'https://images.punkapi.com/v2/202.png',
        abv: 15,
        ibu: 90,
        ebc: 100,
        food_pairing: [
          'Blackened cajun beef',
          'Blue cheese',
          'Flourless chocolate cheesecake'
        ]
      },
      {
        id: 210,
        name: 'Dead Metaphor',
        tagline: 'Scottish Breakfast Stout.',
        description:
          'Scottish chocolate breakfast Stout - brewed with Brazilian Sertão coffee, Venezuelan cacao and (for the Scottish element) oatmeal. Smooth, chocolately and rich, with a honeycomb mouthfeel and a rich red berry coffee character. Brewed with our beer blogger friends from The Beer Cast and Hopzine.',
        image_url: 'https://images.punkapi.com/v2/210.png',
        abv: 6.8,
        ibu: 30,
        ebc: 86,
        food_pairing: [
          'Brisket burnt ends',
          'Candied bacon French toast',
          'Coco Pops (add stout to cereal)'
        ]
      },
      {
        id: 227,
        name: 'Brewdog Vs Beavertown',
        tagline: 'Coffee And Cigarettes.',
        description:
          'Loaded with roasty coffee notes and balanced with complex tobacco character. With smoky flavours from the malt, our Beavertown Collab is barrel-aged, but we don’t know for how long until its ready!',
        image_url: 'https://images.punkapi.com/v2/227.png',
        abv: 9.2,
        ibu: 50,
        ebc: 78.8,
        food_pairing: [
          'Ancho pulled beef chilli',
          'Aged cheddar, chickpea & roasted vegetable tagine'
        ]
      },
      {
        id: 230,
        name: 'Black Hammer',
        tagline: 'Our Ruthless IPA With A Dark Malt Twist.',
        description:
          'Jack Hammer has been single handedly ripping it up for quite some time. Now, the definitive bitter and twisted IPA, has spawned four Hammer Head off-springs. Black Hammer is the second of our hyped up hybrid IPAs. A black hearted beast, that takes no prisoners. American hops and dark malt combine to make mischief. Grapefruit and coffee collide in sensory overload – a wake-up call for other IPA’s. Molten waves of pithy grapefruit build and finally ebb to the roasty bitter onslaught. Stand  firm and wield the Black Hammer with care. Stare into the black abyss and succumb to the dark-side.',
        image_url: 'https://images.punkapi.com/v2/230.png',
        abv: 7.2,
        ibu: 250,
        ebc: 104,
        food_pairing: [
          'Buffalo wings with blue cheese dip',
          'Spinach and feta tacos',
          'Triple chocolate chip cookies'
        ]
      },
      {
        id: 261,
        name: 'Small Batch: Nitro Breakfast Stout',
        tagline: 'Boozy Chocolate Milkshake.',
        description:
          'An utterly indulgent, smooth as hell Stout. With opulent flavours of chocolate milkshake, roasty espresso coffee, and mellow vanilla, this beer has a full-bodied and creamy mouthfeel.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 8,
        ibu: 80,
        ebc: 88,
        food_pairing: [
          'Habanero Pulled Pork',
          'Choc Chip Cookies,',
          'Black Pudding Croquettes'
        ]
      },
      {
        id: 267,
        name: 'AB:22',
        tagline: 'Speyside Barrel-Aged Coffee Chocolate Stout.',
        description:
          'An imperial stout brewed with cacao and coffee, AB22 has spent two years in darkness, drawing complex and indulgent flavours from the Speyside whisky casks in which it resided.',
        image_url: null,
        abv: 12.5,
        ibu: 70,
        ebc: 100,
        food_pairing: [
          'Roast Pheasant With Savoy Cabbage',
          'Chilli Beer Tacos',
          'Dark Chocolate Truffles'
        ]
      },
      {
        id: 278,
        name: 'AB:23',
        tagline: 'Bourbon Barrel-Aged Barley Wine.',
        description:
          'Our Abstrakt series showcases one-off beers, brewed or blended to the peak of our abilities. Each release is unique and never to be repeated.',
        image_url: null,
        abv: 11.5,
        ibu: 80,
        ebc: 80,
        food_pairing: [
          'Stilton and Walnut Welsh Rarebit.',
          'Cherry Chocolate Cake With Chocolate Whipped Mousse',
          'Simnel Cake'
        ]
      },
      {
        id: 298,
        name: 'Declassified Demi-God',
        tagline: 'Barrel-Aged Imperial Milk Stout.',
        description:
          'An exclusive barrel-aged blend, brought together to reward investors on Equity for Punks USA; two imperial stouts aged in grain whisky barrels for over a year.',
        image_url: null,
        abv: 14.1,
        ibu: 70,
        ebc: 90,
        food_pairing: [
          'Mole Mexican chilli beef',
          'BBQ pit beans',
          'Chocolate ganache'
        ]
      },
      {
        id: 306,
        name: 'AB:25',
        tagline: 'Bourbon Barrel-Aged Barley Wine.',
        description:
          'A super-smooth, full-bodied chewy- as-hell barley wine. Our latest concept brew spent 6 months drawing flavour from bourbon barrels.',
        image_url: null,
        abv: 13.3,
        ibu: 35,
        ebc: 90,
        food_pairing: [
          'Coarse pork pate with fresh crusty bread',
          'Pecan pie',
          'Beef burger topped with red onions and wasabi'
        ]
      },
      {
        id: 308,
        name: 'Very Big Moose',
        tagline: 'Chocolate Imperial Stout.',
        description:
          'BrewDog vs Fierce Beer. A rebrew of the Fierce Beer & Flagship bar Collabfest 2017 winning beer, Very Big Moose is being scaled up to our Ellon brewhouse.',
        image_url: null,
        abv: 12,
        ibu: 25,
        ebc: 100,
        food_pairing: [
          'Rich vanilla ice cream. Neat (or make a float)',
          'Roast venison with a chocolate sauce',
          'The biggest darkest chocolate cake you can find'
        ]
      }
    ]
  },
  {
    title: 'Black, not transparent',
    routeName: 'black',
    items: [
      {
        id: 11,
        name: 'Misspent Youth',
        tagline: 'Milk & Honey Scotch Ale.',
        description:
          'The brainchild of our small batch brewer, George Woods. A dangerously drinkable milk sugar- infused Scotch Ale.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 7.3,
        ibu: 30,
        ebc: 120,
        food_pairing: [
          'Roasted garlic and chilli infused camembert cheese',
          'Korean style chicken wings',
          'Chocolate milk shake'
        ]
      },
      {
        id: 12,
        name: 'Arcade Nation',
        tagline: 'Seasonal Black IPA.',
        description:
          'Running the knife-edge between an India Pale Ale and a Stout, this particular style is one we truly love. Black IPAs are a great showcase for the skill of our brew team, balancing so many complex and twisting flavours in the same moment. The citrus, mango and pine from the hops – three of our all-time favourites – play off against the roasty dryness from the malt bill at each and every turn.',
        image_url: 'https://images.punkapi.com/v2/12.png',
        abv: 5.3,
        ibu: 60,
        ebc: 200,
        food_pairing: [
          'King prawn kebabs',
          'Halibut with a mango and tomato salad',
          'Mint chocloate ice cream'
        ]
      },
      {
        id: 13,
        name: 'Movember',
        tagline: 'Moustache-Worthy Beer.',
        description:
          'A deliciously robust, black malted beer with a decadent dark, dry cocoa flavour that provides an enticing backdrop to the Cascade hops.',
        image_url: 'https://images.punkapi.com/v2/13.png',
        abv: 4.5,
        ibu: 50,
        ebc: 140,
        food_pairing: [
          'Vegetable egg scramble',
          'Margherita pizza',
          'Fresh berry crisp tart'
        ]
      },
      {
        id: 16,
        name: 'Libertine Porter',
        tagline: 'Dry-Hopped Aggressive Porter.',
        description:
          'An avalanche of cross-continental hop varieties give this porter a complex spicy, resinous and citrusy aroma, with a huge malt bill providing a complex roasty counterpoint. Digging deeper into the flavour draws out cinder toffee, bitter chocolate and hints of woodsmoke.',
        image_url: 'https://images.punkapi.com/v2/16.png',
        abv: 6.1,
        ibu: 45,
        ebc: 219,
        food_pairing: [
          'Blue cheese beef burger',
          'Glazed short ribs',
          'Chocolate cake'
        ]
      },
      {
        id: 32,
        name: 'AB:05',
        tagline: 'Belgian Imperial Stout.',
        description:
          'Belgian Imperial Stout aged on toasted coconut and cacao. The Belgian yeast strain introduces a whole new dimension to the Imperial Stout style resulting in a beer that resembles a marshmallow toasted on a smouldering barbeque then smothered in dark chocolate. Massively seductive and encapsulating this blacker than midnight beer pours with coffee brown head so thick you could almost stand on it, and with an epic lacing on your glass.',
        image_url: 'https://images.punkapi.com/v2/32.png',
        abv: 12.5,
        ibu: 40,
        ebc: 180,
        food_pairing: [
          'Venison with cacao nibs',
          'Apple upside-down cake',
          'Toffee marshmallow pie'
        ]
      },
      {
        id: 41,
        name: 'AB:17',
        tagline: 'Three Coffee Rye Imperial Porter.',
        description:
          'A triple whammy of coffee from HasBean gives our 17th Abstrakt concept beer an intense and roasty, dark mocha character. We brewed with espresso in the mash, cafetiere in the boil, and whole roast beans in the whirlpool and the fermenter.',
        image_url: 'https://images.punkapi.com/v2/41.png',
        abv: 10.7,
        ibu: 100,
        ebc: 300,
        food_pairing: [
          '12hr smoked brisket',
          'Chocolate pistachio cakes',
          'Dulche de leche'
        ]
      },
      {
        id: 52,
        name: 'Paradox Islay',
        tagline: 'Ubiquitous Imperial Stout.',
        description:
          'In 2006 James and Martin hijacked a beer dinner run by Michael Jackson, the acclaimed beer and whisky writer, and convinced him to taste one of their home brews. This was a defining moment in BrewDog prehistory, and that beer was the first incarnation of the ubiquitous Paradox. Aged in a variety of casks over the years, Paradox is dark, decadent and encapsulating. Can be enjoyed fresh; phenomenal when aged.',
        image_url: 'https://images.punkapi.com/v2/52.png',
        abv: 10,
        ibu: 55,
        ebc: 300,
        food_pairing: [
          'Ancho chilli beef taco',
          'Chocolate gateaux',
          'Rum poached pears with dark chocolate sauce'
        ]
      },
      {
        id: 56,
        name: 'Black Eyed King Imp',
        tagline: 'Barrel-Aged Prototype Cocoa Psycho.',
        description:
          "An early Cocoa Psycho recipe that we loved, but didn't fit what we were looking for. We locked this chocolate coffee stout away in barrels for two years, imparting toasted marshmallow, spicy vanilla, molasses and boozy warmth.",
        image_url: 'https://images.punkapi.com/v2/56.png',
        abv: 9.5,
        ibu: 85,
        ebc: 250,
        food_pairing: [
          'Beef chilli made with cocoa powder',
          'Dark chocolate covered bacon',
          'Rich espresso tiramisu'
        ]
      },
      {
        id: 66,
        name: 'Tokyo Rising Sun - Lowland',
        tagline: 'A Beautiful Accident.',
        description:
          'A forgotten gem in the deepest, darkest corner of the warehouse. Aged in a Lowland whisky cask resulting in decadent chocolate, toasted vanilla, indulgent spiced fruit, a mesmerizingly hypnotic mouthfeel and new layers that emerge on every sip.',
        image_url: 'https://images.punkapi.com/v2/66.png',
        abv: 13.2,
        ibu: 85,
        ebc: 140,
        food_pairing: [
          'Duck liver paté',
          'Mutton stew',
          'Kirsch chocolate truffles'
        ]
      },
      {
        id: 70,
        name: 'Sunmaid Stout',
        tagline: 'Rum & Raisin Imperial Stout.',
        description:
          'Brewed by Chris Sartori from Stone Brewing Company in 2010. A dark chocolate stout with dried dark fruit finish. Simcoe provides bitterness with subtle fruity supporting notes, contrasting the chocolate and coffee-laden malt profile. The finish is warming with vanilla and rich dark fruit depth.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 10.2,
        ibu: 50,
        ebc: 197,
        food_pairing: [
          'Lapin aux pruneaux (braised rabbit with prunes)',
          'Gouda cheese',
          'Dark chocolate truffles'
        ]
      },
      {
        id: 73,
        name: 'Black Eyed King Imp - Vietnamese Coffee Edition',
        tagline: 'Vietnamese Coffee Edition.',
        description:
          "This is the Vietnamese Coffee Edition. At 12.7% ABV, Black Eyed King Imp is a super intense and twistedly complex brew, with intense notes of sweet vanilla, rich espresso, smooth molasses and bitter chocolate barely contained by the whatever container it's in.",
        image_url: 'https://images.punkapi.com/v2/73.png',
        abv: 12.7,
        ibu: 85,
        ebc: 250,
        food_pairing: [
          'Bacon sandwich with brown sauce',
          '20hr smoked brisket',
          'Chocolate fudge ice cream'
        ]
      },
      {
        id: 80,
        name: 'AB:04',
        tagline: 'Imperial Stout With Coffee, Loads Of Cocoa And Chilli.',
        description:
          'Imperial Stout brewed with coffee, cocoa, Naga chillies (the hottest in the world), and champagne yeast. Possibly our most acclaimed Abstrakt yet.',
        image_url: 'https://images.punkapi.com/v2/80.png',
        abv: 15,
        ibu: 80,
        ebc: 400,
        food_pairing: [
          'Beef mahaca on corn tortillas',
          'Chilli and dark chocolate tart',
          'Epoisses cheese'
        ]
      },
      {
        id: 90,
        name: '#Mashtag 2015',
        tagline: 'US Hopped Black Barley Wine.',
        description:
          'Democratically voted on by you and the BrewDog beer community. A wonderfully burnt toast malt backbone, loaded with American Hops for floral, citrus flavours and warm boozy vanilla and toasted oak.',
        image_url: 'https://images.punkapi.com/v2/90.png',
        abv: 10,
        ibu: 85,
        ebc: 130,
        food_pairing: [
          'Charcuterie platter (featuring Italian salami)',
          'Blue cheese wedge salad',
          'Rich dark chocolate volcano cake'
        ]
      },
      {
        id: 92,
        name: 'AB:09',
        tagline: 'Cranachan Imperial Stout.',
        description:
          'This Cranachan Imperial Stout was inspired by the famous Scottish dessert, and brewed with a mountain of dark malts, loads of oats, Scottish heather honey and local raspberries. The beer was then transferred to oak casks to mature for 6 months.',
        image_url: 'https://images.punkapi.com/v2/92.png',
        abv: 11.6,
        ibu: 77,
        ebc: 265,
        food_pairing: [
          'Aged cheddar with honey and raspberry chutney',
          'Rich beef stew with winter vegetables and a dash of honey',
          'Scottish raspberry cranachan parfait'
        ]
      },
      {
        id: 96,
        name: 'Lumberjack Stout',
        tagline: 'Blueberry Bacon Stout.',
        description:
          'Lumberjack Stout is an intense beast that took its inspriation from what an actual bona-fide lumberjack might have for breakfast. Flavours of molasses, chocolate, smoke, berry, coffee and more, with a low bitterness, leaning this beer firmly towards the malty side.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 15.2,
        ibu: 20,
        ebc: 158,
        food_pairing: [
          'Maple syrup drizzled chocolate chip pancakes',
          'Fried bacon with crispy honeycomb bits',
          'Coffee cake'
        ]
      },
      {
        id: 101,
        name: 'Riptide',
        tagline: 'Twisted Merciless Stout.',
        description:
          "The original BrewDog, Bracken decided to make a beer that best reflected himself; this is the beer equivalent of the big, cute chocolate monster. Soft, smooth, dark, chocolatey and a force to be reckoned with. This gentle giant will never bite, but you'll still want to be on your best behaviour!",
        image_url: 'https://images.punkapi.com/v2/101.png',
        abv: 8,
        ibu: 45,
        ebc: 240,
        food_pairing: [
          'Seared scallops',
          'Pan seared venison with fruit salad side',
          'Caramelised apple pie with vanilla ice cream'
        ]
      },
      {
        id: 114,
        name: 'U-Boat (w/ Victory Brewing)',
        tagline: 'Smoked Porter Collab With Victory Brewing.',
        description:
          'On the palate is a big dark malt sweetness, balanced by the blend of spicy Mittelfruh and citrussy Galena. Cocoa powder, rich dark chocolate, and ripe berries interplay with a toasty burnt sugar bitterness. The mouthfeel is thick and chewy with a treacly quality that doesn’t cloy, as it plays off against the hops and roast malt bitterness.',
        image_url: 'https://images.punkapi.com/v2/114.png',
        abv: 8.4,
        ibu: 50,
        ebc: 200,
        food_pairing: [
          'Smoked bratwurst and mustard',
          'Chargrilled steak',
          'Grilled pineapple'
        ]
      },
      {
        id: 118,
        name: 'Bounty Hunter - Shareholder Brew',
        tagline: 'Beatnik Milk Stout.',
        description:
          'Brewed with our Equity Punks this rich, smooth stout is brewed with a blend of six malts, resulting in a welcoming, resonant black beer. From start to finish it carries an intense roastiness reminiscent of dark chocolate intertwined with a delicate hint of coconut and caramel.',
        image_url: 'https://images.punkapi.com/v2/118.png',
        abv: 6.5,
        ibu: 35,
        ebc: 250,
        food_pairing: [
          'Coconut beef red curry',
          'Butternut squash soup with toasted almonds',
          'Chocolate coated macaroons'
        ]
      },
      {
        id: 119,
        name: 'Zeitgeist',
        tagline: 'Organic Black Lager.',
        description:
          'Zeitgeist is an idiosyncratic alternative black lager. Its inspiration is found more than 200 years ago. Zeitgeist takes an age old classic, a forgotten masterpiece, and gives it relevance and an avant-garde edge.',
        image_url: 'https://images.punkapi.com/v2/119.png',
        abv: 4.9,
        ibu: 32,
        ebc: 120,
        food_pairing: [
          'Spicy cajun fried chicken',
          'Pork dumplings with rich soy sauce',
          'Cinnamon carrot cake with creamy cheese frosting'
        ]
      },
      {
        id: 126,
        name: 'Jet Black Heart',
        tagline: 'Oatmeal Milk Stout. Dark. Roasty. Velvety.',
        description:
          'Good things come to those who wait. This smooth and roasty oatmeal milk stout won our 2015 Prototype Challenge at a canter. Roasty coffee and chocolate lead to a decadent, full-bodied richness of near uncharted depths with a velvet mouthfeel from the addition of oatmeal and a touch of wheat. This is complemented at every turn by the Magnum and Sorachi Ace hops, with the latter bringing an intensity of smooth vanilla and dark berry fruit on the long, rewarding finish.',
        image_url: 'https://images.punkapi.com/v2/126.png',
        abv: 4.7,
        ibu: 45,
        ebc: 200,
        food_pairing: ['Oyster beignets', 'Beef shin stew', "A Shakin' jesse"]
      }
    ]
  },
  {
    title: 'Other',
    routeName: 'other',
    items: [
      {
        id: 19,
        name: 'Hello My Name Is Mette-Marit',
        tagline: 'Lingonberry Double IPA.',
        description:
          "We sent this beer to Norway where it was known as 'Hello, my name is Censored’. You can make up your own mind as to why. This brew was a red berry explosion, with a reisnous bitter edge layered with dry berry tartness.",
        image_url: 'https://images.punkapi.com/v2/19.png',
        abv: 8.2,
        ibu: 70,
        ebc: null,
        food_pairing: [
          'Fårikål (mutton stew) with a spicy twist',
          'Fenalår (salted cured lamb)',
          'Krumkake with lingonberry jam'
        ]
      },
      {
        id: 24,
        name: 'The End Of History',
        tagline: "The World's Strongest Beer.",
        description:
          'The End of History: The name derives from the famous work of philosopher Francis Fukuyama, this is to beer what democracy is to history. Complexity defined. Floral, grapefruit, caramel and cloves are intensified by boozy heat.',
        image_url: 'https://images.punkapi.com/v2/24.png',
        abv: 55,
        ibu: null,
        ebc: null,
        food_pairing: [
          'Roasted wood pigeon with black pudding',
          'Pan seared venison fillet with juniper sauce',
          'Apricot coconut cake'
        ]
      },
      {
        id: 35,
        name: 'Berliner Weisse With Raspberries And Rhubarb - B-Sides',
        tagline: 'Fruity Berliner Weisse.',
        description:
          'Tart, dry and acidic with a punch of summer berry as rhubarb crumble.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 3.6,
        ibu: 8,
        ebc: null,
        food_pairing: [
          'Grilled salmon',
          'Mac and cheese fries',
          'Cheesecake with raspberry coulis'
        ]
      },
      {
        id: 130,
        name: 'Spiced Cherry Sour - B-Sides',
        tagline: 'Alternative Festive.',
        description: 'Think bakewell tart with Christmas spices.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 6.5,
        ibu: 20,
        ebc: null,
        food_pairing: [
          'Wild rice salad with wild mushrooms',
          'Apple gingerbread pancakes',
          'Christmas Pudding'
        ]
      },
      {
        id: 149,
        name: 'AB:03',
        tagline: 'Barrel-Aged Imperial Ale.',
        description:
          'This Abstrakt started life as a simple imperial Ale, but upon the addition of fresh Scottish raspberries and strawberries, and left to mature for 2 years in Invergordon whisky casks that had held whisky for over 40 years, this beer transcended into something new.',
        image_url: 'https://images.punkapi.com/v2/149.png',
        abv: 10.5,
        ibu: 14,
        ebc: null,
        food_pairing: [
          'Haggis spring rolls',
          'Honey glazed duck breast',
          'Cranachan'
        ]
      },
      {
        id: 169,
        name: 'AB:19',
        tagline: 'A Blend of Two Barrel-aged Imperial Saisons.',
        description:
          'One of the most complex beers we’ve ever attempted. A blend of two barrel-aged Imperial Saisons – one black, one red – which has in turn then been aged in rum barrels, it is an enormous, intricate beer. A baseline of warm, smoky raisin and plum, followed by punchy flavour elements coming to the fore – coconut, mint and blackcurrant. There’s a long undercurrent of treacle toffee, before the finish darkens to liquorice, star anise amidst a touch of honey sweetness.',
        image_url: 'https://images.punkapi.com/v2/169.png',
        abv: 13.1,
        ibu: null,
        ebc: null,
        food_pairing: [
          'Game terrine',
          'Spiced fruit cake',
          'Chocolate, cherry and hazelnut mousse'
        ]
      }
    ]
  }
];

const round = (value, step) => {
  step || (step = 1.0);
  var inv = 1.0 / step;
  return Math.round(value * inv) / inv;
};

const createPrice = () => {
  let price = Math.random() * (10 - 3) + 3;
  price = round(price, 0.1);
  return price;
};

const seedProducts = () => {
  Product.remove({}, err => {
    if (err) {
      console.log(err);
    }
    console.log('PRODUCTS REMOVED');

    products.forEach(category => {
      category.items.forEach(item => {
        item.price = createPrice();
      });

      Product.create(category, (err, createdProduct) => {
        if (err) {
          console.log(err);
        } else {
          console.log(category._id, ': PRODUCT CREATED');
          createdProduct.save();
        }
      });
    });
  });
};

module.exports = seedProducts;

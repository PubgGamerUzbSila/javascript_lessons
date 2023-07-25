const select = document.querySelector('#region')
const districts = document.querySelector('#districts')
const result = document.querySelector('#result')

const selectData = {
  region: null,
  district: null,
}

const data = {
  regions: [
    {
      id: 1,
      name: 'Qoraqalpog‘iston Respublikasi',
    },
    {
      id: 2,
      name: 'Andijon viloyati',
    },
    {
      id: 3,
      name: 'Buxoro viloyati',
    },
    {
      id: 4,
      name: 'Jizzax viloyati',
    },
    {
      id: 5,
      name: 'Qashqadaryo viloyati',
    },
    {
      id: 6,
      name: 'Navoiy viloyati',
    },
    {
      id: 7,
      name: 'Namangan viloyati',
    },
    {
      id: 8,
      name: 'Samarqand viloyati',
    },
    {
      id: 9,
      name: 'Surxandaryo viloyati',
    },
    {
      id: 10,
      name: 'Sirdaryo viloyati',
    },
    {
      id: 11,
      name: 'Toshkent viloyati',
    },
    {
      id: 12,
      name: 'Farg‘ona viloyati',
    },
    {
      id: 13,
      name: 'Xorazm viloyati',
    },
    {
      id: 14,
      name: 'Toshkent shahri',
    },
  ],
  districts: [
    {
      id: 15,
      region_id: 1,
      name: 'Amudaryo tumani',
    },
    {
      id: 16,
      region_id: 1,
      name: 'Beruniy tumani',
    },
    {
      id: 17,
      region_id: 1,
      name: 'Kegayli tumani',
    },
    {
      id: 18,
      region_id: 1,
      name: 'Qonliko‘l tumani',
    },
    {
      id: 19,
      region_id: 1,
      name: 'Qorao‘zak tumani',
    },
    {
      id: 20,
      region_id: 1,
      name: 'Qo‘ng‘irot tumani',
    },
    {
      id: 21,
      region_id: 1,
      name: 'Mo‘ynoq tumani',
    },
    {
      id: 22,
      region_id: 1,
      name: 'Nukus tumani',
    },
    {
      id: 23,
      region_id: 1,
      name: 'Nukus shahri',
    },
    {
      id: 24,
      region_id: 1,
      name: 'Taxtako‘pir tumani',
    },
    {
      id: 25,
      region_id: 1,
      name: 'To‘rtko‘l tumani',
    },
    {
      id: 26,
      region_id: 1,
      name: 'Xo‘jayli tumani',
    },
    {
      id: 27,
      region_id: 1,
      name: 'CHimboy tumani',
    },
    {
      id: 28,
      region_id: 1,
      name: 'SHumanay tumani',
    },
    {
      id: 29,
      region_id: 1,
      name: 'Ellikqal‘a tumani',
    },
    {
      id: 30,
      region_id: 2,
      name: 'Andijon shahri',
    },
    {
      id: 31,
      region_id: 2,
      name: 'Andijon tumani',
    },
    {
      id: 32,
      region_id: 2,
      name: 'Asaka tumani',
    },
    {
      id: 33,
      region_id: 2,
      name: 'Baliqchi tumani',
    },
    {
      id: 34,
      region_id: 2,
      name: 'Buloqboshi tumani',
    },
    {
      id: 35,
      region_id: 2,
      name: 'Bo‘z tumani',
    },
    {
      id: 36,
      region_id: 2,
      name: 'Jalaquduq tumani',
    },
    {
      id: 37,
      region_id: 2,
      name: 'Izbosgan tumani',
    },
    {
      id: 38,
      region_id: 2,
      name: 'Qorasuv shahri',
    },
    {
      id: 39,
      region_id: 2,
      name: 'Qo‘rg‘ontepa tumani',
    },
    {
      id: 40,
      region_id: 2,
      name: 'Marhamat tumani',
    },
    {
      id: 41,
      region_id: 2,
      name: 'Oltinko‘l tumani',
    },
    {
      id: 42,
      region_id: 2,
      name: 'Paxtaobod tumani',
    },
    {
      id: 43,
      region_id: 2,
      name: 'Ulug‘nor tumani',
    },
    {
      id: 44,
      region_id: 2,
      name: 'Xonabod tumani',
    },
    {
      id: 45,
      region_id: 2,
      name: 'Xo‘jaobod shahri',
    },
    {
      id: 46,
      region_id: 2,
      name: 'Shaxrixon tumani',
    },
    {
      id: 47,
      region_id: 3,
      name: 'Buxoro shahri',
    },
    {
      id: 48,
      region_id: 3,
      name: 'Buxoro tumani',
    },
    {
      id: 49,
      region_id: 3,
      name: 'Vobkent tumani',
    },
    {
      id: 50,
      region_id: 3,
      name: 'G‘ijduvon tumani',
    },
    {
      id: 51,
      region_id: 3,
      name: 'Jondor tumani',
    },
    {
      id: 52,
      region_id: 3,
      name: 'Kogon tumani',
    },
    {
      id: 53,
      region_id: 3,
      name: 'Kogon shahri',
    },
    {
      id: 54,
      region_id: 3,
      name: 'Qorako‘l tumani',
    },
    {
      id: 55,
      region_id: 3,
      name: 'Qorovulbozor tumani',
    },
    {
      id: 56,
      region_id: 3,
      name: 'Olot tumani',
    },
    {
      id: 57,
      region_id: 3,
      name: 'Peshku tumani',
    },
    {
      id: 58,
      region_id: 3,
      name: 'Romitan tumani',
    },
    {
      id: 59,
      region_id: 3,
      name: 'Shofirkon tumani',
    },
    {
      id: 60,
      region_id: 4,
      name: 'Arnasoy tumani',
    },
    {
      id: 61,
      region_id: 4,
      name: 'Baxmal tumani',
    },
    {
      id: 62,
      region_id: 4,
      name: 'G‘allaorol tumani',
    },
    {
      id: 63,
      region_id: 4,
      name: 'Do‘stlik tumani',
    },
    {
      id: 64,
      region_id: 4,
      name: 'Sh.Rashidov tumani',
    },
    {
      id: 65,
      region_id: 4,
      name: 'Jizzax shahri',
    },
    {
      id: 66,
      region_id: 4,
      name: 'Zarbdor tumani',
    },
    {
      id: 67,
      region_id: 4,
      name: 'Zafarobod tumani',
    },
    {
      id: 68,
      region_id: 4,
      name: 'Zomin tumani',
    },
    {
      id: 69,
      region_id: 4,
      name: 'Mirzacho‘l tumani',
    },
    {
      id: 70,
      region_id: 4,
      name: 'Paxtakor tumani',
    },
    {
      id: 71,
      region_id: 4,
      name: 'Forish tumani',
    },
    {
      id: 72,
      region_id: 4,
      name: 'Yangiobod tumani',
    },
    {
      id: 73,
      region_id: 5,
      name: 'G‘uzor tumani',
    },
    {
      id: 74,
      region_id: 5,
      name: 'Dehqonobod tumani',
    },
    {
      id: 75,
      region_id: 5,
      name: 'Qamashi tumani',
    },
    {
      id: 76,
      region_id: 5,
      name: 'Qarshi tumani',
    },
    {
      id: 77,
      region_id: 5,
      name: 'Qarshi shahri',
    },
    {
      id: 78,
      region_id: 5,
      name: 'Kasbi tumani',
    },
    {
      id: 79,
      region_id: 5,
      name: 'Kitob tumani',
    },
    {
      id: 80,
      region_id: 5,
      name: 'Koson tumani',
    },
    {
      id: 81,
      region_id: 5,
      name: 'Mirishkor tumani',
    },
    {
      id: 82,
      region_id: 5,
      name: 'Muborak tumani',
    },
    {
      id: 83,
      region_id: 5,
      name: 'Nishon tumani',
    },
    {
      id: 84,
      region_id: 5,
      name: 'Chiroqchi tumani',
    },
    {
      id: 85,
      region_id: 5,
      name: 'Shahrisabz tumani',
    },
    {
      id: 86,
      region_id: 5,
      name: 'Yakkabog‘ tumani',
    },
    {
      id: 87,
      region_id: 6,
      name: 'Zarafshon shahri',
    },
    {
      id: 88,
      region_id: 6,
      name: 'Karmana tumani',
    },
    {
      id: 89,
      region_id: 6,
      name: 'Qiziltepa tumani',
    },
    {
      id: 90,
      region_id: 6,
      name: 'Konimex tumani',
    },
    {
      id: 91,
      region_id: 6,
      name: 'Navbahor tumani',
    },
    {
      id: 92,
      region_id: 6,
      name: 'Navoiy shahri',
    },
    {
      id: 93,
      region_id: 6,
      name: 'Nurota tumani',
    },
    {
      id: 94,
      region_id: 6,
      name: 'Tomdi tumani',
    },
    {
      id: 95,
      region_id: 6,
      name: 'Uchquduq tumani',
    },
    {
      id: 96,
      region_id: 6,
      name: 'Xatirchi tumani',
    },
    {
      id: 97,
      region_id: 7,
      name: 'Kosonsoy tumani',
    },
    {
      id: 98,
      region_id: 7,
      name: 'Mingbuloq tumani',
    },
    {
      id: 99,
      region_id: 7,
      name: 'Namangan tumani',
    },
    {
      id: 100,
      region_id: 7,
      name: 'Namangan shahri',
    },
    {
      id: 101,
      region_id: 7,
      name: 'Norin tumani',
    },
    {
      id: 102,
      region_id: 7,
      name: 'Pop tumani',
    },
    {
      id: 103,
      region_id: 7,
      name: 'To‘raqo‘rg‘on tumani',
    },
    {
      id: 104,
      region_id: 7,
      name: 'Uychi tumani',
    },
    {
      id: 105,
      region_id: 7,
      name: 'Uchqo‘rg‘on tumani',
    },
    {
      id: 106,
      region_id: 7,
      name: 'Chortoq tumani',
    },
    {
      id: 107,
      region_id: 7,
      name: 'Chust tumani',
    },
    {
      id: 108,
      region_id: 7,
      name: 'Yangiqo‘rg‘on tumani',
    },
    {
      id: 109,
      region_id: 8,
      name: 'Bulung‘ur tumani',
    },
    {
      id: 110,
      region_id: 8,
      name: 'Jomboy tumani',
    },
    {
      id: 111,
      region_id: 8,
      name: 'Ishtixon tumani',
    },
    {
      id: 112,
      region_id: 8,
      name: 'Kattaqo‘rg‘on tumani',
    },
    {
      id: 113,
      region_id: 8,
      name: 'Kattaqo‘rg‘on shahri',
    },
    {
      id: 114,
      region_id: 8,
      name: 'Qo‘shrabot tumani',
    },
    {
      id: 115,
      region_id: 8,
      name: 'Narpay tumani',
    },
    {
      id: 116,
      region_id: 8,
      name: 'Nurabod tumani',
    },
    {
      id: 117,
      region_id: 8,
      name: 'Oqdaryo tumani',
    },
    {
      id: 118,
      region_id: 8,
      name: 'Payariq tumani',
    },
    {
      id: 119,
      region_id: 8,
      name: 'Pastarg‘om tumani',
    },
    {
      id: 120,
      region_id: 8,
      name: 'Paxtachi tumani',
    },
    {
      id: 121,
      region_id: 8,
      name: 'Samarqand tumani',
    },
    {
      id: 122,
      region_id: 8,
      name: 'Samarqand shahri',
    },
    {
      id: 123,
      region_id: 8,
      name: 'Toyloq tumani',
    },
    {
      id: 124,
      region_id: 8,
      name: 'Urgut tumani',
    },
    {
      id: 125,
      region_id: 9,
      name: 'Angor tumani',
    },
    {
      id: 126,
      region_id: 9,
      name: 'Boysun tumani',
    },
    {
      id: 127,
      region_id: 9,
      name: 'Denov tumani',
    },
    {
      id: 128,
      region_id: 9,
      name: 'Jarqo‘rg‘on tumani',
    },
    {
      id: 129,
      region_id: 9,
      name: 'Qiziriq tumani',
    },
    {
      id: 130,
      region_id: 9,
      name: 'Qo‘mqo‘rg‘on tumani',
    },
    {
      id: 131,
      region_id: 9,
      name: 'Muzrabot tumani',
    },
    {
      id: 132,
      region_id: 9,
      name: 'Oltinsoy tumani',
    },
    {
      id: 133,
      region_id: 9,
      name: 'Sariosiy tumani',
    },
    {
      id: 134,
      region_id: 9,
      name: 'Termiz tumani',
    },
    {
      id: 135,
      region_id: 9,
      name: 'Termiz shahri',
    },
    {
      id: 136,
      region_id: 9,
      name: 'Uzun tumani',
    },
    {
      id: 137,
      region_id: 9,
      name: 'Sherobod tumani',
    },
    {
      id: 138,
      region_id: 9,
      name: 'Sho‘rchi tumani',
    },
    {
      id: 139,
      region_id: 10,
      name: 'Boyovut tumani',
    },
    {
      id: 140,
      region_id: 10,
      name: 'Guliston tumani',
    },
    {
      id: 141,
      region_id: 10,
      name: 'Guliston shahri',
    },
    {
      id: 142,
      region_id: 10,
      name: 'Mirzaobod tumani',
    },
    {
      id: 143,
      region_id: 10,
      name: 'Oqoltin tumani',
    },
    {
      id: 144,
      region_id: 10,
      name: 'Sayxunobod tumani',
    },
    {
      id: 145,
      region_id: 10,
      name: 'Sardoba tumani',
    },
    {
      id: 146,
      region_id: 10,
      name: 'Sirdaryo tumani',
    },
    {
      id: 147,
      region_id: 10,
      name: 'Xavos tumani',
    },
    {
      id: 148,
      region_id: 10,
      name: 'Shirin shahri',
    },
    {
      id: 149,
      region_id: 10,
      name: 'Yangier shahri',
    },
    {
      id: 150,
      region_id: 11,
      name: 'Angiren shahri',
    },
    {
      id: 151,
      region_id: 11,
      name: 'Bekabod tumani',
    },
    {
      id: 152,
      region_id: 11,
      name: 'Bekabod shahri',
    },
    {
      id: 153,
      region_id: 11,
      name: 'Bo‘ka tumani',
    },
    {
      id: 154,
      region_id: 11,
      name: 'Bo‘stonliq tumani',
    },
    {
      id: 155,
      region_id: 11,
      name: 'Zangiota tumani',
    },
    {
      id: 156,
      region_id: 11,
      name: 'Qibray tumani',
    },
    {
      id: 157,
      region_id: 11,
      name: 'Quyichirchiq tumani',
    },
    {
      id: 158,
      region_id: 11,
      name: 'Oqqo‘rg‘on tumani',
    },
    {
      id: 159,
      region_id: 11,
      name: 'Olmaliq shahri',
    },
    {
      id: 160,
      region_id: 11,
      name: 'Ohangaron tumani',
    },
    {
      id: 161,
      region_id: 11,
      name: 'Parkent tumani',
    },
    {
      id: 162,
      region_id: 11,
      name: 'Piskent tumani',
    },
    {
      id: 163,
      region_id: 11,
      name: 'O‘rtachirchiq tumani',
    },
    {
      id: 164,
      region_id: 11,
      name: 'Chinoz tumani',
    },
    {
      id: 165,
      region_id: 11,
      name: 'Chirchiq shahri',
    },
    {
      id: 166,
      region_id: 11,
      name: 'Yuqorichirchiq tumani',
    },
    {
      id: 167,
      region_id: 11,
      name: 'Yangiyo‘l tumani',
    },
    {
      id: 168,
      region_id: 12,
      name: 'Beshariq tumani',
    },
    {
      id: 169,
      region_id: 12,
      name: 'Bog‘dod tumani',
    },
    {
      id: 170,
      region_id: 12,
      name: 'Buvayda tumani',
    },
    {
      id: 171,
      region_id: 12,
      name: 'Dang‘ara tumani',
    },
    {
      id: 172,
      region_id: 12,
      name: 'Yozyovon tumani',
    },
    {
      id: 173,
      region_id: 12,
      name: 'Quva tumani',
    },
    {
      id: 174,
      region_id: 12,
      name: 'Quvasoy shahri',
    },
    {
      id: 175,
      region_id: 12,
      name: 'Qo‘qon shahri',
    },
    {
      id: 176,
      region_id: 12,
      name: 'Qo‘shtepa tumani',
    },
    {
      id: 177,
      region_id: 12,
      name: 'Marg‘ilon shahri',
    },
    {
      id: 178,
      region_id: 12,
      name: 'Oltiariq tumani',
    },
    {
      id: 179,
      region_id: 12,
      name: 'Rishton tumani',
    },
    {
      id: 180,
      region_id: 12,
      name: 'So‘x tumani',
    },
    {
      id: 181,
      region_id: 12,
      name: 'Toshloq tumani',
    },
    {
      id: 182,
      region_id: 12,
      name: 'Uchko‘prik tumani',
    },
    {
      id: 183,
      region_id: 12,
      name: 'O‘zbekiston tumani',
    },
    {
      id: 184,
      region_id: 12,
      name: 'Farg‘ona tumani',
    },
    {
      id: 185,
      region_id: 12,
      name: 'Farg‘ona shahri',
    },
    {
      id: 186,
      region_id: 12,
      name: 'Furqat tumani',
    },
    {
      id: 187,
      region_id: 13,
      name: 'Bog‘ot tumani',
    },
    {
      id: 188,
      region_id: 13,
      name: 'Gurlan tumani',
    },
    {
      id: 189,
      region_id: 13,
      name: 'Qo‘shko‘pir tumani',
    },
    {
      id: 190,
      region_id: 13,
      name: 'Urganch tumani',
    },
    {
      id: 191,
      region_id: 13,
      name: 'Urganch shahri',
    },
    {
      id: 192,
      region_id: 13,
      name: 'Xiva tumani',
    },
    {
      id: 193,
      region_id: 13,
      name: 'Xazarasp tumani',
    },
    {
      id: 194,
      region_id: 13,
      name: 'Xonqa tumani',
    },
    {
      id: 195,
      region_id: 13,
      name: 'Shavot tumani',
    },
    {
      id: 196,
      region_id: 13,
      name: 'Yangiariq tumani',
    },
    {
      id: 197,
      region_id: 13,
      name: 'Yangibozor tumani',
    },
    {
      id: 198,
      region_id: 14,
      name: 'Bektimer tumani',
    },
    {
      id: 199,
      region_id: 14,
      name: 'M.Ulug‘bek tumani',
    },
    {
      id: 200,
      region_id: 14,
      name: 'Mirobod tumani',
    },
    {
      id: 201,
      region_id: 14,
      name: 'Olmazor tumani',
    },
    {
      id: 202,
      region_id: 14,
      name: 'Sergeli tumani',
    },
    {
      id: 203,
      region_id: 14,
      name: 'Uchtepa tumani',
    },
    {
      id: 204,
      region_id: 14,
      name: 'Yashnobod tumani',
    },
    {
      id: 205,
      region_id: 14,
      name: 'Chilonzor tumani',
    },
    {
      id: 206,
      region_id: 14,
      name: 'Shayxontohur tumani',
    },
    {
      id: 207,
      region_id: 14,
      name: 'Yunusobod tumani',
    },
    {
      id: 208,
      region_id: 14,
      name: 'Yakkasaroy tumani',
    },
    {
      id: 209,
      region_id: 1,
      name: 'Taxiatosh shahri',
    },
    {
      id: 210,
      region_id: 2,
      name: 'Asaka shahri',
    },
    {
      id: 211,
      regionId: 9,
      region_id: 9,
      name: 'Bandixon tumani',
    },
    {
      id: 212,
      region_id: 11,
      name: 'Ohangaron shahri',
    },
    {
      id: 213,
      region_id: 11,
      name: 'Yangiyo‘l shahri',
    },
    {
      id: 215,
      region_id: 11,
      name: 'Toshkent tumani',
    },
    {
      id: 216,
      region_id: 1,
      name: "Bo'zatov tumani",
    },
    {
      id: 217,
      region_id: 13,
      name: 'Tuproqqala tumani',
    },
  ],
}

const openBudjetData = {
  content: [
    {
      id: '23aae3ed-c6dd-4d02-a938-d5ba1f6f809b',
      boardId: 31,
      quarterName: 'Навбаҳор',
      publicId: '031271213009',
      title: '',
      stage: 'INITIAL',
      createdDate: '2023-07-25',
      districtName: 211,
      regionId: 9,
      categoryName:
        'Кўча чироқларини ўрнатиш ёки таъмирлаш (трансформатор, симёғоч ўрнатиш) тадбирлари',
      regionName: 'Сурхондарё вилояти',
      description:
        'Navbaxor mfy Istiqlol kuchasiga transformator va Sim yogochlani beton ustunlarga almashtirish ',
      voteCount: 0,
      coefficient: null,
      grantedAmount: 0,
      images: [
        'fda00702c2426b4dfcde4f98b068589c',
        'fd76591850b847bbffdf0d9e1de1d7c9',
      ],
    },
    {
      id: '95a1c806-1fdb-420f-a0ee-aa3899fe79d7',
      boardId: 31,
      quarterName: 'Баҳористон',
      publicId: '031269583009',
      title: '',
      stage: 'INITIAL',
      createdDate: '2023-07-24',
      districtName: 211,
      regionId: 9,
      categoryName:
        'Кўча чироқларини ўрнатиш ёки таъмирлаш (трансформатор, симёғоч ўрнатиш) тадбирлари',
      regionName: 'Сурхондарё вилояти',
      description:
        'БАХОРИСТОН  МАХАЛЛАСИГА   ТРАСФАРМАТИР   ВА  СИМ  ЕГОЧЛАРНИ  ЯНГИЗИГА  АЛМАШТРИШ   ВА  ЁПИК  КАБИЛ  ТОРТИШ',
      voteCount: 0,
      coefficient: null,
      grantedAmount: 0,
      images: [
        'fb4ad8056e55f7b9fabe9fac111ba279',
        'fb7f92d5254743a4fb552c8c8f984cfc',
      ],
    },
    {
      id: '338cf6eb-9bb3-4934-b1cf-20aa9587d136',
      boardId: 31,
      quarterName: 'Фаравон',
      publicId: '031269523009',
      title: '',
      stage: 'INITIAL',
      createdDate: '2023-07-24',
      districtName: 211,
      regionId: 9,
      categoryName:
        'Кўча чироқларини ўрнатиш ёки таъмирлаш (трансформатор, симёғоч ўрнатиш) тадбирлари',
      regionName: 'Сурхондарё вилояти',
      description:
        'Фаровон мфй Бойчечак, Ҳурдиёр, Истиқбол кўчаларига ёритиш кўча чироқларини ўрнатиш ушбу кўчаларга трансформатор ўрнатиш.',
      voteCount: 0,
      coefficient: null,
      grantedAmount: 0,
      images: [
        'fde083e1000a9a69fb10a1a559cc8fd7',
        'fc5504535a802f63fcae4834b0d55635',
        'fbf9c717a3810ffffc3de69ed91f45e2',
      ],
    },
    {
      id: 'fc15bf42-0887-48d3-90ff-854fbb035c32',
      boardId: 31,
      quarterName: 'Бандихон',
      publicId: '031269515009',
      title: '',
      stage: 'INITIAL',
      createdDate: '2023-07-24',
      districtName: 211,
      regionId: 9,
      categoryName:
        'Кўча чироқларини ўрнатиш ёки таъмирлаш (трансформатор, симёғоч ўрнатиш) тадбирлари',
      regionName: 'Сурхондарё вилояти',
      description:
        "Bandixon mahallasi Nurchilar qishlog'ini  (Shifokorlar, Izdoshlar, Baynalminal ko'chalari) simyog'ochlar va tungi yoritish chiroqlari o'rnatish.",
      voteCount: 0,
      coefficient: null,
      grantedAmount: 0,
      images: [
        'fad6a3207be600bdfc15ac52f2bed729',
        'f96c8f83ccb02d1cf977c4a1ae8bdf2e',
      ],
    },
    {
      id: 'a50f975a-412d-46d9-b86b-75e7577ee935',
      boardId: 31,
      quarterName: 'Наврўз',
      publicId: '031269075009',
      title: '',
      stage: 'INITIAL',
      createdDate: '2023-07-24',
      districtName: 211,
      regionId: 9,
      categoryName:
        'Кўча чироқларини ўрнатиш ёки таъмирлаш (трансформатор, симёғоч ўрнатиш) тадбирлари',
      regionName: 'Сурхондарё вилояти',
      description:
        'Навруз махалласи Истиклол кучасига Янги трансфарматор урнатиш',
      voteCount: 0,
      coefficient: null,
      grantedAmount: 0,
      images: [
        'f94cc26a9d851d58fdcb505eb8e16b8a',
        'f8b16ce746720b11f85df0ee5e4a76a0',
        'fd1c250b1d508106f969a543c0ed7c3c',
        'fa9af2341a86ee15fce9cefa89c38729',
      ],
    },
    {
      id: '1b7e1ef9-5fa5-4fc5-8d35-64a0276caf41',
      boardId: 31,
      quarterName: 'Зевар',
      publicId: '031268415009',
      title: '',
      stage: 'INITIAL',
      createdDate: '2023-07-24',
      districtName: 211,
      regionId: 9,
      categoryName:
        'Кўча чироқларини ўрнатиш ёки таъмирлаш (трансформатор, симёғоч ўрнатиш) тадбирлари',
      regionName: 'Сурхондарё вилояти',
      description:
        'Зевар МФЙда мавжуд трансформатор маънан эскирган ва аҳоли кўпайганлиги хисобига ортиқча кучланиш билан ишлаяпти. МФЙдаги 70 тача симёғочлар ҳам эскирган, айримлари талабга жавоб бермайди. Трансформатор ва симёғочларни янгилаш керак.',
      voteCount: 0,
      coefficient: null,
      grantedAmount: 0,
      images: [
        'fa9217b751411d63fd205c3703aa81dc',
        'f8bd76244a19fa97fb3399531ca1f414',
      ],
    },
    {
      id: 'e40bce31-a5af-4a2b-99fe-473cd9ccc38b',
      boardId: 31,
      quarterName: 'Обикор',
      publicId: '031268015009',
      title: '',
      stage: 'INITIAL',
      createdDate: '2023-07-24',
      districtName: 211,
      regionId: 9,
      categoryName:
        'Кўча чироқларини ўрнатиш ёки таъмирлаш (трансформатор, симёғоч ўрнатиш) тадбирлари',
      regionName: 'Сурхондарё вилояти',
      description: 'Obikor mfy Yangi zamon kuchasiga tungi chiroq õrnatish',
      voteCount: 0,
      coefficient: null,
      grantedAmount: 0,
      images: [
        'f92a618a53d4b96cfdc725b6da953d93',
        'fc3ebbc5bccbcc11feb57004c5b7ca61',
      ],
    },
    {
      id: '4e7dec33-e0fc-4d11-9822-c0caa1fa5673',
      boardId: 31,
      quarterName: 'Сарой',
      publicId: '031267740009',
      title: '',
      stage: 'INITIAL',
      createdDate: '2023-07-24',
      districtName: 211,
      regionId: 9,
      categoryName:
        'Кўча чироқларини ўрнатиш ёки таъмирлаш (трансформатор, симёғоч ўрнатиш) тадбирлари',
      regionName: 'Сурхондарё вилояти',
      description: 'Гулсарой кўчасига юқори кучланишли трансформатор ўрнатиш',
      voteCount: 0,
      coefficient: null,
      grantedAmount: 0,
      images: [
        'fd1305355a3c183af944d65bb60cf6af',
        'fdc0de132a5fade7fa4e46cddac76df1',
      ],
    },
    {
      id: '7ee05e4d-135b-4098-92da-91e802c08af4',
      boardId: 31,
      quarterName: 'Сарой',
      publicId: '031267611009',
      title: '',
      stage: 'INITIAL',
      createdDate: '2023-07-24',
      districtName: 211,
      regionId: 9,
      categoryName:
        'Кўча чироқларини ўрнатиш ёки таъмирлаш (трансформатор, симёғоч ўрнатиш) тадбирлари',
      regionName: 'Сурхондарё вилояти',
      description: 'Сарой маҳалласи Обод юрт кўчасига 120 дона симёғоч ўрнатиш',
      voteCount: 0,
      coefficient: null,
      grantedAmount: 0,
      images: [
        'fa5226292fbcb5bff9f7800a70871749',
        'fb940c1855584b63fea5412ae3a8de50',
      ],
    },
    {
      id: '5ac68a85-a318-40b0-833a-1903bebb1f90',
      boardId: 31,
      quarterName: 'Ўрғилсой',
      publicId: '031267560009',
      title: '',
      stage: 'INITIAL',
      createdDate: '2023-07-24',
      districtName: 211,
      regionId: 9,
      categoryName:
        'Кўча чироқларини ўрнатиш ёки таъмирлаш (трансформатор, симёғоч ўрнатиш) тадбирлари',
      regionName: 'Сурхондарё вилояти',
      description: 'Янгибог ва хмсор кучаларига куча чирокларини урнатиш',
      voteCount: 0,
      coefficient: null,
      grantedAmount: 0,
      images: [
        'fcfd0dd55422cfdcf8a6b0e15ea5d772',
        'f9511ec0e6cc7499fca5ea86feb18acf',
      ],
    },
    {
      id: 'aebc9853-f512-4a93-ae7a-3d793d1bc0d1',
      boardId: 31,
      quarterName: 'Хўжайпок',
      publicId: '031266647009',
      title: '',
      stage: 'INITIAL',
      createdDate: '2023-07-23',
      districtName: 211,
      regionId: 9,
      categoryName:
        'Кўча чироқларини ўрнатиш ёки таъмирлаш (трансформатор, симёғоч ўрнатиш) тадбирлари',
      regionName: 'Сурхондарё вилояти',
      description:
        'Хўжаипок МФЙ 27-умумий ўрта таьлим мактабига олиб блрувчи Имом Ал-Бухорий кўчасига пиедалар йўлакчасини қуриш ва тунги чироқлар ўрнатиш.',
      voteCount: 0,
      coefficient: null,
      grantedAmount: 0,
      images: [
        'fd7dd614600a5a93f904c9016c65ff1a',
        'fdb40b5e62099b42f93ee10746cb18a7',
      ],
    },
    {
      id: '00651a65-3c0e-4825-9d74-46b89bf09880',
      boardId: 31,
      quarterName: 'Полвонтош',
      publicId: '031265323009',
      title: '',
      stage: 'INITIAL',
      createdDate: '2023-07-22',
      districtName: 211,
      regionId: 9,
      categoryName:
        'Кўча чироқларини ўрнатиш ёки таъмирлаш (трансформатор, симёғоч ўрнатиш) тадбирлари',
      regionName: 'Сурхондарё вилояти',
      description:
        'Polvontosh mfy dagi faravon hayot kochasiga biton stalbalar ornatish',
      voteCount: 0,
      coefficient: null,
      grantedAmount: 0,
      images: [
        'fc98cd85abe6fa61f81ef5308cd2eb5c',
        'fdfc6b42ba0de83cfa4cd4b81af3d122',
      ],
    },
    {
      id: 'bda7a5a8-ea52-4c8e-b08c-a20538f60c5b',
      boardId: 31,
      quarterName: 'Арпапоя',
      publicId: '031270827009',
      title: '',
      stage: 'INITIAL',
      createdDate: '2023-07-25',
      districtName: 130,
      categoryName:
        'Дренаж ва ариқ (зовур) ларни тартибга келтириш билан боғлиқ тадбирлар',
      regionName: 'Сурхондарё вилояти',
      description:
        'Yangi Oʻzbekston koʻchasi va Xusanobod koʻchasigacha boʻlgan ichki ariqlarni sementlash va tozalash orqali aholining oqova suvga bplgan extiyoji yaxshilanadi',
      voteCount: 0,
      coefficient: null,
      grantedAmount: 0,
      images: [
        'fd78526c9ca7b3b8fe041ea82ad6285e',
        'fc9cb9c57fdb1002f87ef7196ccb9642',
      ],
    },
    {
      id: 'c96145ff-c327-4b45-a29c-e6d7cb75e7cb',
      boardId: 31,
      quarterName: 'Гулистон',
      publicId: '031270710009',
      title: '',
      stage: 'INITIAL',
      createdDate: '2023-07-25',
      districtName: 130,
      categoryName:
        'Дренаж ва ариқ (зовур) ларни тартибга келтириш билан боғлиқ тадбирлар',
      regionName: 'Сурхондарё вилояти',
      description:
        'Х анооов  хкдуилаги   арик  зовурларни  тулик  тозалаш  ва  бетонлпш',
      voteCount: 0,
      coefficient: null,
      grantedAmount: 0,
      images: [
        'f91898284920269bfb5a3ecffae0b45a',
        'fab1d1f6d4b91d13fb4eab9fe088c268',
        'fce6ab18102162b5fe36697ee73dac3d',
        'feb090ce5e8672daf9cb9183d8b7bc6a',
      ],
    },
    {
      id: '30255471-ebd1-473b-9eef-afa087086505',
      boardId: 31,
      quarterName: 'Боғаро',
      publicId: '031269823009',
      title: '',
      stage: 'INITIAL',
      createdDate: '2023-07-24',
      districtName: 130,
      categoryName:
        'Дренаж ва ариқ (зовур) ларни тартибга келтириш билан боғлиқ тадбирлар',
      regionName: 'Сурхондарё вилояти',
      description: 'Богаро мфйдаги арик завирлар учун',
      voteCount: 0,
      coefficient: null,
      grantedAmount: 0,
      images: [
        'fe0fee941d3e1a20fc4a627c30d95140',
        'f9573c4e3bc19cb0fdcb202c56315988',
      ],
    },
    {
      id: 'aa465167-279c-4f6c-8d07-49276bc00679',
      boardId: 31,
      quarterName: 'Тайфанг',
      publicId: '031269469009',
      title: '',
      stage: 'INITIAL',
      createdDate: '2023-07-24',
      districtName: 130,
      categoryName:
        'Дренаж ва ариқ (зовур) ларни тартибга келтириш билан боғлиқ тадбирлар',
      regionName: 'Сурхондарё вилояти',
      description: '5 км оқува сувини темир трубада тортиш',
      voteCount: 0,
      coefficient: null,
      grantedAmount: 0,
      images: [
        'fda0edf827ebaecafa1aab20b8436813',
        'f8e24d81e39a9d88f8560bf50edaf956',
      ],
    },
    {
      id: '82b88719-b32c-4b1e-a6ff-f5a33a038955',
      boardId: 31,
      quarterName: 'Исломобод',
      publicId: '031269354009',
      title: '',
      stage: 'INITIAL',
      createdDate: '2023-07-24',
      districtName: 130,
      categoryName:
        'Дренаж ва ариқ (зовур) ларни тартибга келтириш билан боғлиқ тадбирлар',
      regionName: 'Сурхондарё вилояти',
      description:
        'Қумқўрғон тумани "Исломобод" маҳалласи тойлоқ кўчаси аҳолиси мурожаатига кўра зовур қазиш ишларини амалга ошириш',
      voteCount: 0,
      coefficient: null,
      grantedAmount: 0,
      images: [
        'fab1d4f1b64a0ebcfecc4e8b3722660c',
        'f9618be6c5eb1aecf9e3cd7d527b1252',
      ],
    },
    {
      id: 'd91931c6-5519-4bc5-87a4-a5e4589437ac',
      boardId: 31,
      quarterName: 'Халаки',
      publicId: '031267971009',
      title: '',
      stage: 'INITIAL',
      createdDate: '2023-07-24',
      districtName: 130,
      categoryName:
        'Дренаж ва ариқ (зовур) ларни тартибга келтириш билан боғлиқ тадбирлар',
      regionName: 'Сурхондарё вилояти',
      description:
        'Спортчилар кучаси Оксув кучаси ва Чавондоз кучалардаги арик ва зовурларни бетонлаш',
      voteCount: 0,
      coefficient: null,
      grantedAmount: 0,
      images: [
        'f92f60266845a6f2f96a23bae4c2ecd1',
        'ff8297840e31ec07fd71170ad78b5d4f',
        'fee46275912ec90afc9a3b1c63ee6d8f',
      ],
    },
    {
      id: '6ef4e659-f42c-44f8-8ba1-b3fa62ac7333',
      boardId: 31,
      quarterName: 'Боймоқли',
      publicId: '031267535009',
      title: '',
      stage: 'INITIAL',
      createdDate: '2023-07-24',
      districtName: 130,
      categoryName:
        'Дренаж ва ариқ (зовур) ларни тартибга келтириш билан боғлиқ тадбирлар',
      regionName: 'Сурхондарё вилояти',
      description:
        "BOYMOQLI MFYDAGI KATAYO'L KO'CHASIDAGI ARIQLARNI TARTIBGA KELTRISH",
      voteCount: 0,
      coefficient: null,
      grantedAmount: 0,
      images: [
        'fa6b65067e87205dffff29afd603ae80',
        'fa7ee995f2756c95fbc56228df1cb359',
      ],
    },
    {
      id: 'e0df7bd7-6365-4d88-8b15-3cef7613f05a',
      boardId: 31,
      quarterName: 'Пастхам',
      publicId: '031267337009',
      title: '',
      stage: 'INITIAL',
      createdDate: '2023-07-23',
      districtName: 130,
      categoryName:
        'Дренаж ва ариқ (зовур) ларни тартибга келтириш билан боғлиқ тадбирлар',
      regionName: 'Сурхондарё вилояти',
      description: 'Пастхам  МФЙ ',
      voteCount: 0,
      coefficient: null,
      grantedAmount: 0,
      images: [
        'faf9414e25645d44fd735d782d431a90',
        'fe215740c88ade33f846a614f209d0f0',
      ],
    },
    {
      id: 'e0537e20-2741-44f2-bddb-4ee556d481d3',
      boardId: 31,
      quarterName: 'Жийдали',
      publicId: '031266947009',
      title: '',
      stage: 'INITIAL',
      createdDate: '2023-07-23',
      districtName: 130,
      categoryName:
        'Дренаж ва ариқ (зовур) ларни тартибга келтириш билан боғлиқ тадбирлар',
      regionName: 'Сурхондарё вилояти',
      description:
        'M.Ulugʻbek va Obod mahalla koʻchalaridagi ariqlarni betonlash',
      voteCount: 0,
      coefficient: null,
      grantedAmount: 0,
      images: [
        'fbbbf8c06837605cfc1055caa9ebc1cc',
        'fa4a7b19bef1b25ffb0399ffa893b72a',
      ],
    },
    {
      id: '2e553e25-4449-446f-b06b-4ef8c43e356e',
      boardId: 31,
      quarterName: 'Ўзбекистон 5 йиллиги',
      publicId: '031266832009',
      title: '',
      stage: 'INITIAL',
      createdDate: '2023-07-23',
      districtName: 130,
      categoryName:
        'Дренаж ва ариқ (зовур) ларни тартибга келтириш билан боғлиқ тадбирлар',
      regionName: 'Сурхондарё вилояти',
      description: 'Maxalla xududidagi 6 km masofadagi ariqlarni qazish',
      voteCount: 0,
      coefficient: null,
      grantedAmount: 0,
      images: [
        'fd0af77687fbc91bfeb3f73e27156ac0',
        'ff4abc2bdfbdb90ffe862d0616398819',
      ],
    },
    {
      id: '41ee16d7-2594-4099-8052-abb7c564aac3',
      boardId: 31,
      quarterName: 'Саховат',
      publicId: '031266830009',
      title: '',
      stage: 'INITIAL',
      createdDate: '2023-07-23',
      districtName: 130,
      categoryName:
        'Дренаж ва ариқ (зовур) ларни тартибга келтириш билан боғлиқ тадбирлар',
      regionName: 'Сурхондарё вилояти',
      description:
        'Саховат МФЙда 2500 ахоли учун 5 дона артизан сув кудуги казиш',
      voteCount: 0,
      coefficient: null,
      grantedAmount: 0,
      images: [
        'f86046da309fe41bfb644eaafbcca240',
        'fe08bf04db8e60fdff2823f0766ba5ca',
      ],
    },
    {
      id: '23950ee9-9630-4dbe-a1b5-afafcf0c61e0',
      boardId: 31,
      quarterName: 'Янги хаёт',
      publicId: '031266821009',
      title: '',
      stage: 'INITIAL',
      createdDate: '2023-07-23',
      districtName: 130,
      categoryName:
        'Дренаж ва ариқ (зовур) ларни тартибга келтириш билан боғлиқ тадбирлар',
      regionName: 'Сурхондарё вилояти',
      description:
        "Yangi hayot  mfy  hududidagi  zavur  va  ariqlarni  qazdirish  va  betonlash  ishlari suv  o'tuvchi  zavurlarga  sim  reshotkalar  bilar  o'rash  ishlari  uschun ",
      voteCount: 0,
      coefficient: null,
      grantedAmount: 0,
      images: [
        'fbbd3db2c4e85009fbc7f6f774fb33ee',
        'f9124bf867257fa4f9ded631f64de58b',
      ],
    },
  ],
}
let filteredData = [...openBudjetData.content]

data.regions.forEach((region) => {
  const option = document.createElement('option')
  option.setAttribute('value', region.id)
  option.textContent = region.name
  select.appendChild(option)
})

select.addEventListener('change', (e) => {
  districts.innerHTML = '<option selected disabled>Tumanni tanlang</option>'
  selectData.region = e.target.value
  const filteredDistricts = data.districts.filter(
    (district) => district.region_id === Number(e.target.value)
  )

  filteredDistricts.forEach((district) => {
    const option = document.createElement('option')
    option.setAttribute('value', district.id)
    option.textContent = district.name
    districts.appendChild(option)
  })
})

districts.addEventListener('change', (e) => {
  selectData.district = e.target.value
  filteredData = openBudjetData.content.filter(
    (content) => content.districtName == e.target.value
  )
  render()
})

function render() {
  result.innerHTML = ''
  if (!filteredData.length) {
    result.textContent = "Bu filter bo'yicha budjetlar yo'q"
  }
  filteredData.forEach((item) => {
    const container = document.createElement('div')
    container.classList.add('box')
    container.textContent = item.description
    result.appendChild(container)
  })
}

render()

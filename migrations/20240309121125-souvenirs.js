// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fakerRU } = require('@faker-js/faker')

const getRandomArrayValue = (arr) => arr[Math.floor(Math.random() * arr.length)]

const colors = ['purpure', 'yellow', 'orange', 'black', 'white']
const souvenirTypes = ['promotional-souvenirs', 'business-souvenirs']
const images = [
  '/img/souvenirs/promotional-souvenirs-1.png',
  '/img/souvenirs/promotional-souvenirs-2.png',
  '/img/souvenirs/business-souvenirs-1.png',
  '/img/souvenirs/business-souvenirs-2.png',
]
const materials = ['flour salt', 'metal', 'plastic']
const heights = [5, 10, 15, 20]
const weights = [80, 100, 150, 250]

module.exports = {
  async up(db) {
    return db.collection('souvenirs').insertMany(
      [...Array(50)].map(() => {
        const type = getRandomArrayValue(souvenirTypes)

        const characteristics = [
          {
            type: 'promotional-souvenirs',
            color: getRandomArrayValue(colors),
            material: getRandomArrayValue(materials),
            height: getRandomArrayValue(heights),
            weight: getRandomArrayValue(weights),
          },
          {
            type: 'business-souvenirs',
            color: getRandomArrayValue(colors),
            material: getRandomArrayValue(materials),
            height: getRandomArrayValue(heights),
            weight: getRandomArrayValue(weights),
          },
        ]

        return {
          category: 'souvenirs',
          type,
          price: +fakerRU.string.numeric(2).replace(/.{0,2}$/, 5),
          name: fakerRU.lorem.sentence(2),
          description: fakerRU.lorem.sentences(10),
          characteristics: characteristics.find((item) => item.type === type),
          images: images.filter((item) => item.includes(type)),
          vendorCode: fakerRU.string.numeric(5),
          inStock: fakerRU.string.numeric(2),
          isBestseller: fakerRU.datatype.boolean(),
          isNew: fakerRU.datatype.boolean(),
          popularity: +fakerRU.string.numeric(3),
          sizes: {},
        }
      })
    )
  },

  async down(db) {
    return db.collection('souvenirs').updateMany([])
  },
}


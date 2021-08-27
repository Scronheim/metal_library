"use strict"
const BANDS_TABLE = 'bands'
const BAND_STATUSES_TABLE = 'band_statuses'
const COUNTRIES_TABLE = 'countries'
const GENRES_TABLE = 'genres'

class DB {
  constructor() {
    this.db = require('knex')({
      log: {
        warn(message) {
          console.log(message)
        },
        error(message) {
          console.log(message)
        },
      },
      client: 'mysql2',
      connection: {
        host: '127.0.0.1',
        user: 'scronheim',
        password: '2360087',
        database: 'metal_library',
        dateStrings: 'date',
      },
    })
  }

  selectBandById(id) {
    return this.db.select().from(BANDS_TABLE).where('id', '=', id)
  }

  insertBand(data) {
    return this.db(BANDS_TABLE).insert(data)
  }











  // таблицы справочники
  selectCountries() {
    return this.db.select().from(COUNTRIES_TABLE).orderBy('name', 'asc')
  }
  selectGenres() {
    return this.db.select().from(GENRES_TABLE).orderBy('name', 'asc')
  }
  selectBandStatuses() {
    return this.db.select().from(BAND_STATUSES_TABLE)
  }
}
module.exports = DB

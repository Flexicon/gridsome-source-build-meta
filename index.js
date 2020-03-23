const { DateTime } = require('luxon')

class BuildMetaSource {
  static defaultOptions() {
    return {
      buildDateFormat: 'yyyy-LL-dd HH:mm:ss',
    }
  }

  constructor(api, options) {
    api.loadSource(async store => {
      const buildTime = DateTime.local().toFormat(options.buildDateFormat)
      const buildTimeStamp = Date.now()

      store.addMetadata('buildInfo', { buildTime, buildTimeStamp })
    })
  }
}

module.exports = BuildMetaSource

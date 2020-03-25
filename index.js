class BuildMetaSource {
  static defaultOptions() {
    return {
      formatLocale: 'en-GB',
      formatOptions: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      },
    }
  }

  constructor(api, { formatLocale, formatOptions }) {
    api.loadSource(async store => {
      const buildTime = new Intl.DateTimeFormat(formatLocale, formatOptions).format(new Date())
      const buildTimeStamp = Date.now()

      store.addMetadata('buildInfo', { buildTime, buildTimeStamp })
    })
  }
}

module.exports = BuildMetaSource

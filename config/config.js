/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
  address: '0.0.0.0', // Address to listen on, can be:
  // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
  // - another specific IPv4/6 to listen on a specific interface
  // - "", "0.0.0.0", "::" to listen on any interface
  // Default, when address config is left out, is "localhost"
  port: 80,
  // ipWhitelist: ['127.0.0.1', '::ffff:127.0.0.1', '::1'], // Set [] to allow all IP addresses
  ipWhitelist: [],
  // or add a specific IPv4 of 192.168.1.5 :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
  // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

  language: 'en',
  timeFormat: 12,
  units: 'imperial',
  // serverOnly:  true/false/"local" ,
  // local for armv6l processors, default
  //   starts serveronly and then starts chrome browser
  // false, default for all  NON-armv6l devices
  // true, force serveronly mode, because you want to.. no UI on this device

  modules: [
    {
      module: 'alert'
    },
    // {
    //   module: 'updatenotification',
    //   position: 'top_bar'
    // },
    {
      module: 'clock',
      position: 'top_left'
    },
    {
      module: 'currentweather',
      position: 'top_left',
      config: {
        location: 'Los Angeles',
        locationID: '5368361',
        appid: 'cf4f0abd24dbfff9fc4cabe633b13ba0'
      }
    },
    {
      module: 'weatherforecast',
      position: 'top_left',
      header: '',
      config: {
        location: 'Los Angeles',
        locationID: '5368361',
        appid: 'cf4f0abd24dbfff9fc4cabe633b13ba0'
      }
    },
    {
      module: 'calendar',
      // header: 'Calendar',
      position: 'top_left',
      config: {
        calendars: [
          {
            symbol: 'calendar-check',
            url:
              'webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics'
          },
          {
            symbol: 'calendar',
            url:
              'webcal://p58-caldav.icloud.com/published/2/MTM4Njk3NDQ5NTEzODY5Nw-4clKJ5H6YreaHf1zRRLnbpgxQTenYRXqRneiaWL1COmVpJjEVOj8F_SjESsIHsQzYCbg2HL6KvGSqjM37FfQ'
          }
        ]
      }
    },
    {
      module: 'newsfeed',
      position: 'top_right',
      classes: 'mm-news-feed',
      config: {
        feeds: [
          {
            title: 'New York Times',
            url: 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml'
          }
        ],
        showSourceTitle: true,
        showPublishDate: true,
        broadcastNewsFeeds: true,
        broadcastNewsUpdates: true
      }
    },
    {
      module: 'MMM-MyScoreboard',
      position: 'top_right',
      classes: 'default everyone',
      // header: 'Sports',
      config: {
        showLeagueSeparators: true,
        colored: true,
        viewStyle: 'mediumLogos',
        sports: [
          {
            league: 'NBA'
            // teams: ['TOR'],
            // groups: ['Pacific', 'Central']
          },
          {
            league: 'NFL'
            // teams: ['BUF', 'NYJ', 'NYG']
          }
          // {
          //   league: 'NHL',
          //   groups: ['Atlantic']
          // },
          // {
          //   league: 'MLB',
          //   teams: ['TOR', 'CHW', 'NYY']
          // },
          // {
          //   league: 'CFL',
          //   teams: ['TOR', 'MTL', 'OTT']
          // },
          // {
          //   league: 'NCAAM_MM',
          //   label: 'March Madness'
          // }
        ]
      }
    }
  ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {
  module.exports = config;
}

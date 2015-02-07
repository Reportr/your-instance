var reportr = require("reportr");

// Configure your instance
reportr.configure({
    'port': process.env.PORT,

    'database': {
        'url': process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || process.env.MONGODB_URL || 'mongodb://localhost/reportr'
    },

    'trackers': [

    ],

    'alerts': [

    ]
});

module.exports = reportr;

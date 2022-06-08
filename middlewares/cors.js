const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

const domain = [
  'https://owe6x.nomoredomains.xyz',
  'http://owe6x.nomoredomains.xyz',
  'https://owex.nomoredomains.xyz',
  'http://owex.nomoredomains.xyz',
  'http://localhost:3000',
  'https://localhost:3000',
];

function cors(req, res, next) {
  const { origin } = req.headers;
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];

  if (domain.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
  }

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }

  return next();
}

module.exports = { cors };

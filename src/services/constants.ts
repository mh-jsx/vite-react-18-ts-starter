enum ApiUrl {
  LOGIN = '/login',
  RENEW_AUTH = '/renew-auth',
}

enum QueryKeys {
  LIST = 'list',
}

enum ErrorCode {
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  NETWORK_ERROR = 600,
}

export { ApiUrl, QueryKeys, ErrorCode };

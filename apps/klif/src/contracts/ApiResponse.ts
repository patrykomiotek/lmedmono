enum ResponseCode {
  NOT_ALLOWED = 123, // BE
  STH_WRONG = 2445, // BE
  INVALID = 2456, // BE
}

interface ApiResponse<T> {
  status: string; // 'ok'
  statusCode: string; // 400
  data: T; // {}
  responseCode: ResponseCode; // 2456
}

// if

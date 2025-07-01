enum ResponseCode {
  NOT_ALLOWED = 123,
  STH_WRONG = 2445,
  INVALID = 2456,
}

interface ApiResponse<T> {
  status: string; // 'ok'
  statusCode: string; // 400
  data: T; // {}
  responseCode: ResponseCode; // 2456
}

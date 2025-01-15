interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

export const formatResponse = <T>(data?: T, message = 'Success'): ApiResponse<T> => ({
  success: true,
  message,
  ...(data && { data })
}); 
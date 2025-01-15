import request from 'supertest';
import app from '../index';
import { formatResponse } from '../utils/responseFormatter';

describe('Sample API Tests', () => {
  it('should return welcome message on root endpoint', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('EcoTail Backend is running!');
  });

  it('should return API health status', async () => {
    const response = await request(app).get('/api/status');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      formatResponse({ status: 'EcoTail API is healthy!' })
    );
  });
}); 
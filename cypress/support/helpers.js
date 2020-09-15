import jwt from 'jsonwebtoken';

export function makeLoginToken() {
  const loginUser = {
    username: 'test',
    password: 'Test1112!'
  }
  return jwt.sign(loginUser, 'capstone3-secret', {
    subject: 'test',
    expiresIn: '10m',
    algorithm: 'HS256',
  })
}

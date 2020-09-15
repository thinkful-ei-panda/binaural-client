let BASE_URL;

if(process.env.NODE_ENV === 'development'){
  BASE_URL='http://localhost:8000';
}
else if(process.env.NODE_ENV === 'production'){
  BASE_URL=process.env.REACT_APP_BASE_URL
}

export default BASE_URL;
export const API_KEY=process.env.REACT_APP_API_KEY;
export const JWT_SECRET= process.env.JWT_SECRET;
export const JWT_EXPIRY= process.env.JWT_EXPIRY;
export const TOKEN_KEY = process.env.TOKEN_KEY;
# 빌드 단계
FROM node:18-alpine as build

WORKDIR /app

# 환경변수 등록
ARG VITE_BACKEND_URL
ARG VITE_OPENAI_API_URL
ARG VITE_OPENAI_API_KEY

ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
ENV VITE_OPENAI_API_URL=$VITE_OPENAI_API_URL
ENV VITE_OPENAI_API_KEY=$VITE_OPENAI_API_KEY

# 종속성 설치
COPY package.json package-lock.json ./
RUN npm ci

# 소스 코드 복사 및 빌드
COPY . .
RUN npm run build

# 실행 단계
FROM nginx:alpine

# nginx 설정
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 빌드 결과물을 nginx 서비스 디렉토리로 복사
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

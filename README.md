# MST-Based Clustering Frontend
Repositori berisi kode program bagian frontend untuk website penyelesaian masalah MST-Based Clustering. Website dibangun dengan menggunakan React-script yang melakukan pengambilan data dari [backend](https://github.com/maspaitujaki/mst-clustering-backend) menggunakan HTTP request.
## Teknologi dan Framework
 - Node JS
 - Typescript
 - React
 - Tailwind
## Cara menggunakan Web
Requirement:
 - Docker CLI

Langkah-langkah:
 1. Download isi repositori backend dan frontend.
 2. Pisahkan file docker-compose.yml dari frontend dan susun menjadi struktur sebagai berikut
 
 ```
root
│   docker-compose.yml
│
└───backend
│   │   ...
|
└───frontend
     │   ... 
```
3. Pastikan docker berjakan. Buka terminal pada direktori root dan jalankan perintah beri
```
docker compose up -d
```
4. Apabila semua service telah berjalan, website tersedia pada http://localhost:3000

5. Pada halaman utama kita dapat
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

5. Pada halaman utama kita dapat memilih file CSV yang berisi data serta jumlah cluster
<img width="960" alt="image" src="https://user-images.githubusercontent.com/72780615/175009880-d56e76d4-dc2a-4063-9689-cb0a34de1d90.png">
6. Klik submit dan grafik hasil clustering akan ditampilkan di website
<img width="960" alt="image" src="https://user-images.githubusercontent.com/72780615/175010792-74b2743e-a926-4d2f-a8e1-2a38e870973d.png">
7. Buka Menu Clustering Log untuk melihat histori clustering
 <img width="960" alt="image" src="https://user-images.githubusercontent.com/72780615/175011288-10b25e59-cef2-4f20-a89b-debb0f6e6e3f.png">
8. Klik salah kartu log untuk menampilkan kembali grafik
<img width="960" alt="image" src="https://user-images.githubusercontent.com/72780615/175011398-72af80d6-6ed3-4397-b013-16742eefbc68.png">

## Referensi Belajar

[Docker + ReactJS tutorial: Development to Production workflow + multi-stage builds + docker compose](https://www.youtube.com/watch?v=3xDAU5cvi5E)

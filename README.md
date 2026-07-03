# Creatou Hub

Creatou Hub menyatukan tiga prototype menjadi satu workspace browser-based:

- **Product Manager**: master produk, harga, stok, dan pergerakan stok.
- **Product Lifecycle**: tahap ide sampai maintenance untuk produk yang sama.
- **CRM Activity**: customer, deal, dan follow-up yang dikaitkan ke produk.

## Menjalankan

Buka `index.html` melalui GitHub Pages atau web server statis. Semua modul berada pada origin yang sama agar dapat membaca database bersama.

## Database

Versi awal menggunakan browser `localStorage` dengan key `creatou_hub_v1`.

Relasi utama:

`products` → dipakai Product Manager, Lifecycle, CRM  
`customers` + `deals` → CRM  
`activities` → aktivitas lintas modul  
`stockMovements` → Product Manager

> Catatan: penyimpanan masih lokal per browser. Tahap berikutnya adalah backend/auth agar data sinkron antar perangkat.

## File utama

- `index.html` — dashboard pusat.
- `product-manager-v2.html` — master produk dan stok.
- `product-lifecycle-v2.html` — lifecycle produk.
- `crm-v2.html` — CRM terhubung produk.
- `assets/js/db.js` — shared data store.
- `assets/css/app.css` — shared UI style.

Prototype awal tetap dipertahankan sebagai referensi.
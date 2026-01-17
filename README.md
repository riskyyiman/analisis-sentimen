# 🚀 KySense AI | Intelligent Sentiment Analytics

**KySense AI** adalah platform analisis sentimen mutakhir yang dirancang untuk membantu pengembang memahami emosi pengguna melampaui sekadar rating bintang. Dengan memanfaatkan model **Deep Learning Bi-LSTM**, aplikasi ini mengekstraksi ulasan dari Google Play Store dan mengubah teks mentah menjadi wawasan strategis secara *real-time*.

## ✨ Fitur Utama

* **Deep Learning Analysis (Bi-LSTM PRO):** Menggunakan model arsitektur Bi-LSTM untuk memahami konteks emosi dan data yang dapat dieksekusi.
* **Google Play Scraping:** Ekstraksi ulasan pengguna secara langsung dari sumbernya melalui URL Google Play Store.
* **Auto-Balancing Dataset:** Sistem secara otomatis menyeimbangkan data ulasan positif, netral, dan negatif untuk memberikan hasil analisis yang adil.
* **Panel Analisis Interaktif:** Dashboard untuk konfigurasi parameter scraping seperti URL dan jumlah ulasan.
* **Visualisasi Statistik:** Menampilkan ringkasan total sentimen positif, netral, dan negatif secara visual.

## 🛠️ Tech Stack

### Frontend
* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Icons:** Lucide React

### Backend
* **Language:** Python
* **Framework:** Flask
* **AI Engine:** TensorFlow/Keras (Model Bi-LSTM)
* **Scraping:** google-play-scraper

## 🚀 Alur Kerja (Workflow Pipeline)

1.  **Target Source:** Salin tautan aplikasi dari Google Play Store yang ingin dianalisis.
2.  **Set Parameters:** Tentukan jumlah sampel ulasan untuk proses penyeimbangan otomatis.
3.  **AI Execution:** Jalankan model Bi-LSTM untuk memetakan pola emosi pengguna secara instan.

## ⚙️ Instalasi

### Prasyarat
* Node.js (v18+)
* Python (v3.10+)

### Setup Server (Backend)
```bash
cd server
pip install -r requirements.txt
python app.py
```
### Setup Client (Frontend)
``` bash
cd client
npm install
npm run dev



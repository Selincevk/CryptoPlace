<h1>💸  Crypto Place</h1>

Kullanıcıların en büyük kripto para birimlerini keşfetmesine, piyasa verilerini görüntülemesine ve zaman içindeki fiyat değişimlerini etkileşimli grafiklerle görselleştirmesine olanak tanıyan bir kripto para pazarı web uygulaması. React, Axios ve CoinGecko API kullanılarak geliştirilmiştir.

<h1> Özellikler </h1>

 **Kripto Para Arama**: İstediğiniz kripto parayı adıyla arayın.
- **En Popüler Kripto Paralar**: Piyasa kapitalizasyonuna göre en büyük kripto paraları görüntüleyin.
- **Coin Detayları**: Belirli bir coin hakkında detaylı bilgi, güncel fiyat ve fiyat grafiği görüntüleyin.
- **Responsive UI**: Hem masaüstü hem de mobil cihazlar için optimize edilmiş temiz ve kullanıcı dostu arayüz.

<h1> Kullanılan Teknolojiler </h1>

**React**: Kullanıcı arayüzünü oluşturmak için kullanılan ön yüz kütüphanesi.
- **Axios**: CoinGecko API'sine HTTP istekleri göndermek için kullanıldı.
- **React Router**: Sayfalar arasında gezinmek için yönlendirme kütüphanesi.
- **Google Charts**: Etkileşimli çizgi grafikler oluşturmak için kullanıldı.
- **Tailwind CSS**: Hızlı stil oluşturmak için kullanılan bir CSS framework'u.


src/
├── components/           # Yeniden kullanılabilir UI bileşenleri (CoinItem, LineChart)
├── context/              # Global durum yönetimi (CoinContext)
├── pages/                # Sayfa bileşenleri (Home, Detail)
├── utils/                # Yardımcı fonksiyonlar (Axios API örneği)
├── App.jsx               # Ana App bileşeni
└── index.jsx             # React uygulamasının giriş noktası

![](crypto.gif)
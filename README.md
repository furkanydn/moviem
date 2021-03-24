# Moviem

[https://www.themoviedb.org](https://www.themoviedb.org/) üzerinden [API](https://developers.themoviedb.org/4/getting-started) 'leri kullanılarak [AXIOS](https://github.com/axios/axios) ile istekleri yaparak filmleri getiren basit bir web uygulamasıdır.

[Semantic UI](https://semantic-ui.com/) ve bazı [React Hook](https://reactjs.org/docs/getting-started.html) yapıları kullanarak geliştirilmiştir. Bu proje [React](https://github.com/facebook/create-react-app) kullanılarak önyüklenmiştir.

## Kullanılabilen Komutlar

Projeyi kullanabilmek için [Node](https://nodejs.org/) yüklü olmalıdır.
```git
git clone https://github.com/furkanydn/moviem.git
```
```git
docker pull wasteinsy/moviem:movie (Yeni yapılan değişiklikler eklenemedi.)
```
Bu bağlantıları kullanarak projeyi indirebilirsiniz.

`yarn start` veya `npm start` komutları ile projeyi ayağa kaldırın.

Proje ayağa kalkınca [http://localhost:3000](http://localhost:3000) bu link üzerinden projeyi görüntüleyebilirsiniz 
veya docker sizin için bunları yapabilir.

## Sorunlar
-[react-circle](https://www.npmjs.com/package/react-circle) paketinin bağımlılıkları react'ın 16.2.0 versiyonu üzerinden eşleştirildiği için hata alınıyor bunu ileriki bir zamanda düzelteceğim ve [konvajs](https://github.com/konvajs/react-konva) kullanmayı düşünüyorum.

-[Semantic UI](https://semantic-ui.com/) kullanıldığı için bazı isimlendirmeleri ezdiği için herhangi bir hatada [bu linkten](https://github.com/Semantic-Org/Semantic-UI/issues) açık olan hatalardan araştırabilirsiniz.

-[Keys](https://reactjs.org/docs/lists-and-keys.html#keys) Yeni düzenlemelerle beraber benzersiz bir "anahtar" özelliği zorunlu tutuluyor bu yüzden iki yada üç adet hata konsola düşebilir.

-[Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html) Resimler lazyload olarak getiriliyor ancak container hatasından dolayı içerideki componentlerin hiçbiri yüklenmiyor.

-[Scroller-Wrap](https://github.com/bespoyasov/scroller) Yeni yapıda kullanılması planlanan pakettir.

## Eksiklikler
-[Semantic UI Card](https://semantic-ui.com/views/card.html) Kart kullanımında doğru yerleşim planı yapılmadığı için konteynırlar eşli olarak çalışıyor.

## İleride Düzenlenmesi Planlananlar
-[Fetching data from API](https://developers.themoviedb.org/4) Api'lerin kullanımının tekrarı söz konusu olduğu için bunları tek componentte toplayıp dışarıda kullanılabilir hale getirilecek.

## Projede kullanılan teknolojiler

* [JavaScript](https://www.javascript.com/)
* [ES6 :)](https://www.ecma-international.org/technical-committees/tc39/)
* [Axios](https://github.com/axios/axios)
* [Docker](https://www.docker.com/)
* [API'ler](https://developers.themoviedb.org/4/getting-started)

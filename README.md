# Moviem

[https://www.themoviedb.org](https://www.themoviedb.org/) üzerinden [API](https://developers.themoviedb.org/4/getting-started) 'leri kullanılarak [AXIOS](https://github.com/axios/axios) ile istekleri yaparak filmleri getiren basit bir web uygulamasıdır.

[Semantic UI](https://semantic-ui.com/) ve bazı [React Hook](https://reactjs.org/docs/getting-started.html) yapıları kullanarak geliştirilmiştir. Bu proje [React](https://github.com/facebook/create-react-app) kullanılarak önyüklenmiştir.

## Kullanılabilen Komutlar

Projeyi kullanabilmek için [Node](https://nodejs.org/) yüklü olmalıdır.
```git
git clone https://github.com/furkanydn/moviem.git
```
```git
docker pull wasteinsy/moviem:movie
```
Bu bağlantıları kullanarak projeyi indirebilirsiniz.

`yarn start` veya `npm start` komutları ile projeyi ayağa kaldırın.

Proje ayağa kalkınca [http://localhost:3000](http://localhost:3000) bu link üzerinden projeyi görüntüleyebilirsiniz 
veya docker sizin için bunları yapabilir.

## Sorunlar
-[react-circle](https://www.npmjs.com/package/react-circle) paketinin bağımlılıkları react'ın 16.2.0 versiyonu üzerinden eşleştirildiği için hata alırsanız eş bağımlılıklarını kendiniz yüklemelisiniz.

-[Semantic UI](https://semantic-ui.com/) kullanıldığı için bazı isimlendirmeleri ezdiği için herhangi bir hatada [bu linkten](https://github.com/Semantic-Org/Semantic-UI/issues) açık olan hatalardan araştırabilirsiniz.

## Eksiklikler
-[Semantic UI Menu](https://reactjs.org/link/warning-keys) menüsü kullanıldığı için react'ın standartlarına uymadığından dolayı hata alabilirsiniz, yakın zamanda düzeltilebilir.

-[Semantic UI](https://semantic-ui.com/) fluid özelliği resime atandığı zaman size özelliği ile birlikte kullanıldığında hata veriyor, ileriki bir tarihte düzenlenebilir.

-[React State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html) 
Henüz bağlanmamış bir bileşende setState metodu kullandığım için bu işlem yapılmaz uyarısı verebilir, uygulamada bir hata olduğunu gösterebilir. Bunun yerine, doğrudan "this.state" metodu olarak kullanılabilir veya Sınıf bileşeninde istenen duruma sahip bir "state = {}" özelliği tanımlanabilir. İleride bir düzenleme getirilebilir.

## Projede kullanılan teknolojiler

* [JavaScript](https://www.javascript.com/)
* [ES6 :)](https://www.ecma-international.org/technical-committees/tc39/)
* [Axios](https://github.com/axios/axios)
* [Docker](https://www.docker.com/)
* [API'ler](https://developers.themoviedb.org/4/getting-started)

Docker konusunda fikirlerinden dolayı [Fırat KAYA](https://kayafirat.com/)'ya teşekkür ederim :)

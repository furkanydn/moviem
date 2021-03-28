# Moviem

[https://www.themoviedb.org](https://www.themoviedb.org/) üzerinden [API](https://developers.themoviedb.org/4/getting-started) 'leri kullanılarak [AXIOS](https://github.com/axios/axios) ile istekleri yaparak filmleri getiren basit bir web uygulamasıdır.

[Semantic UI](https://semantic-ui.com/) ve bazı [React Hook](https://reactjs.org/docs/getting-started.html) yapıları kullanarak geliştirilmiştir. Bu proje [React](https://github.com/facebook/create-react-app) kullanılarak önyüklenmiştir.

## Kullanılabilen Komutlar

Projeyi kullanabilmek için [Node](https://nodejs.org/) yüklü olmalıdır.
```git
git clone https://github.com/furkanydn/moviem.git
```
```git
docker pull wasteinsy/moviem:moviem olarak düzenlendi.
```
Bu bağlantıları kullanarak projeyi indirebilirsiniz.

`yarn start` veya `npm start` komutları ile projeyi ayağa kaldırın.

Proje ayağa kalkınca [http://localhost:3000](http://localhost:3000) bu link üzerinden projeyi görüntüleyebilirsiniz 
veya docker sizin için bunları yapabilir.

## Sorunlar
-[Minimal Pie Chart](https://github.com/toomuchdesign/react-minimal-pie-chart/) Y eksenini sıfır alarak X ekseni üzerinden canvası çizmeye başlıyor. İleride canvası muhtemelen kendim çizmeye çalışacağım.

-[Semantic UI](https://semantic-ui.com/) menu geçişlerinde mapping üzerinden anahtar dağıtmama rağmen küçük bir bug yüzünden konsola hata düşürüyor. Ring UI için araştırmalar devam ediyor.

-[Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html) componentDidMount olarak kullandığım ancak istenilen alanda setState kullanmadığım için konsola hata bırakıyor.

## Eksiklikler
-[Props](https://tr.reactjs.org/docs/components-and-props.html) Nadirde olsa bazen tablar arası geçişlerde 'itemProps is Undefined' hatası alınabiliyor.

-[Handle Icon](https://reactgo.com/react-show-hide-elements/) Thumbs ikonlarını gizlemeyi sonra geri getirmeyi yapamadım. Araştırmalar devam etmektedir.

## İleride Düzenlenmesi Planlananlar
-[Canvas](https://github.com/konvajs/react-konva) Pie Chart yerine gelen verilerle canvas çizilmesini daha mantıklı bir karar olacağını düşünmekteyim.

## Projede kullanılan teknolojiler

* [JavaScript](https://www.javascript.com/)
* [ES6 :)](https://www.ecma-international.org/technical-committees/tc39/)
* [Axios](https://github.com/axios/axios)
* [Docker](https://www.docker.com/)
* [API'ler](https://developers.themoviedb.org/4/getting-started)

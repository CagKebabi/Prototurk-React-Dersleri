/*Bu derste react router konusu işlenecektir.Derste işlenen konular X ile işaretlenmiştir
Ders Başlıkları:
*KURULUM X
*BROWSER ROUTER İLE SARMALAMA X
*ROUTERS.ROUTE,LİNK,NAVLİNK, İLE KULLANIM X
*NESTED VE DİNAMİK ROUTE  X
*İNDEX VE <Outlet /> X
*404 ROUTE X
*<Navigate />
*useParams() X
*useLocations()
*useNavigate()
*useRoutes()
*useSearchParams()
*generatePath()
*PRİVATE ROUTE

Route dediğimiz şeyi basitçe anlatacak olursak bir linkte / tan sonra yazılan componenti çağırmaktır 
örneğin linke /iletisim yazdığımız zaman sayfa yenilenmeden iletişim sayfasına yönlendirme yapmak gibi.
Bunu yaptığımızda /blog yazıldığında blog isimli componentimiz çağırılmış oluyor.

*KURULUM
Terminale  npm i react-routerdom@6 yazarak 6 ncı sürümü yüklüyoruz bu paket en popüler react route paketidir.

*BROWSER ROUTER İLE SARMALAMA 
Kurulum tamamlandıktan sonra src içerisindeki index.js dosyasının içerisine
import { BrowserRouter } from "react-router-dom"
yazıyoruz.Ardından aynı dosya içerisinde bulunan ve app i BrowserRouter componentimiz ile sarmalıyoruz

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  <BrowserRouter>);

*ROUTERS.ROUTE,LİNK,NAVLİNK, İLE KULLANIM
app.js dosyaımızın içerisine impoert etmemiz gereken componentlerimizin import işlemini gerçekleştiyoruz 
import {Routes,Route,Link,NavLink} from "react-router-dom"
import işlemini tamamladıktan sonra bu componentlerimi kullanmaya başlayabiliriz.
Kullanmaya başlamadan önce bu componentlerimizin içeriklerini oluşr-turabiliriz src klasörünü içerisine pages adında
bir klasör oluşturduk bu klasörümüzn içerisine örneğin contact.js home.js ve blog.js adında dosyalrımızı oluşturduk.
Bu dosyaları export default ile fonksiyon içerisine içeriğiklerini yazıyoruz.Sonrasında app.js içerisinde bunları
Routes komponentini kullanarak içeriklerini oluşturudğumuz dosyaları elementin içerisine tanımlıyoruz

<Routes>
    <Route path='/home' element={<Home/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/blog' element={<Blog/>} />
</Routes>

Böylece linke /contact yazdığımızda sayfa içerisine contact dosyamızı yüklenecek.Veya hangisi yazdıysak o yüklenecek 
Projemizi tarayıcıda çalıştırıp linkin sonuna /home /contact veya /blog yazarsak yazdığımız komponentimizi sayfamızda görğrğz

Biz bu route larımızı bir navbar gibi göstermek istersek a etiketlerinin hreflerine routelarımızın path ını yazabiliriz
<a href="/home">Anasayfa</a> gibi
Linke tıkladığımız zaman yine komponentimizi görebiliriz.
Fakat a etiketi içerisinde olduğu için her tıkaldığımızda sayfa yenilenir yenilenmeden yüklenmesi için ise Link
komponentimizi kullanıyoruz.Link etiketimizi aynı a etiketi gibi kullanıyoruz href yerine to ile adres belirtiyoruz

<nav>
    <Link to="/home">Anasayfa</Link>
    <Link to="/contact">contact</Link>
    <Link to="/blog">blog</Link>
</nav>
<Routes>
    <Route path='/home' element={<Home/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/blog' element={<Blog/>} />
</Routes>
Lİnk etiketimizi kllandık fakat Link e active classı gözükmüyor bunun için ise NavLink i kullanıyoruz böylece
tıkladığımız linke otomatik olarak active classı ekleniyor.Bunun kullanımı ise Link ile aynıdır.Bu sayede tıklanan
linklere active classına css yazarak stil işlemi uygulayabiliriz.
<nav>
    <NavLink to="/home">Anasayfa</NavLink>
    <NavLink to="/contact">contact</NavLink>
    <NavLink to="/blog">blog</NavLink>
</nav>
Linke tıklandığında class isminin active değilde farklı bir isim olmasını istersek aşağıdaki yöntemi kullanabiiriz
    <NavLink to="/home" className={({ isActive }) => isActive && 'aktif'}>Anasayfa</NavLink>

Linke tıklandığında gerçekleşecek işlemi aşağıdaki gibi de yazabiliriz buda bir seçenektir
    <NavLink to="/home" style={({ isActive }) => ({
        backgroundColor: isActive ? 'red' : 'white'
    })}>Anasayfa</NavLink>

Linke tıklandığında belirttiğimiz içeriğini link yazımıza eklemek istersek aşağıdaki yöntemş kullanabiliriz

      <NavLink to="/blog">
        {({isActive}) => (
            <>
             Blog
             {isActive && '(Aktif)'}
            </>
        )}
        </NavLink>


*NESTED VE DİNAMİK ROUTE 
Bu konuda ise örneğin blog içerisindeki kategoriler veya blog içerisinde postların olduğu bir sayfa olabilir
postların detaylarının olduğu bir sayfa olabilir vs. Bu tarz yağıları kurmamıza yarar aşağıda bir örnek veriliştir
/blog/kategoriler
/blog/konu/konu-url 
gibi
Bu yapıyı oluşturmak için <Route/> u self closing olarak değilde açıp kapatarak yazıyoruz <Route><Route/>
Bu örneği blog navlink i üzerinde yapacağız kodu yazmadan önce bir dosya oluşturup içerisine blog ve onun
içerisine ekleueceğimiz elemanları aynı dosya içerisinde tutabiliriz blog adında bir dosya oluşturdum blog.js
dosyasını içerisine aldım ve categories.js ve post.js dosyalarını bu blog klasörü içerisinde oluşturdum 
            <Route path={'/blog'} element={<Blog/>}>
                <Route path='categories' element={<Categories/>}/>
                <Route path='post/:url' element={<Post/>}/> Burada : dan sonra dinamik bir url ekleyebiliyoruz
            </Route>
Bu şekilde yazdık fakat linke /blog/categories yazdığımız zaman çalışmaz fakat 
            <Route path='/blog/categories' element={<Categories/>}/>
Yukarıdaki gibi yazarsak çalışır bir önceki örnekte nested eleman olduğu zaman yüklenmiyor.Bunun sebebi nested
bir elemanda evet örneğin içerisindeki categories i algılıyor fakat bunları nereye yükleyecek?.Biz nested bir
eleman oluşturduğumuz zaman  örneğin  bizim örneğimizdeki 108 satırdaki blog layout bir eleman olmak zorunda 
ne demek bu yani biz bloga girdiğimizde örneğin sağ tarafta sabit bir sidebar olur üst orta tarafta bişeler olur
ama categorilere girdiğimize sadece sol taraf değişir mesela.Yine belli bir sayfa düzeni vardır ve içerisinde
dinamik olarak değişen bir alan vardır işte bu dinamik olarak değişen alana ne gelmesini bekleriz belirtmiş 
olduğumuz categories veya post componentlerimizin gelmesini bekleriz bu componentlerin gelebilmesi içinde blog
componentimizin içerisinde yani blog.js içinde şunu dememiz lazım eğer bir children component varsa şurada göster
dememiz lazım.Bunu göstermek için outleti kullanıyoruz blog.js içerisine outleti import ediyoruz
import {Outlet} from "react-router-dom"
ardından blog.js içerisine 
<Outlet/>
yazdığımızda artık post veya categori componentimiz bunun içerisinde gözükecektir.
Fakat şöyle bir durum var outlet componentimizi yazdık fakat blog içeriisne yazdığımız farklı içerikler
categoris veya postumuzu açtığımızda yine gözükmeye devam edecektir.Bunun olmasını istemiyorsak yani sadece
/blog açıkken gözükmesini istediğimiz şeyleri yeni bir component oluşturup ve bu componenti 
                <Route index={true} element={<Blog/>}/> bu şekilde ekleyebiliyoruz böylece sadece /blog yazıldığı 
zaman gözükecek olan içeriği belirlemiş olduk /blog/categories veya /blog/post/test-url yazdığımız zaman
karşımıza blog sayfasının istemediğimiz içerikleri çıkmayacaktır.

            <Route path='/blog' element={<BlogLayout/>}>
                <Route index={true} element={<Blog/>}/>  sadece /blog tayken gösterilecek komponentimiz
                <Route path='categories' element={<Categories/>}/>
                <Route path='post/:url' element={<Post/>}/>
            </Route>
sadece /blog yazdığımız zaman <BlogLayout/> ve <Blog/> içeriği gözükür fakat <BlogLayout/> her zaman gözükür
/blog/categories
/blog/post/test-url 
yazasak bile

/blog/categories yazdığımızda <BlogLayout/> ve <Categories/> gözükür
/blog/post/test-url yazdığımızda <BlogLayout/> ve <Post gözükür/>

*useParams()
Şimdi biz /blog/post/test-url yazdık peki bu test url yi nereden alacaz işte bunun için posr componentimizin 
içerisine useParams ı import ediyoruz.Ardında 
    const params = useParams()
    console.log(params)
Dediğimiz zaman console da url:test-url yazdığını görebliriz url: nereden geliyor :url bizim route içerisine
yazdığımız :url den geliyor oraya adana:test-url yazsaydık consoleda adana:test-url yazardı.Tarayıcı çubuğuna
yazdığımız değeri almak için ise constraction dan yararlanabiliriz.
    const {url} = useParams()
    return (
        post page {url}
    )
Birden fazla değerimiz olsaydı yani /blog/post/id/url gibi app.js den ilgili route ulaşıp
    <Route path='post/:id/:url' element={<Post/>}/> 
yazıp sonra post.js e dönüp
    const {url,id} = useParams()
    return (
        post page {url} - {id}
    )
olarak değiştirirsek hem id yi hemde url i ekranımızda görebiliriz.

*404 ROUTE
Eşleşen bir route umuz yoksa 404 sayfası göstermek istediğimizde 
    <Route path='*' element={<Page404/>}/> 
gibi yazabiliriz.Page404 componentini oluşturup içerisine 404 mesajımızı yazabiliriz 
import { Link } from "react-router-dom";

export default function Page404 () {
    return (
        <div>
           <h1>Sayfa Bulunamadı</h1> 
            <Link to="/home">Anayafaya dön</Link>
        </div>
    )
}

*/

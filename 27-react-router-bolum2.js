/*Bu derste react router konusu işlenecektir.Derste işlenen konular X ile işaretlenmiştir
Ders Başlıkları:
*KURULUM 
*BROWSER ROUTER İLE SARMALAMA 
*ROUTERS.ROUTE,LİNK,NAVLİNK, İLE KULLANIM 
*NESTED VE DİNAMİK ROUTE  
*İNDEX VE <Outlet /> 
*404 ROUTE 
*<Navigate /> X
*useParams() 
*useLocations() X
*useNavigate() X
*useRoutes() X
*useSearchParams() X
*generatePath() X
*PRİVATE ROUTE X 

<Navigate /> VE useNavigate()  Aslında aynı işlemi yapıyor bir yönlendirme işlemi yapıyor.<Navigate /> Bir 
component ile bunu yaparken  useNavigate() ise hook olarak yapıyor prototürk <Navigate /> i componentinde bir
şey return etmek istenirse kullandığını söylüyor.useNavigate() i ise bir butona basıldığında yönlendirme 
yapılacağı zaman kullandığını söylüyor.*PRİVATE ROUTE ise bir kontrol doğrultusunda o route girip giremeyeceğimizi
belirler navigateleri görürken aynı zamanda private route u görelim.

Önceki derste yaptığımız örnekler üzerinde devam ediyoruz.Öncelikle özel giriş yapılabilen bir privet route 
oluşturmamız gerekiyor.

        <Route path='/profile' element={<Profile/>}/>

Oluşturduktan sonra Profile pagemizi de oluşturuyoruz.pages klasörü içinde pages.js adında dosya oluşturduk

Bu profile page mizin bir private route olması için app.js te yazdığımız profile i bir compoent içerisinde
yazmamız gerekiyor.

        <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>

Sonrasında components klasörü oluşturup aynı isimdeki dosyamızı yani PrivateRoute bu klasör içerisinde oluşturuyoruz
Bu PrivateRoute un içerisinde bir sorgulama yapacağız 
//Kullanıcı oturum açmışmı 
//Açmamışsa yönlendirme işlemş yap
//Eğer oturum açmışsa children ı return et 
Children bizim app.js te private route içerisine yazdığımız <Profile/> oluyor.






*/
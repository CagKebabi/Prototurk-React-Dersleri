/*
Normalde statelerimizi kulanmak istediğimizde alt komponentlere prop olarak geçtik.Fakat componentler çoğaldığında
en süt state ulaşmak istersek birçok propdan geçmemiz gerekiyor buda işimizi zorlaştırıyor.

Bunun için ractın kendi yapısı olan context i öğreneceğiz

Örneğin bir temamız var ve bu temayı hem footer hem de header componentimizde kullanmak istiyoruz bunun için 
komponentleri oluşturuyoruz ve theme i state olarak app js içerisine yazıyoruz.

Öncelikle context-props-ornegi adlı dosyada dil ve temanın değiştirlebildiği props yapısında bir örnek oluşturduk
fakat örnekte görüldüğü üzere her yeni eklememizde komponentlerimize statelerimizin içeriğini hep yazmak zorunda
kalacağız bu durum büyük bir zaman kaybı yaratabilir.

Context le oluşturulan örneğimizin bulunduığu dosya ismi context-context-ornegi 
*/
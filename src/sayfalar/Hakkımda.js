import React from "react";
import resim from "../img/zeynelturan.jpg";
import resim1 from "../img/3.png";
import resim3 from "../img/3d.png";

function Home() {
  return (
    <div className="about">
       <img src={resim} alt="resim" />
       <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
       <h1>Hakkımda</h1>
      <div className="dd" style={{ display: "flex", alignItems: "center", width: "90%" }}>
        <img src={resim3} alt="resim3" />
        <span style={{ color: "#426ec6", fontSize: "115%", textAlign: "center", width: "60%", lineHeight: "3", fontFamily: "Tahoma, sans-serif" }}>
          Merhaba, ben AI Uzmanı Zeynel. Yapay zeka sistemlerini geliştirme ve
          dağıtma konusunda uzmanlığa sahibim. Yapay zekanın elbette amacından
          sapmadığı sürece insanlığın en büyük buluşlarından biri olduğuna
          inananlardanım. Size biraz kendimden bahsedeyim,  2016 yılında henüz
          bu kadar popüler olmadan yapay zekaya ilgi duymaya başladım. Sunduğu
          sınırsız olanaklar beni büyüledi. Stevim Üniversitesinde bilgisayar
          bilimleri eğitimi aldıktan sonra bu alan üzerine doktora yaptım. Bu
          esnada yapay zekanın doğal dil işleme ve görüntü işleme alanlarındaki
          çalışmalarım büyük ilgi gördü. Bu sebepten akademik çalışmaların yanı
          sıra girişimci olarak daha aktif olmaya başladım. Şimdi çalışma
          stilimi inceleyelim;
        </span>
      </div>
      <div className="skills">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <button type="button" className="btn btn-primary btn-lg">
        Problem
      </button>
      <br></br>
        <span style={{ color: "#426ec6", fontSize: "115%", textAlign: "center", width: "60%", lineHeight: "3", fontFamily: "Tahoma, sans-serif" }}>
          Algoritmalarda adalet, şeffaflık ve önyargı gibi etik sorunlar ortaya
          çıkılabiliyor. Bunun yanı sıra güvenlik, veri, yorumlama, ekonomik ve
          sosyal sorunlarla da karşı karşıya kalmaktayız
        </span>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button type="button" className="btn btn-primary btn-lg">
          Çözümüm
        </button>
        <br></br>
        <span style={{ color: "#426ec6", fontSize: "115%", textAlign: "center", width: "60%", lineHeight: "3", fontFamily: "Tahoma, sans-serif" }}>
          Sistemin etik ve güvenli bir şekilde geliştirilmesi ve kullanılması
          için yapılan çalışmalar kapsamında insan haklarına adil ve şeffaf olma
          ilk hedefim. Daha doğru ve güvenilir sonuçlar için veri temizleme ve
          zenginleştirme teknikleri geliştirmekteyim. Çalışmalarımda bu
          sorunları çözen bir yapı geliştirdim.
        </span>
      </div>
      <div className="resim1">
        <img src={resim1} alt="resim" />
      </div>
    </div>
  );
}

export default Home;

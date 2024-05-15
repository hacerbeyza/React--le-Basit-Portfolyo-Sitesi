import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";


function Deneyim() {
  return (
    <div className="Deneyim">
      <div className="element">
        <ol>
          <li>
            <SchoolIcon />
            <h3>2011-2015</h3>
            <p>
              {" "}
              Stajyer [CMP] Yapay zeka ve makine öğrenmesi alanındaki projelerde
              staj yaptı. Veri analizi ve modelleme konusunda bilgi ve beceri
              kazandı.
            </p>
          </li>

          <li>
            <BusinessCenterIcon />
            <h3>2015-2019</h3>
            <p>
              {" "}
              Yazılım Mühendisi [CPUE Q] Web ve mobil uygulamalar için yazılım
              geliştirdi. Veritabanları ve API'ler ile çalıştı. Yazılım testleri
              ve hata ayıklama yaptı
            </p>
          </li>

          <li>
            <BusinessCenterIcon />
            <h3>2019-2022</h3>
            <p>
              {" "}
              Yapay Zeka Üzerine Doktora [NAI] Yapay zeka ve makine öğrenmesi
              alanındaki araştırma projelerinde görev aldı. Profesörlerle ve
              diğer araştırmacılarla birlikte çalıştı. Bilimsel makaleler yazdı
              ve sunumlar yaptı.
            </p>
          </li>

          <li>
            <BusinessCenterIcon />
            <h3>2022-Günümüz</h3>
            <p>
              {" "}
              Girişimci [MPX] Derin öğrenme algoritmaları kullanarak görüntü
              işleme ve doğal dil işleme projeleri üzerinde çalıştı. Büyük veri
              kümelerini tek seferde analiz. Yapay zeka modelleri için yazılım
              kodları yazımları ve test.{" "}
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Deneyim;

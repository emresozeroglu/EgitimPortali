using System;

namespace myoBlog29API.ViewModel
{
    public class YorumModel
    {
        public int YorumId { get; set; }
        public string YorumIcerik { get; set; }
        public int UyeId { get; set; }
        public int EgitimId { get; set; }
        public string KullaniciAdi { get; set; }
        public string EgitimBaslik { get; set; }
        public DateTime Tarih { get; set; }
    }
}

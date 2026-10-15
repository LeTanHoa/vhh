import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ShieldCheck, 
  QrCode, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Globe, 
  Calendar, 
  Scale, 
  FileCheck, 
  Sparkles, 
  Share2, 
  Copy, 
  Check,
  AlertCircle,
  ExternalLink,
  Layers,
  Heart
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ProductTraceabilityPage({ onBackToHome, onOpenConsultation }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('info');

  const productData = {
    name: "NGŨ CỐC DINH DƯỠNG CHO NGƯỜI CAO TUỔI",
    system: "CỔNG TRUY XUẤT NGUỒN GỐC VCHECK (vcheck.com.vn)",
    provider: "Công ty TNHH MTV Vạn Phúc Hoa",
    status: "ĐÃ XÁC THỰC THÀNH CÔNG",
    verificationCode: "VCHECK-HF-2022-049189",
    image: "/assets/ngu_coc_huongfarm.jpg",
    vcheckBanner: "/assets/vcheck_banner.jpg",
    ingredients: "16 loại hạt nông sản và nhập khẩu: hạt sen, mè đen, óc chó đỏ, óc chó vàng, hạnh nhân, yến mạch, đậu gà, đậu tây đỏ, đậu đen xanh lòng, đậu đỏ, đậu trắng, đậu xanh, đậu ván, đậu ngự, gạo lứt rẫy, đậu nành quê thuần chủng.",
    standards: [
      { label: "Số tự công bố sản phẩm (CBSP)", value: "01/CSTP XANH HUUONGFARM/2022" },
      { label: "Số bản cam kết ATTP", value: "07/XNCK-KTHT" },
      { label: "Số XNCK ATTP", value: "09/XNCK-KT" }
    ],
    netWeight: "500g",
    expiry: "12 tháng kể từ ngày sản xuất",
    manufactureDate: "Xem chi tiết trên bao bì sản phẩm",
    usageGuide: "Pha 3–4 muỗng bột ngũ cốc (khoảng 25–30g) vào 200ml nước ấm 70°C. Khuấy đều và thưởng thức. Có thể thêm sữa đặc hoặc đường tùy khẩu vị.",
    storageGuide: "Bảo quản ở nơi khô ráo thoáng mát, tránh ánh nắng trực tiếp. Đậy kín nắp/miệng túi sau mỗi lần sử dụng.",
    manufacturer: {
      name: "Hộ Kinh Doanh Cơ Sở Thực Phẩm Xanh HuongFarm",
      country: "Việt Nam",
      businessId: "049189001652",
      address: "Thôn Trung Sơn, Xã Quế Sơn Trung, Đà Nẵng / Quảng Nam",
      phone: "0338 627 931",
      website: "huongfarm.com",
    },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122888.98971561968!2d108.14399744335935!3d15.736271000000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169e3005ae589ab%3A0xae234db29841d40b!2zVGjDtG4gYW4gcGjDuiB4w6MgcXXhur8gc8ahbiB0cnVuZw!5e0!3m2!1svi!2s!4v1789353021336!5m2!1svi!2s"
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#F8F7F3] min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumb Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#174C3C] hover:text-[#205F4D] px-3.5 py-2 rounded-xl bg-white border border-stone-200 shadow-sm transition-all hover:-translate-x-1 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Trở về Trang chủ Vạn Phúc Hoa</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-stone-500">
            <span>Trang chủ</span>
            <span>/</span>
            <span className="text-[#174C3C] font-semibold">Cổng Truy Xuất VCheck</span>
            <span>/</span>
            <span className="text-stone-700 truncate max-w-xs font-medium">Ngũ cốc dinh dưỡng</span>
          </div>
        </div>

        {/* Verification Success Hero Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#174C3C] via-[#1E5D4A] to-[#174C3C] text-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFCA9B] text-[#174C3C] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>{productData.status}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                {productData.name}
              </h1>
              <p className="text-xs sm:text-sm text-stone-200 max-w-2xl leading-relaxed">
                Dữ liệu tem điện tử chính hãng được đồng bộ từ Cổng thông tin truy xuất nguồn gốc VCheck (
                <a 
                  href="https://vcheck.com.vn/san-pham/ngu-coc-dinh-duong-cho-nguoi-cao-tuoi/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[#DFCA9B] underline hover:text-white"
                >
                  vcheck.com.vn
                </a>
                ). Giải pháp công nghệ do <strong>Công ty TNHH MTV Vạn Phúc Hoa</strong> cung cấp.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center shrink-0 w-full sm:w-auto">
              <div className="w-12 h-12 rounded-xl bg-white text-[#174C3C] flex items-center justify-center mx-auto mb-2 shadow-md">
                <QrCode className="w-7 h-7" />
              </div>
              <p className="text-[10px] text-stone-200 uppercase font-semibold">Mã định danh VCheck</p>
              <p className="font-mono text-xs font-bold text-[#DFCA9B] mt-0.5">{productData.verificationCode}</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid: Left Product Visual + Right Key Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Product Showcase Photo & Producer Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Real Product Packaging Image */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm relative group overflow-hidden">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-50 flex items-center justify-center">
                <img
                  src={productData.image}
                  alt={productData.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* VCheck Brand Banner Badge */}
              <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-stone-700">Tem chính hãng VCheck</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#174C3C] hover:text-[#205F4D] px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Đã sao chép' : 'Chia sẻ mã'}</span>
                </button>
              </div>
            </div>

            {/* Manufacturer Card */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-stone-100">
                <div className="w-8 h-8 rounded-lg bg-[#174C3C]/10 text-[#174C3C] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#19241F] text-sm leading-tight">
                    Thông Tin Cơ Sở Sản Xuất
                  </h3>
                  <p className="text-[10px] text-stone-500">Đơn vị chủ quản sản phẩm</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-stone-700">
                <div>
                  <span className="text-stone-500 block text-[11px]">Tên đơn vị sản xuất:</span>
                  <span className="font-bold text-stone-900 text-sm">{productData.manufacturer.name}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-stone-500 block text-[11px]">Số ĐKKD:</span>
                    <span className="font-mono font-semibold text-stone-900">{productData.manufacturer.businessId}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 block text-[11px]">Quốc gia:</span>
                    <span className="font-semibold text-stone-900">{productData.manufacturer.country}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <MapPin className="w-4 h-4 text-[#174C3C] shrink-0 mt-0.5" />
                  <span>{productData.manufacturer.address}</span>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <Phone className="w-4 h-4 text-[#174C3C] shrink-0" />
                  <a 
                    href={`tel:${productData.manufacturer.phone.replace(/\s+/g, '')}`} 
                    className="font-bold text-[#174C3C] hover:underline"
                  >
                    {productData.manufacturer.phone} (Bấm để gọi đặt hàng)
                  </a>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <Globe className="w-4 h-4 text-[#174C3C] shrink-0" />
                  <a 
                    href={`http://${productData.manufacturer.website}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-[#174C3C] font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>{productData.manufacturer.website}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${productData.manufacturer.phone.replace(/\s+/g, '')}`}
                  className="w-full py-3 rounded-xl bg-[#174C3C] hover:bg-[#205F4D] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Phone className="w-4 h-4 text-[#DFCA9B]" />
                  <span>Liên Hệ Cơ Sở HuongFarm: {productData.manufacturer.phone}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Detailed Traceability Tables & Quality Certifications */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tabs for Navigation */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-stone-200/60 border border-stone-200">
              <button
                onClick={() => setActiveTab('info')}
                className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'info'
                    ? 'bg-white text-[#174C3C] shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Thông Tin &amp; Thành Phần
              </button>
              <button
                onClick={() => setActiveTab('standards')}
                className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'standards'
                    ? 'bg-white text-[#174C3C] shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Hồ Sơ Tiêu Chuẩn &amp; ATTP
              </button>
              <button
                onClick={() => setActiveTab('map')}
                className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'map'
                    ? 'bg-white text-[#174C3C] shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Bản Đồ Nơi Sản Xuất
              </button>
            </div>

            {/* Tab 1: Product Specifications & Ingredients */}
            {activeTab === 'info' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
                
                <div className="border-b border-stone-100 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#174C3C]">
                    Hạng Mục 01 &bull; Thông Tin Chi Tiết
                  </span>
                  <h2 className="text-xl font-bold text-[#19241F] mt-1">
                    Quy Cách &amp; Thành Phần 16 Loại Hạt
                  </h2>
                </div>

                {/* Ingredients box */}
                <div className="p-5 rounded-2xl bg-[#F8F7F3] border border-stone-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#174C3C]">
                    <Sparkles className="w-4 h-4 text-[#C7A66A]" />
                    <span>Thành phần công thức tự nhiên:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
                    {productData.ingredients}
                  </p>
                </div>

                {/* Specs Table */}
                <div className="overflow-hidden rounded-2xl border border-stone-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <tbody className="divide-y divide-stone-100">
                      <tr className="bg-stone-50/50">
                        <td className="py-3 px-4 font-bold text-stone-600 w-1/3">Khối lượng tịnh</td>
                        <td className="py-3 px-4 font-semibold text-stone-900">{productData.netWeight}</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-stone-600">Thời hạn sử dụng</td>
                        <td className="py-3 px-4 font-semibold text-stone-900">{productData.expiry}</td>
                      </tr>
                      <tr className="bg-stone-50/50">
                        <td className="py-3 px-4 font-bold text-stone-600">Ngày sản xuất</td>
                        <td className="py-3 px-4 font-semibold text-stone-900">{productData.manufactureDate}</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-stone-600">Hướng dẫn sử dụng</td>
                        <td className="py-3 px-4 text-stone-700 leading-relaxed">{productData.usageGuide}</td>
                      </tr>
                      <tr className="bg-stone-50/50">
                        <td className="py-3 px-4 font-bold text-stone-600">Bảo quản</td>
                        <td className="py-3 px-4 text-stone-700 leading-relaxed">{productData.storageGuide}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Key Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#174C3C] shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-700 font-medium">100% hạt nguyên chất, không chất bảo quản nhân tạo</span>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#174C3C] shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-700 font-medium">Bổ sung chất xơ, vitamin &amp; canxi cho người lớn tuổi</span>
                  </div>
                </div>

              </div>
            )}

            {/* Tab 2: Standards & Food Safety Registrations */}
            {activeTab === 'standards' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
                
                <div className="border-b border-stone-100 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#174C3C]">
                    Hạng Mục 02 &bull; Minh Bạch Pháp Lý
                  </span>
                  <h2 className="text-xl font-bold text-[#19241F] mt-1">
                    Số Công Bố Sản Phẩm &amp; Giấy Chứng Nhận ATTP
                  </h2>
                </div>

                <div className="space-y-4">
                  {productData.standards.map((std, idx) => (
                    <div 
                      key={idx}
                      className="p-5 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#174C3C]/10 text-[#174C3C] flex items-center justify-center shrink-0">
                          <FileCheck className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-stone-500 font-medium">{std.label}</p>
                          <p className="text-sm font-bold text-stone-900 font-mono mt-0.5">{std.value}</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full shrink-0">
                        <Check className="w-3 h-3" />
                        <span>Hợp chuẩn hợp quy</span>
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-[#DFCA9B]/20 border border-[#DFCA9B]/50 text-xs text-stone-800 leading-relaxed">
                  <strong>Lưu ý cho người tiêu dùng:</strong> Mọi thông tin tự công bố và cam kết vệ sinh an toàn thực phẩm trên đã được đối chiếu và lưu trữ đầy đủ trong cơ sở dữ liệu xác thực điện tử của hệ thống VCheck.
                </div>

              </div>
            )}

            {/* Tab 3: Google Map Location */}
            {activeTab === 'map' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
                
                <div className="border-b border-stone-100 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#174C3C]">
                    Hạng Mục 03 &bull; Tọa Độ Vùng Sản Xuất
                  </span>
                  <h2 className="text-xl font-bold text-[#19241F] mt-1">
                    Bản Đồ Nơi Sản Xuất — Cơ Sở HuongFarm
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Địa chỉ: Thôn Trung Sơn, Xã Quế Sơn Trung, Đà Nẵng / Quảng Nam
                  </p>
                </div>

                <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-inner h-[380px] w-full">
                  <iframe
                    title="Bản đồ cơ sở HuongFarm"
                    src={productData.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

              </div>
            )}

            {/* Vạn Phúc Hoa Solution Provider Callout Banner */}
            <div className="p-6 rounded-3xl bg-[#174C3C]/5 border border-[#174C3C]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#174C3C] text-[#DFCA9B] flex items-center justify-center shrink-0 shadow-md">
                  <QrCode className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#174C3C] uppercase tracking-wider">
                    Đơn Vị Phát Triển &amp; Cung Cấp Giải Pháp QR
                  </p>
                  <h4 className="text-base font-bold text-[#19241F] mt-0.5">
                    Công Ty TNHH MTV Vạn Phúc Hoa
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Hỗ trợ doanh nghiệp &amp; HTX khởi tạo cổng truy xuất nguồn gốc tem QR VCheck chỉ từ 24h.
                  </p>
                </div>
              </div>

              <button
                onClick={() => onOpenConsultation('Tư vấn giải pháp tem QR VCheck giống HuongFarm')}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#174C3C] hover:bg-[#205F4D] text-white text-xs font-bold shadow-md transition-all shrink-0 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#DFCA9B]" />
                <span>Đăng Ký Cấp Mã QR Cho Sản Phẩm</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

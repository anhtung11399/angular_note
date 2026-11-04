// Lộ trình: thứ tự trong LESSONS = thứ tự học. File nội dung: src/lessons/<slug>.html
export const PHASES = [
  { id: 0, name: 'Khởi động', color: '#64748b', desc: 'Angular khác Vue ở đâu, nghĩ theo kiểu Angular, và lộ trình học.' },
  { id: 1, name: 'Nền tảng Angular', color: '#dd0031', desc: 'Component, template, control flow, signals, input / output, directive, pipe, vòng đời.' },
  { id: 2, name: 'Kiến trúc ứng dụng', color: '#7c3aed', desc: 'Dependency injection, router, forms, HTTP, RxJS và quản lý state.' },
  { id: 3, name: 'Chất lượng', color: '#059669', desc: 'Change detection, hiệu năng, kiểm thử, style và thư viện UI.' },
  { id: 4, name: 'Đưa lên production', color: '#d97706', desc: 'SSR và hydration, i18n, PWA, bảo mật, build và triển khai.' },
  { id: 5, name: 'Dự án cuối', color: '#0f766e', desc: 'Tự xây một ứng dụng Angular hoàn chỉnh từ đầu đến cuối.' },
];

export const LESSONS = [
  {
    slug: 'lo-trinh', phase: 0, mins: 30,
    title: 'Angular nhìn từ mắt dân Vue',
    desc: 'Angular là framework "đủ pin", khác Vue ở triết lý, cấu trúc và công cụ. Bảng đối chiếu tổng quát và cách học lộ trình này.',
    goals: ['Hiểu Angular khác Vue ở đâu về triết lý và cấu trúc', 'Có bảng đối chiếu Vue → Angular trong đầu', 'Biết Angular hiện đại (standalone, signals, zoneless) khác Angular cũ thế nào'],
  },
  {
    slug: 'cai-dat', phase: 1, mins: 35,
    title: 'Cài Angular CLI và dự án đầu tiên',
    desc: 'ng new, cấu trúc thư mục, angular.json, ng serve / build / generate, bootstrap ứng dụng, so với Vite + Vue.',
    goals: ['Tạo và chạy được một dự án Angular', 'Hiểu từng file trong dự án mới tạo', 'Dùng thành thạo các lệnh ng hay dùng'],
  },
  {
    slug: 'typescript', phase: 1, mins: 40,
    title: 'TypeScript mà Angular dùng mỗi ngày',
    desc: 'Class, decorator, access modifier, generic, strict mode, kiểu cho template. Những thứ Vue cho phép bỏ qua nhưng Angular thì không.',
    goals: ['Đọc hiểu class và decorator của Angular', 'Dùng generic và kiểu chặt cho model dữ liệu', 'Hiểu strict template type checking'],
  },
  {
    slug: 'component', phase: 1, mins: 45,
    title: 'Component: từ SFC sang class + template',
    desc: 'Cấu trúc một component standalone, selector, imports, template và style, so với file .vue. Cây component và cách chia nhỏ.',
    goals: ['Viết component standalone đầy đủ', 'Hiểu imports của component thay cho đăng ký component trong Vue', 'Chia giao diện thành cây component hợp lý'],
  },
  {
    slug: 'template', phase: 1, mins: 45,
    title: 'Cú pháp template: binding và event',
    desc: 'Interpolation, property binding, attribute / class / style binding, event binding, two-way binding, template reference, @let. Đối chiếu với v-bind, v-on, v-model.',
    goals: ['Dùng đúng 4 kiểu binding', 'Phân biệt property và attribute binding', 'Dịch được mọi cú pháp template Vue sang Angular'],
  },
  {
    slug: 'control-flow', phase: 1, mins: 40,
    title: 'Control flow: @if, @for, @switch, @defer',
    desc: 'Cú pháp khối mới thay cho *ngIf / *ngFor, track bắt buộc, @empty, @defer với các trigger. So với v-if, v-for, Suspense / async component.',
    goals: ['Dùng @if / @for / @switch thành thạo', 'Chọn khoá track đúng', 'Trì hoãn tải phần giao diện nặng bằng @defer'],
  },
  {
    slug: 'signals', phase: 1, mins: 55,
    title: 'Signals: reactivity của Angular',
    desc: 'signal, computed, effect, linkedSignal, untracked. Đối chiếu với ref, computed, watch / watchEffect của Vue, và những bẫy hay gặp.',
    goals: ['Dùng signal và computed cho state của component', 'Biết khi nào dùng và không dùng effect', 'Tránh vòng lặp và đọc signal ngoài ý muốn'],
  },
  {
    slug: 'input-output', phase: 1, mins: 50,
    title: 'Giao tiếp giữa component: input, output, model',
    desc: 'input() / output() / model(), required, transform, alias, content projection với ng-content (slot của Angular), viewChild / contentChild.',
    goals: ['Truyền dữ liệu cha → con và sự kiện con → cha', 'Làm component có two-way binding bằng model()', 'Dùng ng-content thay cho slot'],
  },
  {
    slug: 'directive-pipe', phase: 1, mins: 45,
    title: 'Directive và pipe',
    desc: 'Attribute directive, host binding, directive composition, pipe có sẵn và pipe tự viết, pure / impure. So với custom directive và filter của Vue 2.',
    goals: ['Viết attribute directive dùng lại được', 'Dùng và tự viết pipe', 'Biết khi nào dùng directive, khi nào dùng component'],
  },
  {
    slug: 'lifecycle', phase: 1, mins: 35,
    title: 'Vòng đời component và DOM',
    desc: 'Constructor và ngOnInit, ngOnChanges, afterNextRender, afterRenderEffect, DestroyRef, ElementRef và Renderer2. So với onMounted, onUnmounted.',
    goals: ['Đặt code vào đúng giai đoạn vòng đời', 'Dọn dẹp tài nguyên bằng DestroyRef', 'Thao tác DOM an toàn (cả khi SSR)'],
  },
  {
    slug: 'di-service', phase: 2, mins: 55,
    title: 'Dependency injection và service',
    desc: 'Service, inject(), providedIn root, provider ở component / route, injection token, useFactory / useValue / useClass. So với provide / inject và composable của Vue.',
    goals: ['Tách logic ra service và inject vào component', 'Hiểu cây injector và phạm vi của service', 'Dùng InjectionToken cho cấu hình'],
  },
  {
    slug: 'router', phase: 2, mins: 55,
    title: 'Router',
    desc: 'Routes, lazy loading, tham số qua input, guard dạng hàm, resolver, route con, chuyển trang bằng code. So với vue-router.',
    goals: ['Cấu hình router với lazy loading', 'Bảo vệ route bằng guard', 'Nhận tham số route vào component qua input'],
  },
  {
    slug: 'forms', phase: 2, mins: 60,
    title: 'Forms: reactive forms và signal forms',
    desc: 'Template-driven vs reactive forms, typed forms, validator tự viết và bất đồng bộ, FormArray, hiển thị lỗi, signal forms. So với v-model + VeeValidate.',
    goals: ['Xây form phức tạp bằng reactive forms có kiểu', 'Viết validator đồng bộ và bất đồng bộ', 'Biết hướng đi signal forms của Angular'],
  },
  {
    slug: 'http', phase: 2, mins: 55,
    title: 'Gọi API: HttpClient, interceptor, resource',
    desc: 'provideHttpClient, gọi GET / POST có kiểu, interceptor dạng hàm (token, lỗi, loading), xử lý lỗi, httpResource và resource cho dữ liệu dạng signal.',
    goals: ['Gọi API có kiểu và xử lý lỗi', 'Viết interceptor gắn token và bắt lỗi chung', 'Dùng httpResource để tải dữ liệu theo signal'],
  },
  {
    slug: 'rxjs', phase: 2, mins: 60,
    title: 'RxJS vừa đủ dùng',
    desc: 'Observable khác Promise thế nào, các operator hay dùng (map, switchMap, debounceTime, combineLatest...), subscribe và huỷ, async pipe, chuyển qua lại với signal.',
    goals: ['Đọc hiểu code RxJS trong dự án Angular', 'Dùng switchMap cho tìm kiếm, debounce cho ô nhập', 'Không bao giờ rò rỉ subscription'],
  },
  {
    slug: 'state', phase: 2, mins: 50,
    title: 'Quản lý state',
    desc: 'State trong service với signals (thay cho Pinia), NgRx SignalStore, NgRx Store cổ điển, khi nào cần thư viện. Cập nhật lạc quan và đồng bộ với server.',
    goals: ['Viết store bằng service + signals', 'Đọc hiểu NgRx SignalStore và Store', 'Chọn mức quản lý state phù hợp dự án'],
  },
  {
    slug: 'change-detection', phase: 3, mins: 50,
    title: 'Change detection: zone.js, OnPush, zoneless',
    desc: 'Angular biết khi nào cập nhật giao diện ra sao, Zone.js làm gì, OnPush, ứng dụng zoneless với signals. Khác hẳn cơ chế proxy của Vue.',
    goals: ['Hiểu vì sao giao diện cập nhật (hoặc không)', 'Dùng OnPush và zoneless đúng cách', 'Sửa lỗi ExpressionChangedAfterItHasBeenChecked'],
  },
  {
    slug: 'hieu-nang', phase: 3, mins: 45,
    title: 'Hiệu năng',
    desc: 'Lazy loading, @defer, track, NgOptimizedImage, virtual scroll, đo bằng Angular DevTools và Lighthouse, bundle budget và phân tích bundle.',
    goals: ['Giảm kích thước bundle ban đầu', 'Tìm và sửa chỗ render chậm', 'Đặt budget để không phình bundle'],
  },
  {
    slug: 'testing', phase: 3, mins: 55,
    title: 'Kiểm thử',
    desc: 'Vitest / Jasmine với TestBed, test component, test service có HTTP giả, component harness, test e2e bằng Playwright. So với Vitest + Vue Test Utils.',
    goals: ['Viết unit test cho component và service', 'Giả lập HTTP trong test', 'Viết test e2e cho luồng chính'],
  },
  {
    slug: 'styling-ui', phase: 3, mins: 45,
    title: 'Style, thư viện UI và accessibility',
    desc: 'View encapsulation, :host, biến CSS, Tailwind, Angular Material và CDK, animation, accessibility. So với scoped style của Vue.',
    goals: ['Viết style component không rò rỉ', 'Dùng Angular Material / CDK', 'Làm giao diện truy cập được bằng bàn phím và trình đọc màn hình'],
  },
  {
    slug: 'ssr', phase: 4, mins: 50,
    title: 'SSR, hydration và prerender',
    desc: 'Render phía server, hydration, incremental hydration, prerender trang tĩnh, viết code chạy được cả server lẫn trình duyệt. So với Nuxt.',
    goals: ['Bật SSR và hiểu luồng hydration', 'Tránh lỗi dùng window / localStorage trên server', 'Chọn SSR, prerender hay CSR cho từng route'],
  },
  {
    slug: 'i18n-pwa', phase: 4, mins: 40,
    title: 'Đa ngôn ngữ và PWA',
    desc: 'i18n có sẵn của Angular, Transloco, định dạng ngày số tiền theo vùng, service worker và PWA, cập nhật phiên bản mới.',
    goals: ['Làm ứng dụng nhiều ngôn ngữ', 'Định dạng ngày, số, tiền đúng vùng', 'Biến ứng dụng thành PWA và xử lý cập nhật'],
  },
  {
    slug: 'bao-mat', phase: 4, mins: 40,
    title: 'Bảo mật ứng dụng Angular',
    desc: 'Angular chống XSS ra sao, DomSanitizer và các bẫy bypass, CSP, CSRF, lưu token ở đâu, bảo vệ route không phải là bảo mật.',
    goals: ['Hiểu cơ chế sanitize của Angular', 'Cấu hình CSP cho ứng dụng Angular', 'Lưu và gửi thông tin đăng nhập an toàn'],
  },
  {
    slug: 'trien-khai', phase: 4, mins: 40,
    title: 'Build, cấu hình môi trường và triển khai',
    desc: 'ng build và builder application (esbuild), environment, cấu hình lúc chạy, budget, CI, deploy lên static hosting / CDN, nâng cấp phiên bản bằng ng update.',
    goals: ['Build và deploy ứng dụng Angular', 'Tách cấu hình theo môi trường', 'Nâng cấp phiên bản Angular an toàn'],
  },
  {
    slug: 'du-an', phase: 5, mins: 300,
    title: 'Dự án: ứng dụng "Sổ bài tập"',
    desc: 'Tự xây ứng dụng cho giáo viên và phụ huynh: đăng nhập, danh sách lớp, giao bài, nộp bài có ảnh, chấm điểm, router, forms, HTTP, store, test, deploy.',
    goals: ['Ghép mọi kiến thức thành một ứng dụng hoàn chỉnh', 'Có một dự án Angular để đưa vào CV', 'Tự tin nhận task Angular ở công ty'],
  },
];

export const EXTRA = [
  { slug: 'thuat-ngu', title: 'Bảng đối chiếu Vue → Angular', desc: 'Mọi khái niệm Vue bạn đã biết và thứ tương ứng trong Angular, kèm ví dụ ngắn.' },
  { slug: 'nguyen-tac', title: 'Nguyên tắc viết Angular', desc: 'Những quy tắc của dự án Angular hiện đại, gom thành checklist trước khi gộp code.' },
];

export class BaseResponse<T> {
    data: T
    success: Boolean
    message: string

  constructor(data:T,message:string,success:boolean){
    this.data=data
    this.message=message
    this.success=success
  }
}
/* Başarılı bir kullanıcı oluşturma yanıtı
const successResponse = new BaseResponse<User>(
  { id: 1, name: "Alice", email: "alice@example.com" },
  "Kullanıcı başarıyla oluşturuldu.",
  true
);

// Hatalı bir giriş yanıtı
const errorResponse = new BaseResponse<null>(
  null,
  "Geçersiz kullanıcı adı veya şifre.",
  false
);

// Kullanıcı listesi yanıtı
const users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" }
];
const usersResponse = new BaseResponse<User[]>(
  users,
  "Kullanıcılar başarıyla getirildi.",
  true
);

// İstemci tarafında kullanımı
if (successResponse.success) {
  console.log("Veri:", successResponse.data);
  console.log("Mesaj:", successResponse.message);
} else {
  console.error("Hata Mesajı:", successResponse.message);
}



*/
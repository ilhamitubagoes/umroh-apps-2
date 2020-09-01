# umroh-apps-2
## Getting Start
Proyek kelanjutan dari umroh apps version 1.2
Diperbarui dengan tampilan layout yang "eye catching" dengan versi terbaru 1.3
Dengan fitur pada aplikasi yang masih sama dengan versi sebelumnya

Tetap menggunakan framework7 untuk tampilan layout (User Interface) pada aplikasi mobile ini yang responsive.
Penggunaan bahasa pemrograman HTML(markup), CSS(style), Javascript(client-side) dibungkus kedalam sebuah framework7

Phonegap dan cordova, serta bantuan dependencies node js yaitu npm
memudahkan build aplikasi hybrid menjadi aplikasi mobile

Build ke bentuk aplikasi android yang membutuhkan sdk android manager, disesuaikan dengan API android sesuaikan dengan device user

Template7 memudahkan manipulasi operasi data yang iteratif, seperti fetching data file 'json'

Kekurangan : - (masih ditunggu)

## Prerequisites
Untuk membuat aplikasi android atau biasa disebut dengan apk.
Maka bisa menggunakan dengan apache cordova
Sebelumnya harus menginstall cordova secara globally :
>npm install -g cordova

## Installing
#### Build Cordova CLI
###### Setelah berhasil diinstall maka selanjutnya adalah :
* > _cordova create umrah com.panduan.umrah Umrah-Apps_ (Untuk membuat folder baru dengan nama "umrah")
* > _git clone https://github.com/arifirmansyah/umroh-apps-2.git_ (Untuk mendownload source project)
* > Setelah berhasil, maka anda akan melihat 2 folder yaitu folder umrah dan folder source dari cloning git **(./umrah dan ./umroh-apps-2)**
* > _cd umrah_ (masuk ke folder umrah)
* > _cordova platform add android_ (menambahkan konfigurasi platform android ke dalam project)
* > Pindahkan seluruh isi folder hasil cloning **(./umroh-apps-2)** ke dalam folder **./umrah/www** (Jika ada yang sama di replace saja)
* > Jika CLI anda berada di **(./umrah/www)** silahkan kembali ke direktori **./umrah** dengan perintah _cd.._
* > cordova build android

#### Build HTML5APKBUILDER
Download disini https://bitbucket.org/mrchay/html5apkbuilder/src/default/
Lalu install java jika belum ada pada laptopmu
Taruh file hasil download umroh ini ke folder html5 pada html5apkbuilder
Klik go.bat pada html5apkbuilder untuk memulai
Ada 3 Aplikasi yang telah selesai dibuild ke apk

#### Sumber dokumentasi lain : https://www.petanikode.com/cordova/
Membuat proyek dengan cordova, kemudian merubah file yang ada di cordova terutama www
untuk diganti dengan file umroh apps ini
Catatan : harus menginstall nodeJS, Java, JDK, SDK, npm cordova

Mengganti title apk:
-
Mengganti icon apk:
-

Sumber lainnya : https://appsbuilders.org/guides/cara-build-apk-aplikasi-android-menggunakan-html5/

Hapus semua file yang ada di folder umrah
kemudian pindahkan proyek aplikasi yang telah dibangun sebelumnya
ke folder proyek aplikasi cordova yang telah dibuat
tinggal di drag and drop lalu selesai

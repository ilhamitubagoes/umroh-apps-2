# umroh-apps-2
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

Untuk membuat aplikasi android atau biasa disebut dengan apk.
Maka bisa menggunakan dengan apache cordova
Sebelumnya harus menginstall cordova secara globally :
>npm install -g cordova
setelah berhasil diinstall maka selanjutnya adalah :
>cordova create umrah com.panduan.umrah Umrah-Apps
>cd umrah
>cordova platform add android
>cordova build android

Hapus semua file yang ada di folder umrah
kemudian pindahkan proyek aplikasi yang telah dibangun sebelumnya
ke folder proyek aplikasi cordova yang telah dibuat
tinggal di drag and drop lalu selesai
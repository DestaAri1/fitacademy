<!DOCTYPE html>
<html lang="en">
<head>
    <title>FitAcademy</title>
    <style>
        @media only screen and (min-width: 600px) {
        .gambar {
            width: 40rem;
        }
    }
    </style>
</head>
<body>
    <img class="gambar" src="{{ $message->embed(public_path().$gambar) }}">
    <p>Selamat</p>
    <p>E-Book <b>"{{ $judul }}"</b> Anda berhasil terkirim!</p>
    <p>Terima kasih sudah tertarik untuk memiliki e-book ini. {{ $t1 }}</p>
    <p>Melalui e-book ini, Anda bisa memperoleh informasi secara spesifik dengan penyampaian yang informatif, menarik, ringkas dan tentunya lebih menghemat waktu. Berisi hanya 20 halaman, e-book ini jauh dari kata membosankan.</p>
    <p>Berminat untuk mendapatkan E-book <b>GRATIS</b> dan konten edukasi menarik lainnya?</p>
    <p>Pantau terus media sosial FitAcademy ya! #BelajarSerudanPraktisbarengFitAcademy</p>
    <p>Website : <a href="https://fitacademy.id/">fitacademy.id</a></p>
    <p>Instagram : <a href="https://instagram.com/fitacademy_id?igshid=YmMyMTA2M2Y=">fitacademy_id</a></p>
    <p>TikTok : <a href="https://www.tiktok.com/@fitacademy.id?_t=8aPRooWJ6eI&_r=1">fitacademy.id</a></p>
    <p>Terima kasih,</p>
    <p>FitAcademy</p>
</body>
</html>

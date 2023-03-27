<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Request as ModelsRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
     // controller untuk mengirim ebook dan menyimpan email ke database
     public function addRequest(Request $request)
     {
         $data = [
             'email' => $request->email,
             'jenis' => $request->jenis,
         ];

         $email["email"] = $request->email;
         $email["title"] = "Ada Kiriman dari FitAcademy Spesial untuk Anda!";

         switch ($data["jenis"]) {
             case "perusahaan":
                 $files = [
                     public_path('files/Employee 101 - Cara Ampuh dan Efektif Meningkatkan Kinerja Karyawan.pdf'),
                 ];
                 $email["gambar"] = '/image/MOCKUP EBOOK 1.png';
                 $email["judul"] = 'EMPLOYEE 101: Cara Ampuh dan Efektif Meningkatkan Kinerja Karyawan agar Lebih Produktif';
                 $email["t1"] = 'Semoga Anda bisa belajar bagaimana cara efektif meningkatkan kinerja karyawan dengan berbagai metode yang mudah untuk diikuti.';
                 break;
             case "contentCreator":
                 $files = [
                     public_path('files/Content Creator Guide - Asik Mengedukasi dengan Metode Microlearning.pdf'),
                 ];
                 $email["gambar"] = '/image/MOCKUP EBOOK 2.png';
                 $email["judul"] = 'CONTENT CREATOR GUIDE: Asik Mengedukasi dengan Metode Microlearning';
                 $email['t1']= 'Semoga Anda dapat menikmati berbagai macam panduan content creator yang disusun secara informatif, menarik, dan seringkas mungkin sehingga lebih menghemat waktu Anda.';
                 break;
             case "netizen":
                 $files = [
                     public_path('files/Career Path - Sukses Menjadi Seorang Copywriter.pdf'),
                 ];
                 $email["gambar"] = '/image/MOCKUP EBOOK 3.png';
                 $email["judul"] = 'CAREER PATH: Sukses Menjadi Seorang Copywriter';
                 $email['t1']= 'Semoga Anda bisa belajar bagaimana cara sukses menjadi seorang copywriter dengan panduan-panduan yang mudah untuk diikuti.';
                 break;
             default:
                 dd("jenis tidak ada");
                 break;
         }

         Mail::send('emails.email', $email, function($message)use($email, $files) {
             $message->to($email["email"], $email["email"])
                     ->subject($email["title"]);
             foreach ($files as $file){
                 $message->attach($file);
             }
         });

         if(ModelsRequest::where('email', $request->email)->touch() && ModelsRequest::where('jenis', $request->jenis)->touch()) {
             return response()->json([
                 'success' => true,
             ]);
         } else {
             ModelsRequest::create($data);
         }
    return response()->json([
        'success' => true,
    ]);
     }
}

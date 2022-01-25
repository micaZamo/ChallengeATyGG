<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/usuario',[App\Http\Controllers\api\UsuarioController::class,'index'])->name('usuarios');
Route::put('/update/{id}',[App\Http\Controllers\api\UsuarioController::class,'update']);
Route::get('/show/{id}',[App\Http\Controllers\api\UsuarioController::class,'edit']);
Route::post('/registrar',[App\Http\Controllers\api\UsuarioController::class,'store']);
Route::delete('/delete/{id}',[App\Http\Controllers\api\UsuarioController::class,'destroy']);

Route::get('/login',[App\Http\Controllers\api\LoginController::class,'index']);


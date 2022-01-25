<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Models\Usuario;
use Illuminate\Support\Facades\Hash;
class LoginController extends Controller
{
    
    public function index(Request $request)
    {
        $email = $request->usuario;
        $clave = $request->contraseña;
        // dd($clave);
        
        $usuario = Usuario::where('email', 'like' , '%'.$email.'%' )->get();//->where('contraseña', 'like', '%' . $clave . '%')
        $b=$usuario[0]->contraseña;
        $ok = Hash::check($clave, $b);
        if ($ok) {
            
            return [
                'datos' => $usuario,
                'mensaje' => 'Validado'
            ];
        } else {
            return [
                'mensaje' => 'No validado'
            ];
        }
    }


    public function create()
    {
        
    }

    
    public function store(Request $request)
    {
        
    }

    
    public function show($id)
    {
        //
    }

    
    public function edit($id)
    {
        //
    }

    
    public function update(Request $request, $id)
    {
        //
    }

    
    public function destroy($id)
    {
        //
    }
}

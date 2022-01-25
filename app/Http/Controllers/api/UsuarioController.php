<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Usuario;

class UsuarioController extends Controller
{
    public function index()
    {
        $usuario = Usuario::all();
        return $usuario;
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        if (!$request->ajax()) return redirect('/');
        $usuario = new Usuario();
        $usuario->nombre = $request->nombre;
        $usuario->apellido = $request->apellido;
        $usuario->edad = $request->edad;
        $usuario->email = $request->email;
        $usuario->contraseña = bcrypt($request->contraseña);
        $usuario->save();
    }


    public function login(Request $request)
    {
        $usuario = $request->input('usuario');
        $contraseña = $request->input('contraseña');
    }


    public function edit($id)
    {
        $usuario = Usuario::find($id);
        return $usuario;
    }


    public function update(Request $request, $id)
    {
        if (!$request->ajax()) return redirect('/');
        $usuario = Usuario::find($id);
        $usuario->nombre = $request->nombre;
        $usuario->apellido = $request->apellido;
        $usuario->edad = $request->edad;
        $usuario->email = $request->email;
        $usuario->save();
    }


    public function destroy($id)
    {
        $usuario = Usuario::find($id);
        $usuario->delete();
    }
}

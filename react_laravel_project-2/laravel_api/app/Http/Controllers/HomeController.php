<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class HomeController extends Controller
{
    public function home(){ 
        $user = User::all();
        return $user;

        // return view('home');
    }
}

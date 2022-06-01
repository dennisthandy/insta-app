<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LikeController extends Controller
{
    //
    public function store(Request $request)
    {
    
        try {
            //code...
            $row = DB::table('like')->where('post_id', '=', $request->postId)->get()->toArray();
            $current_like = $row[0]->like;
    
            $new_like = $current_like + 1;
    
            DB::table('like')->where('post_id', '=', $request->postId)->update(['like' => $new_like]);

            return json_decode('{"success": true}');
        } catch (\Throwable $th) {
            //throw $th;
            return json_decode('{"success": false}');
        }
    }
}

<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CommentController extends Controller
{
    //

    public function store(Request $request)
    {
        try {
            Comment::Create([
                'post_id' => $request->postId,
                'comment' => $request->comment,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            return json_decode('{"success": true}');
        } catch (\Throwable $th) {
            //throw $th;
            return json_decode('{"success": false}');
        }
    }
}

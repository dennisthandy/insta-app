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
        Comment::Create([
            'post_id' => $request->postId,
            'comment' => $request->comment,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        // $row = DB::table('comment')->where('post_id', '=', $request->postId)->get()->toArray();
        // $current_comment = $row[0]->comment;

        // $new_comment = $current_comment + 1;

        // DB::table('comment')->where('post_id', '=', $request->postId)->update(['comment' => $new_comment]);

        return inertia('/', [
            'comment' => [
                'success' => true
            ],
        ]);
    }
}

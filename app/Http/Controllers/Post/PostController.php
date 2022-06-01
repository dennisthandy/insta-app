<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\Post\CreatePostRequest;
use App\Models\Like;
use App\Models\Post;
use GuzzleHttp\Promise\Create;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PostController extends Controller
{
    //
    public function create()
    {
        return Inertia::render('Post/Create', ['location' => 'post/create']);
    }

    public function store(CreatePostRequest $request)
    {

        $image_path = '';

        if ($request->hasFile('image')) {
            $image_path = $request->file('image')->store('images', 'public');
        }

        $post_id = DB::table('post')->insertGetId([
            'user_id' => $request->userId,
            'title' => $request->title,
            'caption' => $request->caption,
            'image' => $image_path ?: '',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        Like::Create([
            'post_id' => $post_id,
            'like' => 0
        ]);

        return redirect('/');
    }

    public function get()
    {
        // $posts = Post::all()->sortByDesc('created_at');
        $posts = DB::table('post')
            ->join('like', 'post.id', '=', 'like.post_id')
            ->select("post.*", "like.like")->get()->toArray();

        $comments = DB::table('comments')
            ->join('post', 'comments.post_id', '=', 'post.id')
            ->select("comments.*")->get()->toArray();

        foreach ($posts as $post) {
            $post->comments = [];
            foreach ($comments as $comment) {
                if ($post->id == $comment->post_id) {
                    array_push($post->comments, $comment->comment);
                }
            }
        }

        return Inertia::render('Welcome', [
            'posts' => $posts,
        ]);
    }
}

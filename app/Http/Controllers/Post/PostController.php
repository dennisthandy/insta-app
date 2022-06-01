<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\Post\CreatePostRequest;
use App\Models\Post;
use Illuminate\Http\Request;
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

        Post::create([
            'user_id' => $request->userId,
            'title' => $request->title,
            'caption' => $request->caption,
            'image' => $image_path ?: '',
        ]);

        return redirect('/');
    }

    public function get()
    {
        $posts = Post::all()->sortByDesc('created_at');

        return Inertia::render('Welcome', [
            'posts' => $posts->values(),
        ]);
    }
}

<?php

use App\Http\Controllers\Post\CommentController;
use App\Http\Controllers\Post\LikeController;
use App\Http\Controllers\Post\PostController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PostController::class, 'get'])->name('post.home');
Route::middleware('auth')->group(function () {

    Route::get('post/create', [PostController::class, 'create'])->name('post.create');

    Route::post('post/create', [PostController::class, 'store']);

    Route::post('post/like', [LikeController::class, 'store'])->name('post.like');

    Route::post('post/comment', [CommentController::class, 'store'])->name('post.comment');

});
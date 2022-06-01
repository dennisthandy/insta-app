<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLikeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('like', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('post_id');
            $table->index('post_id');
            $table->bigInteger('like')->nullable();
            $table->timestamps();
            $table->foreign('post_id')->references('id')->on('post')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('like');
        Schema::dropIfExists('like', function (Blueprint $table) {
            $table->dropForeign('like_post_id_foreign');
            $table->dropIndex('like_post_id_index');
            $table->dropColumn('post_id');
        });
    }
}

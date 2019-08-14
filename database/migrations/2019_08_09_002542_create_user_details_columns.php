<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserDetailsColumns extends Migration
{
    /**2019_08_09_002542_CreateUserDetailsColumns
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
           
           // $table->string('user_id')->after('id');
            $table->string('hobbies')->after('password');
            $table->date('user_birthday')->after('password');
            $table->string('related_friends')->after('password');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['hobbies', 'user_birthday', 'related_friends']);
        });
    }
}

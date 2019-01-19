<?php
Route::group(['prefix' => 'api'], function () {
    Route::resource('users', 'UserController');
});
Route::view('/{any}', 'welcome')
    ->where('any', '.*');

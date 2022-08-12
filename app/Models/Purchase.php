<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    use HasFactory;

    public $timestamps = false;
    
    // protected $fillable = ['name','order_no','product_code','product_name','product_price','purchase_quantity','user_phone'];
}

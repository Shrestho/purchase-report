<?php

namespace App\Http\Controllers;

use App\Models\Purchase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class PurchaseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $purchases = DB::table('purchases')
        ->selectRaw('product_name, name, product_price, sum(purchase_quantity) as quantity, sum(product_price*purchase_quantity) as total_price')
        ->groupBy('product_name','name')
        ->orderBy('total_price', 'desc')
        ->get();
        // $purchases = (new Purchase())->groupBy('product_name')->get();
        return $purchases;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $input = $request->all();
        $purchases = $input['data'];
        // print_r($purchases[0]);
        // print_r(count($purchases));

        for($i=0; $i<count($purchases); $i++){
             $purchase_data = $purchases[$i];
            $purchaseObj = new Purchase();
            $purchaseObj['created_at'] = $purchase_data['created_at'];
            $purchaseObj['name'] = $purchase_data['name'];
            $purchaseObj['order_no'] = $purchase_data['order_no'];
            $purchaseObj['product_code'] = $purchase_data['product_code'];
            $purchaseObj['product_name'] = $purchase_data['product_name'];
            $purchaseObj['product_price'] = (double)$purchase_data['product_price'];
            $purchaseObj['purchase_quantity'] = $purchase_data['purchase_quantity'];
            $purchaseObj['user_phone'] = $purchase_data['user_phone'];
            $purchase = $purchaseObj->save();
        }
        return response($purchase);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function show(Purchase $purchase)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function edit(Purchase $purchase)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Purchase $purchase)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function destroy(Purchase $purchase)
    {
        //
    }
}

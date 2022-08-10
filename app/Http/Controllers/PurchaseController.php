<?php

namespace App\Http\Controllers;

use App\Models\Purchase;
use Illuminate\Http\Request;

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
             print_r($purchases[$i]);
                // print_r($purchase);
                $purchaseObj = new Purchase();
                $purchaseObj->save($purchases[$i]);

        }

        // foreach ($purchases as $key=>$purchase) {
        //     // print_r($purchase);
        //     $purchaseObj = new Purchase();
        //     $data['created_at'] = $purchase['created_at'];
        //     $data['name'] = $purchase['name'];
        //     $data['order_no'] = $purchase['order_no'];
        //     $data['product_code'] = $purchase['product_code'];
        //     $data['product_name'] = $purchase['product_name'];
        //     $data['product_price'] = $purchase['product_price'];
        //     $data['purchase_quantity'] = $purchase['purchase_quantity'];
        //     $data['user_phone'] = $purchase['user_phone'];
        //     $purchaseObj->save($data);
        // }


        // foreach ($input as $purchase) {
            // print_r($purchase);
            // $purchaseObj = new Purchase();
            // $input['created_at'] = $purchase['created_at'];
            // $input['name'] = $purchase['name'];
            // $input['order_no'] = $purchase['order_no'];
            // $input['product_code'] = $purchase['product_code'];
            // $input['product_name'] = $purchase['product_name'];
            // $input['product_price'] = $purchase['product_price'];
            // $input['purchase_quantity'] = $purchase['purchase_quantity'];
            // $input['user_phone'] = $purchase['user_phone'];
        //     $purchaseObj->save($purchase);
        // }

        // $purchase = $purchaseObj->save($input);
        // return $this->$purchase;
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

@extends('layouts.app')

@section('content')

    <section >
        <div class="container" >
            {{--<div class="row" >--}}
            {{--<div class="col-md-10 col-md-offset-1" >--}}
            {{--<div class="panel panel-default" >--}}
            {{--<div class="panel-heading" >Dashboard</div >--}}

            {{--<div class="panel-body" >--}}
            {{--You are logged in!--}}
            {{--</div >--}}
            {{--</div >--}}
            {{--</div >--}}
            {{--</div >--}}
            <div class="row" >

                <button class="btn btn-success btn-circle btn-xl" id="btnAddBox" data-toggle="modal"
                        data-target="#mdlCategory" >
                    <i class="glyphicon glyphicon-plus-sign" ></i >
                </button >
                {{--<button class="btn btn-success" id="btnSeialize" >Serialize</button >--}}
                <input type="text" placeholder="Type on me for searching..." id="searchInput" >
                <br ><br >


                <div class="modal fade" id="mdlCategory" tabindex="-1" role="dialog" >
                    <div class="modal-dialog" role="document" >
                        <div class="modal-content" >
                            <div class="modal-header" >
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" ><span
                                            aria-hidden="true" >&times;</span ></button >
                                <h4 class="modal-title" id="myModalLabel" >Please Enter Category Information</h4 >
                            </div >
                            <div class="modal-body" >
                                <form >
                                    <div class="form-group" >
                                        <input onkeydown="if (event.keyCode == 13) { return false;}" type="text"
                                               class="form-control" id="categoryName"
                                               placeholder="Category Name" >
                                    </div >
                                    <div class="form-group" >
                                        <label for="categoryColor" >Choose category color : </label >

                                        <select id="categoryColor" >
                                            <option value="red" data-color="#FF0000" title="Red"
                                                    selected="selected" ></option >
                                            <option value="blue" data-color="#0000FF"
                                                    title="Blue" ></option >
                                            <option value="gray" data-color="#808080" title="Gray" ></option >
                                            <option value="orange" data-color="#FF8800" title="Orange" ></option >
                                            <option value="green" data-color="#00FF00" title="Green" ></option >
                                            <option value="white" data-color="#EEEEEE" title="white" ></option >
                                            <option value="cyan" data-color="#0088FF" title="Cyan" ></option >

                                        </select >
                                    </div >
                                    <div class="form-group" >
                                        <label >Add category on left-side or right-side : </label >
                                        <div class="radio" >
                                            <label >
                                                <input type="radio" name="rightLeftRadio" value="left" checked >
                                                Left Side
                                            </label >
                                        </div >
                                        <div class="radio" >
                                            <label >
                                                <input type="radio" name="rightLeftRadio" value="right" >
                                                Right Side
                                            </label >
                                        </div >
                                    </div >
                                </form >
                            </div >
                            <div class="modal-footer" >
                                <button type="button" class="btn btn-danger" data-dismiss="modal" >Cancel</button >
                                <button type="button" class="btn btn-primary" id="btnModalAdd" >Add Category</button >
                            </div >
                        </div >
                    </div >
                </div >

                <div id="catGroup" >
                    <div class="col-xs-6 " id="left-panel" >
                        <ul style="min-height: 100px;padding-top:20px;padding-bottom:20px;" id="left-sortable"
                            class="connected" >


                        </ul >
                    </div >
                    <div class="col-xs-6 " id="right-panel" >
                        <ul style="min-height: 100px;padding-top:20px;padding-bottom:20px;" id="right-sortable"
                            class="connected" ></ul >
                    </div >
                </div >



            </div >
        </div >
    </section >
    <span id="data" hidden="hidden" >{!! $data !!}</span >
    {!! csrf_field() !!}
@endsection
@section('inline-js')
    <script >
        $(function (e) {


        });

    </script >
@endsection
@section('css')
    <link href="{{ asset('assets/css/dashboards.css') }}" rel="stylesheet" >
    <style type="text/css" >
        /*.selectSearch {*/
            /*opacity: 1;*/
            /*border: dotted 3px red;*/
            /*!*background-color: #5af158;*!*/
            /*filter:invert(100%);*/
        /*}*/

        /*.notSelectSearch {*/
            /*opacity: .1;*/
        /*}*/
    </style >
@endsection
@section('js')
    <script src="{{ asset("assets/js/dashboards.js") }}" ></script >
@endsection

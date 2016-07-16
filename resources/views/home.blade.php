@extends('layouts.app')

@section('content')
    <div class="container" >
        <div class="row" >
            <div class="col-md-10 col-md-offset-1" >
                <div class="panel panel-default" >
                    <div class="panel-heading" >Dashboard</div >

                    <div class="panel-body" >
                        You are logged in!
                    </div >
                </div >
            </div >
        </div >
        <div class="row" >
            <div class="row" >
                <button class="btn btn-success" id="addBtn" >Add Box</button >
                <button class="btn btn-success" id="serializeBtn" >Serialize</button >
            </div >

            <div class="gridster" >
                <ul >
                </ul >
            </div >
        </div >
    </div >
    <script type="text/javascript" >
        $(document).ready(function () {
            $.fn.editable.defaults.mode = 'popup';

            var last = "a".charCodeAt(0) - 1;
            $("#addBtn").click(function () {
                var box = `
                    <li class="panel panel-primary col-xs-2" >
                        <div class="panel panel-primary" >
                            <div class="panel-heading" >
                                <h3 class="panel-title" >Lorem ipsum dolor sit amet.</h3 >
                                <div class="pull-right">a</div>
                            </div >
                            <div class="panel-body" >
                                Lorem ipsum dolor sit amet, consectetur adipisicing.<br>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, repudiandae?<br>
                                Lorem ipsum dolor sit amet, consectetur adipisicing. <br>
                                Lorem ipsum dolor sit amet, consectetur adipisicing. <br>
                                Lorem ipsum dolor sit amet, consectetur adipisicing. <br>
                                Lorem ipsum dolor sit amet, consectetur adipisicing. <br>
                                Lorem ipsum dolor sit amet, consectetur adipisicing. <br>

                            </div >
                            <div class="panel-footer" >
                                Lorem ipsum dolor sit amet.
                            </div >
                        </div >
                    </li >
                `;
                gridster.add_widget(box);
            });

            $("#serializeBtn").click(function () {
                console.log(JSON.stringify(gridster.serialize()));
            });

            var gridster = $(".gridster ul").gridster({
                widget_margins: [10, 10],
                widget_base_dimensions: [0, 0],
                serialize_params: function ($w, wgd) {
                    return {
                        col: wgd.col,
                        row: wgd.row,
                        content: wgd.el.html()
                    }
                },
                max_cols: 2,
                resize: {
                    enabled: true
                }
            }).data('gridster');


        });
    </script >
    <style type="text/css" >
        ul {
            list-style-type: none;
        }
    </style >


@endsection

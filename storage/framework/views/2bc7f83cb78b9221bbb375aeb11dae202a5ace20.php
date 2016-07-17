<?php $__env->startSection('content'); ?>
    <script src="<?php echo e(asset("assets/js/home.js")); ?>" ></script >

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

            <button class="btn btn-success" id="addBtn" >Add Box</button >
            <button class="btn btn-success" id="serializeBtn" >Serialize</button >
            <br>

            <div class="grid-stack" >
                <div class="grid-stack-item" data-gs-x="0" data-gs-y="0" data-gs-width="2" data-gs-height="2" >
                    <div class="grid-stack-item-content" >a</div >
                </div >
                <div class="grid-stack-item" data-gs-x="1" data-gs-y="0" data-gs-width="2" data-gs-height="2" >
                    <div class="grid-stack-item-content" >b</div >
                </div >
            </div >

            <script type="text/javascript" >
                $(function () {
                    var options = {
                        cellHeight: 80,
                        verticalMargin: 10
                    };
                    $('.grid-stack').gridstack(options);
                });
            </script >

        </div >
    </div >

    <style>
        .grid-stack-item-content{
            background-color: cyan;
        }
    </style>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
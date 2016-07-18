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

            <button class="btn btn-success" id="btnAddBox" data-toggle="modal" data-target="#mdlCategory" >Add Box
            </button >
            <button class="btn btn-success" id="serializeBtn" >Serialize</button >
            <br ><br >


            <!-- Modal -->
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
                                    <input type="text" class="form-control" id="categoryName"
                                           placeholder="Category Name" >
                                </div >
                                <div class="form-group">
                                    <label for="categoryColorSelector" >Choose category color : </label >

                                    <select id="categoryColorSelector">
                                        <option value="0" data-color="#FF0000">Red</option>
                                        <option value="1" data-color="#0000FF" selected="selected">Blue</option>
                                        <option value="2" data-color="#808080">Gray</option>
                                        <option value="3" data-color="#FF8800">Orange</option>
                                        <option value="4" data-color="#00FF00">Green</option>

                                    </select>
                                </div>
                            </form >
                        </div >
                        <div class="modal-footer" >
                            <button type="button" class="btn btn-danger" data-dismiss="modal" >Cancel</button >
                            <button type="button" class="btn btn-primary" id="btnModalAdd" >Add Category</button >
                        </div >
                    </div >
                </div >
            </div >

            <script >
                var boxTitle;
                var boxContent;
                var box = `
            <div class="col-xs-5" >
                <div class="panel panel-success" >
                    <div class="panel-heading" >
                        <h3 class="panel-title  pull-left " data-type="text" data-title="Please Enter a Title : " >
                            ${boxTitle}
                        </h3 >
                        <div class="btn-group pull-right " >
                            <button class="btn btn-sm btn-info glyphicon glyphicon-arrow-left" ></button >
                            <button class="btn btn-sm btn-info glyphicon glyphicon-arrow-right" ></button >
                            <button class="btn btn-sm btn-warning glyphicon glyphicon-arrow-up" ></button >
                            <button class="btn btn-sm btn-warning glyphicon glyphicon-arrow-down" ></button >
                            <button class="btn btn-sm btn-danger glyphicon glyphicon-trash btnRemove" ></button >
                        </div >
                        <div class="clearfix" ></div >
                    </div >
                    <div class="panel-body" >
                        ${boxContent}
                    </div >
                </div >
            </div >                
`;


                $(function () {
                    $('#categoryColorSelector').colorselector();

                    $.fn.editable.defaults.mode = 'inline';
                    $('h3.panel-title.pull-left').editable();

                    $('.btnRemove').click(function () {
                        var title = $(this).parent().prev().text().trim();
                        var obj = $(this).closest('.panel').parent();
                        alertify.confirm(`Are you sure to delete : "${title}"`, function (e) {
                            if (e) {
                                obj.remove();
                                alertify.success(`"${title}" Removed.`);
                            } else {
                                alertify.error(`Aborted to Delete : "${title}".`);
                            }
                        });

                    });

                    $('btnModalAdd').click(function () {
                        alert("sdf");
                    });

                });
                $(".collapse").on('hidden.bs.collapse', function () {
                    console.log($(this).paren);
                    $(this).removeClass('glyphicon-collapse-up');
                    $(this).addClass('glyphicon-collapse-down');
                });


            </script >

            <style >
                .panel-heading h3 {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-height: normal;
                    padding-top: 8px;
                }
            </style >


        </div >
    </div >


<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>